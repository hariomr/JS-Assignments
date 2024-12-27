let inputEle = document.querySelector("#add-todo");
let submitbtn = document.querySelector("#submit-btn");
let todoList = document.querySelector("#todo");


document.addEventListener("DOMContentLoaded", loadItems);
function addTodo() {
  const todoText = inputEle.value.trim();

  const todos = document.createElement("div");

  const todoitem = document.createTextNode(todoText);

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

  todos.appendChild(checkBox);
  todos.appendChild(todoitem);
  todos.appendChild(deleteButton);

  todoList.appendChild(todos);

  deleteButton.addEventListener("click", () => {
    todoList.removeChild(todos);
    // removeTodoFromStorage(todoText);
  });

  save(todoText);
  inputEle.value = "";
}


function removeTodoFromStorage(todoText){
    let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

    const updated = savedTodos.filter(todo=> todo!==todoText);
    localStorage.setItem("todos", JSON.stringify(updated));
}

function save(todoText) {
  let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  savedTodos.push(todoText);
  localStorage.setItem("todos", JSON.stringify(savedTodos));
}

function loadItems() {
  let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

  savedTodos.forEach((todoText) => {
    const todos = document.createElement("div");

    const todoitem = document.createTextNode(todoText);

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    todos.appendChild(checkBox);
    todos.appendChild(todoitem);
    todos.appendChild(deleteButton);

    todoList.appendChild(todos);

    deleteButton.addEventListener("click", () => {
      todoList.removeChild(todos);
      removeTodoFromStorage(todoText);
    });
  });
}
submitbtn.addEventListener("click", addTodo);
