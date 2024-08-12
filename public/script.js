document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = 'http://localhost:3000/api/tasks'; // For local development

  // console.log("DOM fully loaded and parsed");

  // let addtask = document.getElementById("addTaskbtn");

  function reset(){
    document.getElementById("taskTitle").value = '';
    document.getElementById("taskDescription").value = '';
    document.getElementById("taskDueDate").value = '';
    document.getElementById("taskTags").value = '';
    document.getElementById("taskUsername").value = '';
  }

   document.getElementById("addtask").addEventListener("click", function () {
    const task ={
      taskName : document.getElementById("taskTitle").value.trim(),
      taskdescription : document.getElementById("taskDescription").value.trim(),
      taskDueDate : document.getElementById("taskDueDate").value.trim(),
      taskTags : document.getElementById("taskTags").value.trim(),
      taskUsername : document.getElementById("taskUsername").value.trim(),
    };

    fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    })
    .then(response => response.json())
    .then(() => {
      displayTask();
      reset();
    });
  });

  // Update task
  window.updateTask = function (id) {
    fetch(`${apiUrl}/${id}`)
      .then(response => response.json())
      .then(task => {
        document.getElementById("taskTitle").value = task.taskName;
        document.getElementById("taskDescription").value = task.taskdescription;
        document.getElementById("taskDueDate").value = task.taskDueDate;
        document.getElementById("taskTags").value = task.taskTags;
        document.getElementById("taskUsername").value = task.taskUsername;

        document.getElementById("addTaskbtn").onclick = function () {
          const updatedTask = {
            taskName: document.getElementById("taskTitle").value.trim(),
            taskdescription: document.getElementById("taskDescription").value.trim(),
            taskDueDate: document.getElementById("taskDueDate").value.trim(),
            taskTags: document.getElementById("taskTags").value.trim(),
            taskUsername: document.getElementById("taskUsername").value.trim(),
          };

          fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedTask)
          })
          .then(response => response.json())
          .then(() => {
            displayTask();
            reset();
            document.getElementById("addTaskbtn").onclick = function () {
              // Add task
            };
          });
        };
      });
  };

  // Delete task
  window.deleteTask = function (id) {
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      displayTask();
    });
  };

  // Display tasks
  function displayTask(tasks = []) {
    fetch(apiUrl)
      .then(response => response.json())
      .then(tasks => {
        const taskContainer = document.querySelector(".search-field");
        taskContainer.innerHTML = '';

        tasks.forEach(task => {
          const taskDiv = document.createElement('div');
          taskDiv.classList.add('taskItem');
          taskDiv.innerHTML = `
            <h2 class="taskHead">${task.taskName}</h2>
            <p><p class="taskDetails">Description</p>: ${task.taskdescription}</p>
            <p><p class="taskDetails">Due Date</p>: ${task.taskDueDate}</p>
            <p><p class="taskDetails">Tags</p>: ${task.taskTags}</p>
            <p><p class="taskDetails">Username</p>: ${task.taskUsername}</p>
            <button class="editTask" onclick="updateTask('${task.id}')">EDIT</button>
            <button class="deleteTask" onclick="deleteTask('${task.id}')">DELETE</button>
          `;
          taskContainer.appendChild(taskDiv);
        });
      });
  }

  displayTask();
});

    



  
