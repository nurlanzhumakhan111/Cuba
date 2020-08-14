document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelectorAll(".cadillac__item-button"),
        content = document.querySelectorAll(".cadillac__item-content"),
        count = document.querySelector(".like__items");
    AOS.init();
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", () => {
            content.forEach(node => {
                node.classList.remove("active")
            })
            content[i].classList.add("active");
        })
    };
    
    
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        effect: 'fade',
        speed: 300,
        grabCursor: true,


        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })
})