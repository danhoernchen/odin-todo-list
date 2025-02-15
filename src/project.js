class Project {
  constructor(title, todos = []) {
    this.title = title;
    this.todos = todos;
  }
  addTodo(todos) {
    this.todos.push(todos);
  }
  deleteTodoList(index) {
    this.todos.splice(index, 1);
  }
}

export default Project;
