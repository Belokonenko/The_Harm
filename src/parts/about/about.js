export default function about() {
    const btnPre = document.querySelector(".slide-btn-pre");
    const btnNext = document.querySelector(".slide-btn-next");

    const slideLine = document.querySelector(".about__slaider-line");
    const slideItems = document.querySelectorAll(".about__slaider-line-item");
    const siideItemsCount = slideLine.childElementCount;

    const itemsMinPhoto = document.querySelectorAll(".item-min-photo");

    let offsetSize = 0;
    let offset = 0;
    let countCard = 0;

    const viewPort = document.querySelector(".about__slaider-wrap");

    const setParam = () => {
        let arrItems = Array.from(slideItems);
        let numItems = arrItems.length;
        let widthViewPort = viewPort.getBoundingClientRect().width;
        
        slideLine.style.width = `${widthViewPort * numItems}px`;
        
        arrItems.forEach(item => {
            item.style.width = `${widthViewPort}px`;
        })

        offsetSize =  widthViewPort;
        
        slideLine.style.left = `-${offsetSize * countCard}px`;
    };

    setParam();
    
    window.addEventListener('resize', setParam);

    activeSlide();

    btnNext.addEventListener("click", () => {
        
        countCard++;

        if (countCard >= siideItemsCount) {
            countCard = 0;
        }

        activeSlide(countCard);

        slideLine.style.left = `-${offsetSize * countCard}px`;
    });

    btnPre.addEventListener("click", () => {
        countCard--;

        if (countCard < 0) {
            countCard = siideItemsCount - 1;
        }

        activeSlide(countCard);

        slideLine.style.left = `-${offsetSize * countCard}px`;
    });

    itemsMinPhoto.forEach((item, i) => {
        item.addEventListener("click", () => {
            activeSlide(i);
        });
    });

    function activeSlide(index = 0) {
        itemsMinPhoto.forEach((item) => {
            item.classList.remove("item-min-photo--active");
        });

        itemsMinPhoto[index].classList.add("item-min-photo--active");

        offset = -(offsetSize * index);
        slideLine.style.left = `${offset}px`;
    }
}
