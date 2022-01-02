function highlight(table) {
  // ваш код...
   let lastchildren = table.lastElementChild;
   for ( let i = 0; i < lastchildren.rows.length; i++){
    let Status = lastchildren.rows[i].cells[3].dataset.available;
  if(Status == "true"){
  lastchildren.rows[i].classList.add("available");
  } else if (Status == "false"){
    lastchildren.rows[i].classList.add("unavailable");
  } else {
    lastchildren.rows[i].hidden = true;
  } 
  let Age = lastchildren.rows[i].cells[1];
 if(+Age.textContent < 18 ){
//  Age.setAttribute('style', "text-decoration: line-through");
 lastchildren.rows[i].style = "text-decoration: line-through";
 }
  let Gender = lastchildren.rows[i].cells[2];
  if(Gender.textContent == "m") {
    lastchildren.rows[i].classList.add("male");
  } else if (Gender.textContent == "f"){
    lastchildren.rows[i].classList.add("female");
  }

  }

}
