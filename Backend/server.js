const express = require('express');
const mongoose = require('mongoose');
const formRoute = require('./routes/FormRoute.js');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const url = "mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.zbr7exs.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0";
const databaseUser = "ravisuneel6565";
const databasePassword = "12345";
const databaseName = "Profile-Backend";

let dbLink = url.replace("$_USERNAME_$", databaseUser)
  .replace("$_PASSWORD_$", databasePassword)
  .replace("$_DB_NAME_$", databaseName);

mongoose.connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Database connection error:', err));

app.use('/', formRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
