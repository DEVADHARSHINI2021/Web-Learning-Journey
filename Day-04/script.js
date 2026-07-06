const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    console.log("Name:", name);

    console.log("Email:", email);

    console.log("Age:", age);

    alert("Registration Successful!");

});