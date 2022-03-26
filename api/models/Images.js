const mongoose = require("mongoose");

const images = new mongoose.Schema({
  image: {
    type: String,
    required: 'Изображение является обязательным полем',
  },
  User: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  Resto: {
    type: mongoose.Types.ObjectId,
    ref: 'Resto',
  },
});

const Image = mongoose.model('Image', images);
module.exports = Image;