document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('todoInput');
    const taskList = document.getElementById('addtask');
    const filterButtons = document.querySelectorAll('.filters button');
    let tasks = [];

    // Add new task
    newTaskInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && newTaskInput.value.trim() !== '') {
            const task = {
                text: newTaskInput.value.trim(),
                completed: false
            };
            tasks.push(task);
            newTaskInput.value = '';
            renderTasks();
        }
    });
});