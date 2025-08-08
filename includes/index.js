// const emojis = ['🐥','🐯','🐼']

// console.log(emojis.includes("arun"))

const addItemBtn = document.getElementById("add-item-btn");
const itemInput = document.getElementById("item-input");
const list = document.getElementById("list");

const shoppingList = [];
// console.log(shoppingList.includes("water"))

addItemBtn.addEventListener("click", function () {

  if (itemInput.value){
    const inputValue=itemInput.value.toLowerCase()
     if (shoppingList.includes(inputValue)){
    list.innerHTML+=`<p>no duplicates</p>`
   }
   else{
    shoppingList.push(inputValue)
     render();
  itemInput.value = "";
   }
  }
  else{
     list.innerHTML+=`<p>type something in input
     </p>`
  }
  
 
});

function render() {
  let html = "";
  for (let item of shoppingList) {
    html += `<li class="list-item">${item}</li>`;
  }
  list.innerHTML = html;
}

render();
