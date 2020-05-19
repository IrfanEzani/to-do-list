//selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//event listener
todoButton.addEventListener('click', addTodo);

//function

function addTodo(e) {
  e.preventDefault();
  //div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo')
  //li
  const newTodo = document.createElement('li')
  newTodo.innerText = 'je'
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
  trashBtn.classList.add('complete-btn')
  todoDiv.appendChild(trashBtn)

  //append to list
  todoList.appendChild(todoDiv)
}
