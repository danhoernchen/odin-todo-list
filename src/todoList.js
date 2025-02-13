export default class TodoList {
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
