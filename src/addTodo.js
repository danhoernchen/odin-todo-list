import { default as TodoList } from "./todoList";
const titleInput = document.getElementById("todo-title-input");
const descriptionInput = document.getElementById("todo-description-input");
const dueDateInput = document.getElementById("todo-due-input");
const priorityInput = document.getElementById("todo-priority-input");
const notesInput = document.getElementById("todo-notes-input");
const addBtn = document.getElementById("add-todo-btn");

function addTodo(e) {
  e.preventDefault();
  const todo = new TodoList(
    titleInput.value,
    descriptionInput.value,
    dueDateInput.value,
    priorityInput.value,
    notesInput.value
  );
}

export default addTodo;
