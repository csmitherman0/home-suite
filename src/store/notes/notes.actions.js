import { v4 as uuid } from "uuid";

export const addNote = (newNote) => {
  return {
    type: "notes/addNote",
    payload: {
      ...newNote,
      date: new Date(),
      _id: uuid(),
    },
  };
};

export const removeNote = (targetNote) => {
  return {
    type: "notes/removeNote",
    payload: targetNote,
  };
};

export const editNote = (targetNote) => {
  return {
    type: "notes/editNote",
    payload: targetNote,
  };
};
