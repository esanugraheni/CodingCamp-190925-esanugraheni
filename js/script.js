
let todos = [ ];

function addTodo() {
    console.log("Hello, World!");
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");

    console.log ("Todo:", todoInput.value);
    console.log("Date:", todoDate.value);
    if (ValidateInput(todoInput.value, todoDate.value)) {
        
        displayTodos();
            
        todoInput.value = "";
        todoDate.value = "";    
        }
    }

function displayTodos() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    todos.forEach ((todo, _) => {
        todoList.innerHTML += `-
            <li class="border border-gray-300 py-2">${todo.task} - <span 
            class="text-sm text-grey-500">${todo.date}</span></li>
        `;
    }   );  
}
    

function deleteTodo() {
    todoList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});

}

function filterTodo() {
    filterInput.addEventListener("input", function () {
  const filterText = filterInput.value.toLowerCase();
  const items = todoList.getElementsByTagName("li");

  Array.from(items).forEach(function (item) {
    const title = item.textContent.toLowerCase();
    item.style.display = title.includes(filterText) ? "flex" : "none";
  });
});

}

function ValidateInput(todo, date) {
    if (todo === "" || date === "") {
        alert("Please fill in both fields.");
        return false;
    }
    return true;
}