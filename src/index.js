import "bootstrap/dist/css/bootstrap.min.css";
import { default as Project } from "./project";
import { ToDo, addTodo } from "./todo";
import "./styles.css";
import { el } from "date-fns/locale";
import { displayItems, displayProjects, displayTodos } from "./display";
const projectsArr = [];
const addTodoBtn = document.getElementById("add-todo-btn");
export { projectsArr };

const initialTodo = new ToDo("TestToDo", "Really just a test");
const secondTodo = new ToDo(
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
initialProject.addTodo(initialTodo);
initialProject.addTodo(secondTodo);
projectsArr.push(initialProject);
projectsArr.push(secondProject);

displayProjects(projectsArr);
displayTodos();

addTodoBtn.addEventListener("click", addTodo);
projectsSelector.addEventListener("change", displayTodos);
