

### README.md pour le Back-end

```markdown
# Gestion des Produits - Back-end

Ce projet constitue la partie back-end de l'application de gestion des produits, construite avec Node.js, Express et MongoDB.

## Pré-requis

- Node.js
- npm (ou yarn)
- MongoDB

## Installation

1. Clonez le dépôt
 ````
   ```sh
   git clone https://github.com/H4SS4NN/LesbonARTISANS.git
   cd lesbonARTISANS
   ```

2. Installez les dépendances
3. 
   ```sh
   cd product-api
   npm install
   ```

4. Configurez MongoDB
   Assurez-vous que MongoDB est en cours d'exécution sur `mongodb://127.0.0.1:27017/productsdb`.

5. Ajoutez les données initiales à la base de données
   ```sh
   node bddajout.js
   ```

6. Démarrez le serveur
   ```sh
   node index.js
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

Nous avons rencontré des difficultés techniques lors de la mise en place de ces fonctionnalités et avons décidé de revenir à une version stable sans ces bonus.

## Conclusion

Le back-end fournit une API RESTful pour la gestion des produits. Bien que les fonctionnalités bonus n'aient pas été implémentées avec succès, l'API reste pleinement fonctionnelle pour les opérations CRUD basiques.
```

### README.md pour le Front-end

```markdown
# Gestion des Produits - Front-end

Ce projet constitue la partie front-end de l'application de gestion des produits, construite avec React et Material-UI.

## Pré-requis

- Node.js
- npm (ou yarn)

## Installation

1. Clonez le dépôt
   ```sh
   git clone https://github.com/H4SS4NN/LesbonARTISANS.git
   cd lesbonARTISANS
   ```

2. Installez les dépendances
   ```sh
   cd Front
   npm install
   ```

3. Démarrez le serveur de développement
   ```sh
   npm start
   ```

## Utilisation

1. Accédez à `http://localhost:5173` dans votre navigateur.

## Fonctionnalités

- Afficher la liste des produits
- Ajouter un nouveau produit
- Modifier un produit existant
- Supprimer un produit
- Validation des formulaires pour s'assurer que les entrées utilisateur sont correctes
- Bouton "Retour" sur la page de formulaire pour revenir à la page d'accueil

## Structure du projet

- `src/App.jsx` : Composant principal de l'application.
- `src/pages/Home.jsx` : Page d'accueil affichant la liste des produits.
- `src/pages/EditProduct.jsx` : Page de formulaire pour ajouter ou modifier un produit.
- `src/components/ProductList.jsx` : Composant pour afficher la liste des produits.
- `src/components/ProductForm.jsx` : Composant de formulaire pour ajouter ou modifier un produit.

## Problèmes rencontrés

### Fonctionnalités bonus

- **WebSocket** : La tentative d'implémentation de la communication en temps réel avec Socket.IO n'a pas été concluante.
- **Authentification JWT** : La mise en œuvre de l'authentification via JWT n'a pas été réussie.

Nous avons rencontré des difficultés techniques lors de la mise en place de ces fonctionnalités et avons décidé de revenir à une version stable sans ces bonus.

