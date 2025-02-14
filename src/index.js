import "bootstrap/dist/css/bootstrap.min.css";
import { default as Project } from "./project";
import { default as TodoList } from "./todoList";
import { default as addTodo } from "./addTodo";
import "./styles.css";
import { el } from "date-fns/locale";
const projectsSelector = document.getElementById("project-selector");
const projectsArr = [];
const currentProject = document.getElementById("current-project");
const addTodoBtn = document.getElementById("add-todo-btn");

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
const secondProject = new Project("Second");
initialProject.addTodoList(initialTodo);
initialProject.addTodoList(secondTodo);
projectsArr.push(initialProject);
projectsArr.push(secondProject);

//display all projects in project array as options in a selector
function displayProjects(projects) {
  let index = 0;
  projects.forEach((element) => {
    projectsSelector.innerHTML += `<option value="${index}">${element.title}</option>`;
    index++;
  });
}

//display the todos of a project as cards
function displayTodos() {
  currentProject.innerHTML = "";
  const project = projectsArr[projectsSelector.value];
  console.log(projectsArr[projectsSelector.id]);
  project.todos.forEach((element) => {
    currentProject.innerHTML += `<div class="card m-3 p-3 w-25"><div class="card-title" id="${element.title}"><h4>${element.title}</h4></div></div>`;
    displayItems(element);
  });
}

//display the items of the current todo
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

displayProjects(projectsArr);
displayTodos();

addTodoBtn.addEventListener("click", addTodo);
projectsSelector.addEventListener("change", displayTodos);
