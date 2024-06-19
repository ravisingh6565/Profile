const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  jobProfile: {
    type: String,
    required: true,
    trim: true
  },
  intro: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  interest: {
    type: String,
    required: true,
    trim: true
  },
  hobby: {
    type: String,
    required: true,
    trim: true
  },
  qualification: {
    type: String,
    required: true,
    trim: true
  },
  dob: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  projectName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  contactNumber: {
    type: String,
    required: true,
    trim: true
  },
  favoriteMovie: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('DescCard', formSchema);
