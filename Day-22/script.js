const box = document.getElementById("colorBox");
const text = document.getElementById("colorCode");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    const randomColor =
        "#" +
        Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    box.style.backgroundColor = randomColor;
    text.textContent = randomColor;

});