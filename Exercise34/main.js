function AddItem() {
   let mylist =document.querySelector('#myList');
   let newItem = document.createElement('li');
   newItem.textContent = 'New Item';
   mylist.appendChild(newItem);
}
function RemoveItem() {
   let mylist =document.querySelector('#myList');
   if (mylist.lastChild){
     mylist.removeChild(mylist.lastChild);
   }
}