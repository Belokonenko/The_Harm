export default function search() {
    const btn = document.querySelector('.btn-search');
    const inputSearch = document.querySelector('.header__form');

    btn.addEventListener('click', () => {
        inputSearch.classList.toggle('search-active')
    })
    document.addEventListener('keydown', (e) => { 
        if (e.code == 'Escape')  {
            inputSearch.classList.remove('search-active')
        }
    })
}
