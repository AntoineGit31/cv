# Audit avant publication

Date : 25 septembre 2026. Périmètre : dossier local, code client, documents,
images, préparation Git et configuration Vercel. Aucun site de production ni
compte GitHub/Vercel n’a été audité. Aucun commit ni push réalisé pendant l’audit.

## Résultat et corrections

Le risque principal était l’exposition de toute la racine du dossier. Un serveur
statique sans séparation aurait pu rendre accessibles le LaTeX, des documents
de travail, une liste collective de candidats BIA et des fichiers futurs.

La construction utilise désormais une liste explicite de 34 fichiers et produit
uniquement `dist/`. Git et l’envoi Vercel disposent de leurs propres listes
d’inclusion. Les fichiers locaux exclus ne sont pas supprimés. Le lanceur local
sert uniquement `dist/` et s’arrête si la vérification échoue. Le dossier de
sortie est contrôlé avant suppression, et les liens symboliques sont refusés.

Le lien vers la liste collective BIA a été retiré. `latexCV.txt`, `PDFBLANC.pdf`,
`admis-bia-38110.pdf`, `SKILL.md`, `tmp/`, les fichiers `.env`, les sauvegardes et
les nouveaux fichiers non approuvés sont exclus par défaut.

Le dépôt local a été initialisé sur `main`. Il ne possédait pas d’historique Git
local avant cet audit. Cela ne permet pas de conclure sur d’éventuelles copies
ou publications antérieures présentes ailleurs.

## Code et en-têtes

Aucun motif de clé privée, jeton GitHub ou clé AWS détecté dans les sources
examinées. Aucun usage détecté de `eval`, `new Function`, `innerHTML`, chargement
de scripts tiers, API distante, stockage navigateur ou formulaire de collecte.
Le presse-papiers est utilisé uniquement pour copier l’adresse e-mail au clic.
Ces recherches ne constituent pas une garantie d’absence de tout secret.

Le projet ne comporte pas de dépendance npm tierce. Les scripts de construction
et de contrôle reposent sur les modules natifs de Node.js. Le verrou npm est
commité et l’installation Vercel désactive les scripts de paquets.

La configuration ajoute CSP, protection contre l’intégration dans une iframe,
`nosniff`, politique de référent et désactivation des permissions inutilisées.
La CSP autorise les scripts locaux, interdit les connexions sortantes et les
scripts inline. Les styles inline restent autorisés pour les styles dynamiques
des animations. Les liens externes ouverts dans un onglet distinct utilisent
`noopener noreferrer`. Aucun secret n’est requis pour la construction.

Les choix de configuration suivent la documentation Vercel :
[configuration statique](https://vercel.com/docs/project-configuration/vercel-json)
et [Node.js 24](https://vercel.com/changelog/node-js-24-lts-is-now-generally-available-for-builds-and-functions).
Les en-têtes sont configurés mais leur application réelle devra être vérifiée
sur le premier déploiement. Aucun test navigateur sous CSP n’a été possible.

## Documents et données personnelles

Le propriétaire a confirmé que les trois rapports de stage sont déjà censurés
et peuvent rester publics. Ils sont donc inclus, sans modification des originaux.
La liste de résultats BIA de 19 pages contenait de nombreux noms de tiers :
elle est exclue même si son ancien bouton n’était plus accessible depuis le CV.

Les couches textuelles et structures des PDF ont été inspectées. Aucun JavaScript,
action Launch, pièce jointe embarquée, XFA ou RichMedia détecté dans les quatre
PDF publics. Leurs liens utilisent des schémas web, mail ou téléphone. Aucun
marquage GPS EXIF détecté dans les images. Certaines métadonnées ordinaires de
logiciel, date ou appareil subsistent.

Une vérification visuelle ciblée porte sur les couvertures des trois rapports
et les pages 25 et 33 du rapport DNCA. Les suppressions d’annexes DNCA sont
visibles et le texte extrait de ces emplacements ne révèle pas les contenus
annoncés supprimés. Cette vérification ne couvre pas chaque capture d’écran et
ne démontre pas l’irréversibilité de toutes les censures. Des noms de tiers
subsistent ; la couverture Continental coche « NDA : oui ». L’autorisation de
diffusion des documents et les droits des images ne sont pas certifiés par cet
audit technique.

Le CV contient également du texte d’intérêts rendu quasi invisible par le LaTeX
(taille 0,01 point, blanc). Ce texte reste extractible : le masquer visuellement
ne le rend pas privé. Il n’a pas été modifié par cet audit.

Le nom, le téléphone, l’e-mail, les liens sociaux, les mensurations, les résultats
sportifs et les rangs de jeux affichés sont intentionnellement publics. Les
quatre PDF proposés au téléchargement le sont également. Aucun réglage Git ou
Vercel ne peut rendre confidentiel un document servi publiquement.

## Validation et limites

`npm run build` exécute les contrôles de syntaxe JavaScript, de ressources locales,
de doublons d’identifiants, de cibles ARIA, de scripts inline et de motifs sensibles.
Le contenu exact de la sortie est contrôlé, ainsi que l’exclusion des documents
privés de Git. Les tests DOM des interactions existantes sont complétés par un
contrôle HTTP local des ressources et des refus d’accès aux fichiers exclus.

Le projet n’est pas présenté comme invulnérable. La revue des images et des
documents n’est pas une analyse forensique exhaustive, les contrôles de motifs
ne remplacent pas une revue humaine et aucun contrôle des comptes, permissions,
domaines ou en-têtes de production n’a encore été réalisé.

## Après déploiement

Vérifier la réponse 200 du site, des images et des quatre PDF ; vérifier que
`/latexCV.txt`, `/admis-bia-38110.pdf`, `/.env`, `/SKILL.md`, `/public-files.json`
et `/scripts/build.mjs` retournent 404. Vérifier les en-têtes configurés avec
`curl -I`, puis les interactions, le presse-papiers et les téléchargements dans
un navigateur. Ne pas ajouter de réécriture générale qui transformerait les
chemins privés en pages de succès.
