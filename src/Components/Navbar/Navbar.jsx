import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="subNavbar">
        <ul>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/product">
            <li>Products</li>
          </Link>
          <Link to="/users">
            <li>Users</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/login">
           <li>Logout</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
