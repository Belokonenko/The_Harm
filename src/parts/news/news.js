export default function news() {
    const items = document.querySelectorAll('.news-item');
    const dateBlock = document.querySelectorAll('.news-date-block');
    const titles = document.querySelectorAll('.title-news')
    items.forEach((item, i) => {
        item.addEventListener('mouseover', () => {
            dateBlock[i].classList.add('news-date-block--hover')
            titles[i].style.color = '#18CFAB';
        })

        item.addEventListener('mouseout', () => {
            dateBlock[i].classList.remove('news-date-block--hover')
            titles[i].style.color = '#717171';
        })
        
    })

    
}
