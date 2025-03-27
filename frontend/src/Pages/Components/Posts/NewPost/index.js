import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faImage, faVideo } from "@fortawesome/free-solid-svg-icons";

const NewPost = () => {
  return (
    <div className="card my-3 w-100">
      {/* User Input Section */}
      <div className="card-header d-flex align-items-center">
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            overflow: "hidden",
            marginRight: "10px",
          }}
        >
          <img
            src="https://images.pexels.com/photos/27347656/pexels-photo-27347656/free-photo-of-portrait-de-caniche-serein.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <textarea
          placeholder="What's on your mind?"
          style={{
            flex: "1",
            lineHeight: "1.5",
            fontSize: "16px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            padding: "10px",
            resize: "none",
          }}
        ></textarea>
      </div>

      {/* Post Buttons */}
      <div className="card-footer d-flex justify-content-between">
        <div>
          <button className="btn btn-outline-primary me-2">
            <FontAwesomeIcon icon={faImage} /> Post Photo
          </button>
          <button className="btn btn-outline-secondary">
            <FontAwesomeIcon icon={faVideo} /> Post Video
          </button>
        </div>
        <button
          className="btn btn-primary"
          style={{ padding: "10px 20px", borderRadius: "8px" }}
        >
          <FontAwesomeIcon icon={faShare} /> Post it!
        </button>
      </div>
    </div>
  );
};

export default NewPost;
