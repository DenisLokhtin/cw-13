const express = require('express');
require('dotenv').config();
const config = require('./config');
const cors = require('cors');
const mongoose = require('mongoose');
const user = require('./routes/user');
const resto = require('./routes/resto');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const port = 8000;

app.use('/users', user);
app.use('/resto', resto);


const run = async () => {
  await mongoose.connect(config.db.url);

  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });
};

run();


