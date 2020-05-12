import "../styles/style.css";
import RevealOnScroll from "./modules/RevealOnScroll";
if (module.hot) {
    module.hot.accept();
}
console.log("Hello world");
// alert("Hii Manav");

// new RevealOnScroll($(".section"), "40%");
new RevealOnScroll($("#our-beginning"), "40%");
new RevealOnScroll($("#features"), "60%");
new RevealOnScroll($("#testimonials"), "50%");
new RevealOnScroll($(".footer"), "95%");
/***************************************************************************************************************************************
                                                                CLIENT SECTION
***************************************************************************************************************************************/
$(document).ready(function() {
    $('#clients').owlCarousel({
        items: 3,
        autoplayHoverPause: true,
        loop: true,
        autoplay: true,
        margin: 10,
        nav: true,
        navText: ['<i class="lni-chevron-left-circle"></i>', '<i class="lni-chevron-right-circle"></i>'],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 1
            },
            762: {
                items: 3
            }
        }
    })
});

/***************************************************************************************************************************************
                                                                NAVBAR RESPONSIVE
**************************************************************************************************************************************/
const burger = document.getElementsByClassName('header-burger')[0];
// console.log(burger);
const navbarlinks = document.getElementsByClassName('header-navbar')[0];
// console.log(navbarlinks);
burger.addEventListener('click', function() {
    navbarlinks.classList.toggle('active')
});

// burger animation
burger.addEventListener('click', function() {
    burger.classList.toggle('close');
});