import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Import for linking to other pages

const Profile = () => {
  // Set initial user data in state
  const [user, setUser] = useState({
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    password: "********", // Don't display real password
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    picture: "https://media.licdn.com/dms/image/v2/D5603AQEox6P-h5eLew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705930695338?e=1748476800&v=beta&t=BCiFY_cj5sC51qqPnvQedowRMtCjPcLEELTwVyXkWKE", // Your image URL
    birthdate: "1990-01-01",
  });

  // Handle change of input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Profile Picture Section */}
        <div className="col-md-4  text-center">
          <img
            src={user.picture}
            alt="Profile"
            className="img-fluid rounded-circle mb-3"
            style={{ width: "150px", height: "150px" }}
          />
          <h3>{user.firstname} {user.lastname}</h3>
          <p className="text-muted">Software Engineer</p>

          {/* Paramètres de confidentialité and Système de notifications links */}
          <div className="mt-4">
            <Link to="/privacy-settings" className="btn btn-outline-primary w-100 mb-2">
              Paramètres de confidentialité
            </Link>
          </div>
          <div className="mt-2">
            <Link to="/notification-settings" className="btn btn-outline-primary w-100">
              Système de notifications
            </Link>
          </div>
        </div>

        {/* Profile Info Section */}
        <div className="col-md-8">
          <form>
            {/* First Name & Last Name */}
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                value={user.firstname}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                value={user.lastname}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>

            {/* Bio */}
            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <textarea
                className="form-control"
                id="bio"
                name="bio"
                value={user.bio}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>

            {/* Birthdate */}
            <div className="form-group">
              <label htmlFor="birthdate">Birthdate</label>
              <input
                type="date"
                className="form-control"
                id="birthdate"
                name="birthdate"
                value={user.birthdate}
                onChange={handleChange}
              />
            </div>

            {/* Profile Picture (optional change) */}
            <div className="form-group">
              <label htmlFor="picture">Profile Picture URL</label>
              <input
                type="text"
                className="form-control"
                id="picture"
                name="picture"
                value={user.picture}
                onChange={handleChange}
              />
            </div>

            {/* Save Button */}
            <button type="submit" className="btn btn-primary mt-3">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

