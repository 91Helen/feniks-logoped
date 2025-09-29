
AOS.init();

document.querySelector('#login-btn').onclick = () =>{
  
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    
    navbar.classList.remove('active');
}
// go to top
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function() {

    if (window.scrollY >= 10) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }

});


// slider


const initSlider = () => {
    const imageList = document.querySelector ('.slider-wrapper .image-list');
    const slideButtons = document.querySelectorAll ('.slider-wrapper .slide-button');
    const sliderScrollbar = document.querySelector(".container-slider .slider-scrollbar"); 
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb"); 
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    scrollbarThumb.addEventListener ('mousedown', (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
 }

    const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
     document.removeEventListener("mouseup", handleMouseUp); 
    }

     document.addEventListener("mousemove", handleMouseMove);
     document.addEventListener("mouseup", handleMouseUp);

    })

    slideButtons.forEach (button => {
    button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});

const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
}

const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
}

imageList.addEventListener('scroll', () => {
    handleSlideButtons();
    updateScrollThumbPosition();
})

}

window.addEventListener("load", initSlider);







$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:15000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        },
    }
})


// FAQ

const buttons = document.querySelectorAll('.buttonFaq');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )
