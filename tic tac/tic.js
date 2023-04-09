const button_x = document.querySelector("#x"),
button_o = document.querySelector("#o"),
play_btn = document.querySelector(".ply"),
playground = document.querySelector(".playground"),
x_turn = document.querySelector(".x_turn"),
o_turn = document.querySelector(".o_turn"),
allboxes = document.querySelectorAll(".item"),
buttons = document.querySelectorAll(".btn")

let squares = Array(9).fill(null)
console.log(squares);
let select = false
let selected_x = false
// let selected_o = false
button_x.addEventListener("click", select_x)
function select_x (){
    select = true
    selected_x = true
    button_x.classList.add("mark")
    button_o.classList.remove("mark")
    x_turn.classList.add("mark")
    o_turn.classList.remove("mark")
}

button_o.addEventListener("click",()=>{
    select = true
    button_o.classList.add("mark")
    button_x.classList.remove("mark")
    o_turn.classList.add("mark")
    x_turn.classList.remove("mark")
})

play_btn.addEventListener("click", ()=>{
    if(select == true){
        playground.classList.add("ground")
    }
    else{
        alert("Please select X or O")
    }
    
})

count = 0       
allboxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        // val = box.index
        if(box.innerHTML == ""){
            
            count++
            if(selected_x == true){
                if(count % 2 == 0){
                    o_turn.classList.remove("mark")
                    x_turn.classList.add("mark")
                    box.innerHTML = `<i class="fa-solid fa-o">`
                    squares[index] = "O"
                    console.log(squares);
    
                }
                else{
                    x_turn.classList.remove("mark")
                    o_turn.classList.add("mark")
                    box.innerHTML = `<i class="fa-solid fa-xmark">`
                    squares[index] = "X"
                    console.log(squares);
                }
                
            }
            else{
                if(count % 2 != 0){
                    o_turn.classList.remove("mark")
                    x_turn.classList.add("mark")
                    box.innerHTML = `<i class="fa-solid fa-o">`
                    squares[index] = "O"
                    console.log(squares);
    
                }
                else{
                    x_turn.classList.remove("mark")
                    o_turn.classList.add("mark")
                    box.innerHTML = `<i class="fa-solid fa-xmark">`
                    squares[index] = "X"
                    console.log(squares);
    
                }
            }
            if(checker()){
                setTimeout(()=>{
                    if(!alert(`The winner: ${winner}
Press ok to play Again`)){window.location.reload()}
                    // console.log(winner);
                }, 200);
            }
        }
    })

})
let winner = ""
function checker(){
    let checkit = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]

    for(i=0; i<checkit.length;i++){
        let [a,b,c] = checkit[i]
        if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
            winner = squares[b]
            return true
        }
    }
    return false
}