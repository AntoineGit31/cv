@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo Node.js est necessaire pour preparer la version publique.
  pause
  exit /b 1
)
node scripts/build.mjs
if errorlevel 1 (
  echo La verification du site a echoue. Le serveur ne sera pas lance.
  pause
  exit /b 1
)

if not defined PORT set "PORT=8080"
set "SITE_URL=http://127.0.0.1:%PORT%"

where py >nul 2>&1
if not errorlevel 1 goto launch_with_py

where python >nul 2>&1
if not errorlevel 1 goto launch_with_python

echo.
echo Impossible de lancer le site : Python 3 est introuvable.
echo Installez Python depuis https://www.python.org/downloads/
echo puis relancez ce fichier.
echo.
pause
exit /b 1

:open_browser
if defined CV_NO_BROWSER exit /b 0
start "" powershell.exe -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Milliseconds 900; Start-Process '%SITE_URL%'"
echo.
echo Le prototype est disponible sur %SITE_URL%
echo Fermez cette fenetre pour arreter le site.
echo.
exit /b 0

:launch_with_py
call :open_browser
py -3 -m http.server %PORT% --bind 127.0.0.1 --directory dist
goto end

:launch_with_python
call :open_browser
python -m http.server %PORT% --bind 127.0.0.1 --directory dist

:end
if errorlevel 1 (
  echo.
  echo Le lancement a echoue. Verifiez que le port %PORT% est disponible.
  pause
)
endlocal
