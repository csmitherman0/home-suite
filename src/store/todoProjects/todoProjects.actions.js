import { v4 as uuid } from "uuid";

export const addProject = (name) => {
  return {
    type: "todoProjects/addProject",
    payload: {
      name,
      _id: uuid(),
    },
  };
};

export const removeProject = (targetId) => {
  return {
    type: "todoProjects/removeProject",
    payload: targetId,
  };
};
