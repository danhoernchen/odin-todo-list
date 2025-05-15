const titleInput = document.getElementById("todo-title-input");
const descriptionInput = document.getElementById("todo-description-input");
const dueDateInput = document.getElementById("todo-due-input");
const priorityInput = document.getElementById("todo-priority-input");
const notesInput = document.getElementById("todo-notes-input");
const currentProject = document.getElementById("project-selector");
import { projectsArr } from "./index";
import { displayTodos } from "./display";
import { saveProjects } from "./project";

class ToDo {
  constructor(
    title,
    description,
    dueDate = null,
    priority = "normal",
    notes = "",
    checklist = [],
    done = false
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.done = done;
  }
  changeTitle = (newTitle) => {
    this.title = newTitle;
    saveProjects(projectsArr);
  };
  changeDescription = (newDescription) => {
    this.description = newDescription;
    saveProjects(projectsArr);
  };
  changeDueDate = (newDate) => {
    this.dueDate = newDate;
    saveProjects(projectsArr);
  };
  changePriority = (newPriority) => {
    this.priority == newPriority;
    saveProjects(projectsArr);
  };
  changeNotes = (newNotes) => {
    this.notes == newNotes;
    saveProjects(projectsArr);
  };
  addChecklistItem = (description) => {
    newItem = {
      description: description,
      done: false,
    };
    this.checklist.push(item);
    saveProjects(projectsArr);
  };
  deleteChecklistItem = (index) => {
    this.checklist.splice(index, 1);
    saveProjects(projectsArr);
  };
  markChecklistItem = (index) => {
    this.checklist[index].done = !this.checklist[index].done;
    saveProjects(projectsArr);
  };
  toggleDone = () => {
    console.log("done");
    this.done = !this.done;
    displayTodos();
    saveProjects(projectsArr);
  };
}

function addTodo(e) {
  e.preventDefault();
  const todo = new ToDo(
    titleInput.value,
    descriptionInput.value,
    dueDateInput.value,
    priorityInput.value,
    notesInput.value
  );
  projectsArr[currentProject.value].addTodo(todo);
}

export { ToDo, addTodo };
