const { query } = require("express");
const FormModel = require("../models/FormModel.js");


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


const addInfo = async (req, res) => {
  try {
    const newInfo = await FormModel.create(req.body);
    const newId =newInfo._id;
    console.log(newInfo);

    res.json({
      status: 'success',
      results: 1,
      data: {
        info: newInfo,
        id:newId,
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
