import './viewinfocard.css';
import React from "react";

const ViewInfoCard = ({ user, onClick }) => {
  return (
    <div className='info-card-container'>
      <div className='info-card-container_info'>
        <p><strong>Name:</strong> {user.name.firstName} {user.name.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Password:</strong> {user.password}</p>
      </div>
      <button className='info-card-container_button' onClick={onClick}>Delete</button>
    </div>
  );
};

export default ViewInfoCard;
