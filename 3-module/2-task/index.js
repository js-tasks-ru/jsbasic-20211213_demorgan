function filterRange(arr, a, b) {
  // ваш код...
  //     let filterArray = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] >= a && arr[i] <= b){
//           filterArray.push(arr[i]);
//         }
//     }
//     return filterArray;
// }
return arr.filter( function(element){
  return (element >= a && element <= b);
});
}
