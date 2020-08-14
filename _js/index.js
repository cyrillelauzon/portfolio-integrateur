/*****************************************************************************
index.js

Gestion des animations déclenchées par défilement
/******************************************************************************/



//Gestion du chargement de page et animations:
document.body.classList.add('js-Page-Loading');
window.addEventListener("load", AfficherAnimations);

function AfficherAnimations() {
  document.body.classList.remove('js-Page-Loading');
}



//Fade in sur scroll
window.onscroll = function () {

    let curY = window.scrollY;

    //Effet de parallax pour image titre
    //TODO Compléter code effet de parallax
    //console.log("curY" + curY);
    //let offset = window.pageYOffset;
    //let divBioPict = document.getElementById("section-bio-bg-pict");
    //divBioPict.style.backgroundPositionY = offset * 0.3 + "px";

   
    //Animations section competence
    let divCompetences = document.getElementById("section-competences-contenu");
    let divMarge = document.getElementById("section-competences-textarea");
    
    if(curY > 400 && curY < divCompetences.offsetHeight + 300 ){
        divCompetences.classList.add("animerCompetences");
        divMarge.classList.add("animerMargeCompetences");
    }
    else 
    {
        divCompetences.classList.remove("animerCompetences");
        divMarge.classList.remove("animerMargeCompetences");
    }
    
   // FadeInDiv("#section-competences", 0.6);
    FadeInDiv("section-realisations");
    FadeInDiv("section-experiences");
};


/**
 * @description FadeInDiv permet de faire apparaitre un div progressivement sur scroll
 * @param {string} idDiv à faire apparaître progressivement
 * @param {number} [pctBase=0] pourcentage d'opacité de départ
 * @returns ne fait rien si id est invalide
 */
function FadeInDiv(idDiv, pctBase = 0){
    let divSelect = document.getElementById(idDiv);
    if(divSelect === undefined) return;
    
    let curY = window.scrollY;
    let minY = divSelect.offsetTop - (divSelect.scrollHeight - 100);
    let maxY = divSelect.offsetTop;
    if( curY > minY){
        let pct = pctBase + (curY / maxY);
        divSelect.style.opacity = pct;
    }
}

/**
 * @description RetourHautPage retour animé vers haut de la page
 * NB nécessite JQuery
 */
function RetourHautPage(){
    
    event.preventDefault();
    $('html, body').animate({
        scrollTop: "0px"
    }, 800);
}
