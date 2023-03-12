/** 
 * Carrousel 
 * Ce prototype reprend quelques principes du carrousel du w3c 
 * https://www.w3.org/WAI/tutorials/carousels/working-example/
 * mais en utilisant des balises images plutôt que des images d'arrière-plan.  
 * Voir aussi https://www.w3.org/WAI/ARIA/apg/patterns/carousel/  
*/

const carrousel = {

    // Propriétés
    jsActive: document.querySelector('body').classList.add('js'),
    arrSlides: document.querySelector('.carrousel__liste').querySelectorAll('.carrousel__slide'),
    intCurrentSlide: 0,

    // Méthodes
    initialiser: function () {
        // console.log(this.arrSlides);
        const ctrls = document.createElement('ul');
        ctrls.className = 'controls';
        ctrls.innerHTML = '<button id="btnPrecedent" class="bouton bouton--precedent">  ' +
            '<span aria-hidden="true"> ' +
            '    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z"/></svg>' +
            '</span>' +
            '<span class="visuallyhidden">précédent</span>' +
            '</button>' +
            '<button id="btnSuivant" class="bouton bouton--suivant">' +
            '<span aria-hidden="true">' +
            '    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z"/></svg>' +
            '</span>' +
            '<span class="visuallyhidden">suivant</span>' +
            '</button>';
        ctrls.querySelector("#btnSuivant").addEventListener('click', this.allerAuSuivant.bind(this));
        ctrls.querySelector("#btnPrecedent").addEventListener('click', this.allerAuPrecedent.bind(this));
        document.querySelector(".carrousel").appendChild(ctrls);
    },
    allerAuSuivant: function () {
        if (this.intCurrentSlide < this.arrSlides.length - 1) {
            this.intCurrentSlide++;
        } else {
            this.intCurrentSlide = 0;
        }
        this.changerImage();
    },
    allerAuPrecedent: function () {
        if (this.intCurrentSlide > 0) {
            this.intCurrentSlide--;
        } else {
            this.intCurrentSlide = this.arrSlides.length - 1;
        }
        this.changerImage();
    },
    changerImage: function () {
        /* attention ici on utilise une boucle forEach() voir la doc sur ce type de boucle */
        this.arrSlides.forEach(function (slide) {
            slide.classList.remove('carrousel__slide--active');
        });
        this.arrSlides[this.intCurrentSlide].classList.add('carrousel__slide--active');
    }
}



/* Écouteurs d'événements */

window.addEventListener('keydown', function (e) {
    if (e.code === "ArrowRight") {
        carrousel.allerAuSuivant();
    } else if (e.code === "ArrowLeft") {
        carrousel.allerAuPrecedent();
    }
});

window.addEventListener('DOMContentLoaded', function () {
    carrousel.initialiser();
})