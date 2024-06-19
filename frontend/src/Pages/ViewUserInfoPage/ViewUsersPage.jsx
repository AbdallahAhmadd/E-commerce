import React, { useEffect, useState } from "react";
import ViewInfoCard from "../../Components/ViewInfoBox/ViewInfoCard.jsx";
import './viewuserspage.css';
import AnalysisImage from './analysis-woman.png';
import LogoutButton from "../../Components/Button/LogoutButton.jsx";

function ViewUsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      if (response.ok) {
        setUsers(data);
        console.log(data);
      }
    };
    fetchUsers();
  }, []);

  const handleUserDelete = (userId) => {
    setUsers(users.filter(user => user._id !== userId));
  };

  return (
    <>
      <div className="view-users-header">
        <p>View Users</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="info-cards-container">
          {users.map(user => (
            <ViewInfoCard key={user._id} user={user} onDelete={handleUserDelete} />
          ))}
        </div>
        <div className="view-info-image-container">
          <img src={AnalysisImage} alt="woman working on a computer" />
          <div className="logout-button-container">
            <LogoutButton/>
          </div>
          
        </div>
       
      </div>
    </>
  );
}

export default ViewUsersPage;
