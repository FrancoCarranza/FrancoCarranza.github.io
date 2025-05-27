$(document).ready(function(){

    var titulo = $(".textos"),
        menu= $(".menu a");

    menu.each(function(index, elemento){
        $(this).css({
            "top": "-200px"
        });

        $(this).animate({ top : "0"}, 2000 + (index * 500));
    });

    if( $(window).width() > 800 ){
        titulo.css({
            opacity: 0,
            marginTop: 0
        })

        titulo.animate({
            opacity: 1,
            marginTop: "-52px"
        }, 1500)
    }

    var acerca = $("#acerca").offset().top,
        menu2 = $("#menu2").offset().top,
        galeria = $("#galeria").offset().top,
        ubicacion = $("#ubicacion").offset().top;

    $("#boton-acerca").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: acerca - 100
        });
    });

    $("#boton-menu").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: menu2 + 530
        });
    });

    $("#boton-galeria").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: galeria
        });
    });

    $("#boton-ubicacion").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: ubicacion
        });
    });

});