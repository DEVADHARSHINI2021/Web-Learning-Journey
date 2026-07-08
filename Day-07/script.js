const quotes = [

    "Believe in yourself.",

    "Dream big and dare to fail.",

    "Success comes from consistency.",

    "Never stop learning.",

    "Small progress is still progress.",

    "Hard work beats talent.",

    "Stay positive and keep moving.",

    "Every expert was once a beginner."

];

const quote = document.getElementById("quote");

const btn = document.getElementById("btn");

btn.addEventListener("click", function(){

    const randomIndex = Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[randomIndex];

});