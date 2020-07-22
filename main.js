$('.header-right a:last-child i').click(function(){
    $('.hamburger-menu').addClass('active');
});

$('.hamburger-menu a:last-child i').click(function(){
    $('.hamburger-menu').removeClass('active');
});




//VERSIONE CON VARIABILE BOOLEANA

// var check = false;
//
// $('header a:last-child i').click(function(){
//     if (check){
//         $('.hamburger-menu').removeClass('active');
//         check = false;
//     } else {
//         $('.hamburger-menu').addClass('active');
//         check = true;
//     }
// })
