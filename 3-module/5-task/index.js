function getMinMax(str) {
  // ваш код...
  let strSplit = str.split(" ");
  let arr = [];
  for ( let value of strSplit){
    if( isFinite(value)){
      arr.push(value);
    }
  }
  arr.sort(function(a,b){
    return a - b
  });
  let obj = {};
  obj.min = +arr[0];
  obj.max = +arr[arr.length - 1];
  return obj;
}
