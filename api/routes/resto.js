const express = require('express');
const multer = require('multer');
const path = require('path');
const {nanoid} = require('nanoid');
const config = require('../config');
const Resto = require('../models/Resto');
const Review = require('../models/Review');
const Image = require('../models/Images');
const User = require('../models/User');
const auth = require('../middleware/auth');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({storage});

const router = express.Router();

router.delete('/:id', auth, async (req, res) => {
  console.log(req.params)
  try {
    const resto = await Resto.deleteOne({_id: req.params.id});
    res.send(resto);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get('/', async (req, res) => {
  try {
    const resto = await Resto.find({}).populate({path: 'user', model: 'User'}).populate('userReview').populate('userImage');

    res.send(resto);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const info = await Resto.findById(req.params.id).populate({path: 'user', model: 'User'}).populate('userReview').populate('userImage');

    if (info) {
      res.send(info);
    } else {
      res.status(404).send({error: 'Info not found'});
    }
  } catch {
    res.sendStatus(500);
  }
});

router.post('/', auth, upload.single('image'), async (req, res) => {
  if (req.body.checkbox) {
    try {
      const restoData = {
        title: req.body.title,
        description: req.body.description,
        user: req.user._id,
      };

      if (req.file) {
        restoData.image = 'uploads/' + req.file.filename;
      }

      const resto = new Resto(restoData);
      await resto.save();

      res.send(resto);
    } catch (error) {
      res.status(400).send(error);
    }
  }
});

module.exports = router;