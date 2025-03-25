import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Request = ({ data }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "350px" }}>
      <div className="card-body text-center">
        <img
          src={data.profile_image}
          alt={data.username}
          className="rounded-circle mb-3"
          style={{ width: "60px", height: "60px", objectFit: "cover" }}
        />
        <p className="fs-5">
          <strong>{data.username}</strong> veut vous ajouter en ami.
        </p>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-center">
          <button className="btn btn-success btn-sm me-3">Accepter</button>
          <button className="btn btn-danger btn-sm">Refuser</button>
        </div>
      </div>
    </div>
  );
};

export default Request;
