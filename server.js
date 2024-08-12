const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const TASKS_FILE = path.join(__dirname, 'tasks.json');

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Helper function to read tasks from JSON file
function readTasks() {
  if (!fs.existsSync(TASKS_FILE)) {
    fs.writeFileSync(TASKS_FILE, JSON.stringify([]));
  }
  const data = fs.readFileSync(TASKS_FILE);
  return JSON.parse(data);
}

// Helper function to write tasks to JSON file
function writeTasks(tasks) {
  fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
}

// Read all tasks
app.get('/api/tasks', (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// Read a single task
app.get('/api/tasks/:id', (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === req.params.id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Create a new task
app.post('/api/tasks', (req, res) => {
  const tasks = readTasks();
  const newTask = req.body;
  newTask.id = Math.random().toString(16).slice(2);
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

// Update a task
app.put('/api/tasks/:id', (req, res) => {
  const tasks = readTasks();
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...req.body };
    writeTasks(tasks);
    res.json(tasks[index]);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  let tasks = readTasks();
  tasks = tasks.filter(t => t.id !== req.params.id);
  writeTasks(tasks);
  res.status(204).end();
});

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
