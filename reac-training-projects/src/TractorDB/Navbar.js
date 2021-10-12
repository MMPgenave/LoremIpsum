import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <h1>Cocktail Database</h1>
      <nav>
        <Link className="Navbar-Link" to="/">
          Home
        </Link>

        <Link className="Navbar-Link" to="/About">
          About
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
