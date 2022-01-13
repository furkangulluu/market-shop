import defaultAxios from 'axios';

const axios = defaultAxios.create({
  headers: { "Content-Type": "application/json" },
  baseURL: "http://localhost:3000/",
});

export const getAllProducts = async (query: string = "") => {
    try {
        const todos = await axios.get("items");

        return todos.data;
    } catch (err) {
        return console.error(err);
    }
}

export const getAllFilters = async () => {
    try {
        const todos = await axios.get("filters");

        return todos.data.results;
    } catch (err) {
        return console.error(err);
    }
}