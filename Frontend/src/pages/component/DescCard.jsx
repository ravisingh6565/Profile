
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './descCard.css';

const DescCard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/'); // Fetching data from backend
        setUserData(response.data.data.info); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  return (
    <div className='info-container'>
      <div className="info">
        {/* Render user data */}
        <p><strong>Username:</strong> {userData.username}</p>
        <p><strong>Job Profile:</strong> {userData.jobProfile}</p>
        <p><strong>Intro:</strong> {userData.intro}</p>
        <p><strong>Image:</strong> <img src={userData.image} alt="Profile" /></p>
        <p><strong>Interest:</strong> {userData.interest}</p>
        <p><strong>Hobby:</strong> {userData.hobby}</p>
        <p><strong>Qualification:</strong> {userData.qualification}</p>
        <p><strong>Date of Birth:</strong> {new Date(userData.dob).toLocaleDateString()}</p>
        <p><strong>Address:</strong> {userData.address}</p>
        <p><strong>Project Name:</strong> {userData.projectName}</p>
        <p><strong>Email ID:</strong> {userData.email}</p>
        <p><strong>Contact Number:</strong> {userData.contactNumber}</p>
        <p><strong>Favorite Movie:</strong> {userData.favoriteMovie}</p>
      </div>
    </div>
  );
};

export default DescCard;
