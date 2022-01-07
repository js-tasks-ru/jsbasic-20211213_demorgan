function toggleText() {
  // ваш код...
  let buttom = document.getElementsByClassName("toggle-text-button");
  buttom[0].onclick = function(){
    text.hidden = !text.hidden; // text = id : "text"
  }
}
