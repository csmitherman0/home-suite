const initialNotes = [];

export const notesReducer = (notes = initialNotes, action) => {
  switch (action.type) {
    case "notes/addNote":
      return [...notes, action.payload];
    case "notes/removeNote":
      return notes.filter((note) => note._id !== action.payload._id);
    case "notes/editNote":
      return notes.map((note) => {
        if (note._id === action.payload._id) {
          note = { ...action.payload };
        }
      });
    default:
      return notes;
  }
};
