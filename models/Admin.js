/*
Un modele de fichier de donner defini les attributs de la classes

 Ici on a cree un modele de fichier de donnée dans le dossier models pour pouvoir definir le fichier de donnée d' un Post

*/

const mongoose = require('mongoose'); //importer le paquet de mongoose

const adminSchema = mongoose.Schema({
    idAdmin: {
        type: String,
        require: true,
    }
    
});


module.exports = mongoose.model('Admins', adminSchema);