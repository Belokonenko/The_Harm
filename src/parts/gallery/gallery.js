export default function gallery() {
    const galleryImages = document.querySelector('.gallery__images');
    const bntLoadPhoto  = document.querySelector('.gallery__btn-load-photo');
    addGalleryPhotos();
 
    bntLoadPhoto.addEventListener('click', () => {
        addGalleryPhotos();
    });
    
    function addGalleryPhotos() {
        for (let index = 0; index < 8; index++) {
            const item = document.createElement('li')
            item.innerHTML =`
            <li class="item"><img src="./img/gallery-${index}.jpg" alt=""></li>
        `;
            galleryImages.append(item);
        }    
    }
}
