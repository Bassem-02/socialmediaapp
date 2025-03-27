import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMoon, 
  faBell, 
  faMagnifyingGlass, 
  faCalendarDays, 
  faGear, 
  faHome, 
  faPhotoFilm, 
  faUser, 
  faUsers,
  faComments,
  faPeopleGroup 
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Naavbar = ({ user, toggleTheme, darkMode }) => {
  return (
    <nav className={`navbar navbar-expand-lg px-3 fixed-top ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div className="navbar-brand fw-bold">Flow Space</div>
      
      <div className="d-flex align-items-center ms-auto">
        <div className="navbar_profile_search d-flex align-items-center me-3">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="me-2" />
          <input type="text" className="form-control" placeholder="Search ..." />
        </div>

        {/* Bouton Dark Mode */}
        <button className="btn btn-light me-3" onClick={toggleTheme}>
          <FontAwesomeIcon icon={faMoon} className="me-2" />
        </button>

        {/* Bouton Notifications */}
        <button className="btn btn-light me-3">
          <FontAwesomeIcon icon={faBell} className="me-2" />
        </button>
      </div>
    </nav>
  );
};

const Sidebar = ({ darkMode }) => {
  return (
    <Nav className={`d-flex flex-row justify-content-center py-2 fixed-top ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`} style={{ top: "56px" }}>
      <Nav.Link as={Link} to="/home" className="mx-2">

        <FontAwesomeIcon icon={faHome} /> Home
      </Nav.Link>
      <Nav.Link as={Link} to="/people" className="mx-2">
        <FontAwesomeIcon icon={faUsers} /> People
      </Nav.Link>
      <Nav.Link as={Link} to="/chat" className="mx-2">
        <FontAwesomeIcon icon={faComments} /> Chat
      </Nav.Link>
      <Nav.Link as={Link} to="/photos" className="mx-2">
        <FontAwesomeIcon icon={faPhotoFilm} /> Photos
      </Nav.Link>
      <Nav.Link as={Link} to="/groups" className="mx-2">
        <FontAwesomeIcon icon={faPeopleGroup} /> Groupes
      </Nav.Link>
      <Nav.Link as={Link} to="/feed" className="mx-2">
        <FontAwesomeIcon icon={faCalendarDays} /> Feed
      </Nav.Link>
      <Nav.Link as={Link} to="/profile" className="mx-2">
        <FontAwesomeIcon icon={faUser} /> Profile
      </Nav.Link>
      <Nav.Link as={Link} to="/settings" className="mx-2">
        <FontAwesomeIcon icon={faGear} /> Settings
      </Nav.Link>
    </Nav>
  );
};

const Navbar = ({ user }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]);

  return (
    <>
      <Naavbar user={user} toggleTheme={toggleTheme} darkMode={darkMode} />
      <Sidebar darkMode={darkMode} />
      <div style={{ paddingTop: "112px" }}></div>
    </>
  );
};

export default Navbar;
