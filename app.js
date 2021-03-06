//http://localhost:3000/

//Cheat sheet

/*
- Le routage :

Explication voir "https://expressjs.com/fr/guide/using-middleware.html", "https://expressjs.com/fr/guide/routing.html" et "https://expressjs.com/fr/starter/basic-routing.html"

- La fonction app.get :
La fonction app.get() achemine les requêtes HTTP GET vers le chemin spécifié avec les fonctions de rappel spécifiées. 
Fondamentalement, il est destiné à lier le middleware à votre application.

Syntaxe: app.get( chemin, rappel )

Exemple : app.get('/', (req, res) le slash indique que l'on es a la racine (http://localhost:3000/) se qu'il y a dan res.send s'qffichera a cette adresse

en rajoutant quelle chose apres on obtien une nouvelle adresse ou chemin Ex : app.get('/posts', (req, res) => qui est acessible avec (http://localhost:3000/posts)

- Explication req res : 
"https://qastack.fr/programming/4696283/what-are-res-and-req-parameters-in-express-functions"

- La fonction app.listen() :

La fonction app.listen() est utilisée pour lier et écouter les connexions sur l'hôte et le port spécifiés. Cette méthode est identique à la méthode http.Server.listen() de Node.
Syntaxe: app.listen([port[, host[, backlog]]][, callback])

- La fonction app.use() :

La fonction app.use() est utilisée pour monter la ou les fonctions middleware spécifiées sur le chemin spécifié. Il est principalement utilisé pour configurer un middleware pour votre application.

Syntaxe: app.use(chemin, rappel)

- Pour cacher l'identifiant et le mot de passe dans le lien navigateur on peux installer le paquet dotenv (npm install dotenv)

Dans le fichier.env on me sous forme de code tout ce que l'on veu pas que tout le monde vois

- Le cors
https://www.ionos.fr/digitalguide/sites-internet/developpement-web/cross-origin-resource-sharing/
https://www.youtube.com/watch?v=irpWV4effNE


- Utiliser Fetch :
https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch

*/


/*----------------------------------------------------------------------------------------------------------*/

const express = require('express'); //importer le paquet d'express

const app = express(); 

//-------------
var https = require('https')
var http = require('http')
//---------
const mongoose = require('mongoose'); //importer le paquet de mongoose

const bodyParser = require('body-parser');

const cors = require('cors');

require('dotenv/config');

//Middlewares
app.use(cors()); // explication du cors en haut : https://www.ionos.fr/digitalguide/sites-internet/developpement-web/cross-origin-resource-sharing/

app.use(bodyParser.json());

// Importation des chemins/ routes

const postsRoute = require('./routes/posts');
const promotionRoute = require('./routes/promotions')
const etudiantRoute = require('./routes/etudiants');
const professeurRoute = require('./routes/professeurs');
const adminRoute = require('./routes/admins');
const gretaRoute = require('./routes/gretas');
const responsableRoute = require('./routes/responsables');
const matiereRoute = require('./routes/matieres');
const coursRoute = require('./routes/cours');
const presenceRoute = require('./routes/presence');
const { Console } = require('console');


//Middlewares

app.use('/posts', postsRoute);   // j'utilise le chemin /.... pour faire :
app.use('/promotions', promotionRoute);
app.use('/etudiants', etudiantRoute);
app.use('/professeurs', professeurRoute);
app.use('/admins', adminRoute);
app.use('/gretas', gretaRoute);
app.use('/responsables', responsableRoute);
app.use('/matieres', matiereRoute);
app.use('/cours', coursRoute);
app.use('/presences', presenceRoute);

//app.use('/user', userRoute);

// ROUTES / Chemin
app.get('/', (req, res) => { 
    res.send('On est a la maison')
});




// Connexion a la base de donnee

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => /* current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.*/
    console.log('connecte a la base de donner !')
);


// Comment commencer à écouter le serveur

//app.listen();

http.createServer(app).listen(80);
https.createServer(app).listen(443);


console.log();
