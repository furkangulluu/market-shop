import { Query } from "../models/Query";

export const urlCreator = (payload: Query) => {
  let operationProps: string[] = ["page", "limit", "sort", "order"];
  let likeProps: string[] = ["tags"];
  let multiSelectProps: string[] = ["manufacturer"];
  
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
              query += el !== 'All' ? `${key}_like=${el}&` : '';
            });
          }
        } else if (multiSelectProps.includes(key)) {
          if (Array.isArray(value)) {
            value.forEach((el) => {
              query += el !== "All" ? `${key}=${el}&` : "";
            });
          }
        } else if (key === 'itemType') {
          query += value !== "All" ? `${key}=${value}&` : "";
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
