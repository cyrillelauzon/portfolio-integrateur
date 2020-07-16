

//Fade in sur scroll
window.onscroll = function () {
    FadeInDiv("#section-competences", 0.6);
    FadeInDiv("#section-realisations");
    FadeInDiv("#section-experiences");
};


/**
 * @description FadeInDiv permet de faire apparaitre un div progressivement sur scroll
 * @param {string} id Div à faire apparaître progressivement
 * @param {number} [pctBase=0] pourcentage d'opacité de départ
 * @returns ne fait rien si id est invalide
 */
function FadeInDiv(idDiv, pctBase = 0){
    let divSelect = document.querySelector(idDiv);
    if(divSelect === undefined) return;
    
    let curY = window.scrollY;
    let minY = divSelect.offsetTop - (divSelect.scrollHeight - 100);
    let maxY = divSelect.offsetTop;
    if( curY > minY){
        let pct = pctBase + (curY / maxY);
        divSelect.style.opacity = pct;
    }
}
