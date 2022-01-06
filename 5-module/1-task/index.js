function hideSelf() {
  // ваш код...
 let button = document.getElementsByClassName('hide-self-button');
 //button[0].setAttribute('onclick','this.hidden=true');
 button[0].onclick = function(){
   this.hidden = true;
 }
}
