**🚀 Cypress Demo**

**📌 Introduction**

Cypress est un framework de test end-to-end (E2E) puissant et moderne permettant de tester des applications web de manière rapide et fiable.

Ce projet sert d'exemple pour démarrer avec Cypress.

**🛠 Installation**

Avant de commencer, assurez-vous d'avoir Node.js installé sur votre machine.

**1️⃣ Cloner le projet**

git clone https://github.com/votre-utilisateur/CypressDemo.git
cd CypressDemo

**2️⃣ Initialiser le projet (si ce n'est pas encore fait)**

Si le projet n'a pas de fichier package.json, initialisez-le :

npm init -y

**3️⃣ Installer Cypress**

npm install cypress --save-dev

**🚀 Lancer Cypress**

📂 Mode interactif (UI)

npx cypress open

Cela ouvre l'interface graphique de Cypress où vous pouvez exécuter les tests.

**🖥 Mode Headless (Terminal)**

npx cypress run

Exécute les tests en arrière-plan (utile pour l'intégration continue).

📁 Structure du projet

CypressDemo/
│── cypress/
│   ├── e2e/               # Contient les tests
│   ├── fixtures/          # Contient les données de test (JSON)
│   ├── support/           # Contient les hooks et commandes globales
│── cypress.config.js      # Fichier de configuration Cypress
│── package.json           # Dépendances et scripts npm
│── .gitignore             # Fichiers à ignorer par Git

**📝 Exemple de test Cypress**

Ajoutez ce fichier dans cypress/e2e/example.cy.js :

describe('Page d\'accueil', () => {
  it('Vérifie que la page se charge', () => {
    cy.visit('https://example.com');
    cy.contains('Example Domain').should('be.visible');
  });
});

**🎯 Scripts utiles**

Ajoutez ces scripts dans package.json :

"scripts": {
  "cypress:open": "cypress open",
  "cypress:run": "cypress run"
}

Ensuite, vous pouvez exécuter :

npm run cypress:open
npm run cypress:run

**🌍 Liens utiles**

Documentation officielle Cypress

GitHub Cypress
