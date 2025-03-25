import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Request from "./Request";

const Requests = () => {
  const requests = [
    {
      username: "Bassem Arbi",
      profile_image:
        "https://images.pexels.com/photos/15397657/pexels-photo-15397657/free-photo-of-homme-modele-debout-balustrade.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      username: "Ahmed",
      profile_image:
        "https://images.pexels.com/photos/3213842/pexels-photo-3213842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      username: "Helmi Aisii",
      profile_image:
        "https://images.pexels.com/photos/19392463/pexels-photo-19392463/free-photo-of-mode-homme-lunettes-de-soleil-debout.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      username: "Marwen Mabrouk",
      profile_image:
        "https://images.pexels.com/photos/12372730/pexels-photo-12372730.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  return (
    <div className="container my-3" style={{ maxWidth: "320px" }}>
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Requests</h5>
          <span className="badge bg-primary">{requests.length}</span>
        </div>
        <ul className="list-group list-group-flush">
          {requests.map((req, index) => (
            <li key={index} className="list-group-item py-2 px-3">
              <Request data={req} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Requests;
