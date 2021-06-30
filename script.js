
//Select Element
let form = document.querySelector('form');
let newTask = document.querySelector('#new-task');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

//Function Define

/*
*   Create Task
*     <li className="item">
*        <input type="checkbox"/><label>Task Name</label>
*     </li>
*
*/

//appendChild return value but not accept string as parameter while append accept

let createTask = function(task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

//After giving value in input field task will added in incomplete tasks

let addTask = function(event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";
}

form.addEventListener('submit', addTask);