import axios from "axios";

const paymentApi = axios.create({
  baseURL: "http://localhost:8084",
});

export default {
  getStatus: (orderId) => paymentApi.get(`/payment/status/${orderId}`)
};
