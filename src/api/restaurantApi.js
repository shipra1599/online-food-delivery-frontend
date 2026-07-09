import axios from "axios";

const restaurantApi = axios.create({
  baseURL: "http://localhost:8081",
});

export default {
  getAll: () => restaurantApi.get("/restaurants"),
  getById: (id) => restaurantApi.get(`/restaurants/${id}`)
};
