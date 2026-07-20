const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const colorPicker = document.getElementById("colorPicker");
const brushSize = document.getElementById("brushSize");
const clearBtn = document.getElementById("clearBtn");

let drawing = false;

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);
canvas.addEventListener("mousemove", draw);

function startDrawing(e){
    drawing = true;
    draw(e);
}

function stopDrawing(){
    drawing = false;
    ctx.beginPath();
}

function draw(e){

    if(!drawing) return;

    const rect = canvas.getBoundingClientRect();

    ctx.lineWidth = brushSize.value;
    ctx.lineCap = "round";
    ctx.strokeStyle = colorPicker.value;

    ctx.lineTo(
        e.clientX - rect.left,
        e.clientY - rect.top
    );

    ctx.stroke();

    ctx.beginPath();

    ctx.moveTo(
        e.clientX - rect.left,
        e.clientY - rect.top
    );
}

clearBtn.addEventListener("click", () => {

    ctx.clearRect(0,0,canvas.width,canvas.height);

});