import defaultAxios from 'axios';

const axios = defaultAxios.create({
  headers: { "Content-Type": "application/json" },
  baseURL: "http://localhost:3000/",
});

export const getAllProducts = async (query: string = "") => {
    try {
        const res = await axios.get(`items${query}`);
        return { allRecord: res.headers['x-total-count'], products: res.data};
    } catch (err) {
        return console.error(err);
    }
}

export const getAllFilters = async () => {
    try {
        const res = await axios.get("filters");
        return res.data;
    } catch (err) {
        return console.error(err);
    }
}