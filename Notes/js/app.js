//console.log("Working");

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', () => {
    let addTxt = document.getElementById("addTxt");

    let notes = localStorage.getItem("notes");
    let noteobj =[];

    if (notes != null)
        noteobj = JSON.parse(notes);

    noteobj.push(addTxt.value);
   
    
    localStorage.setItem("notes",JSON.stringify(noteobj));  

});

