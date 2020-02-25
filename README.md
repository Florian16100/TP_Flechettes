# TP_Flechettes

## 1. Explication du projet
Ce projet a pour but de réaliser un jeu de fléchettes, il y a donc 2 parties : le moteur et l'api.

## 2. Installation du projet 

1 - Cloner le repo sur votre machine : 

git clone https://github.com/Florian16100/TP_Flechettes.git

cd tp_flechettes

npm install

2 - Lancer le serveur 

npm start

3 - Utilisation de l'api

Liste des routes : 

GET /
GET /players
POST /players
GET /players/new
GET /players/{id}
GET /players/{id}/edit
PATCH /players/{id}
DELETE /players/{id}
GET /games
GET /games/new
POST /games
GET /games/{id}
GET /games/{id}/edit
PATCH /games/{id}
DELETE /games/{id}
GET /games/{id}/players
POST /games/{id}/players
DELETE /games/{id}/players
POST /games/{id}/shots
DELETE /games/{id}/shots/previous

Ps : Ce projet a été réalisé par Florian Lys mais aussi une petite partie avec l'aide de Guillaume Anton.
