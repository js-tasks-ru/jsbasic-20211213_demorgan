function initCarousel() {
  // ваш код...
  let buttonRight = document.querySelector('.carousel__arrow_right');
  let buttonLeft = document.querySelector('.carousel__arrow_left');
  let karusel = document.querySelector('.carousel__inner');
  let y = document.querySelector('.carousel__inner').offsetWidth;
  let x = 0;
  buttonLeft.style.display = 'none';
  buttonRight.onclick = function(){
    x -= y;
    karusel.style.transform = `translateX(${x}px)`;
    buttonLeft.style.display = '';
    if(x == -y * 3){
      buttonRight.style.display = 'none';
    }
  }
  buttonLeft.onclick = function(){
    x +=y;
    karusel.style.transform = `translateX(${x}px)`
    buttonRight.style.display = '';
    if(x == 0){
      buttonLeft.style.display = 'none';
    }
   }
   console.log(y)
 }
