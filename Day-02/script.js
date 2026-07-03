const heading = document.getElementById("heading");
const cat = document.getElementById("cat");
const changeBtn = document.getElementById("changeBtn");
const colors = [
    "#e75c7c",  
    "#b277d4",  
    "#59abc9",
    "#52c281",
    "#efd958",
    "#da985f"
];
    let index = 0;
changeBtn.onclick = function(){
    
    cat.style.border = "5px solid" + colors[index];
    index = (index + 1) % colors.length;
}