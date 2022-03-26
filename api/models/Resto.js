const mongoose = require('mongoose');

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
  userReview: [{
    type: mongoose.Types.ObjectId,
    ref: 'Review',
  }],
  userImage: [{
    type: mongoose.Types.ObjectId,
    ref: 'Image',
  }],
});


const Resto = mongoose.model('Resto', RestoSchema);
module.exports = Resto;