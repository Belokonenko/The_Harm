export default function hover() {
    
    const link = document.querySelectorAll('.header__link');
    
    link.forEach((item, i) => {
        item.addEventListener('mouseover', () => {
            aktvateHover(i);
        })
        item.addEventListener('mouseout', () => {
            item.classList.remove('hover');
        })
    })

    function aktvateHover(index) {
        link.forEach(link => {
            link.classList.remove('hover');
        })
        
        link[index].classList.add('hover');
    }
}
