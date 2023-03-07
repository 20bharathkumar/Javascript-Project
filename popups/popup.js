const nums = document.querySelector("#inc");
const btn = document.querySelector("#recnt");
const connect = document.querySelector(".connect")
const disconnect = document.querySelector(".main")
console.log(nums);
let count = 10;

let cantim;
btn.addEventListener("click", pop);
var clicked = true;
function pop(){
    if(!clicked){
        count = 0
        clicked = true;
        btn.innerHTML = "Disconnect";
        disconnect.style.display = "none"
        connect.style.display = "flex"
        clearInterval(cot)
        cantim = setInterval(can, 1000)
        function can(){
            if(count < 5){
                count ++
                console.log(count)
            }
            else{
                connect.style.display = "none"
            }
        }
    }
    else{
        clearInterval(cantim)
        count = 10;
        clicked = false;
        btn.innerHTML = "Reconnect";
        
        
        disconnect.style.display = "flex"
        connect.style.display = "none"

        cot = setInterval(decr, 1000)
        function decr(){
            if(count > 0){
                count --
                nums.innerHTML = count;
            }
            else{
                disconnect.style.display = "none"
            }
            // console.log(count);
        }

    }
}