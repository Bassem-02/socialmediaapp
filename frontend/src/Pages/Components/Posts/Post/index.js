import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const LikeButton = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const emojiList = [
    { name: "Like", icon: "👍" },
    { name: "Love", icon: "❤️" },
    { name: "Haha", icon: "😂" },
    { name: "Wow", icon: "😮" },
    { name: "Sad", icon: "😢" },
    { name: "Angry", icon: "😡" },
  ];

  const handleSelect = (emoji) => {
    setSelectedEmoji(emoji);
  };

  return (
    <div className="btn-group">
      <button type="button" className="btn btn-primary">
        {selectedEmoji ? selectedEmoji.icon : "Like"}
      </button>
      <button
        type="button"
        className="btn btn-primary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul className="dropdown-menu">
        {emojiList.map((emoji, index) => (
          <li key={index}>
            <button
              className="dropdown-item"
              onClick={() => handleSelect(emoji)}
            >
              {emoji.icon} {emoji.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Post = () => {
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
          <LikeButton />
          <div>
            <button className="btn btn-outline-secondary btn-sm me-2">
              Comment
            </button>
            <button className="btn btn-outline-success btn-sm">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
