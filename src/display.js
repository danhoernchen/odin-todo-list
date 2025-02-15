const projectsSelector = document.getElementById("project-selector");
const currentProject = document.getElementById("current-project");
import { projectsArr } from "./index.js";

//display all projects in project array as options in a selector
function displayProjects(projects) {
  let index = 0;
  projects.forEach((element) => {
    projectsSelector.innerHTML += `<option value="${index}">${element.title}</option>`;
    index++;
  });
}

//display the todos of currently selected project as cards
function displayTodos() {
  currentProject.innerHTML = "";
  const project = projectsArr[projectsSelector.value];
  console.log(projectsArr[projectsSelector.id]);
  let i = 0;
  project.todos.forEach((element) => {
    currentProject.innerHTML += `<div class="card m-3 p-3 w-25"><div class="card-title" id="todo-${i}"><h4>${element.title}</h4></div></div>`;
    displayItems(element, i);
    i++;
  });
}

//display the items of the current todo
function displayItems(todo, index) {
  const todoContainer = document.getElementById(`todo-${index}`);
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

export { displayProjects, displayItems, displayTodos };
