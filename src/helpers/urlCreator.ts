import { Query } from "../models/Query";

export const urlCreator = (payload: Query) => {
  let operationProps: string[] = ["page", "limit", "sort", "order"]; //The props only what we want to call with equals => 'page=1'
  let likeProps: string[] = ["tags"]; //The props only what we want to use '_' => 'tags_like=shoes'
  let multiSelectProps: string[] = ["manufacturer"]; //The props only what we want to use multiple times => 'manufacturer=Adidas&manufacturer=Nike'

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
              query += el !== "All" ? `${key}_like=${el}&` : "";
            });
          }
        } else if (multiSelectProps.includes(key)) {
          if (Array.isArray(value)) {
            value.forEach((el) => {
              query += el !== "All" ? `${key}=${el}&` : "";
            });
          }
        } else if (key === "itemType") {
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
