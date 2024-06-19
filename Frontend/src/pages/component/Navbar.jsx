import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import fileImg from '../../assets/file.png';
import Card from './Card';

const Navbar = () => {
  const [showCard, setShowCard] = useState(false);
  const navigate = useNavigate();

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  const navigateToForm = () => {
    navigate('/form');
  };

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <div className='main-container'>
        <div className='navbar-container'>
          <h3 onClick={navigateToHome}>Home</h3>
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 onClick={navigateToForm}>Form-data</h3>
        </div>
        <div>
          <img src={fileImg} alt='' className='profile-img' onClick={toggleCard} />
        </div>
      </div>
      {showCard && <Card />}
    </div>
  );
};

export default Navbar;
