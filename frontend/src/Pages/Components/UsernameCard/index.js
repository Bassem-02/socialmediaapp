import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "?");

const UsernameCard = ({ user }) => {
  return (
    <div className="d-flex align-items-center p-2 border rounded shadow-sm" style={{ maxWidth: "280px" }}>
      <div
        className="d-flex justify-content-center align-items-center rounded-circle bg-primary text-white fw-bold me-2"
        style={{ width: "40px", height: "40px", fontSize: "16px" }}
      >
        {user?.picture ? (
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle"
            width="40"
            height="40"
          />
        ) : (
          getInitial(user?.firstname)
        )}
      </div>

      <div>
        <h6 className="mb-0">{`${user?.firstname} ${user?.lastname}`}</h6>
        <small className="text-muted">@basssemarbi</small>
      </div>
    </div>
  );
};

export default UsernameCard;
