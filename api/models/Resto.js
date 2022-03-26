const mongoose = require('mongoose');

const reviews = new mongoose.Schema({
  description: {
    type: String,
    required: 'Название является обязательным полем',
  },
  ReviewFood: {
    type: Number,
    min: 0,
    max: 5,
    required: 'Рейтинг является обязательным полем',
  },
  ReviewQuality: {
    type: Number,
    min: 0,
    max: 5,
    required: 'Рейтинг является обязательным полем',
  },
  ReviewInterior: {
    type: Number,
    min: 0,
    max: 5,
    required: 'Рейтинг является обязательным полем',
  },
  User: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});

const images = new mongoose.Schema({
  image: {
    type: String,
    required: 'Изображение является обязательным полем',
  },
  User: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});

const RestoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Название является обязательным полем',
  },
  description: {
    type: String,
    required: 'Описание является обязательным полем',
  },
  image: {
    type: String,
    required: 'Изображение является обязательным полем',
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: 'Юзер является обязательным полем',
  },
  userReview: [reviews],
  userImage: [images],
});


const Resto = mongoose.model('Resto', RestoSchema);
module.exports = Resto;