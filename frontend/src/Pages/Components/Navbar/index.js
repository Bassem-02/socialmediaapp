import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// Function to get the first letter of the firstname
const getInitial = (name) => {
  return name && name.trim().length > 0 ? name.charAt(0).toUpperCase() : ""; // Return first letter or empty string
};

const Navbar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-3">
      <div className="navbar-brand fw-bold">Flow Space</div>

      <div className="d-flex align-items-center ms-auto">
        <div className="navbar_profile_search d-flex align-items-center me-3">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-secondary me-2" />
          <input type="text" className="form-control" placeholder="Search ..." />
        </div>

        <button className="btn btn-primary me-3">
          <FontAwesomeIcon icon={faSquarePlus} className="me-2" />
          Create
        </button>

       
      </div>
    </nav>
  );
};

export default Navbar;
