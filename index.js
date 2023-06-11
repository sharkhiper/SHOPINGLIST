// запитати юзера що додати
// шукаємо елемент з класом list
// створити елемент li 
// додати йому текст який ввів юзер
// прикріпити створений елемент li до списку 
function addListItem(){
    let newItemText = prompt("Що хочете додати?");
    let shoppingList = document.getElementById("list");
    console.log(shoppingList);
    let newElement = document.createElement("li");
    console.log(newElement);
    newElement.innerText = newItemText;
    newElement.onclick = deleteElement;
    shoppingList.appendChild(newElement);
    // shoppingList.removeChild(newElement);
}  
  function deleteElement() {
   let shoppingList = document.getElementById("list");
   shoppingList.removeChild(this)
  
}
 
// let user = {
//   n: "Vasya",
//   age: 33
// }
// let admin = {
//   n: "Petro",
//   age: 43
// }
// console.log(user, admin);

// function SayHi() {
//   alert("hello " +this.n)
//   console.log(this.n)
// }
// user.fun = SayHi;
// console.log(user);
// user.fun()
// admin.fun = SayHi;
// admin.fun();