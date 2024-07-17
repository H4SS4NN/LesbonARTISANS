Bien sûr, voici les README.md séparés pour le front-end et le back-end :

### README.md pour le Back-end

````markdown
# Gestion des Produits - Back-end

Ce projet constitue la partie back-end de l'application de gestion des produits, construite avec Node.js, Express et MongoDB.

## Pré-requis

- Node.js
- npm (ou yarn)
- MongoDB

## Installation

1. Clonez le dépôt
   ```sh
   git clone <url_du_dépôt>
   cd <nom_du_dépôt>
   ```
````

2. Installez les dépendances

   ```sh
   cd product-api
   npm install
   ```

3. Configurez MongoDB
   Assurez-vous que MongoDB est en cours d'exécution sur `mongodb://127.0.0.1:27017/productsdb`.

4. Démarrez le serveur
   ```sh
   npm start
   ```

## Endpoints

- `POST /api/products` : Créer un produit
- `GET /api/products` : Récupérer tous les produits
- `GET /api/products/:id` : Récupérer un produit par ID
- `PATCH /api/products/:id` : Mettre à jour un produit
- `DELETE /api/products/:id` : Supprimer un produit

## Problèmes rencontrés

### Fonctionnalités bonus

- **WebSocket** : La tentative d'implémentation de la communication en temps réel avec Socket.IO n'a pas été concluante.
- **Authentification JWT** : La mise en œuvre de l'authentification via JWT n'a pas été réussie.
