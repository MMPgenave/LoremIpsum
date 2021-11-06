import React from "react";
import { Link } from "react-router-dom";

export function NavbarBootstrap() {
  return (
    <div>
      <nav class=" navbar navbar-light navbar-expand-lg bg-primary shadow p-3 mb-5 bg-body rounded ">
        <div class="container-fluid ">
          <a class="navbar-brand" href="/">
            Cocktail Database
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse  "
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav  ">
              <Link class="nav-link active  " aria-current="page" to="/">
                Home
              </Link>
              <Link class="nav-link  " to="/About">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
