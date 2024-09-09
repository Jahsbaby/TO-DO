// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo")
//  ADD EVENT LISTENERS

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
// create function that would createto do for  me
function addTodo(event) {
    //console.log("Hello Everyone");
    event.preventDefault(); // prevent form from submitting
    //create to do div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // create checkbox
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // append to list
    todoList.appendChild(todoDiv);

    // clear the todo input value

    todoInput.value = "";
}
    function deleteCheck(e) {
    const item = e.target;

    //Delete the todo button by clicking the trash btn
    if(item.classList[0] === 'trash-btn'){
    const todo = item.parentElement;
    //add animation
    todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }

        //checkmark area
        if(item.classList[0] === "complete-btn"){
            const todo = item.parentElement;
            todo.classList.toggle('completed');
        }
    }

function filterTodo(e) {
    const todos = todoList.children; // Change from childNodes to children
    Array.from(todos).forEach(function (todo) {
        switch(e.target.value) {
            case "all":

            todo.style.display =  "flex";
            break;
            case "completed":
            if(todo.classList.contains("completed")) {
                todo.style.display = "flex";
            }else {
                    todo.style.display = "none";
            }
            break;
            case "uncompleted":
            if(!todo.classList.contains("completed")) {
                todo.style.display = "flex";
            }else{
                todo.style.display = "none";
            }
            break;
            }
        })
    }