let inpt = document.getElementById("inpt");
const pencil = document.getElementById("pencil");
let incert = document.getElementById("items");
// let count = 0;
inpt.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        additem();
        
    }
})
function additem(){
    
    let new1 = document.createElement("h2")
    new1.innerHTML = "- " + inpt.value;

    new1.addEventListener("click", function(){
        // count++
        new1.style.textDecoration = "line-through";
    })
    incert.insertAdjacentElement("beforeend", new1)
    inpt.value = ""
}

pencil.addEventListener("click", function(){
    incert.innerHTML = ''
})