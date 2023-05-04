export const showDeleteDialog = () => {
  return {
    type: "ui/showDeleteDialog",
  };
};

export const hideDeleteDialog = () => {
  return {
    type: "ui/hideDeleteDialog",
  };
};

export const changeTodoProject = (targetProject) => {
  return {
    type: "ui/changeTodoProject",
    payload: targetProject,
  };
};

export const showTodolistNav = () => {
  return {
    type: "ui/showTodolistNav",
  };
};

export const hideTodolistNav = () => {
  return {
    type: "ui/hideTodolistNav",
  };
};
