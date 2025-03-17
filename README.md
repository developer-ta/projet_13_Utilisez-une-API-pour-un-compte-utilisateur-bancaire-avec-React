# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Merci pour la clarification ! Je vais corriger et préciser l’explication concernant le fonctionnement des hooks personnalisés et leur lien avec les composants ou sous-composants dans votre structure. Voici une version corrigée et mieux détaillée :

---

# **Description de Projet : Clean Architecture Frontend avec React**

## **Introduction**

Ce projet a été initialisé avec **Vite**, qui est un outil moderne et rapide pour le développement d'applications React. Il applique les principes de **Clean Architecture** (parfois appelée "Onion Architecture") au contexte frontend. Cette approche permet d'assurer une séparation claire des responsabilités, rendant le projet plus maintenable, organisé et évolutif.

---

## **Architecture Globale**

L'architecture appliquée au frontend est divisée en plusieurs couches, chaque couche ayant un rôle spécifique et indépendant. 

Voici une vue d'ensemble des couches principales :

1. **Domain Layer** :
   - Responsable de la logique métier pure et des entités. Elle ne contient aucune dépendance vers des couches extérieures comme React, Redux ou les APIs.

2. **Application Layer** :
   - Coordonne les opérations métiers et les appels vers le domaine et les repositories. Agit comme un pont entre la logique métier (domaine) et les couches externes.

3. **Infrastructure Layer** :
   - Fait l’interaction avec les ressources externes comme les APIs, les bases de données ou Redux. Contient les repositories qui gèrent la récupération et la manipulation des données.

4. **Presentation Layer** :
   - Le point d'interaction avec l'utilisateur : interface (UI), logique locale des états, et gestion des interactions. Cette couche s’occupe de regrouper les données et les fonctionnalités nécessaires fournies par les hooks personnalisés pour ensuite les afficher dans les composants individuels.

---

## **Structure des Dossiers et Rôles**

### **1. Domain Layer**

Contient les entités métier, définissant les structures et les règles fondamentales de l'application.

- **Exemple** :
   - `user.js` : Définit une entité "User".
   - `userProfile.js` : Définit une entité spécifique au profil utilisateur.
   - Ces fichiers encapsulent les modèles métier principaux sans dépendances vers des APIs ou mécanismes externes.

---

### **2. Application Layer**

Réunit les services applicatifs qui orchestrent les opérations complexes de l'application, en appelant les entités métier du domaine et les données fournies par l’infrastructure. Ces services :
- Fournissent une interface unifiée pour les composants (via les hooks personnalisés).
- Injectent les dépendances issues de la couche Infrastructure (repositories, etc.).

- **Exemple** :
   - `userBankAccountService.jsx` : Gère les interactions métier liées aux comptes bancaires des utilisateurs.
   - `userLoginService.jsx` : Fournit les opérations liées à l'authentification.
   - `userProfileService.jsx` : Gère les fonctionnalités liées au profil de l'utilisateur.

---

### **3. Infrastructure Layer**

Fournit des implémentations pratiques pour interagir avec les ressources externes :

- **Repositories API** :
   - Les repositories (par exemple, `userLoginRepo.jsx`) facilitent la communication avec l’API externe.
   - Utilisent des outils comme `axios` ou `fetch` pour effectuer ces appels.

- **Redux** :
   - Gère les états globaux à travers des slices (exemple : `userAccount`, `userProfile`).
   - Centralise les données importantes accessibles par plusieurs composants dans l'application.

---

### **4. Presentation Layer**

La couche présente regroupe les éléments de l’interface utilisateur, divisés en `components`, `layouts` et `hooks`.  

#### a. **Organisation des Composants**
   - Chaque page repose sur une structure modulaire bien définie :
     - **Layout** : Parties statiques communes aux pages (navigation, en-tête, pied de page, etc.).
     - **Page Body** : Partie principale de chaque page (ex : `UserBody`, `SignInBody`), responsable d’orchestrer les sous-composants.
     - **Sous-Composants** : Composants plus spécifiques, souvent divisés par petites fonctionnalités pour limiter la complexité.

   - **Exemple** :
     - Pour la page de connexion :
       - `SignInBody.jsx` : Gère l’assemblage des composants pour la page de connexion.
       - `SignInContent.jsx` : Sous-composant spécifique pour gérer un formulaire.
     
   - Chaque composant possède une feuille SCSS dédiée pour gérer son style.

#### b. **Hooks personnalisés**
Les **hooks personnalisés** (situés dans `src/presentation_layer/hooks`) jouent un rôle **central dans la gestion des données, des événements et de la logique pour chaque composant ou sous-composant**.

