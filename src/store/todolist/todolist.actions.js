import { v4 as uuid } from "uuid";

export const addTodo = (newTodo) => {
  return {
    type: "todolist/addTodo",
    payload: {
      ...newTodo,
      completed: false,
      _id: uuid(),
    },
  };
};

export const removeTodo = (targetTodo) => {
  return {
    type: "todolist/removeTodo",
    payload: targetTodo,
  };
};

export const toggleTodo = (targetTodo) => {
  return {
    type: "todolist/toggleTodo",
    payload: targetTodo,
  };
};

export const removeTodosByProject = (targetProject) => {
  return {
    type: "todolist/removeTodosByProject",
    payload: targetProject,
  };
};
