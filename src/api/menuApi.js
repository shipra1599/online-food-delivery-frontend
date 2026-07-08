import axiosClient from "./axiosClient";

const menuApi = {
  getMenuByRestaurant: (restaurantId) =>
    axiosClient.get(`/restaurants/${restaurantId}/menu`),
};

export default menuApi;
