# Projet Galerie d'Art Numérique  

Ce projet est une application web de Galerie d'Art Numérique développée avec React, React Router et Framer Motion pour des animations fluides. 
Il permet aux utilisateurs d'explorer une collection d'œuvres d'art numériques et d'afficher des détails sur chaque œuvre et son artiste.  

## Fonctionnalités  

- Galerie interactive : Affichage en grille des œuvres d'art avec navigation intuitive.  
- Détails des œuvres : Affichage d’une vue détaillée d’une œuvre avec le nom de l'artiste, l'image et la description.  
- Transitions fluides : Animations de navigation et d'affichage grâce à Framer Motion.  
- Design responsive : Adapté à tous les écrans pour une expérience utilisateur optimale.  

## Technologies Utilisées  

- React : Bibliothèque JavaScript pour la création d'interfaces utilisateur.  
- React Router : Gestion de la navigation et du routage.  
- Framer Motion : Effets d'animation et transitions fluides.  
- TypeScript : Typage statique pour une meilleure robustesse du code.  
- TailwindCSS : Framework CSS pour une mise en page rapide et flexible.  

## Installation  

Suivez ces étapes pour configurer le projet localement.  

1. Clonez le repository :  

```
git clone https://github.com/tonnomdutilisateur/galerie-art-numerique.git
```

2. Naviguez dans le répertoire du projet :  

```
cd galerie-art-numerique
```

3. Installez les dépendances :  

```
npm install
```

4. Démarrez le serveur de développement :  

```
npm start
```

L'application sera accessible sur http://localhost:3000.  

## Utilisation  

- Au chargement, la page principale affiche une grille d'œuvres d'art.  
- Les utilisateurs peuvent cliquer sur une œuvre pour afficher sa page détaillée avec des informations comme le titre, l'artiste et la description.  
- La page des détails est générée dynamiquement en fonction de l'œuvre sélectionnée.  

## Aperçu du Code  

- Gallery.tsx : Ce composant affiche la galerie d'art sous forme de grille. Lorsqu'un utilisateur clique sur une œuvre, la fonction handleArtworkClick déclenche la navigation vers la page des détails.  
- ArtworkDetail.tsx : Affiche les détails de l'œuvre sélectionnée. Il utilise useParams de React Router pour récupérer l'ID de l'œuvre à partir de l'URL et affiche les informations correspondantes.  
- App.tsx : Définit les routes avec React Router et gère la navigation entre la galerie et les détails des œuvres.  

## Remarques  

- Le tableau artworks contient des œuvres d'art numériques d'exemple. Il peut être modifié pour inclure davantage d'œuvres.  
- La mise en page est personnalisable via TailwindCSS.  
- Framer Motion est utilisé pour améliorer l'expérience de navigation avec des animations fluides.  

