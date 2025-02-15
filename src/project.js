import { displayTodos } from "./display";
import { projectsArr } from ".";

class Project {
  constructor(title, todos = []) {
    this.title = title;
    this.todos = todos;
  }
  addTodo = (todos) => {
    this.todos.push(todos);
    displayTodos();
    localStorage.setItem("projectsArr", JSON.stringify(projectsArr));
  };
  deleteTodo = (e) => {
    const index = Number(e.target.id);
    this.todos.splice(index, 1);
    displayTodos();
    localStorage.setItem("projectsArr", JSON.stringify(projectsArr));
  };
}

export default Project;
