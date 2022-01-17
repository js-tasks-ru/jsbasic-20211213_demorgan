import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem;
    this.menuCategories();
    this.buttonMenu();
    this.clickMenu();
  }
  menuCategories(){
    this.elem = createElement(`
    <div class="ribbon">
    <!--Кнопка прокрутки влево-->
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    <nav class="ribbon__inner">
      </nav>
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `);
    let ribbonInner = this.elem.querySelector('.ribbon__inner');
  for(let elem of this.categories){
    ribbonInner.innerHTML += `
   <a href="#" class="ribbon__item" data-id="${elem.id}">${elem.name}</a>
   `
  }
  ribbonInner.firstElementChild.classList.add("ribbon__item_active");
}
buttonMenu(){
  let buttonRight = this.elem.querySelector(".ribbon__arrow_right");
  let buttonLeft = this.elem.querySelector(".ribbon__arrow_left");
  let ribbonInner = this.elem.querySelector('.ribbon__inner');
  ///console.log( buttonLeft, buttonRight);
  buttonLeft.classList.remove("ribbon__arrow_visible");
  buttonRight.onclick = function(){
    buttonLeft.classList.add("ribbon__arrow_visible");
    ribbonInner.scrollBy(350,0);
  }
  buttonLeft.onclick = function(){
    buttonRight.classList.add("ribbon__arrow_visible");
      ribbonInner.scrollBy(-350,0);
  }
  ribbonInner.onscroll = function(){
    let scrollWidth = ribbonInner.scrollWidth;
    let scrollLeft = ribbonInner.scrollLeft;
    let clientWidth = ribbonInner.clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;
    if(scrollRight < 1){
      buttonRight.classList.remove("ribbon__arrow_visible")
    }
    if(scrollLeft == 0){
      buttonLeft.classList.remove("ribbon__arrow_visible")
    }
  }
}
clickMenu(){
  let ribbonInner = this.elem.querySelector('.ribbon__inner');
  let arrLinks = ribbonInner.querySelectorAll(".ribbon__item");
  //console.log(arrLinks);
  let i = 0;
  for(let link of arrLinks){
    let category = this.categories[i];
    link.onclick = function(){
      event.preventDefault();
      for(let elem of arrLinks){
        elem.classList.remove("ribbon__item_active")
      }
      link.classList.add("ribbon__item_active");
      link.dispatchEvent(events);
      console.log(category.id);
    }
    let events = new CustomEvent('ribbon-select', { // имя события должно быть именно 'ribbon-select'
      detail: category.id, // уникальный идентификатора категории из её объекта
      bubbles: true // это событие всплывает - это понадобится в дальнейшем
    })
i++;
  }
}
}
