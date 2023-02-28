const inputVal = document.getElementById("disp");
let expression = ''

function numb(x){
    expression += x;
    inputVal.value = expression
}

function equl(){
    inputVal.value = eval(expression)
    expression = ''
}

function cancel(){
    expression = ''
    inputVal.value = expression;
}
