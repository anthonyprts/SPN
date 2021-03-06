/* Ici on a cree un fichier dans le dossier routes posts pour pouvoir remplacer les routes qui sont dans le code de l'app 

- La fonction express.Router() :

La fonction express.Router() est utilisée pour créer un nouvel objet routeur. Cette fonction est utilisée lorsque vous souhaitez créer un nouvel objet routeur dans votre programme pour gérer les requêtes.

Syntaxe: express.Router( [options] )

*/

//Tout les fonction crée sont utilisable pour iun autre type de données

const express = require('express'); //importer le paquet d'express
const router = express.Router();
const Etudiant = require('../models/Etudiant');// On importe le modele que l'on veux utiliser pour Post

// Recuperer tout les posts
router.get('/', async (req, res) => {
    try {
        const etudiants = await Etudiant.find();
        res.json(etudiants);
        console.log(req.query);

    } catch (err) {
        res.json({ message: err });
    }
});


// Enregistrer les informations dans la base de donnée
router.post('/', async (req, res) => {

    const etudiant = new Etudiant({
        Login: req.body.Login,

        MotDePasse: req.body.MotDePasse,

        numEtudiant: req.body.numEtudiant,

        numCarteEtudiant: req.body.numCarteEtudiant,
        
        Nom: req.body.Nom,
        
        Prenom: req.body.Prenom,
        
        Promotion: req.body.Promotion,

        Level: req.body.Level
        

    });
    console.log(res.json); //afficher le contenu de la requete
    // Envoyer le nouveau post a la BD
    try {
        const savedPost = await etudiant.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }

});

// recuperer un etudiant specific avec son id 
/*
router.get('/:postId', async (req, res) => {
    try {
        const etudiant = await Etudiant.findById(req.params.postId);
        res.json(etudiant);
    } catch (err) {
        res.json({ message: err });
    }
});
*/
/*________________________________*/

// recuperer un etudiant specific avec son identifiant lorsqu'il c'est connecté 

router.get('/:loginEtu', async (req, res) => {
    try {
        const etudiant = await Etudiant.findOne({ Login: req.params.loginEtu });
        res.json(etudiant);
        console.log(res.json);
    } catch (err) {
        res.json({ message: err });
    }
});

// recuperer un etudiant specific avec son identifiant lorsqu'il c'est connecté 

router.get('/:loginEtu', async (req, res) => {
    try {
        const etudiant = await Etudiant.findOne({ Login: req.params.loginEtu });
        res.json(etudiant);
    } catch (err) {
        res.json({ message: err });
    }
});

// Modifier un post 
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Etudiant.updateOne({ _id: req.params.postId }, { $set: { Login: req.body.Login } }, { $set: { MotDePasse: req.body.MotDePasse } }, { $set: { numEtudiant: req.body.numEtudiant } }, { $set: { Nom: req.body.Nom } }, { $set: { Prenom: req.body.Prenom } }, { $set: { Promotion: req.body.Promotion } });
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
});
// Supprimer un post en recuperant son id
router.delete('/:loginEtu', async (req, res) => {
    try {
        const removePost = await Etudiant.remove({ Login: req.params.loginEtu });
        res.json(removePost);
    } catch (err) {
        res.json({ message: err });
    }
});
module.exports = router;