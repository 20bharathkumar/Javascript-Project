let counter = 0;

let running=false
function start(){
    function loppp(){
        running=true
        counter++
        document.getElementById("cunt").innerHTML = counter
    }
    if(!running){
        cost = setInterval(loppp, 1000)
    }
}
// setInterval(start, 1000)
function stop(){
    clearInterval(cost)
    running=false
    
}

