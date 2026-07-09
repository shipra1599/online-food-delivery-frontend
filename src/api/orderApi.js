import axios from "axios";

const orderApi = axios.create({
  baseURL: "http://localhost:8083",
});

export default {
  createOrder: (data) => orderApi.post("/orders", data),
  getAll: () => orderApi.get("/orders"),
  getById: (id) => orderApi.get(`/orders/${id}`)
};
