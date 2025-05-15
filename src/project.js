import { displayTodos } from "./display";
import { projectsArr } from ".";

class Project {
  constructor(title, todos = []) {
    this.title = title;
    this.todos = todos;
  }
  addTodo = (todo) => {
    this.todos.push(todo);
    displayTodos();
    saveProjects(projectsArr);
  };
  deleteTodo = (e) => {
    const index = Number(e.target.id);
    this.todos.splice(index, 1);
    displayTodos();
    saveProjects(projectsArr);
  };
}

function saveProjects(array) {
  // const todos = [];
  // array.forEach((element) => {
  //   element.todos.forEach((el) => {
  //     todos.push(JSON.stringify(el));
  //     console.log(todos);
  //   });
  // });
  localStorage.setItem("projectsArr", JSON.stringify(array));
}

export default Project;
export { saveProjects };
