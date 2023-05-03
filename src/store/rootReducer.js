import { combineReducers } from "redux";
import { todoListReducer } from "./todolist/todolist.reducers";
import { todoProjectsReducer } from "./todoProjects/todoProjects.reducers";
import { notesReducer } from "./notes/notes.reducers";
import { uiReducer } from "./ui/ui.reducers";

export const rootReducer = combineReducers({
  todolist: todoListReducer,
  todolistProjects: todoProjectsReducer,
  notes: notesReducer,
  ui: uiReducer,
});
