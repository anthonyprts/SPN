/*
Un modele de fichier de donner defini les attributs de la classes

 Ici on a cree un modele de fichier de donnée dans le dossier models pour pouvoir definir le fichier de donnée d' un Post

*/

const mongoose = require('mongoose'); //importer le paquet de mongoose

const responsableSchema = mongoose.Schema({
    Login: {
        type: String,
        require: true,
    },

    MotDePasse: {
        type: String,
        require: true,
    },
    Mail: {
        type: String,
        require: true,
    }
});


module.exports = mongoose.model('Responsables', responsableSchema);