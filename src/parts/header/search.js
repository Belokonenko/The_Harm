export default function search() {
    const btn = document.querySelector('.btn-search');
    const formSearch = document.querySelector('.header__form');
    const inputSearch  = document.querySelector('.input-search'); 
    btn.addEventListener('click', () => {
        formSearch.classList.toggle('search-active')
        inputSearch.value = '';
        
    })
    
    document.addEventListener('keydown', (e) => { 
        if (e.code == 'Escape')  {
            inputSearch.classList.remove('search-active')
        }
    })
}
