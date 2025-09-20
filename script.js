document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
    
    let taskCounter = 0;
    
    // Storage functions
    function saveTasks() {
        const tasks = [];
        const taskItems = taskList.querySelectorAll('.task-item');
        
        taskItems.forEach(item => {
            const taskData = {
                id: item.dataset.taskId,
                text: item.querySelector('.task-text').textContent,
                completed: item.classList.contains('completed')
            };
            tasks.push(taskData);
        });
        
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
        localStorage.setItem('taskCounter', taskCounter.toString());
    }
    
    function loadTasks() {
        try {
            const savedTasks = localStorage.getItem('todoTasks');
            const savedCounter = localStorage.getItem('taskCounter');
            
            if (savedCounter) {
                taskCounter = parseInt(savedCounter) || 0;
            }
            
            if (savedTasks) {
                const tasks = JSON.parse(savedTasks);
                if (Array.isArray(tasks)) {
                    tasks.forEach(taskData => {
                        if (taskData && taskData.text) {
                            createTaskElement(taskData.text, taskData.completed, taskData.id);
                        }
                    });
                }
            }
        } catch (error) {
            console.warn('Failed to load tasks from localStorage:', error);
            // Reset localStorage if corrupted
            localStorage.removeItem('todoTasks');
            localStorage.removeItem('taskCounter');
            taskCounter = 0;
        }
    }
    
    // Add event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            taskInput.focus();
            return;
        }
        
        createTaskElement(taskText, false, ++taskCounter);
        
        // Clear input and focus
        taskInput.value = '';
        taskInput.focus();
        
        // Remove empty state if it exists
        removeEmptyState();
        
        // Save to localStorage
        saveTasks();
    }
    
    function createTaskElement(taskText, isCompleted = false, taskId = null) {
        // Create task item
        const taskItem = document.createElement('li');
        taskItem.className = isCompleted ? 'task-item completed' : 'task-item';
        taskItem.dataset.taskId = taskId || ++taskCounter;
        
        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = isCompleted;
        checkbox.addEventListener('change', toggleTask);
        
        // Create task text span
        const taskTextSpan = document.createElement('span');
        taskTextSpan.className = 'task-text';
        taskTextSpan.textContent = taskText;
        
        // Create delete button with Font Awesome icon
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteButton.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent task toggle when clicking delete
            deleteTask(taskItem);
        });
        
        // Assemble task item
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(deleteButton);
        
        // Add click listener to entire task item for toggle
        taskItem.addEventListener('click', function(e) {
            if (e.target !== checkbox && !e.target.classList.contains('delete-button') && !e.target.closest('.delete-button')) {
                checkbox.checked = !checkbox.checked;
                toggleTask.call(checkbox);
            }
        });
        
        // Add to list
        taskList.appendChild(taskItem);
    }
    
    function toggleTask() {
        const taskItem = this.closest('.task-item');
        
        if (this.checked) {
            taskItem.classList.add('completed');
        } else {
            taskItem.classList.remove('completed');
        }
        
        // Save to localStorage
        saveTasks();
    }
    
    function deleteTask(taskItem) {
        taskItem.remove();
        
        // Show empty state if no tasks left
        if (taskList.children.length === 0) {
            showEmptyState();
        }
        
        // Save to localStorage
        saveTasks();
    }
    
    function removeEmptyState() {
        const emptyState = taskList.querySelector('.empty-state');
        if (emptyState) {
            emptyState.remove();
        }
    }
    
    // Show empty state initially if no tasks
    function showEmptyState() {
        if (taskList.children.length === 0) {
            const emptyState = document.createElement('li');
            emptyState.className = 'empty-state';
            emptyState.textContent = 'No tasks yet. Add one above!';
            taskList.appendChild(emptyState);
        }
    }
    
    // Load saved tasks
    loadTasks();
    
    // Initialize empty state if no saved tasks
    if (taskList.children.length === 0) {
        showEmptyState();
    }
    
    // Focus on input field when page loads
    taskInput.focus();
});
