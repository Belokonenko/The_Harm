export default function services() {
    const btns = document.querySelectorAll('.item-btn');
    const cards = document.querySelectorAll('.card');
    
    activeTab();

    btns.forEach((item, i) => {
        item.addEventListener('click', () => {
            activeTab(i);
        })
    })

    function activeTab(index = 0) {
        btns.forEach(item => {
            item.classList.remove('item-btn--active');
        })
        
        cards.forEach(item => {
            item.classList.remove('card--active');
        })
        
        btns[index].classList.add('item-btn--active');
        cards[index].classList.add('card--active');
    }
}
