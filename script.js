const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList');
const input = document.getElementById('input');

addTaskBtn.addEventListener('click', function() {
    const taskText = input.value;
    if (taskText === "") return;

    const newTask = document.createElement('li');
    newTask.innerText = taskText;

    const doneBtn = document.createElement('button');
    doneBtn.innerText = 'DONE' // box with check
    doneBtn.style.border = "2px solid white";
    doneBtn.style.backgroundColor = "purple";
    doneBtn.style.color = "white";
    doneBtn.style.padding = "5px";


    doneBtn.addEventListener('click', function () {
        newTask.style.textDecoration = 'line-through';
    });

    const deleteBtn = document.createElement(`button`);
    deleteBtn.innerText = 'Delete';
    deleteBtn.style.border = "2px solid white";
    deleteBtn.style.backgroundColor = "purple";
    deleteBtn.style.color = "white";
    deleteBtn.style.padding = "5px";

    deleteBtn.addEventListener(`click`, function(){
        taskList.removeChild(newTask)
    });

    newTask.appendChild(doneBtn);
    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);
    input.value = '';
});

localStorage.setItem()