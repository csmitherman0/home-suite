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

export const removeProject = (target) => {
  return {
    type: "todoProjects/removeProject",
    payload: target,
  };
};
