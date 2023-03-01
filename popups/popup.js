const nums = document.querySelector("#inc");
const btn = document.querySelector("#recnt");
const connect = document.querySelector(".connect")
const disconnect = document.querySelector(".main")
console.log(nums);
let count = 10;


btn.addEventListener("click", pop);
var clicked = true;
function pop(){
    if(!clicked){
        count = 10;
        clicked = true;
        document.getElementById("recnt").innerHTML = "Disconnect";
        disconnect.style.display = "none"
        connect.style.display = "flex"
        clearInterval(cot)
    }
    else{
        clicked = false;
        document.getElementById("recnt").innerHTML = "Reconnect";

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