import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const elementsFromGallery = createElementsFromGallery(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', elementsFromGallery);

console.log(createElementsFromGallery(galleryItems));

function createElementsFromGallery(obj) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <a class="gallery__item"
    href="${original}">
        <img class="gallery__image"
        src="${preview}" 
        data-source="${original}"
        alt="${description}" />
    </a>`})
    .join('')
};
const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, captionPosition: 'bottom' });
console.log(galleryItems);

