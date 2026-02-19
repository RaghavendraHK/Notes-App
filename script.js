let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function addNote() {
    const input = document.getElementById("noteInput");
    if (!input.value.trim()) return;

    notes.push(input.value);
    input.value = "";
    saveNotes();
    renderNotes();
}

function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    renderNotes();
}

function renderNotes() {
    const notesDiv = document.getElementById("notes");
    notesDiv.innerHTML = "";

    notes.forEach((note, index) => {
        const div = document.createElement("div");
        div.className = "note";
        div.innerHTML = `
      <p>${note}</p>
      <button onclick="deleteNote(${index})">Delete</button>
    `;
        notesDiv.appendChild(div);
    });
}

function searchNotes() {
    const search = document.getElementById("search").value.toLowerCase();
    document.querySelectorAll(".note").forEach(note => {
        note.style.display = note.innerText.toLowerCase().includes(search)
            ? "block" : "none";
    });
}

renderNotes();
