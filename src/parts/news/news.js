export default function news() {
    const items = document.querySelectorAll('.news-item');
    const dateBlock = document.querySelectorAll('.news-date-block');

    items.forEach((item, i) => {
        item.addEventListener('mouseover', () => {
            dateBlock[i].classList.add('news-date-block--hover')
        })

        item.addEventListener('mouseout', () => {
            dateBlock[i].classList.remove('news-date-block--hover')
        })
        
    })

    
}
