const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const charNoSpace = document.getElementById("charNoSpace");

textInput.addEventListener("input", () => {

    const text = textInput.value;

    charCount.textContent = text.length;

    charNoSpace.textContent = text.replace(/\s/g, "").length;

    const words = text.trim();

    if(words === ""){
        wordCount.textContent = 0;
    }else{
        wordCount.textContent = words.split(/\s+/).length;
    }

});