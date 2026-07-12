const input = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesDiv = document.getElementById("notes");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

displayNotes();

addBtn.addEventListener("click", () => {

    const text = input.value.trim();

    if(text === ""){
        alert("Write something!");
        return;
    }

    notes.push(text);

    saveNotes();

    input.value="";

    displayNotes();

});

function displayNotes(){

    notesDiv.innerHTML="";

    notes.forEach((note,index)=>{

        const div=document.createElement("div");
        div.className="note";

        div.innerHTML=`
            <p>${note}</p>

            <button onclick="editNote(${index})">
            Edit
            </button>

            <button onclick="deleteNote(${index})">
            Delete
            </button>
        `;

        notesDiv.appendChild(div);

    });

}

function deleteNote(index){

    notes.splice(index,1);

    saveNotes();

    displayNotes();

}

function editNote(index){

    const newNote=prompt("Edit Note",notes[index]);

    if(newNote!==null){

        notes[index]=newNote;

        saveNotes();

        displayNotes();

    }

}

function saveNotes(){

    localStorage.setItem("notes",JSON.stringify(notes));

}