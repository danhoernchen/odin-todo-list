import "bootstrap/dist/css/bootstrap.min.css";
import { default as Project } from "./project";
import { default as TodoList } from "./todoList";
import "./styles.css";
import { el } from "date-fns/locale";
const projectsDiv = document.getElementById("projects");
const projectsArr = [];
const currentProject = document.getElementById("current-project");

const initialTodo = new TodoList("TestToDo", "Really just a test");
const secondTodo = new TodoList(
  "2nd",
  "Another one",
  null,
  "high",
  "BlablaBlubb!",
  [
    { description: "one", done: false },
    { description: "two", done: false },
  ]
);
const initialProject = new Project("Test");
initialProject.addTodoList(initialTodo);
initialProject.addTodoList(secondTodo);
projectsArr.push(initialProject);

function displayProjects(projects) {
  projects.forEach((element) => {
    projectsDiv.innerHTML += `<div id=${element.name}>${element.name}</div>`;
  });
}

function displayItems(todo) {
  const todoContainer = document.getElementById(todo.title);
  console.log(todo.checklist.length);
  if (todo.description) {
    todoContainer.innerHTML += `<div class="description"><h5 class="card-subtitle">Description</h5><p class="card-text">${todo.description}</p></div>`;
  }
  if (todo.dueDate != null) {
    todoContainer.innerHTML += `<div class="due-date"><h5 class="card-subtitle">Due Date</h5><p class="card-text">${todo.dueDate}</div>`;
  }
  if (todo.priority) {
    todoContainer.innerHTML += `<div class="priority"><h5 class="card-subtitle">Priority: </h5><p>${todo.priority}</p></div>`;
  }
  if (todo.notes) {
    todoContainer.innerHTML += `<div class"notes"><h5 class="card-subtitle">Notes</h5><p class="card-text">${todo.notes}</p></div>`;
  }
  if (todo.checklist.length > 0) {
    const list = document.createElement("ul");
    todo.checklist.forEach((el) => {
      const li = document.createElement("li");
      li.innerText = el.description;
      list.append(li);
    });
    todoContainer.append(list);
  }
}

function displayTodos(project) {
  project.todos.forEach((element) => {
    currentProject.innerHTML += `<div class="card m-3 p-3 w-25"><div class="card-title" id="${element.title}"><h4>${element.title}</h4></div></div>`;
    displayItems(element);
  });
}
displayProjects(projectsArr);
displayTodos(projectsArr[0]);
document.body.className =
  "bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center";
