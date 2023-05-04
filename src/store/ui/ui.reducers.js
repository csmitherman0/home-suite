const initialUI = {
  deleteDialogShowing: false,
  currTodoProject: "general",
  todolistNavShowing: false,
};

export const uiReducer = (ui = initialUI, action) => {
  switch (action.type) {
    case "ui/showDeleteDialog":
      return {
        ...ui,
        deleteDialogShowing: true,
      };
    case "ui/hideDeleteDialog":
      return {
        ...ui,
        deleteDialogShowing: false,
      };
    case "ui/changeTodoProject":
      return {
        ...ui,
        currTodoProject: action.payload,
      };
    case "ui/showTodolistNav":
      return {
        ...ui,
        todolistNavShowing: true,
      };
    case "ui/hideTodolistNav":
      return {
        ...ui,
        todolistNavShowing: false,
      };
    default:
      return ui;
  }
};
