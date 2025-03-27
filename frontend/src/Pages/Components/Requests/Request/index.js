// components/Request.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Request = ({ data }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "350px", border: 'none' }}>
      <div className="card-body text-center">
        <img
          src={data.profile_image}
          alt={data.username}
          className="rounded-circle mb-3"
          style={{ 
            width: "60px", 
            height: "60px", 
            objectFit: "cover",
            border: '2px solid #dee2e6'
          }}
        />
        <p className="fs-5 mb-3">
          <strong>{data.username}</strong> veut vous ajouter en ami.
        </p>
      </div>
      <div className="card-footer bg-white">
        <div className="d-flex justify-content-center gap-2">
          <button className="btn btn-success btn-sm px-3">Accepter</button>
          <button className="btn btn-outline-secondary btn-sm px-3">Refuser</button>
        </div>
      </div>
    </div>
  );
};

export default Request;