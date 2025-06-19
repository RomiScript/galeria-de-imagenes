const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const galleryImgs = document.querySelectorAll(".gallery img");


galleryImgs.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});


closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});