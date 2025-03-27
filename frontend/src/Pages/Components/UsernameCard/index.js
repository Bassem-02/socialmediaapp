import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "?");

const generateUsername = (firstname, lastname) => {
  if (!firstname && !lastname) return "username";
  return `${firstname?.toLowerCase() || ""}${lastname?.toLowerCase() || ""}`;
};

const UsernameCard = ({ user }) => {
  const username = user?.username || generateUsername(user?.firstname, user?.lastname);

  return (
    <Card 
      style={{ 
        position: "fixed",
        top: "112px",
        left: "20px",
        zIndex: 1030,
        width: "280px",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}
    >
      <Card.Body className="p-3">
        {/* Avatar and Name Section */}
        <div className="d-flex align-items-center mb-3">
          <div
            className="d-flex justify-content-center align-items-center rounded-circle bg-primary text-white fw-bold me-3"
            style={{ width: "48px", height: "48px", fontSize: "18px" }}
          >
            {user?.picture ? (
              <img
                src={user.picture}
                alt="Profile"
                className="rounded-circle"
                width="48"
                height="48"
              />
            ) : (
              getInitial(user?.firstname)
            )}
          </div>
          <div>
            <h5 className="mb-0 text-dark">{`${user?.firstname || ""} ${user?.lastname || ""}`.trim()}</h5>
            <small className="text-muted">@{username}</small>
          </div>
        </div>

        {/* User Info Section */}
        <div className="mb-3">
          <div className="text-muted small">{user?.friendsCount || "0"} friends</div>
          <div className="text-muted small">{user?.location || "User location"}</div>
          <div className="text-muted small">{user?.occupation || "User occupation"}</div>
        </div>
        
        <hr className="my-2" />
        
        {/* Stats Section */}
        <Row className="mb-2">
          <Col>
            <div className="text-muted small">Profile views</div>
            <div className="text-dark fw-bold">{user?.profileViews || "7502"}</div>
          </Col>
        </Row>
        
        <Row className="mb-3">
          <Col>
            <div className="text-muted small">Post impressions</div>
            <div className="text-dark fw-bold">{user?.postImpressions || "18465"}</div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};


export default UsernameCard;