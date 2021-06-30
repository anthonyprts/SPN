/*
Un modele de fichier de donner defini les attributs de la classes

 Ici on a cree un modele de fichier de donnée dans le dossier models pour pouvoir definir le fichier de donnée d' un Post

*/

const mongoose = require('mongoose'); //importer le paquet de mongoose

const professeurSchema = mongoose.Schema({
    numProfesseur: {
        type: String,
        require: true,
    },
    Nom: {
        type: String,
        require: true
    },
    Prenom: {
        type: String,
        require: true
    },
   
    Level: {
        type: Number,
        require: true
    }
});


module.exports = mongoose.model('Professeurs', professeurSchema);