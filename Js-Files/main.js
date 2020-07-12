function show(){
    if (document.querySelector('#menu').style.display==="none"){
        document.querySelector('#linex').style.display = 'none';
        document.querySelector('#line1').style.transform=" rotate(45deg) translateY(8px)";
        document.querySelector('#line3').style.transform=" rotate(-45deg) translateY(-8px)";
        document.querySelector('#menu').style.display="flex";
        document.querySelector('.tagline').style.visibility = "hidden";
        document.querySelector('nav').style.color="#3399ff";
        document.querySelector('#line1').style.background="linear-gradient(to right,#4dc3ff,#3399ff)";
        document.querySelector('#line3').style.background="linear-gradient(to right,#4dc3ff,#3399ff)";
       /// document.querySelector('.logo p').style.borderBottom ="2px solid #000";


    // document.querySelector('#line1').style.transform=" translateY(-2px)";
    // document.querySelector('#line3').style.transform=" translate(2px)";
    }
    else{
        document.querySelector('#linex').style.display = 'block';
        document.querySelector('#line1').style.transform=" rotate(0deg) translateY(0px)";
        document.querySelector('#line3').style.transform=" rotate(0deg) translateY(0px)";
        document.querySelector('#menu').style.display="none";
        document.querySelector('.tagline').style.visibility = "visible";
        document.querySelector('nav').style.color="#fff";
        document.querySelector('#line1').style.background="#fff";
        document.querySelector('#line3').style.background="#fff";
       // document.querySelector('.logo p').style.borderBottom ="2px solid #fff";

    }
    
}


$(document).ready(function (){
    $("#nav-item ul li").hover(function () {
        $(this).css("transform", "scale(1.2)");
        $(this).children().css("opacity","1");
            },function (){
                $(this).css("transform", "scale(1)");
                $(".fas").css("opacity","0");
            })
})
