// MENU ICONE AND NEVIGATION SLIDE

const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    sidebar.classList.toggle("active");
   
    todo.addEventListener("click", () => {
        sidebar.classList.remove("active");
        menuIcon.classList.remove("active");
    });
});


// To-Do List Functionality
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
let i=0;
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
   
    if (taskText !== '' && i<3) {
        const li = document.createElement('li');
        li.textContent = taskText;
        i++;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => li.remove();

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }
});
