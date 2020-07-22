$('.header-right a:last-child i').click(function(){
    $('.hamburger-menu').show();
});

$('.hamburger-menu a:last-child i').click(function(){
    $('.hamburger-menu').hide();
});




//VERSIONE CON VARIABILE BOOLEANA

// var check = false;
//
// $('header a:last-child i').click(function(){
//     if (check){
//         $('.hamburger-menu').hide();
//         check = false;
//     } else {
//         $('.hamburger-menu').show();
//         check = true;
//     }
// })
