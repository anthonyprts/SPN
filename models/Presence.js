/*
Un modele de fichier de donner defini les attributs de la classes

 Ici on a cree un modele de fichier de donnée dans le dossier models pour pouvoir definir le fichier de donnée d' un Post

*/

const mongoose = require('mongoose'); //importer le paquet de mongoose
const Cours = require('./Cours');
const Etudiant = require('./Etudiant');

const presenceSchema = mongoose.Schema({
    Etudiant: {
        type: mongoose.Schema.ObjectId,
        ref: Etudiant,
    },

    Cours: {
        type: mongoose.Schema.ObjectId,
        ref: Cours,
    },
    Date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Presences', presenceSchema);