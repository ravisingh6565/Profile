const { query } = require("express");
const FormModel = require("../models/FormModel.js");

// Retrieve all information
const getAllinfo = async (req, res) => {
  try {
    const info = await FormModel.find();
    console.log(info);
    
    res.json({
      status: 'success',
      results: info.length,
      data: {
        info,
      },
    });
  } catch (err) {
    res.status(403).json({
      status: 'fail',
      message: err.message || 'An error occurred while retrieving the data',
    });
  }
};

// Retrieve information by ID
const getInfoById = async (req, res) => {
  const {_id} = req.query;
  console.log(_id)
  try {
    const info = await FormModel.findById(_id);
    if (!info) {
      return res.status(404).json({ status: 'fail', message: 'Info not found' });
    }
    res.json({
      status: 'success',
      data: {
        info,
      },
    });
  } catch (err) {
    res.status(403).json({
      status: 'fail',
      message: err.message || 'An error occurred while retrieving the data',
    });
  }
};

// Add new information
const addInfo = async (req, res) => {
  try {
    const newInfo = await FormModel.create(req.body);
    console.log(newInfo);

    res.json({
      status: 'success',
      results: 1,
      data: {
        info: newInfo,
      },
    });
  } catch (err) {
    res.status(403).json({
      status: 'fail',
      message: err.message || 'An error occurred while adding the data',
    });
  }
};

module.exports = {
  getAllinfo,
  addInfo,
  getInfoById,
};
