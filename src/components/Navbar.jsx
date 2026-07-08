import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Food Delivery</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/restaurants">Restaurants</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cart">Cart</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/orders">Orders</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
