const images = [
  {
    src: "https://picsum.photos/id/1011/400/300",
    alt: "Imagen 1"
  },
  {
    src: "https://picsum.photos/id/1025/400/300",
    alt: "Imagen 2"
  },
  {
    src: "https://picsum.photos/id/1031/400/300",
    alt: "Imagen 3"
  },
  {
    src: "https://picsum.photos/id/1035/400/300",
    alt: "Imagen 4"
  },
  {
    src: "https://picsum.photos/id/1043/400/300",
    alt: "Imagen 5"
  },
  {
    src: "https://picsum.photos/id/1049/400/300",
    alt: "Imagen 6"
  }
];

const gallery = document.getElementById("gallery");

// Generar imágenes 
images.forEach(img => {
  const imageElement = document.createElement("img");
  imageElement.src = img.src;
  imageElement.alt = img.alt;
  imageElement.classList.add("gallery-img");
  gallery.appendChild(imageElement);
});

// Lightbox 
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

gallery.addEventListener("click", e => {
  if (e.target.tagName === "IMG") {
    lightbox.style.display = "flex";
    lightboxImg.src = e.target.src;
    lightboxImg.alt = e.target.alt;
  }
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
