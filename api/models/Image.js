const mongoose = require('mongoose');

const ImagesSchema = new mongoose.Schema({
  image: {
    type: String,
    required: 'Изображение является обязательным полем',
  },
  Resto: {
    type: mongoose.Types.ObjectId,
    ref: 'Card',
  },
  User: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});


const Images = mongoose.model('Images', ImagesSchema);
module.exports = Images;