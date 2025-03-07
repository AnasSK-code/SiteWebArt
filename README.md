# Projet Galerie d'Art Numérique

Ce projet est une application web de **Galerie d'Art Numérique** développée avec **React**, **React Router** et **Framer Motion** pour les effets d'animation. La galerie présente une collection d'œuvres d'art numériques, chacune avec des détails sur l'artiste et leur création. Le projet permet aux utilisateurs de voir les œuvres d'art dans une interface dynamique et interactive.

## Fonctionnalités

- **Vue de la Galerie** : Affiche une grille d'œuvres d'art avec des éléments cliquables permettant aux utilisateurs de sélectionner et d'afficher plus de détails sur une œuvre d'art spécifique.
- **Détails de l'Œuvre** : Lorsqu'une œuvre d'art est cliquée, l'utilisateur est redirigé vers une vue détaillée de l'œuvre, comprenant le nom de l'artiste, l'image et la description.
- **Transitions Fluides** : **Framer Motion** est utilisé pour créer des animations de fondu et d'échelle fluides lorsque l'utilisateur navigue dans la galerie.
- **Design Responsive** : La mise en page est responsive, offrant une expérience de visualisation optimale sur tous les appareils.

## Technologies Utilisées

- **React** : Une bibliothèque JavaScript pour construire des interfaces utilisateur.
- **React Router** : Une bibliothèque de routage pour les applications React.
- **Framer Motion** : Une bibliothèque populaire pour les animations dans React.
- **TypeScript** : Ajoute des types statiques à JavaScript pour une meilleure expérience de développement et de vérification des erreurs.
- **TailwindCSS** : Un framework CSS utilitaire pour la mise en forme.

## Installation

Suivez les étapes ci-dessous pour configurer le projet localement.

### 1. Clonez le repository :

git clone https://github.com/tonnomdutilisateur/galerie-art-numerique.git
2. Naviguez dans le répertoire du projet :
bash
Copier
Modifier
cd galerie-art-numerique
3. Installez les dépendances :
bash
Copier
Modifier
npm install
4. Démarrez le serveur de développement :
bash
Copier
Modifier
npm start
Cela démarrera l'application sur http://localhost:3000.

Utilisation
Au chargement, la page principale de la galerie affichera une grille d'œuvres d'art.
Les utilisateurs peuvent cliquer sur une œuvre d'art pour afficher sa page détaillée avec des informations telles que le titre, l'artiste et la description.
La page des détails de l'œuvre est rendue dynamiquement en fonction de l'œuvre sélectionnée.
Aperçu du Code
Gallery.tsx
Ce composant rend la galerie d'art numérique. Il utilise une mise en page en grille pour afficher les éléments d'œuvres d'art. Lorsque l'utilisateur clique sur une œuvre, la fonction handleArtworkClick est déclenchée, ce qui sélectionne l'œuvre et navigue vers la page de détails de l'œuvre.

ArtworkDetail.tsx
Ce composant rend la vue détaillée de l'œuvre d'art sélectionnée. Il utilise le hook useParams de React Router pour récupérer l'ID de l'œuvre à partir de l'URL. Ensuite, il trouve l'œuvre correspondante et affiche ses informations.

App.tsx
Ce fichier définit les routes à l'aide de React Router. Il associe chaque chemin URL au composant approprié, permettant la navigation entre la galerie et les détails des œuvres.

Remarques
Le tableau artworks est codé en dur avec quelques œuvres d'art numériques d'exemple. Vous pouvez modifier ce tableau pour inclure davantage d'œuvres.
Vous pouvez ajuster la mise en page à l'aide des classes TailwindCSS pour répondre aux exigences de conception.
L'application utilise Framer Motion pour des transitions fluides lors de la navigation entre la galerie et les pages des détails des œuvres.
