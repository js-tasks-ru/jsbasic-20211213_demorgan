import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem;
    this.caruselSlide();
    this.initCarousel();
    this.addFromCarusel();
    }
    caruselSlide(){
      this.elem = createElement(`
  <!--Корневой элемент карусели-->
  <div class="carousel">
    <!--Кнопки переключения-->
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>

    <div class="carousel__inner">
    </div>`); 
      for (let i = 0; i < this.slides.length; i++){
        this.elem.querySelector(".carousel__inner").innerHTML += `
           <div class="carousel__slide" data-id="${this.slides[i].id}">
             <img src="/assets/images/carousel/${this.slides[i].image}" class="carousel__img" alt="slide">
             <div class="carousel__caption">
               <span class="carousel__price">€${this.slides[i].price.toFixed(2)}</span>
               <div class="carousel__title">${this.slides[i].name}</div>
               <button type="button" class="carousel__button">
                 <img src="/assets/images/icons/plus-icon.svg" alt="icon">
               </button>
             </div>
           </div>
         `
    };
  }
    initCarousel(){
      let buttonRight = this.elem.querySelector('.carousel__arrow_right');
      let buttonLeft = this.elem.querySelector('.carousel__arrow_left');
      let karusel = this.elem.querySelector('.carousel__inner');
      let y;
      let slidesLength = this.slides.length - 1;
      let x = 0;
      buttonLeft.style.display = 'none';

      buttonRight.onclick = function(){
       y = karusel.offsetWidth;
        x -= y;
         karusel.style.transform = `translateX(${x}px)`;
          buttonLeft.style.display = '';
           if(x == -y * slidesLength){
            buttonRight.style.display = 'none';
        }
      }

      buttonLeft.onclick = function(){
        y = karusel.offsetWidth;
         x +=y;
          karusel.style.transform = `translateX(${x}px)`
           buttonRight.style.display = '';
            if(x == 0){
             buttonLeft.style.display = 'none';
        }
       }
     }

     addFromCarusel(){
      let buttonAll = this.elem.querySelectorAll(".carousel__button")
      let i = 0;
      //console.log(buttonAll);
      for (let button of buttonAll){
       let slide = this.slides[i];
        //console.log(slide);
        button.onclick = function(){
          button.dispatchEvent(event);
      }
      let event = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
       detail: slide.id, // Уникальный идентификатора товара из объекта слайда
        bubbles: true // это событие всплывает - это понадобится в дальнейшем
    });
           i++;
      }
     }
}
