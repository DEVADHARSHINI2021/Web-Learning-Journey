const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg"
];

let currentIndex = 0;

const image = document.getElementById("image");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    image.src = images[currentIndex];

});

prev.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    image.src = images[currentIndex];

});