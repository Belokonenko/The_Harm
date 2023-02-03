export default function header() {
    const link = document.querySelectorAll('.header__link');
    
    link.forEach((item, i) => {
        item.addEventListener('mouseover', () => {
            aktvateHover(i);
        })
    })

    function aktvateHover(index) {
        link.forEach(link => {
            link.classList.remove('hover');
        })
        link[index].classList.add('hover');
    }
}
