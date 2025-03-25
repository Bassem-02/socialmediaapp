import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCalendarDays, 
  faGear, 
  faHome, 
  faPhotoFilm, 
  faUser, 
  faUsers,
  faComments,
  faPeopleGroup 
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="list-group">
        <Link to="/" className="list-group-item list-group-item-action active">
          <FontAwesomeIcon icon={faHome} className="icon-size" />
          <span className="menu-text">Home</span>
        </Link>
        <Link to="/people" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faUsers} className="icon-size" />
          <span className="menu-text">People</span>
        </Link>
        <Link to="/chat" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faComments} className="icon-size" />
          <span className="menu-text">Chat</span>
        </Link>
        <Link to="/photos" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faPhotoFilm} className="icon-size" />
          <span className="menu-text">Photos</span>
        </Link>
        <Link to="/groups" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faPeopleGroup} className="icon-size" />
          <span className="menu-text">Groupes</span>
        </Link>
        <Link to="/feed" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faCalendarDays} className="icon-size" />
          <span className="menu-text">Feed</span>
        </Link>
        <Link to="/profile" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faUser} className="icon-size" />
          <span className="menu-text">Profile</span>
        </Link>
        <Link to="/settings" className="list-group-item list-group-item-action">
          <FontAwesomeIcon icon={faGear} className="icon-size" />
          <span className="menu-text">Settings</span>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
