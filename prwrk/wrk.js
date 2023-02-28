const plt = document.getElementById("stm1")
const dvfrt1 = document.getElementById("stm2")
const conclu = document.getElementById("stm3")


function plot(){
    dvfrt1.style.display = "none"
    conclu.style.display = "none"
    plt.style.display = "block"
}
function dvfrt(){
    plt.style.display = "none"
    conclu.style.display = "none"
    dvfrt1.style.display = "block"
}
function con(){
    plt.style.display = "none"
    dvfrt1.style.display = "none"
    conclu.style.display = "block"
}
