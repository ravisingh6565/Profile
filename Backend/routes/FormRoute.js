const express = require("express");
const formController = require("../controllers/FormController.js");
const formRouter = express.Router();

formRouter.route('/')
  .get(formController.getInfoById);

formRouter.route('/infoForm')
  .post(formController.addInfo);

module.exports = formRouter;
