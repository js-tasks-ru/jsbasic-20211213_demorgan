import createElement from '../../assets/lib/create-element.js';
export default class Modal {
  constructor() {
    this.elem = createElement(`
    <div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>
    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>
        <h3 class="modal__title">
          Вот сюда нужно добавлять заголовок
        </h3>
      </div>
      <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
      </div>
    </div>
  </div>
    `)
    this.buttonClose();
    this.eskButtonClose();
  }
  open(){
    document.body.append(this.elem);
    document.body.classList.add("is-modal-open");
  }
  setTitle(title){
    this.elem.querySelector(".modal__title").textContent = title;
  }
  setBody(node){
    let body = this.elem.querySelector(".modal__body");
    body.innerHTML = '';
    body.append(node);
  }
  close(){
    document.body.classList.remove("is-modal-open");
    let modal = document.querySelector(".modal");
    if (modal) {
      modal.remove();
    }
  }
  buttonClose(){
   let button = this.elem.querySelector(".modal__close");
   button.onclick = function(){
    document.body.classList.remove("is-modal-open");
    document.querySelector(".modal").remove();
   }
  }
  eskButtonClose(){
    document.body.onkeydown = function(event){
      if (event.code === "Escape"){
        document.body.classList.remove("is-modal-open");
        document.querySelector(".modal").remove();
        document.onkeydown = null;
      }
     }
  }
}
