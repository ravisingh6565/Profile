import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './navbar.css';
import fileImg from '../../assets/file.png';
import Card from './Card';
import Footer from './Footer';

const Navbar = () => {
  const [showCard, setShowCard] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [userData, setUserData] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/", {
          params: { _id: "667333963e985250ea5ec0f1" },
        });

        setUserData(response.data.data.info); 
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []); 

  const toggleCard = () => {
    setShowCard(prevShowCard => !prevShowCard);
  };

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode); 
  };

  const navigateToForm = () => {
    navigate('/form');
  };

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <div className={`main-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className='navbar-container'>
          <h3 onClick={navigateToHome}>Home</h3>
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 onClick={navigateToForm}>Form-data</h3>
        </div>
        <div>
          <img src={userData ? userData.image : fileImg} alt='' className='profile-img' onClick={toggleCard} />
        </div>
      </div>
      {showCard && <Card />}
    {/* <Footer/> */}
    </div>
  );
};

export default Navbar;
