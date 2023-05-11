document.addEventListener("DOMContentLoaded", function(){
    
    // Overture et fermeture du menu smartphone et animation du burger icon
    var burger = document.getElementsByClassName("burger-icon--checkbox")[0];
    var menu = document.getElementsByClassName("header--menu")[0];
    var main = document.getElementsByTagName("main")[0];
    
    burger.onclick = function(){
        if(burger.checked){
            menu.style.setProperty("display", "flex");
            main.style.setProperty("filter", "blur(10px)");
            
            // On bloque le scroll
            document.getElementsByTagName("html")[0].style.setProperty("overflow", "hidden");
        }else{
            menu.style.setProperty("display", "none");
            main.style.setProperty("filter", "none");
            // On active le scroll
            document.getElementsByTagName("html")[0].style.setProperty("overflow", "visible");
        }
    }
    
    // Détéction du click sur un item du menu smartphone
    var menuItem = document.getElementsByClassName("header-menu--item");
    
    for(let i = 0; i < menuItem.length; i++){
        const element = menuItem[i];
        if(window.innerWidth < 1024){
            element.onclick = function(){
                menu.style.setProperty("display", "none");
                main.style.setProperty("filter", "none");
                burger.checked = false;
                // On active le scroll
                document.getElementsByTagName("html")[0].style.setProperty("overflow", "visible");
            }
        }
    }
});




// Afficher le menu quand on change la taille de l'écran et enlever le blur filter
// Tracer les bons icones (loisir et academy)
// Faire les modifs demandées dans sublime texte
// Mettre le tracé du circuit en background dans horaires
// Terminer la carte contactez nous
// Faire un point sur le responsive

// Ajouter les meta description pour google (et autres en fonction des recherches)
// Changer les couleurs de la carte google map
// Faire un loader
// Animer les cercles du background
// Faire animation apparition des sections
// Faire des recherche pour la moto en 3D (présentation) ou animer a la souris ou a l'inclinaison du smartphone