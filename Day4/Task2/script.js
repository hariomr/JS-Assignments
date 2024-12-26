let inputEle = document.querySelector("#add-todo");
let submitbtn = document.querySelector("#submit-btn");
let todoList = document.querySelector("#todo");

let todos = [];

function renderTodo() {
    todoList.innerHTML = ""; 
    if (todos.length > 0) {
        todos.forEach((todo, index) => {
            const todoItem = document.createElement("div");

            const checkBox = document.createElement("input");
            checkBox.type = "checkbox";

            const todoText = document.createTextNode(todo);

            const deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.onclick = () => deleteTodo(index);

            todoItem.appendChild(checkBox);
            todoItem.appendChild(todoText);
            todoItem.appendChild(deleteButton);

            todoList.appendChild(todoItem);
        });
    }
    inputEle.value = ""; // Clear the input field after rendering
}

function deleteTodo(index) {
    todos.splice(index, 1); // Remove the item from the array
    renderTodo(); // Re-render the list
}

function addTodo() {
    const todoText = inputEle.value.trim(); // Get the input value and trim whitespace
    if (todoText) {
        todos.push(todoText); // Add the new todo to the array
        renderTodo(); // Re-render the list
    }
}

submitbtn.addEventListener("click", addTodo);
