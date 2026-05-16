const API_URL = 'http://localhost:8080/tasks';

window.onload = loadTasks;

document.getElementById('addBtn').addEventListener('click', createTask);

// getting all tasks from api
function loadTasks() {
    fetch(API_URL)
        .then(res => res.json())
        .then(tasks => {
            const list = document.getElementById('taskList');
            list.innerHTML = '';
            tasks.forEach(task => {
                list.innerHTML += `
                    <li class="task-item">
                        <div class="task-info">
                            <h3>${task.title}</h3>
                            <p>${task.description || ''}</p>
                            <span>${task.completed ? ' Done' : ' Pending'}</span>
                        </div>
                        <div class="task-actions">
                            <button onclick="deleteTask(${task.id})">Delete</button>
                        </div>
                    </li>
                `;
            });
        });
}

function createTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (!title) {
        alert('Title cannot be empty!');
        return;
    }

    fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, completed: false })
    })
        .then(() => {
            document.getElementById('title').value = '';
            document.getElementById('description').value = '';
            loadTasks();
        });
}

function deleteTask(id) {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
        .then(() => loadTasks());
}