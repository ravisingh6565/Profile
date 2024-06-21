import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../component/Navbar.jsx';
import './formComponent.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    username: '',
    jobProfile: '',
    intro: '',
    image: '',
    interest: '',
    hobby: '',
    qualification: '',
    dob: '',
    address: '',
    projectName: '',
    email: '',
    contactNumber: '',
    favoriteMovie: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/infoForm', formData);
      console.log('Form submitted successfully:', response.data);
      
      setFormData({
        username: '',
        jobProfile: '',
        intro: '',
        image: '',
        interest: '',
        hobby: '',
        qualification: '',
        dob: '',
        address: '',
        projectName: '',
        email: '',
        contactNumber: '',
        favoriteMovie: ''
      });
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2>Enter Your Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Job Profile:</label>
            <input
              type="text"
              name="jobProfile"
              value={formData.jobProfile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Introduction:</label>
            <textarea
              name="intro"
              value={formData.intro}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Image URL:</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Interest:</label>
            <input
              type="text"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Hobby:</label>
            <input
              type="text"
              name="hobby"
              value={formData.hobby}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Qualification:</label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Project Name:</label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact Number:</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Favorite Movie:</label>
            <input
              type="text"
              name="favoriteMovie"
              value={formData.favoriteMovie}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
