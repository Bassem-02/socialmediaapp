import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavbarGuest = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-3">
      <div className="navbar-brand fw-bold">Flow Space</div>

      <div className="d-flex align-items-center ms-auto">
        <div className="navbar_profile_search d-flex align-items-center me-3">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-secondary me-2" />
          <input type="text" className="form-control" placeholder="Search ..." />
        </div>

        <a href="/register" className="btn btn-primary">
          <FontAwesomeIcon icon={faUserPlus} className="me-2" />
          Create Account
        </a>
      </div>
    </nav>
  );
};

export default NavbarGuest;
