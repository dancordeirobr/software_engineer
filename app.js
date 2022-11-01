const form = document.querySelector('#addToDo');
const input = document.querySelector('#task');
const todoList = document.querySelector('#myToDoList');

// retrieve from localStorage
// const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
// for (let i = 0; i < savedTodos.length; i++) {
//   let newTask = document.createElement("li");
//   newTask.innerText = savedTodos[i].task;
//   newTask.isCompleted = savedTodos[i].isCompleted ? true : false;
//   if (newTask.isCompleted) {
//     newTask.style.textDecoration = "line-through";
//   }
//   todoList.appendChild(newTask);
// }

//Add new task and button when clicking on the 'submit' button
form.addEventListener('submit', function(e){
    e.preventDefault();
    const newTask = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Delete Task'
    newTask.innerText = input.value + " ";
    // newTodo.isCompleted = false;
    newTask.appendChild(removeBtn);
    todoList.appendChild(newTask);
    input.value = '';
})

//Deleting task or cross task as done
todoList.addEventListener('click', function(e){
    if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
    else if (e.target.tagName === 'LI'){
        e.target.classList.toggle('crossText');
    }
})