import "bootstrap/dist/css/bootstrap.min.css";
import { default as Project } from "./project";
import { ToDo, addTodo } from "./todo";
import "./styles.css";
import { el } from "date-fns/locale";
import { displayItems, displayProjects, displayTodos } from "./display";
import { parseJSON } from "date-fns";
const savedProjectsArr = JSON.parse(localStorage.getItem("projectsArr"));
const projectsArr = [];
const addTodoBtn = document.getElementById("add-todo-btn");
const projectsSelector = document.getElementById("project-selector");

if (savedProjectsArr.length < 1) {
  console.log(projectsArr.lenth);
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
} else {
  for (let i = 0; i < savedProjectsArr.length; i++) {
    const project = new Project(savedProjectsArr[i].title);
    for (const todo of savedProjectsArr[i].todos) {
      console.log(todo);
      project.addTodo(
        new ToDo(
          todo.title,
          todo.description,
          todo.dueDate,
          todo.priority,
          todo.notes,
          todo.checklist,
          todo.done
        )
      );
    }
    projectsArr.push(project);
  }
}
displayProjects(projectsArr);
displayTodos();

addTodoBtn.addEventListener("click", addTodo);
projectsSelector.addEventListener("change", displayTodos);
export { projectsArr };