---

## **Rôle et Fonctionnement des Hooks Personnalisés**

### **Principes de Fonctionnement**

1. **Gestion Locale et Simplifiée des Données** :
   - Les hooks personnalisés servent de contrôleurs autonomes pour chaque composant ou sous-composant.
   - Ils fournissent **les données nécessaires**, **les fonctions d’événements** et **les opérations logiques principales** directement au composant, sans que celui-ci doive interagir directement avec des services ou APIs.

2. **Injection de Dépendances** :
   - Les hooks orchestrent l’interaction avec la couche Application (services) ou directement avec Redux.
   - Ils injectent les services nécessaires pour que le composant reste autonome et concentré sur son rôle d’affichage.

3. **Indépendance des Composants** :
   - Ce ne sont pas les **pages** qui dépendent des hooks, mais chaque **composant ou sous-composant** à l'intérieur des pages :
     - Par exemple, `UserAccount.jsx` peut utiliser le hook `useBankAccount` pour obtenir les informations bancaires et les fonctions nécessaires, sans avoir à se préoccuper des détails de l'implémentation des données.

### **Exemple**

Prenons un hook personnalisé pour gérer les fonctionnalités d’un utilisateur (`useProfile`) :

```javascript
import { useCallback, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserProfileService from '../../application_Layer/services/userProfileService';
import UserProfileRepo from './../../infrastructure_Layer/api/user/profile/userProfileRepo';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../infrastructure_Layer/redux/slices/user/userProfile';
import { UserProfile } from '../../domain_Layer/userProfile';

export default function useEditProfile() {
  //state
  const [messageInvalid, setMessageInvalid] = useState('');
  const [isEditMode, setIsEditMode] = useState(true);

  //location
  const { state } = useLocation();
  const navigate = useNavigate();

  //get token
  const token = useRef(state || profileService.getToken()).current;

  //redux
  const { userProfile } = useSelector((state) => state.UserProfileReducer);
  const dispatch = useDispatch();

  //service
  const profileService = new UserProfileService(new UserProfileRepo());
  const profile = new UserProfile();

  //submit form
  const setUserProfile = useCallback(async (e) => {
    e.preventDefault();

    const formData = e.target.elements;
    profile.firstName = formData.firstName.value;
    profile.lastName = formData.lastName.value;

    //check input
    if (!profile.firstName.trim() || !profile.lastName.trim()) {
      setMessageInvalid('Attention ! firstName ou lastName ne peut pas être vide ');
      return;
    } else {
      editModeHandler();
      setMessageInvalid((m) => (m = ''));
    }
    //check token
    if (token) {
      const data = {
        firstName: profile.firstName,
        lastName: profile.lastName,
      };
      const res = await profileService.updateProfile(token, data);
     
      dispatch(updateProfile({ ...res }));
    } else {
      profileService.redirectionToLogin(navigate);
    }
  });

  // edit mode handler
  const editModeHandler = useCallback(() => {
    setIsEditMode((mode) => !mode);
  }, []);

  // for cancel bottom
  const cancelHandler = useCallback(() => {
    setIsEditMode((mode) => !mode);
    setMessageInvalid((m) => (m = ''));
  }, []);

  return {
    setUserProfile,
    userProfile,
    editModeHandler,
    isEditMode,
    messageInvalid,
    cancelHandler,
  };
}

```

- Dans cet exemple, `useProfile` injecte les **données** (profil utilisateur) et **fonctions** (chargement et modification du profil) pour tout composant qui en a besoin (par exemple : `EditName.jsx` ou `UserAccount.jsx`).

---

## **Conclusion**

Ce projet est structuré selon les principes de la **Clean Architecture**, avec une approche modulaire et indépendante entre les couches. Les bénéfices sont :

1. **Séparation Clair des Responsabilités** :
   - Chaque couche a un rôle distinct (Domain, Application, Infrastructure, Presentation).
   - Les hooks personnalisés agissent comme intermédiaires contrôlant les interactions entre les composants (ou sous-composants) et les autres couches.

2. **Flexibilité et Scalabilité** :
   - La structure rend facile l'ajout de nouvelles fonctionnalités sans altérer le fonctionnement existant.

3. **Gestion Efficiente des Données** :
   - Utilisation intelligente de Redux pour les états globaux et des hooks personnalisés pour des états locaux, limitant ainsi les dépendances inutiles entre les composants.

Grâce à cette organisation, votre projet est bien conçu et offre une excellente maintenabilité et évolutivité pour les futurs développements.