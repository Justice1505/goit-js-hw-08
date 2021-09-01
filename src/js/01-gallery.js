// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const imagesLibrary = {
  itemsList: document.querySelector('.gallery'),
};

function makeGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a> `;
    })
    .join('');
}

imagesLibrary.itemsList.innerHTML = makeGalleryItems(galleryItems);

new SimpleLightbox('.gallery a', {
  showCounter: false,
  disableScroll: false,
  captionsData: 'alt',
  captionDelay: 250,
  loop: true,
});

// console.log(gallery);

// imagesLibrary.itemsList.addEventListener('click', onImgClick);

// function onImgClick(e) {
//   e.preventDefault();

//   gallery.open('.gallery');
// }
