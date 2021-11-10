import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(createElementsFromGallery);

const galleryContainer = document.querySelector('.gallery');
const elementsFromGallery = createElementsFromGallery(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', elementsFromGallery);
// const onParentImageCard = document.querySelector('div.gallery')
galleryContainer.addEventListener('click', onGalleryContainerClick);

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
    const isGalleryImageEl = event.target.classList.contains('gallery__image');
    
    if (!isGalleryImageEl) {
        return;
    }

    const galleryImageEl = event.target;
    const onParentImageCard = galleryImageEl.closest('.gallery__link');
    
    removeActiveImageClass();
    addActiveImageClass(onParentImageCard);
    
    console.log(galleryImageEl.src);
}

function removeActiveImageClass() {
    const currentActiveImage = document.querySelector('.gallery__link.is-open');
    
    if (currentActiveImage) {
        currentActiveImage.classList.remove('is-open');
    };
}

function addActiveImageClass(card) {
    card.classList.add('is-open');
};