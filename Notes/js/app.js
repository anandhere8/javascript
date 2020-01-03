//console.log("Working");

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click',()=>{
let addTxt = document.getElementById("addTxt");
let notes = localStorage.getItem("notes");
if(notes == null)
{
    noteobj = [];
}
else{
        noteobj= JSON.parse(notes);
}

noteobj.push(addTxt.value);
console.log(noteobj);
});

