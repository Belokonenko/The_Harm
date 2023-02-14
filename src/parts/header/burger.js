export default function burger() {
    const btnBurger = document.querySelector(".header__btn-burger");
    const nav = document.querySelector('.header__nav');

    
    btnBurger.addEventListener("click", () => {
        btnBurger.classList.toggle("header__btn-burger--active");
        nav.classList.toggle('header__nav--active');
    });
    
    nav.addEventListener('click', () => {
        nav.classList.remove('header__nav--active');
        btnBurger.classList.remove("header__btn-burger--active");
    })

    nav.addEventListener('mouseleave', () => {
        nav.classList.remove('header__nav--active');
        btnBurger.classList.remove("header__btn-burger--active");
    })
}
