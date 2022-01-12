import { SortingType } from "../models/SortingType";

const sortingData = () => {
  const types: SortingType[] = [
    { id: "1", title: "Price low to high", order: "asc", sort: "price" },
    { id: "2", title: "Price high to low", order: "desc", sort: "price" },
    { id: "3", title: "New to old", order: "asc", sort: "added" },
    { id: "4", title: "Old to new", order: "desc", sort: "added" },
  ];
  return types;
};

export default sortingData;
