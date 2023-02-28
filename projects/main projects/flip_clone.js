let flag = 0;

function indec(n){
    flag = flag + n;
    showSlide(flag);
}
showSlide(flag);
function showSlide(num){
    let slides = document.getElementsByClassName('slide')

    if(num == slides.length){
        num = 0;
        flag = 0;
    }
    if(num < 0){
        flag = slides.length-1;
        num = slides.length-1;
    }
    for(let y of slides){
        y.style.display = 'none'
    }
    slides[num].style.display = "block"
}