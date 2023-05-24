window.onload = init;
var tableau = Object.keys(article).map(function(cle) { return [article[cle]];});
var listeArticles = [];
function afficher5Article(){
 
    var article = new Article(" Mes articles", "ceci est une description");
    listeArticles.push(article);

    var article = new Article("Avoir mon diplôme developpeuse web", "ceci est une description");
    listeArticles.push(article);

    var article = new Article("Acquérir les bonnes bases du développement web", "ceci est une description");
    listeArticles.push(article);

    var article = new Article("Maitrier le JS", "ceci est une description");
    listeArticles.push(article);

    var article = new Article("Maitrier le JS", "ceci est une description");
    listeArticles.push(article);
    console.log(onclick);

}
/**
 * Méthode viderMain() qui se déclenche au clic sur le 1er bouton (Ajouter un article).
 * Il vide tout le main
 * Il crée et ajoute un mini formulaire
 */
function viderMain(){
    console.log("ENTREE dans viderMain()");
    // Effacer le contenu (tous les enfants) existant dans le main
    $("main").children().remove();

    // Créer un formulaire "Ajouter un article" dans le main 
    $("main").html("<form><p>Ajouter un article</p><div><label for='titre'>Titre :</label><input type='text' name='titre' placeholder='Votre titre ici...' required></div><div><label for='description'>Description :</label><textarea type='text' name='description' placeholder='Votre description ici...' required></textarea></div></form><button type='submit' onclick='submitForm()'>Enregistrer</button>");
}
//Crééer methode getter et setter 
/**
 * Méthode submitForm() qui
 * - Récupère les données saisies dans le formulaire
 * - Créer un nouvel article avec ces données
 */
function submitForm(){
    console.log("ENTREE dans submitForm()");
    //var article = new Article();
    //listeArticles.push(article);
    //console.log(listeArticles);
    //var titre = document.getElementsByTagName("input")[0];
    var titre = document.querySelector("input[name=titre]");
    /*function getValue() {
        // Sélectionner l'élément input et récupérer sa valeur
        var input = document.getElementById("in").value;
         // Afficher la valeur
        alert(input);
    }*/
    //console.log(titre.value);
    
    var article = new Article;
    article.setTitre(titre.value);
    console.log(article);
    
}

/**
 * Méthode toutAfficher()
 * qui affiche TOUTE la liste des souhaits
 */
function toutAfficher(){
    //console.log("ENTREE dans toutAfficher(");
    var divHtmlTitreArticle = "";

    // Effacer le contenu (tous les enfants) existant dans le main
    $("main").children().remove();

    // Ajout de la zone d'affichage
    $("main").html("<h1>Ma toDoList</h1><div class='todolistZone'></div>");

    // Remplissage de la zone avec une boucle for
    for(var i = 0 ; i < listeArticles.length ; i++){
        divHtmlTitreArticle += "<div class='todolistDiv'><a href='#'>" + listeArticles[i].titre + "</a></div>";
    }

    // Injecter les titres dans la zone d'affichage créée précédemment
    $("div.todolistZone").html(divHtmlTitreArticle);
    var tableau = Object.keys(article).map(function(cle) { return [article[cle]];});

}
 
