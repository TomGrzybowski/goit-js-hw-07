import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

console.log(galleryItems);

//Create galery by inserting images and links
galleryItems.forEach((el) => {
  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = el.original;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = el.preview;
  img.alt = el.description;
  img.dataset.source = el.original;

  link.insertAdjacentElement("beforeend", img);
  gallery.insertAdjacentElement("beforeend", link);
});

gallery.addEventListener("click", maximize);
//Handling clicking on picture
function maximize(e) {
  const targetClasses = e.target.classList;
  if (targetClasses.contains("gallery__image")) {
    e.preventDefault();
    const source = e.target.dataset.source;

    basicLightbox
      .create(
        `
          <img width="1400" height="900" src="${source}">
      `
      )
      .show();
  }
}
