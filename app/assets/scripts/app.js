import "../styles/style.css";
if(module.hot){
    module.hot.accept();
}
console.log("Hello world");
alert("Hii Manav");

/****************************************************************************************************************************************
                                                                CLIENT SECTION
***************************************************************************************************************************************/
$(document).ready(function(){
    $('#client').owlCarousel({
        items:3,
        autoplay:true,
        autoplayHoverPause:true,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            300:{
                items:1
            },
            762:{
                items:3
            }
        }
    })
});
