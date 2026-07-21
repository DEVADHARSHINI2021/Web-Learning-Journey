function drag(event){
event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event){
event.preventDefault();
}

function drop(event){

event.preventDefault();

const id = event.dataTransfer.getData("text");

const task = document.getElementById(id);

event.currentTarget.appendChild(task);

}