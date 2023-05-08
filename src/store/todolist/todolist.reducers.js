const initialTodoList = [];

export const todoListReducer = (todolist = initialTodoList, action) => {
  switch (action.type) {
    case "todolist/addTodo":
      return [...todolist, action.payload];
    case "todolist/removeTodo":
      return todolist.filter((todo) => todo._id !== action.payload._id);
    case "todolist/toggleTodo":
      const todolistCopy = [...todolist];
      const index = todolistCopy.findIndex((t) => t._id === action.payload._id);
      todolistCopy[index].completed = !todolistCopy[index].completed;
      return todolistCopy;
    case "todolist/removeTodosByProject":
      return todolist.filter((t) => t.project._id !== action.payload._id);
    default:
      return todolist;
  }
};
