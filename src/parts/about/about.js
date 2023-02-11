export default function about() {

    const item = document.querySelector(".slide-item")
    const items = document.querySelectorAll('.slide-item')
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

    // ====================================
  
    const photos = document.querySelectorAll('.photo-min')
    const bigImg = document.querySelector('.big-img')
    
    setBigPhoto();

    items.forEach((item, i) => {
        item.addEventListener('mouseenter', () => {
            photos[i].style.top = '-15px';
            setBigPhoto(i);
        })
        item.addEventListener('mouseleave', () => {

            photos[i].style.top = '0';
        })
    })

    function setBigPhoto(i = 0) {
            bigImg.src =`../img/user-${i}.jpg`;
    }


}
