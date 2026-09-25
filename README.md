<p align="center">
  <img src="background2.jpg" alt="Fond photographique du CV interactif" width="100%" />
</p>

<p align="center"><sub>ANTOINE GOUDEDRANCHE</sub></p>

<h1 align="center">Un CV à explorer.</h1>

<p align="center">
  Mon parcours, mes projets et ce qui m’intéresse en dehors des études.<br />
  Une présentation personnelle, pensée pour le web.
</p>

<p align="center">
  <a href="https://github.com/AntoineGit31">GitHub</a> &nbsp;·&nbsp;
  <a href="https://antoine-goudedranche-portfolio.vercel.app/">Portfolio</a> &nbsp;·&nbsp;
  <a href="CV_Antoine_Goudedranche.pdf">CV en PDF</a>
</p>

<br />

## Le parcours

Le CV s’ouvre au clic. Les formations et les expériences donnent accès à des
présentations détaillées, des photographies et aux rapports de stage associés.
Les coordonnées et la mobilité disposent aussi de leurs propres interactions.

La direction artistique associe un fond photographique, des tons naturels,
une typographie sobre et des fenêtres claires. Les animations accompagnent
la navigation, du vol de l’avion à l’ouverture des détails du parcours.

## Au-delà du CV

**Projets personnels.** Des sites que j’ai développés parce que le sujet
m’intéressait : mon portfolio, Perf Tracker et BotBourse, avec leurs liens
et une présentation de leur état d’avancement.

**Tennis & musculation.** Onze ans au club de Muret, trois ans à la salle,
mes performances et un échange de tennis animé que l’on peut lancer,
mettre en pause et rejouer.

**Jeux vidéo.** Cinq jeux, mes rangs et leurs insignes, à parcourir dans
une galerie interactive.

<br />

## Ouvrir le projet

[Découvrir le CV interactif ↗](https://cv-antoine-goudedranche.vercel.app/)

<details>
<summary>Construction, publication et sécurité</summary>

Les sources se modifient à la racine. `npm run build` les vérifie puis génère
`dist/`, le seul dossier à servir. `npm run audit:site` exécute les contrôles
sans reconstruire le site.

Le déploiement Vercel est préparé dans [`vercel.json`](vercel.json) : preset
**Other**, Node.js **24.x**, sortie **dist**. Aucune variable d’environnement
n’est nécessaire.

[`public-files.json`](public-files.json) définit les fichiers du site.
Tout nouvel asset doit être examiné puis ajouté à cette liste, à `.gitignore`
et à `.vercelignore`. Les documents de travail restent exclus par défaut.
Les coordonnées affichées, le CV et les rapports de stage proposés au
téléchargement sont publics.

Les contrôles effectués et les vérifications à réaliser après déploiement
sont détaillés dans l’[audit de sécurité](SECURITY_AUDIT.md).

</details>

<br />

<p align="center"><sub>Antoine Goudedranche · Data Science & Intelligence Artificielle</sub></p>
