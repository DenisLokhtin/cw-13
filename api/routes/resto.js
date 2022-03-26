const express = require('express');
const multer = require('multer');
const path = require('path');
const {nanoid} = require('nanoid');
const config = require('../config');
const Resto = require('../models/Resto');
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

router.get('/', async (req, res) => {
  try {
    const resto = await Resto.find({}).populate('userReview', 'userImage');

    res.send(resto);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const info = await Resto.findById(req.params.id);

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
        user: req.body.user,
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

router.delete('/:id', async (req, res) => {
  try {
    const resto = await Resto.findById(req.params.id);

    if (Object.keys(resto).length === 0) {
      return res.status(404).send({error: `Ресторан не найден.`});
    } else {
      resto.deleted = true;
      await resto.save();
      return res.send({message: `Ресторан ${resto.title} успешно удален.`})
    }
  } catch (error) {
    res.status(404).send(error);
  }
});


module.exports = router;