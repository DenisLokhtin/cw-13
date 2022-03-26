const mongoose = require("mongoose");

const review = new mongoose.Schema({
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

const Review = mongoose.model('Review', review);
module.exports = Review;