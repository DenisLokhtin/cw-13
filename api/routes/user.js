const axios = require("axios").create();
const config = require("../config");
const {nanoid} = require("nanoid");
const express = require('express');
const User = require('../models/User');
const Review = require('../models/Review');
const Image = require('../models/Images');
const Resto = require('../models/Resto');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const user = new User({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    });

    user.generateToken();
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/sessions', async (req, res) => {
  const user = await User.findOne({email: req.body.email}).populate('userReviews').populate('userResto').populate('userImage');

  if (!user) {
    return res.status(401).send({message: 'Credentials are wrong!'});
  }

  const isMatch = await user.checkPassword(req.body.password);

  if (!isMatch) {
    return res.status(401).send({message: 'Credentials are wrong!'});
  }

  user.generateToken();
  await user.save({validateBeforeSave: false});

  res.send({message: 'Email and password correct!', user});
});

router.delete('/sessions', async (req, res) => {
  const token = req.get('Authorization');
  const success = {message: 'Success'};

  if (!token) return res.send(success);

  const user = await User.findOne({token});

  if (!user) return res.send(success);

  user.generateToken();

  await user.save({validateBeforeSave: false});

  return res.send(success);
});

module.exports = router;
