/*
Un modele de fichier de donner defini les attributs de la classes

 Ici on a cree un modele de fichier de donnée dans le dossier models pour pouvoir definir le fichier de donnée d' un Post

*/

const mongoose = require('mongoose'); //importer le paquet de mongoose
const Promotion = require('./Promotion');

const etudiantSchema = mongoose.Schema({
    Login: {
        type: String,
        require: true,
    },

    MotDePasse:{
        type: String,
        require: true,
    },
    numEtudiant: {
        type: String,
        require: true,
    },
    Nom: {
        type: String,
        require: true,
    },
    Prenom: {
        type: String,
        require: true,
    },
    Promotion: {
        type: mongoose.Schema.ObjectId,
        ref: Promotion,
    },
    Level:{
        type: Number,
        require: true,
    }
});


module.exports = mongoose.model('Etudiants', etudiantSchema);