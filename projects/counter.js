
let value = 0;
function inc(){
    value++
    document.getElementById('disp').innerHTML= value
}
function rst(){
    value = 0
    document.getElementById('disp').innerHTML= value
}
function dec(){
    value--
    if(value < 0){
        value = 0
    }
    document.getElementById('disp').innerHTML= value
}