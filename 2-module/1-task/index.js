function sumSalary(salaries) {
  // ваш код...
  let sum = 0;
  for (let keys in salaries){
    if( typeof(salaries[keys])  == `number` && !isNaN(salaries[keys])  && salaries[keys] !== Infinity && salaries[keys] !== -Infinity){
      sum += salaries[keys];
    }
  }
  return (sum);
}
