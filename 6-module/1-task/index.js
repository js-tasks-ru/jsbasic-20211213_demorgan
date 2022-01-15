/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.render(); 
  }
  render(){
    this.elem = document.createElement('table');
    this.elem.innerHTML = `
    <thead>
    <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
    </tr>
</thead>
<tbody></tbody>`
let tbody = this.elem.querySelector('tbody');
for ( let row of this.rows){
  let tr = document.createElement('tr');
    tbody.appendChild(tr);
  for (let elem in row){
    let td = document.createElement('td');
    tbody.lastElementChild.appendChild(td);
    tbody.lastElementChild.lastElementChild.textContent = row[elem];
  }
  let lastTd = document.createElement('td');
  tbody.lastElementChild.appendChild(lastTd);
  tbody.lastElementChild.lastElementChild.innerHTML = `<button>X</button>`

}
let buttons = this.elem.querySelectorAll('button');
for (let button of buttons){
  button.addEventListener('click', function(){this.parentElement.parentElement.remove()});
}
  }
  
}
