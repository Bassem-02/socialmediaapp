// components/Sponsored.js
import React from "react";
import { Card } from "react-bootstrap";

const Sponsored = () => {
  return (
    <Card className="mb-4" style={{ border: "none", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="text-muted small">Sponsored</span>
          <button className="btn btn-sm btn-outline-secondary">Create Ad</button>
        </div>
        
        <div className="d-flex align-items-center">
          <div className="me-3">
            <div 
              className="rounded-circle bg-light d-flex justify-content-center align-items-center" 
              style={{ width: "50px", height: "50px", backgroundColor: "#f8f9fa" }}
            >
              <span className="fw-bold text-primary">MC</span>
            </div>
          </div>
          <div>
            <h6 className="mb-0">Mikacometics</h6>
            <p className="text-muted small mb-0">
              Your pathway to stunning and immaculate beauty and makeup
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Sponsored;