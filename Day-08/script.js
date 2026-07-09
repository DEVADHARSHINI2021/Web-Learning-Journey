const passwordBox = document.getElementById("password");

const lengthSlider = document.getElementById("length");

const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");

const lowercase = document.getElementById("lowercase");

const numbers = document.getElementById("numbers");

const symbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");

const copyBtn = document.getElementById("copyBtn");


const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowerChars = "abcdefghijklmnopqrstuvwxyz";

const numberChars = "0123456789";

const symbolChars = "!@#$%^&*()_+-={}[]<>?/";


lengthSlider.addEventListener("input", function(){

    lengthValue.textContent = lengthSlider.value;

});


generateBtn.addEventListener("click", function(){

    let characters = "";

    if(uppercase.checked){
        characters += upperChars;
    }

    if(lowercase.checked){
        characters += lowerChars;
    }

    if(numbers.checked){
        characters += numberChars;
    }

    if(symbols.checked){
        characters += symbolChars;
    }

    if(characters === ""){
        alert("Select at least one option.");
        return;
    }

    let password = "";

    for(let i = 0; i < lengthSlider.value; i++){

        const randomIndex = Math.floor(
            Math.random() * characters.length
        );

        password += characters[randomIndex];

    }

    passwordBox.value = password;

});


copyBtn.addEventListener("click", function(){

    if(passwordBox.value === ""){
        alert("Generate a password first.");
        return;
    }

    navigator.clipboard.writeText(passwordBox.value);

    alert("Password copied!");

});