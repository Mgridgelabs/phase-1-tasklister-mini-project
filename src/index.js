document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const newTaskDescription = document.getElementById('new-task-description').value;

    
    const MyTodos = document.createElement('li');

    
    const taskText = document.createElement('span');
    taskText.textContent = newTaskDescription;

   
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';

    
    MyTodos.appendChild(taskText);
    MyTodos.appendChild(editButton);

    
    taskList.appendChild(MyTodos);

    
    form.reset();

   
    editButton.addEventListener('click', () => {
      
      const editInput = document.createElement('input');
      editInput.type = 'text';
      editInput.value = taskText.textContent;

      
      const saveButton = document.createElement('button');
      saveButton.textContent = '_Save';

      
      MyTodos.replaceChild(editInput, taskText);
      MyTodos.replaceChild(saveButton, editButton);

     
      saveButton.addEventListener('click', () => {
        
        taskText.textContent = editInput.value;

        
        MyTodos.replaceChild(taskText, editInput);
        MyTodos.replaceChild(editButton, saveButton);
      });
    });
  });
});
