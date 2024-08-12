// document.addEventListener("DOMContentLoaded", function () {
//   const apiUrl = 'http://localhost:3000/api/tasks'; // For local development

//   // console.log("DOM fully loaded and parsed");

//   // let addtask = document.getElementById("addTaskbtn");

//   function reset(){
//     document.getElementById("taskTitle").value = '';
//     document.getElementById("taskDescription").value = '';
//     document.getElementById("taskDueDate").value = '';
//     document.getElementById("taskTags").value = '';
//     document.getElementById("taskUsername").value = '';
//   }

//    document.getElementById("addTaskbtn").addEventListener("click", function () {
//     const task ={
//       taskName : document.getElementById("taskTitle").value.trim(),
//       taskdescription : document.getElementById("taskDescription").value.trim(),
//       taskDueDate : document.getElementById("taskDueDate").value.trim(),
//       taskTags : document.getElementById("taskTags").value.trim(),
//       taskUsername : document.getElementById("taskUsername").value.trim(),
//     };

//     fetch(apiUrl, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(task)
//     })
//     .then(response => response.json())
//     .then(() => {
//       displayTask();
//       reset();
//     });
//   });

//   // Update task
//   window.updateTask = function (id) {
//     fetch(`${apiUrl}/${id}`)
//       .then(response => response.json())
//       .then(task => {
//         document.getElementById("taskTitle").value = task.taskName;
//         document.getElementById("taskDescription").value = task.taskdescription;
//         document.getElementById("taskDueDate").value = task.taskDueDate;
//         document.getElementById("taskTags").value = task.taskTags;
//         document.getElementById("taskUsername").value = task.taskUsername;

//         document.getElementById("addTaskbtn").onclick = function () {
//           const updatedTask = {
//             taskName: document.getElementById("taskTitle").value.trim(),
//             taskdescription: document.getElementById("taskDescription").value.trim(),
//             taskDueDate: document.getElementById("taskDueDate").value.trim(),
//             taskTags: document.getElementById("taskTags").value.trim(),
//             taskUsername: document.getElementById("taskUsername").value.trim(),
//           };

//           fetch(`${apiUrl}/${id}`, {
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(updatedTask)
//           })
//           .then(response => response.json())
//           .then(() => {
//             displayTask();
//             reset();
//             // document.getElementById("addTaskbtn").onclick = function () {
//             //   // Add task
//             // };
//           });
//         };
//       });
//   };

//   // Delete task
//   window.deleteTask = function (id) {
//     fetch(`${apiUrl}/${id}`, {
//       method: 'DELETE'
//     })
//     .then(() => {
//       displayTask();
//     });
//   };

