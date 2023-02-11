export default function about() {

    const item = document.querySelector(".slide-item")
    const sliderLine = document.querySelector('.about__slaider-card-list') 
    const countElements = sliderLine.childElementCount;
    
    let offsetSize = item.getBoundingClientRect().width;
    let offset = 0;
    let sizeVewline = (countElements * offsetSize)-(offsetSize * 4);
    
    const btnPre = document.querySelector('.slide-btn-pre');
    const btnNext = document.querySelector('.slide-btn-next');

    

    btnNext.addEventListener('click', () => {
        offset -= offsetSize;

        if (offset < -sizeVewline) {
           offset = 0; 
        }
        sliderLine.style.left = `${offset}px`;
    })
    
    btnPre.addEventListener('click', () => {
        offset += offsetSize;
        if (offset > 0) {
            offset = -sizeVewline;
        }
        sliderLine.style.left = `${offset}px`;
    })
}
