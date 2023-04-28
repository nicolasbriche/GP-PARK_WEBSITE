document.addEventListener("DOMContentLoaded", function(){
    var burger = document.getElementsByClassName("burger-icon--checkbox")[0];
    var menu = document.getElementsByClassName("header--menu")[0];
    var main = document.getElementsByTagName("main")[0];

    burger.onclick = function(){
        if(burger.checked){
            menu.style.setProperty("display", "flex");
            main.style.setProperty("filter", "blur(10px)");
        }else{
            menu.style.setProperty("display", "none");
            main.style.setProperty("filter", "none");
        }
    }

    // Afficher le menu quand on change la taille de l'écran et enlever le blur filter
    // Empêcher le scroll quand le menu mobile est ouvert
});