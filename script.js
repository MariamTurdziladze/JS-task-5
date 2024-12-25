const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList');
const input = document.getElementById('input');
const totalTaskss = document.getElementById('totalTasks');
const completedTaskss = document.getElementById('completedTasks');

let totalTasks = 0;
let completedTasks = 0;

addTaskBtn.addEventListener('click', function() {
    const taskText = input.value;
    if (taskText === "") return;

    totalTasks++;
    updateCounts();

    const newTask = document.createElement('li');
    newTask.innerText = taskText;

    const doneBtn = document.createElement('button');
    doneBtn.innerText = 'DONE'
    doneBtn.style.border = "2px solid white";
    doneBtn.style.backgroundColor = "blue";
    doneBtn.style.color = "white";


    doneBtn.addEventListener('click', function () {
        newTask.style.textDecoration = 'line-through';
        completedTasks++;
        updateCounts();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.style.border = "2px solid white";
    deleteBtn.style.backgroundColor = "blue";
    deleteBtn.style.color = "white";

    deleteBtn.addEventListener('click', function(){
        taskList.removeChild(newTask)
        totalTasks--;
        completedTasks--;
        updateCounts();
    });

    newTask.appendChild(doneBtn);
    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);
    input.value = '';
});

function updateCounts() {
    totalTaskss.textContent = `Total Tasks: ${totalTasks}`;
    completedTaskss.textContent = `Completed tasks: ${completedTasks}`;
}

updateCounts();