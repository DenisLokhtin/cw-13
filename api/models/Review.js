const mongoose = require('mongoose');

const ReviewsSchema = new mongoose.Schema({
  description: {
    type: String,
    required: 'Название является обязательным полем',
  },
  ReviewFood: {
    type: Number,
    min: 1,
    max: 5,
    required: 'Рейтинг является обязательным полем',
  },
  ReviewQuality: {
    type: Number,
    min: 1,
    max: 5,
    required: 'Рейтинг является обязательным полем',
  },
  ReviewInterior: {
    type: Number,
    min: 1,
    max: 5,
    required: 'Рейтинг является обязательным полем',
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


const Reviews = mongoose.model('Reviews', ReviewsSchema);
module.exports = Reviews;