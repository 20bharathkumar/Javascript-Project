let flag = 0;
function ctr(x){
  flag = flag + x;
  slider(flag);
}
slider(flag);
function slider(num){
  let slides = document.getElementsByClassName('slide')
  // console.log(slides)
  if(num == slides.length){
    flag = 0
    num = 0
  }
  if(num < 0){
    flag = slides.length-1
    num = slides.length-1
  }
  for(let y of slides){
    y.style.display="none"
  }
  slides[num].style.display="block"
}

