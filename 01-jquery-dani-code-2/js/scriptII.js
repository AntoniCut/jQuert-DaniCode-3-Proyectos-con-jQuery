//  **********  scriptII.js  **********

//  **********  EFECTOS - fadeIn, fadeOut, fadeToggle, fadeTo, stoop, slideUp, slideDown, slideToggle  **********

$( ()=> {

    //  *****  fadeIn()  *****
    $("#fadeIn").click( ()=> { 
        $("#div1").fadeIn(3000);
        $("#div2").fadeIn(6000);
        $("#div3").fadeIn("fast", ()=> console.log("Mostramos div3"));
    });

    //  *****  fadeOut()  *****
    $("#fadeOut").click( ()=> { 
        $("#div1").fadeOut(3000);
        $("#div2").fadeOut(6000);
        $("#div3").fadeOut("slow", ()=> console.log("Ocultamos div3"));
    });

    //  *****  fadeToggle()  *****
    $("#fadeToggle").click( ()=> { 
        $("#div1").fadeToggle(3000);
        $("#div2").fadeToggle(6000);
        $("#div3").fadeToggle("slow", ()=> console.log("Mostrar/Ocultar div3"));
    });

    //  *****  fadeTo()  *****
    $("#fadeTo").click( ()=> { 
        $("#div1").fadeTo(3000, 0.15);
        $("#div2").fadeTo(6000, 0.75);
        $("#div3").fadeTo(9000, 0.99, ()=> console.log("Mostrar/Ocultar div3"));
    });

    //  *****  stop()  *****
    $("#stop").click( ()=> { 
        $("#div3").stop();
    });

    //  *****  slideUp()  *****
    $("#slideup").click( ()=> { 
        $("#div1").slideUp(5000);
        $("#div2").slideUp(2000);
        $("#div3").slideUp(5000, ()=> console.log("Listo, cargado..."));
     });

     //  *****  slideDown()  *****
     $("#slidedown").click( ()=> { 
        $("#div1").slideDown(5000);
        $("#div2").slideDown(2000);
        $("#div3").slideDown(5000, ()=> console.log("Listo, cargado..."));
     });

     //  *****  slideToggle()  *****
     $("#slidetoggle").click( ()=> { 
        $("#div1").slideToggle(5000);
        $("#div2").slideToggle(2000);
        $("#div3").slideToggle(5000, ()=> console.log("Listo, cargado..."));
     });

     //  *****  slideUp() y slideDown()  *****
     let div1 = $("#div1");
     let div2 = $("#div2");
     let div3 = $("#div3");
     
     $("#slideupdown").click( ()=> { 
        div1.slideUp(2000).slideDown(3000);
        div2.slideUp(2000).slideDown(3000);
        div3.slideUp(3000).slideDown(4000, ()=> console.log("Listo, cargado..."));
     });

     $("#animate").click( ()=> { 
        $("#div4").animate({
            width: "toggle",
            height: "toggle",
        }, 3000);
        
    }); 

});

