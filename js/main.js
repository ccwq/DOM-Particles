$(document).ready(function() {

    var goFullscreen = function (id) {
        var element = document.getElementById(id);
        if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        }
    }

    var file = "samples/";

    var urls = [
 "default.html",
 "default_rounded.html",
 "rotation3d.html",

"speed_topleft.html",
"speed_translate.html",
"speed_translate3D.html",

"math_anim_zindex.html",

"css_transition.html",
"css_transition_scale.html",
"css_anim_font.html",
"css_anim.html",

"collision_basic.html",
"collision_particles.html",

"gravity_default.html",
"gravity_inverted.html",
"gravity_love.html",
"gravity_fontain.html",
"gravity_arrows.html",
"gravity_fire.html",
"gravity_fire_blur.html",
"gravity_bubbles.html",
"gravity_snow.html",

"math_anim_atome.html",
"math_anim_universe.html",
"math_anim_circle.html",
"math_anim_square.html",

"math_anim_hourglass.html",
"math_anim_rays.html",
"math_anim_sun.html",

"math_anim_wave.html",
"math_anim_pretzel.html",
"math_anim_tentacule.html",

"math_anim_tornado.html",
"math_anim_spriral.html",

"starfield.html",
"starfield_gif.html",
"tunnel.html",
"collision_shmup.html"];

    var current = -1;

    var samples = $("#samples");
    var id=0;

    for (var i = 0; i < urls.length; i++) {
       var title = urls[i].slice(0,urls[i].length-5);
       if(i%7 == 6){
            id++;
       }
       $("#"+id).append("<li id="+urls[i]+" class='id"+i+"'>"+(i+1)+' - '+title+"</li>");
    };

    $(".list li").click(function(){
        var target = $(this).attr("id");
        $("#iframe").attr('src', file+target);
        hideIt();
    });
    /*
    document.getElementById("iframe").style.width = window.innerWidth;
    document.getElementById("iframe").style.height = window.innerHeight;*/
    document.getElementById("iframe").style.overflow = "hidden";

    var height = samples.height()+10;
                 //samples.css('bottom',-height+"px");

    var hidden = false;

     $("#show").click(function(){
        if(hidden){
            showIt();
        }else{
           hideIt();
        }
    })
     var showIt = function(){
        hidden = false;
            samples.animate({
                bottom: '0',
              }, 300);
     }
     var hideIt = function(){
         hidden = true;
            samples.animate({
                bottom: '-'+height,
              }, 300);
     }

    

     var keyDown = function(e){


        if(e.keyCode == 80){
            if(current != 0){
                current--;
            }
            $(".id"+current).css("text-decoration","line-through");
        $("#iframe").attr('src', file+urls[current]);

             //console.log("prev")
        }

        if(e.keyCode == 78) {
            if(current < urls.length-1){
                 current++;
            }
            $(".id"+current).css("text-decoration","line-through");
        $("#iframe").attr('src', file+urls[current]);
             //console.log("next")
        }
        
  
    } 
     window.addEventListener("keydown", keyDown, false);       
    /*
    var next = function(i) {
        current++;
        return file+urls[current];
    }
    var prev = function(i) {
        current--;
        return file+urls[current];
    }*/

    /*$(".navigate-right").click(function(){
        var target = next();
        $("#iframe").attr('src', target);
    });
    $(".navigate-left ").click(function(){
        var target = prev();
        $("#iframe").attr('src', target);
    });*/
    $(".state-background").remove();
    /*
    $("#menu a").click(function(){
        var target = $(this).attr("href");
        var src = getPage(target);
        $("#iframe").attr('src', src);

    })

    $("#fullscreen").click(function(){
        goFullscreen("iframe");
    })

  */


});