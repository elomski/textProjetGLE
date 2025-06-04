## 🧰 Technologies utilisées

- **Vue.js** – Framework JavaScript moderne
- **Quasar** – Framework UI basé sur Vue, avec CLI intégré
- **Pinia** – Store officiel de Vue 3 pour la gestion d’état



## 🖼️ Fonctionnalités du projet

- ✅ Page d’accueil avec affichage dynamique des produits
- ✅ Panier en **tiroir latéral** (drawer) :
  - Ajout et suppression de produits
  - Quantité mise à jour automatiquement
  - Calcul du **total par produit** et du **total global**
- ✅ Bouton pour **naviguer vers la page panier**
- ✅ Intégration complète avec **Pinia (store Vue officiel)** pour la gestion de l’état du panier



# 🛒 Projet Quasar – Gestion de Panier E-commerce

Le projet front-end **textProjetGLE** réalisé avec **Quasar** (basé sur Vue.js) permet la gestion d’un panier sur une page produit.  
L’application utilise un **store centralisé** qui est **pinia** pour ajouter, retirer des produits, et suivre le total du panier en temps réel.

---

## 📦 Prérequis

Avant de démarrer, assurez-vous d’avoir les éléments suivants installés :

- [Node.js](https://nodejs.org/) ≥ 16.x
- npm ou yarn
- **Quasar CLI (à installer globalement)** :

```bash
npm install -g @quasar/cli

```

### Installation & Démarrage

# 1. Cloner le dépôt
git clone https://github.com/elomski/textProjetGLE.git

# 2. Aller dans le dossier du projet
cd textProjetGLE

# 3. Installer les dépendances
npm install
# ou
yarn

# 4. Lancer l’application en mode développement
quasar dev

### Scripts supplémentaires

# Formatage du code
npm run format
# ou
yarn format

# Génération de la version de production
quasar build

# Capture d’écran (à ajouter)

📸 ![Capture du tiroir panier](/screenshots/Capture d’écran 2025-06-04 033208.png)
📸 ![Capture la page panier](/screenshots/Capture d’écran 2025-06-04 034042.png)

