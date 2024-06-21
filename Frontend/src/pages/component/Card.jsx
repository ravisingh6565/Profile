import React, { useState, useEffect } from "react";
import axios from "axios";
import DescCard from "./DescCard";
import "./card.css";

const Card = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [userData, setUserData] = useState(null); 
  const [newId, setNewID] = useState('667333963e985250ea5ec0f1');
  // useEffect(()=>{
  //   fetchUserId = async ()=>{
  //     const res = await axios.get()
  //   }
  // })

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/", {
          params: { _id: newId } 
        });
        setUserData(response.data.data.info); 
        setNewID(response.data.data.id); 
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [newId]); 

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode); 
  };

  const themeClass = darkMode ? "dark-mode" : "light-mode";

  return (
    <div className={`main-box ${themeClass} `}>
      <div className= "container">
       
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
              {userData ? (
                <img src={userData.image} alt="Profile" />
              ) : (
                <div>Loading image...</div>
              )}
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
      {userData && <DescCard userData={userData} />}
    </div>
  );
};

export default Card;
