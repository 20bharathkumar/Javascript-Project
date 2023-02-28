let btn = document.querySelector("#change")

const container=document.querySelector(".container")
 
function change(){
    container.innerHTML=" "
    for(i = 0; i < 7; i++){
       let hex_codes = Math.random().toString(16).substring(2,8);
       let pallet=`#${hex_codes}`
       container.innerHTML+=`
            <div class="itm" onclick = "cpy(this)">
                <div class="clor" style="background-color:${pallet}"></div>
                <div class="code">${pallet}</div>
            </div>
       `
    }
      
}

btn.addEventListener("click",change)
function cpy(e){
    window.navigator.clipboard.writeText (e.childNodes[3].innerHTML)
}
