const input = document.getElementById("textInput");
const button = document.getElementById("checkBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {

    let text = input.value
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    let reversed = text.split("").reverse().join("");

    if (text === "") {
        result.textContent = "Please enter some text.";
    } else if (text === reversed) {
        result.textContent = "✅ It is a Palindrome!";
    } else {
        result.textContent = "❌ Not a Palindrome.";
    }

});