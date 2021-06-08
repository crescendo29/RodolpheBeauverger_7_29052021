RodolpheBeauverger_7_29052021

Groupomania : Développement d'un réseau social entreprise

Projet fullstack

Front-end : react , react router , json web token pour l'authentification .

Pour le backend :node.js express , json web token helmet et bcrypt .

Pour la base de donnée : PostgreSQL et l'ORM sequelize

Git clone le projet

Installez les dépendances comme pour n'importe quel projet(assurez vous d’avoir PostrSQL)

Dans le dossier backend => config => config.json mettez-y votre username et votre mot de passe pour la base de donnée development

créer localement la base de donnée « 33616 »

Dans l'invite de commande déplacez vous dans le dossier backend : cd backend , tapez sequelize db:create , puis sequelize db:migrate , (assurez vous que sequelize-cli est bien installé)

Pour le frontend déplacez vous dans le dossier frontend à l’aide de la commande cd frontend puis npm start
