// components/Requests.js
import React, { useState, useRef } from 'react';
import Request from './Request';
import 'bootstrap/dist/css/bootstrap.min.css';

const Requests = () => {
  const [isOpen, setIsOpen] = useState(false);
  const requestsRef = useRef(null);
  
  const requests = [
    {
      username: "Bassem Arbi",
      profile_image: "https://images.pexels.com/photos/15397657/pexels-photo-15397657/free-photo-of-homme-modele-debout-balustrade.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      username: "Ahmed",
      profile_image: "https://images.pexels.com/photos/3213842/pexels-photo-3213842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      username: "Helmi Aisii",
      profile_image: "https://images.pexels.com/photos/19392463/pexels-photo-19392463/free-photo-of-mode-homme-lunettes-de-soleil-debout.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      username: "Marwen Mabrouk",
      profile_image: "https://images.pexels.com/photos/12372730/pexels-photo-12372730.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  const toggleRequests = () => {
    setIsOpen(!isOpen);
    if (!isOpen && requestsRef.current) {
      requestsRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="container my-3" style={{ maxWidth: "320px" }}>
      <div className="card">
        <div 
          className="card-header d-flex justify-content-between align-items-center cursor-pointer"
          onClick={toggleRequests}
          style={{ cursor: 'pointer' }}
        >
          <h5 className="mb-0">Requests</h5>
          <span className="badge bg-primary">{requests.length}</span>
        </div>
        
        {isOpen && (
          <div 
            ref={requestsRef}
            className="list-group list-group-flush"
            style={{ maxHeight: '400px', overflowY: 'auto' }}
          >
            {requests.map((req, index) => (
              <div key={index} className="list-group-item py-2 px-3">
                <Request data={req} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Requests;