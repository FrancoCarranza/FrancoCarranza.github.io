$(document).ready(function(){

    $(window).scroll(function(){

        var windoWidth=$(window).width();

        if(windoWidth > 800){
            var scroll = $(window).scrollTop();

            $("header .textos").css({
                 "transform":"translate(0px, " + scroll / 3 + "%)"
            });

            $(".acerca article").css({
                "transform":"translate(0px, -" + scroll / 4 + "%)"
           });

           $(windoWidth).resize(function(){
            var windoWidth = $(window).width();
            if (windoWidth < 800){
                $(".acerca article").css({
                    "transform":"translate(0px, 0px"
               });
            }
           });
        };
    });

});