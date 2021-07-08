/* Ici on a cree un fichier dans le dossier routes posts pour pouvoir remplacer les routes qui sont dans le code de l'app 

- La fonction express.Router() :

La fonction express.Router() est utilisée pour créer un nouvel objet routeur. Cette fonction est utilisée lorsque vous souhaitez créer un nouvel objet routeur dans votre programme pour gérer les requêtes.

Syntaxe: express.Router( [options] )

*/

//Tout les fonction crée sont utilisable pour iun autre type de données

const express = require('express'); //importer le paquet d'express
const router = express.Router();
const Promotion = require('../models/Promotion');// On importe le modele que l'on veux utiliser pour Post

// Recuperer tout les posts
router.get('/', async (req, res) => {
    try {
        const promotions = await Promotion.find();
        res.json(promotions);
        console.log(req.query);

    } catch (err) {
        res.json({ message: err });
    }
});


// Enregistrer les informations dans la base de donnée
router.post('/', async (req, res) => {

    const promotion = new Promotion({
        Nom: req.body.Nom,

        EDT: req.body.EDT,


    });
    console.log(req.body); //afficher le contenu de la requete
    // Envoyer le nouveau post a la BD
    try {
        const savedPost = await promotion.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }

});

// recuperer un posts specific avec son id 

router.get('/:postId', async (req, res) => {
    try {
        const cours = await Promotion.findById(req.params.postId);
        res.json(cours);
    } catch (err) {
        res.json({ message: err });
    }
});

// Modifier un post 
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Promotion.updateOne({ _id: req.params.postId }, { $set: { Nom: req.body.Nom } }, { $set: { EDT: req.body.EDT } });
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
});
// Supprimer un post en recuperant son id
router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Promotion.remove({ _id: req.params.postId });
        res.json(removePost);
    } catch (err) {
        res.json({ message: err });
    }
});
module.exports = router;