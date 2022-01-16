import defaultAxios from 'axios';

//Default configuration of axios
const axios = defaultAxios.create({
  headers: { "Content-Type": "application/json" },
  baseURL: "https://market-api-getir.herokuapp.com/",
});


// Getting all products(items) from API.
export const getAllProducts = async (query: string = "") => {
    try {
        const res = await axios.get(`items${query}`);
        return { allRecord: res.headers['x-total-count'], products: res.data};
    } catch (err) {
        return console.error(err);
    }
}

// Getting all filter data from API.
export const getAllFilters = async () => {
    try {
        const res = await axios.get("filters");
        return res.data;
    } catch (err) {
        return console.error(err);
    }
}