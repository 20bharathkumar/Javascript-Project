const bar = document.querySelector(".elements"),
active = document.querySelectorAll(".tab"),
arrows = document.querySelectorAll(".icon i")


const handler = ()=>{
    let Scrolval = Math.round(bar.scrollLeft);
    let maxscrol = bar.scrollWidth - bar.clientWidth
    arrows[0].parentElement.style.display = Scrolval > 0?"flex":"none";
    arrows[1].parentElement.style.display = maxscrol > Scrolval ? "flex":"none"
}

active.forEach(tab =>{
    tab.addEventListener("click",()=>{
        bar.querySelector(".active").classList.remove("active");
        tab.classList.add("active")
    })
})
count = 0;
arrows.forEach(icon=>{
    icon.addEventListener("click", ()=>{
        console.log(icon.id);
        bar.scrollLeft += icon.id === "left" ? -350 : 350;
        setTimeout(()=>handler(),50)
    })
})

let isDrag = false;
const dragging = (e)=>{
    if(!isDrag) return;
    bar.classList.add("dragging")
    bar.scrollLeft -= e.movementX
    handler();
}

const dragstop = ()=>{
    isDrag = false
    bar.classList.remove("dragging")
    // handler();
}
bar.addEventListener("mousedown", ()=> isDrag = true)
bar.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragstop)