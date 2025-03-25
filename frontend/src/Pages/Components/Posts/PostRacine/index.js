import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PostRacine = () => {
  return (
    <div className="card my-3 w-100">
      {/* Header Section */}
      <div className="card-header d-flex align-items-center">
        <div
          style={{
            width: "45px",
            height: "45px",
            overflow: "hidden",
            borderRadius: "50%",
          }}
        >
          <img
            src="https://images.pexels.com/photos/31209915/pexels-photo-31209915/free-photo-of-un-pere-attentionne-tenant-son-nouveau-ne-dans-ses-bras.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="ms-2">
          <h5 className="mb-0">Bassem Arbi</h5>
          <small className="text-muted">14 hours ago</small>
        </div>
      </div>

      {/* Body Section */}
      <div className="card-body">
        <p className="card-text fs-5">Hello, this is my first post...</p>
      </div>

      {/* Footer Section */}
      <div className="card-footer">
        <div className="d-flex justify-content-between align-items-center">
          <a href="/register" className="btn btn-outline-primary btn-sm me-2">
            Like
          </a>
          <a href="/register" className="btn btn-outline-secondary btn-sm me-2">
            Comment
          </a>
          <a href="/register" className="btn btn-outline-success btn-sm">
            Share
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostRacine;
