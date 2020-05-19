//selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filter = document.querySelector('.filter-todo');


//event listeners
document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filter.addEventListener('click', filterTodo);

//function

function addTodo(e) {
  e.preventDefault();
  //div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo')

  //li
  const newTodo = document.createElement('li')
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item')
  todoDiv.appendChild(newTodo)

  //add to local
  saveLocal(todoInput.value)

  //check button
  const completeBtn = document.createElement('button')
  completeBtn.innerHTML = '<i class="fas fa-check"></i>'
  completeBtn.classList.add('complete-btn')
  todoDiv.appendChild(completeBtn)

  //delete button
  const trashBtn = document.createElement('button')
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
  trashBtn.classList.add('trash-btn')
  todoDiv.appendChild(trashBtn)

  //append to list
  todoList.appendChild(todoDiv);

  //clear todo-todoInput
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  //delete btn function
  if(item.classList[0] === 'trash-btn'){
    const currentList = item.parentElement;
    currentList.classList.add('fall');
    removeLocal(e);
    currentList.addEventListener('transitionend', function() {
      currentList.remove();
    })
  }

  if(item.classList[0] === 'complete-btn'){
    const currentList = item.parentElement;
    currentList.classList.toggle('completed');
  }
}

function filterTodo(e) {
  e.preventDefault();
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value) {
      case "all":
      todo.style.display = "flex";
      break;

      case "completed":
      if(todo.classList.contains('completed')){
        todo.style.display = 'flex';
      } else {
        todo.style.display = "none";
      }
      break;

      case "uncompleted":
      if(!todo.classList.contains('completed')){
        todo.style.display = 'flex';
      } else {
        todo.style.display = 'none';
      }
      break;
    }
  });
}

function saveLocal(todo) {
   let todos;

   //if no item on todos
   if (localStorage.getItem('todos') === null) {
     todos = [];
   } else {
     //convert to string
     todos = JSON.parse(localStorage.getItem('todos'));
   }
   todos.push(todo); //push to todos array
   localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos(){
  let todos;
  //if no item on todos
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    //convert to string
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todo) {
    //div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')

    //li
    const newTodo = document.createElement('li')
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    //check button
    const completeBtn = document.createElement('button')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    completeBtn.classList.add('complete-btn')
    todoDiv.appendChild(completeBtn)

    //delete button
    const trashBtn = document.createElement('button')
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
    trashBtn.classList.add('trash-btn')
    todoDiv.appendChild(trashBtn)

    //append to list
    todoList.appendChild(todoDiv);
  });

}

function removeLocal(todo) {
  let todos;
  //if no item on todos
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    //convert to string
    todos = JSON.parse(localStorage.getItem('todos'));
  }

const todoIndex = todo.path[1].innerText; //get the ttext of the //todos
todos.splice(todos.indexOf(todoIndex), 1);
localStorage.setItem('todos', JSON.stringify(todos))

}
