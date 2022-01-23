import createElement from '../../assets/lib/create-element.js';
export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = createElement(`
    <!--Корневой элемент слайдера-->
    <div class="slider">

      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb" style="left: ${(100 / (this.steps - 1)) * this.value}% ;">
        <span class="slider__value">${this.value}</span>
      </div>

      <!--Заполненная часть слайдера-->
      <div class="slider__progress" style="width: ${(100 / (this.steps - 1)) * this.value}%;"></div>

      <!--Шаги слайдера-->
      <div class="slider__steps">
      </div>
    </div>`);
    this.stepsSlider();
    this.stepsClick();
  }
  stepsSlider(){
    let step = this.elem.querySelector('.slider__steps')
    for (let i = 0; i < this.steps; i++){
      if (i === 0) {
        step.innerHTML += "<span class=\"slider__step-active\"></span>";

        continue;
      }

      step.innerHTML += "<span></span>";
    }
  }
  stepsClick(){
    let slider = this.elem;
    let stepValue = this.steps;

    slider.onclick = function(event){
      let sliderValue = slider.querySelectorAll(".slider__steps > span");
      for (let elem of sliderValue){
        elem.classList.remove("slider__step-active");
      }

      let left = event.clientX - slider.getBoundingClientRect().left;

      let leftRelative = left / slider.offsetWidth;
      let segments = stepValue - 1;

      console.log(segments);
      let approximateValue = leftRelative * segments;
      console.log(approximateValue);
      let value = Math.round(approximateValue);
      console.log(value);
      let valuePercents = value / segments * 100;
      console.log(valuePercents);
      slider.querySelector(".slider__thumb").style.left = `${valuePercents}%`
      console.log(sliderValue);
      sliderValue[value].classList.add("slider__step-active");
      slider.querySelector(".slider__value").textContent = `${value}`
      slider.querySelector(".slider__progress").style.width = `${valuePercents}%`
      this.value = value;
      console.log(this.value);
      let custom = new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
        detail: this.value, // значение 0, 1, 2, 3, 4
        bubbles: true // событие всплывает - это понадобится в дальнейшем
      })

      slider.dispatchEvent(custom);
    }
  }
}