const initialProjects = ["general", "office"];

export const todoProjectsReducer = (projects = initialProjects, action) => {
  switch (action.type) {
    case "todoProjects/addProject":
      return [...projects, action.payload];
    case "todoProjects/removeProject":
      return projects.filter((p) => p._id !== action.payload._id);
    default:
      return projects;
  }
};
