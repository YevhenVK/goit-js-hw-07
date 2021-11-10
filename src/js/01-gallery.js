import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(createElementsFromGallery);

const galleryContainer = document.querySelector('.gallery');
const elementsFromGallery = createElementsFromGallery(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', elementsFromGallery)
galleryContainer.addEventListener('click', onGalleryContainerClick)

function createElementsFromGallery(obj) {
   return galleryItems.map(({ preview, original, description }) => {
       return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
   })
    .join('')
}

function onGalleryContainerClick(event) {
    event.preventDefault()
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    console.log(event.target);
}






// const modalBox = document.querySelector('div.gallery')
// galleryContainer.addEventListener('click', OnMainListClick)


// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()
