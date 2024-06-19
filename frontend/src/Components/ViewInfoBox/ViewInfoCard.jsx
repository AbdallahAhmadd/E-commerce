import './viewinfocard.css';
import React from "react";

const ViewInfoCard = ({ user, onDelete }) => {

    const handleClick = async () => {
    const response = await fetch('/api/users/' + user._id, {
      method: 'DELETE'
    });
    const json = await response.json();

    if (response.ok) {
      // Notify parent component to remove user from state
      if (onDelete) {
        onDelete(user._id);
      }
    } else {
      console.error('Failed to delete the user:', json);
    }
  };
    
  
  

  return (
    <div className='info-card-container'>
      <div className='info-card-container_info'>
        <p><strong>Name:</strong> {user.name.firstName} {user.name.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Password:</strong> {user.password}</p>
      </div>
      <button className='info-card-container_button' onClick={handleClick}>Delete</button>
    </div>
  );
};

export default ViewInfoCard;
