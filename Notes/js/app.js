//console.log("Working");

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', () => {
    let addTxt = document.getElementById("addTxt");

    let notes = localStorage.getItem("notes");
    let noteobj = [];

    if (notes != null)
        noteobj = JSON.parse(notes);

    noteobj.push(addTxt.value);


    localStorage.setItem("notes", JSON.stringify(noteobj));
    showNotes();

});

var showNotes = () => {
    let notes = localStorage.getItem("notes");
    let html = "";
    
    if (notes == null)
        noteobj = [];
    else
        noteobj = JSON.parse(notes);

    noteobj.forEach(function (element, index) {
   
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">

            <div class="card-body">
                <h5 class="card-title">Note ${index+1}</h5>
                <p class="card-text">${element} </p>
                <button href="#" class="btn btn-primary">Delete Note</button>
            </div>
            </div>

                `                
});
    let noteEle = document.getElementById('notes');
    if(notes.length != 0)
    noteEle.innerText = html;
        
}

