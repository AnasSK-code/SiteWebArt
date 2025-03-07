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



![image](https://github.com/user-attachments/assets/5ba3a298-8c14-4408-8c35-88fc5f7c03e1)
![image](https://github.com/user-attachments/assets/3e5f3630-d69a-4e79-9e87-22ac9a392344)
![image](https://github.com/user-attachments/assets/0de7d42e-97c5-45f5-b676-681904cedd20)
![image](https://github.com/user-attachments/assets/ac6be66f-69b4-4172-a621-590d2dd1c477)
![image](https://github.com/user-attachments/assets/dd93295d-da3d-4722-8c67-7eb6c355db40)
![image](https://github.com/user-attachments/assets/769bc53f-d388-4517-83e5-b6d12e3debe3)
![image](https://github.com/user-attachments/assets/00ee215b-5340-4df0-95be-810a762daf7e)
![image](https://github.com/user-attachments/assets/a4f3d802-f821-4ceb-9529-fe5ba039d410)
![image](https://github.com/user-attachments/assets/abf1d141-3918-47e9-9160-fc4aeb3d0ac9)


















