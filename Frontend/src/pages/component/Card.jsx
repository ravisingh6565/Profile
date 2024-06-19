import React, { useState, useEffect } from "react";
import axios from "axios";
import DescCard from "./DescCard";
import "./card.css";
import img1 from "../../assets/file.png";

const Card = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [userData, setUserData] = useState(null); // State to store fetched user data

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/"); 
        // Fetching data from backend
        setUserData(response.data.info); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();

  }, []); // Empty dependency array ensures this runs only once on component mount

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle dark mode
  };

  const themeClass = darkMode ? "dark-mode" : "light-mode";

  return (
    <div className="main-box">
      <div className={`container ${themeClass}`}>
        {/* Dark mode toggle switch */}
        <input
          type="checkbox"
          id="switch"
          className="switch-input"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="switch" className="toggle-label">
          <div className="toggle-button"></div>
        </label>
        <div className="outer">
          <div className="content">
            <div className="image-box">
              <img src={img1} alt="Profile" />
            </div>
            <div className="details">
              {userData ? (
                <>
                  <div className="name">{userData.username}</div>
                  <div className="job">{userData.jobProfile}</div>
                  <div className="buttons">
                    <p>{userData.intro}</p>
                    <button>Read More</button>
                  </div>
                </>
              ) : (
                <div>Loading user data...</div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* DescCard component for displaying detailed information */}
      {userData && <DescCard userData={userData} />}
    </div>
  );
};

export default Card;
