const lists = document.querySelector(".mainlist");
const btns = document.querySelectorAll(".btns .btn");

const allsymbol = {
    time: 5000,
    success:{
        icon: 'fa-circle-check',
        text: 'Success: This is success',
        clas: "column",
        clor: "green"
    },
    Warning:{
        icon: 'fa-triangle-exclamation',
        text: 'warning: This is warning',
        clas: 'column1',
        clor: 'yellow'
    },
    Error:{
        icon:'fa-circle-xmark',
        text: 'Error: This is error',
        clas: 'column2',
        clor: 'rgb(178, 43, 43)'
    },
    Info:{
        icon: 'fa-circle-info',
        text: 'info: This is info',
        clas: 'column3',
        clor: 'rgb(28, 126, 183)'
    }
}
const removeTost = (tost)=>{
    tost.classList.add("hide");
    setTimeout(()=>tost.remove(), 50);
    console.log("hii");
}

const create = (id)=>{
    const {icon, text, clas, clor} = allsymbol[id];
    const tost = document.createElement("li")
    tost.className = `tost${id}`
    tost.innerHTML = 
    `
        <div class="${clas}">
            <i class="fa-solid ${icon}" color = "${clor}"></i>
            <span>${text}</span>
        </div>
        <i id = "x" class="fa-solid fa-xmark" onclick = "removeTost(this.parentElement)"></i>
    `
    lists.appendChild(tost)
    setTimeout(()=>removeTost(tost), allsymbol.time)
}
btns.forEach(btn => {
    btn.addEventListener("click", ()=>create(btn.id))
});