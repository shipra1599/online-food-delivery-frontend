import { useEffect } from "react";
import restaurantApi from "../api/restaurantApi";

export default function HomePage() {
  useEffect(() => {
    restaurantApi.getAll().then((res) => console.log(res.data));
  }, []);

  return <h2>Home Page</h2>;
}
