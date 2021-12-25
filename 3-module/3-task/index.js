function camelize(str) {
  // ваш код...
  let strArr = str.split("-");
  let newStr =  strArr.map(function(elem,index){
      if (index == 0) { 
          return elem;
        } else {
            return elem[0].toUpperCase() + elem.slice(1);
        }
    });
     return newStr.join("")
}
