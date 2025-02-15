const titleInput = document.getElementById("todo-title-input");
const descriptionInput = document.getElementById("todo-description-input");
const dueDateInput = document.getElementById("todo-due-input");
const priorityInput = document.getElementById("todo-priority-input");
const notesInput = document.getElementById("todo-notes-input");
const currentProject = document.getElementById("project-selector");
import { projectsArr } from "./index";

class ToDo {
  constructor(
    title,
    description,
    dueDate = null,
    priority = "normal",
    notes = "",
    checklist = []
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }
  changeTitle(newTitle) {
    this.title = newTitle;
  }
  changeDescription(newDescription) {
    this.description = newDescription;
  }
  changeDueDate(newDate) {
    this.dueDate = newDate;
  }
  changePriority(newPriority) {
    this.priority == newPriority;
  }
  changeNotes(newNotes) {
    this.notes == newNotes;
  }
  addChecklistItem(description) {
    newItem = {
      description: description,
      done: false,
    };
    this.checklist.push(item);
  }
  deleteChecklistItem(index) {
    this.checklist.splice(index, 1);
  }
  markChecklistItem(index) {
    this.checklist[index].done = !this.checklist[index].done;
  }
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
  console.log(todo);
  console.log(projectsArr[currentProject.value]);
  projectsArr[currentProject.value].addTodo(todo);
}

export { ToDo, addTodo };
