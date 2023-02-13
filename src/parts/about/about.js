export default function about() {
    const btnPre = document.querySelector(".slide-btn-pre");
    const btnNext = document.querySelector(".slide-btn-next");

    const slideLine = document.querySelector(".about__slaider-line");
    const slideItems = document.querySelectorAll(".about__slaider-line-item");
    const siideItemsCount = slideLine.childElementCount;

    const itemsMinPhoto = document.querySelectorAll(".item-min-photo");

    let offsetSize = slideItems[0].getBoundingClientRect().width;
    let offset = 0;
    let sizeVewline = siideItemsCount * offsetSize;

    btnNext.addEventListener("click", () => {
        offset -= offsetSize;
        console.log(offset);

        if (offset <= -sizeVewline) {
            offset = 0;
        }
        slideLine.style.left = `${offset}px`;
    });

    btnPre.addEventListener("click", () => {
        offset += offsetSize;
        console.log(offset);
        if (offset > 0) {
            offset = -(sizeVewline - offsetSize);
        }

        slideLine.style.left = `${offset}px`;
    });

    activeSlide();
    
    itemsMinPhoto.forEach((item, i) => {
        item.addEventListener('click', () => {
            console.log(i);
            activeSlide(i);
        })
    })

    function activeSlide(index = 0) {
        itemsMinPhoto.forEach((item) => {
            item.classList.remove('item-min-photo--active');
        })

        itemsMinPhoto[index].classList.add('item-min-photo--active');
        
        offset = -(offsetSize * index);
        slideLine.style.left = `${offset}px`;
    }
}
