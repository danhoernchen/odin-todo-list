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

//create cards to display todos of the currently selected project
function displayTodos() {
  if (projectsArr.length > 0) {
    currentProject.innerHTML = "";
    const project = projectsArr[projectsSelector.value];
    let i = 0;
    project.todos.forEach((element) => {
      const todo = document.createElement("div");
      todo.classList.add(
        "card",
        "m-3",
        "p-3",
        "w-25",
        element.priority.toLowerCase()
      );
      todo.innerHTML += `<div id="todo-${i}"><h4 class="card-title">${element.title}</h4></div>`;
      currentProject.append(todo);
      displayItems(element, i);
      i++;
    });
  }
}

//display the items of the current todo and add delete and mark done buttons
function displayItems(todo, index) {
  const todoContainer = document.getElementById(`todo-${index}`);
  const project = projectsArr[projectsSelector.value];
  if (todo.description) {
    const description = document.createElement("div");
    description.classList.add("description");
    description.innerHTML = `<h5 class="card-subtitle text-info">Description</h5><p class="card-text">${todo.description}</p>`;
    todoContainer.append(description);
  }
  if (todo.dueDate != null) {
    const dueDate = document.createElement("div");
    dueDate.classList.add("due-date");
    dueDate.innerHTML = `<h5 class="card-subtitle text-info">Due Date</h5><p class="card-text">${todo.dueDate}</p>`;
    todoContainer.append(dueDate);
  }
  if (todo.priority) {
    const priority = document.createElement("div");
    priority.classList.add("priority");
    priority.innerHTML = `<h5 class="card-subtitle text-info">Priority: </h5><p>${todo.priority}</p>`;
    todoContainer.append(priority);
  }
  if (todo.notes) {
    const notes = document.createElement("div");
    notes.classList.add("notes");
    notes.innerHTML = `<h5 class="card-subtitle text-info">Notes</h5><p class="card-text">${todo.notes}</p>`;
    todoContainer.append(notes);
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
  if (todo.done) {
    todoContainer.classList.add("done");
  }
  const deleteBtn = document.createElement("button");
  deleteBtn.id = index;
  deleteBtn.innerText = "Delete ToDo";
  deleteBtn.classList.add("btn", "btn-danger");
  deleteBtn.addEventListener("click", project.deleteTodo);
  todoContainer.append(deleteBtn);
  const doneBtn = document.createElement("button");
  doneBtn.classList.add("btn", "btn-secondary");
  doneBtn.innerText = "Mark Done";
  doneBtn.addEventListener("click", todo.toggleDone);
  todoContainer.append(doneBtn);
}

export { displayProjects, displayItems, displayTodos };
