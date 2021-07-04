/*
    Un modele de fichier de donner defini les attributs de la classes

Ici on a cree un modele de fichier de donnée dans le dossier models pour pouvoir definir le fichier de donnée d' un Post */

const mongoose = require('mongoose'); //importer le paquet de mongoose
const Matiere = require('./Matiere')


const coursSchema = mongoose.Schema({
    Matiere: {
        type: Matiere,
        require: true,
    },

    DateDebut: {
        type: Date,
        default: true,
    },
    DateFin: {
        type: Date,
        default: true,
    }
});


module.exports = mongoose.model('Cours', coursSchema);