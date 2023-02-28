
// const body = document.querySelector('body')
// const colr = ['black', 'white', 'yellow', 'green', 'blue', 'orange', 'red', 'aqua']
// const a = document.getElementById('clk')
// a.addEventListener('click', Selsct)
// function Selsct(){
//    console.log('clor')
//    let a = colr.length
//    const change = Math.floor(Math.random()*a)
//    console.log(change)
//    body.style.backgroundColor = colr[change]
// }
const inter = setInterval(increase, 1000)
let a = 0
function increase(){
   a++
   if(a == 10){
      clearInterval(inter)
   }
   console.log(a)
}