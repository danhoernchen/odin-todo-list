class Project {
  constructor(name, todos = []) {
    this.name = name;
    this.todos = todos;
  }
  addTodoList(todos) {
    this.todos.push(todos);
  }
  deleteTodoList(index) {
    this.todos.splice(index, 1);
  }
}

export default Project;
