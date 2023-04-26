import { combineReducers } from "redux";
import { todoListReducer } from "./todolist/todolist.reducers";
import { notesReducer } from "./notes/notes.reducers";

export const rootReducer = combineReducers({
  todolist: todoListReducer,
  notes: notesReducer,
});
