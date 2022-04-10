/*
    Quando arrivo a una risoluzione mobile, scompare il menu principale e appare l'amburger menu
    Quando arrivo a una risoluzione desctop, scompare l'amburger menu e appare il menu principale
*/

const menuMain = document.querySelector('.header-right>a');
console.log(menuMain);
const menuHamburg = document.querySelector('.hamburger-menu');
console.log(menuHamburg);

menuMain.addEventListener('click', function(){

    //aggiungo la classe active all'icona dell'hamburger menu
    menuHamburg.classList.add('active');
    console.log(menuHamburg.classList);

});

const btnCloseMenuHamburg = document.querySelector('.close');

btnCloseMenuHamburg.addEventListener('click', function(){

    //tolgo la classe active alla X che chiude il menu hamburger
    menuHamburg.classList.remove('active');
    console.log(menuHamburg.classList);

});