//   // Display tasks
//   function displayTask(tasks = []) {
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(tasks => {
//         const taskContainer = document.querySelector(".search-field");
//         taskContainer.innerHTML = '';

//         tasks.forEach(task => {
//           const taskDiv = document.createElement('div');
//           taskDiv.classList.add('taskItem');
//           taskDiv.innerHTML = `
//             <h2 class="taskHead">${task.taskName}</h2>
//             <p><p class="taskDetails">Description</p>: ${task.taskdescription}</p>
//             <p><p class="taskDetails">Due Date</p>: ${task.taskDueDate}</p>
//             <p><p class="taskDetails">Tags</p>: ${task.taskTags}</p>
//             <p><p class="taskDetails">Username</p>: ${task.taskUsername}</p>
//             <button class="editTask" onclick="updateTask('${task.id}')">EDIT</button>
//             <button class="deleteTask" onclick="deleteTask('${task.id}')">DELETE</button>
//           `;
//           taskContainer.appendChild(taskDiv);
//         });
//       });
//   }

//   displayTask();
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const apiUrl = 'http://localhost:3000/api/tasks'; // For local development

//   // Reset function
//   function reset(){
//     document.getElementById("taskTitle").value = '';
//     document.getElementById("taskDescription").value = '';
//     document.getElementById("taskDueDate").value = '';
//     document.getElementById("taskTags").value = '';
//     document.getElementById("taskUsername").value = '';
//   }

//   // Add Task
//   const addTaskButton = document.getElementById("addTaskbtn"); // Corrected ID
//   if (addTaskButton) {
//     addTaskButton.addEventListener("click", function () {
//       const task = {
//         taskName: document.getElementById("taskTitle").value.trim(),
//         taskdescription: document.getElementById("taskDescription").value.trim(),
//         taskDueDate: document.getElementById("taskDueDate").value.trim(),
//         taskTags: document.getElementById("taskTags").value.trim(),
//         taskUsername: document.getElementById("taskUsername").value.trim(),
//       };

//       fetch(apiUrl, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(task)
//       })
//       .then(response => response.json())
//       .then(() => {
//         displayTask();
//         reset();
//       });
//     });
//   }

//   // Update Task
//   window.updateTask = function (id) {
//     fetch(`${apiUrl}/${id}`)
//       .then(response => response.json())
//       .then(task => {
//         document.getElementById("taskTitle").value = task.taskName;
//         document.getElementById("taskDescription").value = task.taskdescription;
//         document.getElementById("taskDueDate").value = task.taskDueDate;
//         document.getElementById("taskTags").value = task.taskTags;
//         document.getElementById("taskUsername").value = task.taskUsername;

//         const addTaskButton = document.getElementById("addTaskbtn"); // Corrected ID
//         if (addTaskButton) {
//           addTaskButton.onclick = function () {
//             const updatedTask = {
//               taskName: document.getElementById("taskTitle").value.trim(),
//               taskdescription: document.getElementById("taskDescription").value.trim(),
//               taskDueDate: document.getElementById("taskDueDate").value.trim(),
//               taskTags: document.getElementById("taskTags").value.trim(),
//               taskUsername: document.getElementById("taskUsername").value.trim(),
//             };

//             fetch(`${apiUrl}/${id}`, {
//               method: 'PUT',
//               headers: { 'Content-Type': 'application/json' },
//               body: JSON.stringify(updatedTask)
//             })
//             .then(response => response.json())
//             .then(() => {
//               displayTask();
//               reset();
//               // Optionally, you can reset the button to its initial state here
//             });
//           };
//         }
//       });
//   };

//   // Delete Task
//   window.deleteTask = function (id) {
//     fetch(`${apiUrl}/${id}`, {
//       method: 'DELETE'
//     })
//     .then(() => {
//       displayTask();
//     });
//   };

//   // Display Tasks
//   function displayTask() {
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(tasks => {
//         const taskContainer = document.querySelector(".search-field");
//         if (taskContainer) {
//           taskContainer.innerHTML = '';
//           tasks.forEach(task => {
//             const taskDiv = document.createElement('div');
//             taskDiv.classList.add('taskItem');
//             taskDiv.innerHTML = `
//               <h2 class="taskHead">${task.taskName}</h2>
//               <p><p class="taskDetails">Description</p>: ${task.taskdescription}</p>
//               <p><p class="taskDetails">Due Date</p>: ${task.taskDueDate}</p>
//               <p><p class="taskDetails">Tags</p>: ${task.taskTags}</p>
//               <p><p class="taskDetails">Username</p>: ${task.taskUsername}</p>
//               <button class="editTask" onclick="updateTask('${task.id}')">EDIT</button>
//               <button class="deleteTask" onclick="deleteTask('${task.id}')">DELETE</button>
//             `;
//             taskContainer.appendChild(taskDiv);
//           });
//         }
//       });
//   }

//   displayTask();
// });


  
document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = 'http://localhost:3000/api/tasks'; // For local development

  // Reset function
  function reset(){
    document.getElementById("taskTitle").value = '';
    document.getElementById("taskDescription").value = '';
    document.getElementById("taskDueDate").value = '';
    document.getElementById("taskTags").value = '';
    document.getElementById("taskUsername").value = '';
    document.getElementById("addTaskbtn").textContent = "Add Task"; // Reset button text
  }

  // Function to add a new task
  function addTask() {
    const task = {
      taskName: document.getElementById("taskTitle").value.trim(),
      taskdescription: document.getElementById("taskDescription").value.trim(),
      taskDueDate: document.getElementById("taskDueDate").value.trim(),
      taskTags: document.getElementById("taskTags").value.trim(),
      taskUsername: document.getElementById("taskUsername").value.trim(),
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
  }

  // Function to update an existing task
  function updateTask(id) {
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
      document.getElementById("addTaskbtn").onclick = addTask; // Restore the addTask function to the button
    });
  }

  // Handle the click event for adding a new task
  document.getElementById("addTaskbtn").onclick = addTask;

  // Load task data into the form and switch the button to update mode
  window.updateTask = function (id) {
    fetch(`${apiUrl}/${id}`)
      .then(response => response.json())
      .then(task => {
        document.getElementById("taskTitle").value = task.taskName;
        document.getElementById("taskDescription").value = task.taskdescription;
        document.getElementById("taskDueDate").value = task.taskDueDate;
        document.getElementById("taskTags").value = task.taskTags;
        document.getElementById("taskUsername").value = task.taskUsername;

        document.getElementById("addTaskbtn").textContent = "Update Task"; // Change button text to 'Update Task'
        document.getElementById("addTaskbtn").onclick = function () {
          updateTask(id); // When clicked, update the existing task
        };
      });
  };

  // Function to delete a task
  window.deleteTask = function (id) {
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      displayTask();
    });
  };

  // Function to display all tasks
  // function displayTask() {
  //   fetch(apiUrl)
  //     .then(response => response.json())
  //     .then(tasks => {
  //       const taskContainer = document.querySelector(".search-field");
  //       if (taskContainer) {
  //         taskContainer.innerHTML = '';
  //         tasks.forEach(task => {
  //           const taskDiv = document.createElement('div');
  //           taskDiv.classList.add('taskItem');
  //           taskDiv.innerHTML = `
  //             <h2 class="taskHead">${task.taskName}</h2>
  //             <p><p class="taskDetails">Description</p>: ${task.taskdescription}</p>
  //             <p><p class="taskDetails">Due Date</p>: ${task.taskDueDate}</p>
  //             <p><p class="taskDetails">Tags</p>: ${task.taskTags}</p>
  //             <p><p class="taskDetails">Username</p>: ${task.taskUsername}</p>
  //             <button class="editTask" onclick="updateTask('${task.id}')">EDIT</button>
  //             <button class="deleteTask" onclick="deleteTask('${task.id}')">DELETE</button>
  //           `;
  //           taskContainer.appendChild(taskDiv);
  //         });
  //       }
  //     });
  // }


  function displayTask(searchQuery = '') {
    fetch(apiUrl)
      .then(response => response.json())
      .then(tasks => {
        const taskContainer = document.querySelector(".search-field");
        if (taskContainer) {
          taskContainer.innerHTML = '';

          const filteredTasks = tasks.filter(task => 
            task.taskName.toLowerCase().includes(searchQuery.toLowerCase()) || 
            task.taskdescription.toLowerCase().includes(searchQuery.toLowerCase())
          );

          filteredTasks.forEach(task => {
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
        }
      });
  }



  document.getElementById("searchTaskbtn").addEventListener("click", function () {
    const searchQuery = document.getElementById("searchBar").value.trim();
    displayTask(searchQuery);
  });

  displayTask();
});
