import axios from "axios";

const menuApi = axios.create({
  baseURL: "http://localhost:8082",
});

export default {
  getMenuByRestaurant: (restaurantId) =>
    menuApi.get(`/menu/restaurant/${restaurantId}`)
};
