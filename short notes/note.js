const newitm = document.querySelector(".adder"),
wrap = document.querySelector(".wrapper"),
adder = document.querySelector(".pop"),
remover = document.querySelector("#remover"),
addbtn = document.querySelector(".add"),
inpt = document.querySelector("#inpt"),
textarea = document.querySelector("#tex"),
delet = document.querySelector(".del"),
edit = document.querySelector('.edit'),
headtail = document.querySelector('header p')

const months = ["Jan", "Feb", "Mar", "Aprl", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
const note = JSON.parse(localStorage.getItem("notes")||"[]")
Shownotes()
let isUpdate = false, UpdateId;
newitm.addEventListener("click", ()=>{
    adder.classList.add("show");
    inpt.focus()
    inpt.value = ""
    textarea.value = ""
    addbtn.innerHTML = "Add Note"
    headtail.innerHTML = "Add a New Note"
})


remover.addEventListener("click",()=>{
    adder.classList.remove("show");
})


function Shownotes(){
    document.querySelectorAll(".nots").forEach(nots => nots.remove())
    note.forEach((not, index) => {
        console.log(not);
        let tags = 
        `
        <li class="nots">
            <div class="title">
                <p class="title">${not.title}</p>
                <span>${not.Desc}</span>
            </div>
            <div class="tim">
                <span>${not.date}</span>
                <div class="minz">
                    <i class="fa-solid fa-ellipsis"></i>
                    <ul class="menu">
                        <li onclick = "editnote(${index},'${not.title}','${not.Desc}')"><i class="fa-solid fa-pen"></i>Edit</li>
                        <li onclick = "deltnote(${index})"><i class="fa-solid fa-trash-can"></i>Delete</li>
                    </ul>
                </div>
            </div>
        </li>
        `
        newitm.insertAdjacentHTML("afterend", tags)
    });
}

function deltnote(noteId){
    note.splice(noteId, 1)
    localStorage.setItem("notes", JSON.stringify(note))
    Shownotes();
}

function editnote(editnoteId, title, Desc){
    isUpdate = true
    UpdateId = editnoteId
    newitm.click()
    inpt.focus()
    addbtn.innerHTML = "Update Note"
    headtail.innerHTML = "Update a Note"
    inpt.value = title
    textarea.value = Desc
}

addbtn.addEventListener("click", e=>{
    e.preventDefault()
    let noteTitle = inpt.value,
    noteDesc = textarea.value
    // adder.classList.remove("show")

    if(noteTitle || noteDesc){
        let dateObj = new Date(),
        month = months[dateObj.getMonth()],
        day = dateObj.getDate(),
        year = dateObj.getFullYear()

        let noteInfo = {
            title: noteTitle, Desc: noteDesc,
            date: `${month} ${day}, ${year}`
        }

        if(!isUpdate){
            note.push(noteInfo)
        }
        else{
            note[UpdateId] = noteInfo
        }
        localStorage.setItem("notes", JSON.stringify(note))
        remover.click()
        Shownotes()
    }
})