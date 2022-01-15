import { Query } from "../models/Query";

export const urlCreator = (payload: Query) => {
  let operationProps: string[] = ["page", "limit", "sort", "order"];
  let likeProps: string[] = ["tags"];

  if (payload) {
    let query = "?";
    Object.entries(payload).forEach((x) => {
      let [key, value] = x;
      if (value !== undefined) {
        if (operationProps.includes(key)) {
          query += `_${key}=${value}&`;
        } else if (likeProps.includes(key)) {
          if (Array.isArray(value)) {
            value.forEach((el) => {
              query += `${key}_like=${el}&`;
            });
          }
        } else {
          query += `${key}=${value}&`;
        }
      }
    });
    return query;
  } else {
    return "";
  }
};
