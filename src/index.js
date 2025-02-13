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
  if (todo.description) {
    todoContainer.innerHTML += `<div class="description"><h5>Description</h5><p>${todo.description}</p></div>`;
  }
  if (todo.dueDate != null) {
    todoContainer.innerHTML += `<div class="due-date"><h5>Due Date</h5><p>${todo.dueDate}</div>`;
  }
  if (todo.priority) {
    todoContainer.innerHTML += `<div class="priority"><p>${todo.priority}</p></div>`;
  }
  if (todo.notes) {
    todoContainer.innerHTML += `<div class"notes"><h5>Notes</h5><p>${todo.notes}</p></div>`;
  }
  if (todo.checklist.length > 0) {
    const list = document.createElement("ul");
    todo.checklist.forEach((el) => {
      const li = document.createElement("li");
      li.innerText = element.description;
      list.appendChild(li);
    });
    todoContainer.appendChild(list);
  }
}

function displayTodos(project) {
  project.todos.forEach((element) => {
    currentProject.innerHTML += `<div id="${element.title}">${element.title}</div>`;
    displayItems(element);
  });
}
displayProjects(projectsArr);
displayTodos(projectsArr[0]);
document.body.className =
  "bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center";
