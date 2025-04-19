# CHANGELOG des modifications Cursor

Ce fichier documente toutes les modifications importantes apportées au projet par Cursor AI.

## [Non publié]

### Ajout
- Création du fichier CHANGELOG-CURSOR.md pour suivre les modifications

### Modifications
- Mise à jour de la page d'accueil avec un design plus moderne et des animations
  - Ajout d'une animation de typing pour les titres de métiers
  - Ajout d'animations d'entrée pour les différentes sections
  - Amélioration de la mise en page et du responsive design
  - Ajout d'effets de survol sur les liens sociaux
- Mise à jour du contenu textuel dans `src/lib/data/home.ts`
  - Modification de la description pour refléter le profil professionnel actuel
  - Mise en forme de la stack technique dans `subDescription`
  - Réorganisation des compétences mises en avant dans le carrousel
- Refonte complète du composant Carrousel dans `src/lib/components/Carrousel/Carrousel.svelte`
  - Nouvelle présentation avec titre "Compétences" et une ligne de séparation
  - Ajout d'un arrière-plan avec dégradé et ombres
  - Nouveaux boutons de navigation plus esthétiques
  - Ajout d'indicateurs visuels pour la position dans le carrousel
  - Effets de survol sur les logos et les boutons
  - Pause du défilement automatique au survol
- Ajout d'un dégradé de couleur subtil à la page d'accueil
  - Création d'un cercle de dégradé radial en arrière-plan
  - Ajout des variables CSS `--accent-rgb` pour les dégradés
  - Ajout de variables CSS pour les fonds de carte et les éléments UI
- Amélioration du design du titre principal avec un soulignement en dégradé 