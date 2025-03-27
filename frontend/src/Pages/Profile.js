import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom"; // Import pour rediriger après déconnexion

const Profile = () => {
  const navigate = useNavigate(); // Pour rediriger vers la page d'accueil
  const [user, setUser] = useState({
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    password: "********", // Ne pas afficher le vrai mot de passe
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    picture: "https://media.licdn.com/dms/image/v2/D5603AQEox6P-h5eLew/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705930695338?e=1748476800&v=beta&t=BCiFY_cj5sC51qqPnvQedowRMtCjPcLEELTwVyXkWKE", // URL de l'image
    birthdate: "1990-01-01",
  });

  const [showOptions, setShowOptions] = useState(false); // Gérer l'affichage des options de photo
  const [showFullScreen, setShowFullScreen] = useState(false); // Gérer l'affichage en plein écran de la photo

  // Fonction pour se déconnecter
  const handleLogout = () => {
    navigate("/"); // Redirige vers la page d'accueil
  };

  // Fonction pour afficher les options de la photo de profil
  const handleImageClick = () => {
    setShowOptions(!showOptions); // Alterne l'affichage des options
  };

  // Fonction pour afficher la photo en plein écran
  const handleFullScreen = () => {
    setShowFullScreen(true);
  };

  return (
    <div className="container mt-5">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
   
      </nav>

      <div className="row mt-5 pt-5">
        {/* Section Image de Profil */}
        <div className="col-md-4 text-center">
          <img
            src={user.picture}
            alt="Profile"
            className="img-fluid rounded-circle mb-3"
            style={{ width: "150px", height: "150px" }}
            onClick={handleImageClick} // Ajout d'un événement au clic de l'image
          />
          <h3>{user.firstname} {user.lastname}</h3>
          <p className="text-muted">Software Engineer</p>

          {/* Affichage des options pour changer la photo ou afficher en plein écran */}
          {showOptions && (
            <div>
              <button className="btn btn-outline-primary" onClick={() => alert('Changer la photo')}>Changer photo</button>
              <button className="btn btn-outline-secondary ms-2" onClick={handleFullScreen}>Afficher en plein écran</button>
            </div>
          )}

          {/* Paramètres de confidentialité et notifications */}
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

          {/* Log Out button */}
          <div className="mt-3">
            <button className="btn btn-danger w-100" onClick={handleLogout}>Log Out</button>
          </div>
        </div>

        {/* Section Informations du Profil */}
        <div className="col-md-8">
          <form>
            {/* Prénom et Nom */}
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                value={user.firstname}
                onChange={(e) => setUser({ ...user, firstname: e.target.value })}
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
                onChange={(e) => setUser({ ...user, lastname: e.target.value })}
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
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>

            {/* Mot de passe */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
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
                onChange={(e) => setUser({ ...user, bio: e.target.value })}
                rows="4"
              ></textarea>
            </div>

            {/* Date de naissance */}
            <div className="form-group">
              <label htmlFor="birthdate">Birthdate</label>
              <input
                type="date"
                className="form-control"
                id="birthdate"
                name="birthdate"
                value={user.birthdate}
                onChange={(e) => setUser({ ...user, birthdate: e.target.value })}
              />
            </div>

            {/* URL de la photo de profil */}
            <div className="form-group">
              <label htmlFor="picture">Profile Picture URL</label>
              <input
                type="text"
                className="form-control"
                id="picture"
                name="picture"
                value={user.picture}
                onChange={(e) => setUser({ ...user, picture: e.target.value })}
              />
            </div>

            {/* Enregistrer les modifications */}
            <button type="submit" className="btn btn-primary mt-3">Save Changes</button>
          </form>
        </div>
      </div>

      
    </div>
  );
};

export default Profile;