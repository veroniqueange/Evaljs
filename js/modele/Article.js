/**
 * Classe Article.
 * Comme dans une classe "standart" en POO, il y a
 * - Le constructeur est appelé grâce au nom de la classe
 * - Dans le constructeur -> les attributs (propriétés)
 * - Les GETTERS qui permettent de récupérer les valeurs des attributs
 * - Les SETTERS qui permettent de modifier les valeurs des attributs
 * - La méthode toString() qui retourne un String avec chaque attribut/valeur
 * @param {string} titre
 * @param {string} description
 * @param {Date} annee
 */
function Article(titre, description){
    
    // Les attributs
    this.titre = titre;
    this.description = description;
    this.annee = new Date();
    
    // Les GETTERS
    this.getTitre = function(){
        return this.titre;
    }
    this.getDescription = function(){
        return this.titre;
    }
    this.getAnnee = function(){
        return this.titre;
    }
    
    // Les SETTERS
    this.setTitre = function(valeur){
        this.titre = valeur;
    }
    this.setDescription= function(valeur){
        this.description = valeur;
    }

    // La méthode toString
    this.toString = function(){
        return "titre : " + this.titre + " description : " + this.description + " année : " + this.annee;
    }
}