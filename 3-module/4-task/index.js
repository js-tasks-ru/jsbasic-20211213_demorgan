function showSalary(users, age) {
  // ваш код...
  let showList = '';
    for (let i = 0; i < users.length; i++){
        let user = users[i];
        if(user.age <= age){
            showList +=  user.name + ", " + user.balance + "\n" ;
        }

    };
    
    return showList.slice(0,showList.length -1);
}
