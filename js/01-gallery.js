import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainerEl = document.querySelector(".gallery");
const galleryItemEl = createGalleryItem(galleryItems);

function createGalleryItem(pictures) {
  return pictures
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join("");
}

galleryContainerEl.insertAdjacentHTML("beforeend", galleryItemEl);

galleryContainerEl.addEventListener("click", onItemClick);

function onItemClick(event) {
  event.preventDefault();

  if (event.target.classList.value !== "gallery__image") {
    return;
  }

  const changeCurrentImgSrc = (event.target.src = event.target.dataset.source);

  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${changeCurrentImgSrc}">
	`
    )
    .show();
}
