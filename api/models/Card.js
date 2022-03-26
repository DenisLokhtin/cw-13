const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
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
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  userResto: {
    type: mongoose.Types.ObjectId,
    ref: 'Card',
  },
  userImage: {
    type: mongoose.Types.ObjectId,
    ref: 'Image',
  },
});


const News = mongoose.model('News', NewsSchema);
module.exports = News;