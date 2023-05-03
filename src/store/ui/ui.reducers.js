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
    case "ui/toggleTodolistNav":
      return {
        ...ui,
        todolistNavShowing: !ui.todolistNavShowing,
      };
    default:
      return ui;
  }
};
