document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    // Adicionar tarefa
    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            // Criar novo item da lista
            const li = document.createElement('li');
            li.className = 'task-item';
            
            // Checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', function() {
                li.classList.toggle('completed', this.checked);
            });
            
            // Texto da tarefa
            const span = document.createElement('span');
            span.className = 'task-text';
            span.textContent = taskText;
            
            // Botão de deletar
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Deletar';
            deleteBtn.addEventListener('click', function() {
                li.remove();
            });
            
            // Montar o elemento
            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteBtn);
            
            // Adicionar à lista
            taskList.appendChild(li);
            
            // Limpar input
            taskInput.value = '';
        }
    }
});