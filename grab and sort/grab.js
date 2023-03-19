const items = document.querySelectorAll(".item");
const mainlist = document.querySelector(".grablist");

items.forEach(item =>{
    item.addEventListener("dragstart", () => {
        item.classList.add("dragging")
        setTimeout(()=>item.classList.add("dragging"),0)
    })
    item.addEventListener("dragend", ()=>item.classList.remove("dragging"))
})
const initSortList = (e)=>{
    e.preventDefault()
    const draggedItem = mainlist.querySelector(".dragging")
    const sibling = [...mainlist.querySelectorAll(".item:not(.dragging)")]
    let nextSibling = sibling.find(sibling=>{
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2 
    })
    mainlist.insertBefore(draggedItem, nextSibling)
}
mainlist.addEventListener("dragover", initSortList)
mainlist.addEventListener("dragenter", e=>e.preventDefault())