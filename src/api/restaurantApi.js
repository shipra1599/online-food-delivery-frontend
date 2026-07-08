import axiosClient from "./axiosClient";

const restaurantApi = {
  getAll: () => axiosClient.get("/restaurants"),
  getById: (id) => axiosClient.get(`/restaurants/${id}`),
};

export default restaurantApi;
