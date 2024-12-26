let inputEle = document.querySelector("#add-todo");
let submitbtn = document.querySelector("#submit-btn");
let todoList = document.querySelector("#todo");

// let todos = [];

// function renderTodo() {
//   todoList.innerHTML = "";
//   if (todos.length > 0) {
//     todos.forEach((todo, index) => {
//       const todoItem = document.createElement("div");

//       const checkBox = document.createElement("input");
//       checkBox.type = "checkbox";

//       const todoText = document.createTextNode(todo);

//       const deleteButton = document.createElement("button");
//       deleteButton.innerText = "Delete";
//       deleteButton.onclick = () => deleteTodo(index);

//       todoItem.appendChild(checkBox);
//       todoItem.appendChild(todoText);
//       todoItem.appendChild(deleteButton);

//       todoList.appendChild(todoItem);
//     });
//   }
//   inputEle.value = "";
// }

// function deleteTodo(index) {
//   todos.splice(index, 1);
//   renderTodo();
// }

function addTodo() {

  const todoList = document.getElementById("todo");
  const todoval = inputEle.value.trim();

  const todoItem = document.createElement("div");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  const todoText = document.createTextNode(todoval);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";


  const statusText = document.createElement("span");
  statusText.textContent = "Incomplete"; 
  checkBox.addEventListener("change", () => {
    statusText.textContent = checkBox.checked ? "Completed" : "Incomplete";
  });
  
  todoItem.appendChild(todoText);
  todoItem.appendChild(checkBox);
  todoItem.appendChild(statusText);
  todoItem.appendChild(deleteButton);

  todoList.appendChild(todoItem);

  inputEle.value = "";

  deleteButton.addEventListener("click",()=>{
    todoList.removeChild(todoItem);
  })
}

submitbtn.addEventListener("click", addTodo);
