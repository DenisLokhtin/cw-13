const mongoose = require('mongoose');
const {nanoid} = require('nanoid');
const config = require('./config');
const Resto = require("./models/Resto");
const User = require("./models/User");
const Review = require("./models/Review");
const Image = require("./models/Images");

const run = async () => {
  await mongoose.connect(config.db.url);

  const collections = await mongoose.connection.db.listCollections().toArray();

  for (const coll of collections) {
    await mongoose.connection.db.dropCollection(coll.name);
  }

  const [user1, user2] = await User.create(
    {
      email: `user@gmail.com`,
      password: '12345678',
      token: nanoid(),
      role: 'user',
      name: 'User',
      displayName: `User`,
    },
    {
      email: `admin@gmail.com`,
      password: '12345678',
      token: nanoid(),
      role: 'admin',
      name: 'Admin',
      displayName: `Admin`,
    },
  );

  const [resto1, resto2] = await Resto.create(
    {
      title: 'KFC',
      description: 'Etiam ornare dictum consectetur. Nunc iaculis tortor at neque molestie auctor. Aliquam eget imperdiet turpis. Donec vel quam mauris. Vivamus gravida placerat dui sit amet iaculis. Phasellus viverra finibus orci et pellentesque. Sed vehicula felis sed felis consequat, eget molestie ex rhoncus. Quisque id venenatis lectus, ut malesuada velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur auctor sapien sed consequat placerat.',
      image: 'fixtures/1.jpeg',
      user: user1._id,
    },
    {
      title: 'Macdonalds',
      description: 'Etiam ornare dictum consectetur. Nunc iaculis tortor at neque molestie auctor. Aliquam eget imperdiet turpis. Donec vel quam mauris. Vivamus gravida placerat dui sit amet iaculis. Phasellus viverra finibus orci et pellentesque. Sed vehicula felis sed felis consequat, eget molestie ex rhoncus. Quisque id venenatis lectus, ut malesuada velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur auctor sapien sed consequat placerat.',
      image: 'fixtures/3.jpeg',
      user: user2._id,
    },
  );

  const reviews = await Review.create(
    {
      description: 'Etiam ornare dictum consectetur. Nunc iaculis tortor at neque molestie auctor. Aliquam eget imperdiet turpis. Donec vel quam mauris. Vivamus gravida placerat dui sit amet iaculis. Phasellus viverra finibus orci et pellentesque.',
      ReviewFood: 3,
      ReviewQuality: 3,
      ReviewInterior: 0,
      User: user1._id,
      Resto: resto1._id,
    },
    {
      description: 'Etiam ornare dictum consectetur. Nunc iaculis tortor at neque molestie auctor. Aliquam eget imperdiet turpis. Donec vel quam mauris. Vivamus gravida placerat dui sit amet iaculis. Phasellus viverra finibus orci et pellentesque.',
      ReviewFood: 1,
      ReviewQuality: 1,
      ReviewInterior: 0,
      User: user1._id,
      Resto: resto1._id,
    },
    {
      description: 'Etiam ornare dictum consectetur. Nunc iaculis tortor at neque molestie auctor. Aliquam eget imperdiet turpis. Donec vel quam mauris. Vivamus gravida placerat dui sit amet iaculis. Phasellus viverra finibus orci et pellentesque.',
      ReviewFood: 5,
      ReviewQuality: 5,
      ReviewInterior: 0,
      User: user2._id,
      Resto: resto1._id,
    },
    {
      description: 'Etiam ornare dictum consectetur. Nunc iaculis tortor at neque molestie auctor. Aliquam eget imperdiet turpis. Donec vel quam mauris. Vivamus gravida placerat dui sit amet iaculis. Phasellus viverra finibus orci et pellentesque.',
      ReviewFood: 5,
      ReviewQuality: 5,
      ReviewInterior: 5,
      User: user2._id,
      Resto: resto2._id,
    },
    {
      description: 'Etiam ornare dictum consectetur. Nunc iaculis tortor at neque molestie auctor. Aliquam eget imperdiet turpis. Donec vel quam mauris. Vivamus gravida placerat dui sit amet iaculis. Phasellus viverra finibus orci et pellentesque.',
      ReviewFood: 3,
      ReviewQuality: 3,
      ReviewInterior: 5,
      User: user2._id,
      Resto: resto2._id,
    },
    {
      description: 'Etiam ornare dictum consectetur. Nunc iaculis tortor at neque molestie auctor. Aliquam eget imperdiet turpis. Donec vel quam mauris. Vivamus gravida placerat dui sit amet iaculis. Phasellus viverra finibus orci et pellentesque.',
      ReviewFood: 1,
      ReviewQuality: 2,
      ReviewInterior: 5,
      User: user1._id,
      Resto: resto2._id,
    },
  );

  for (const review of reviews) {
    if (review.Resto === resto1._id) {
      resto1.userReview.push(review)
      await resto1.save();
    } else {
      resto2.userReview.push(review)
      await resto2.save();
    }
  }

  const images = await Image.create(
    {
      image: 'fixtures/2.jpeg',
      user: user1._id,
      Resto: resto1._id,
    },
    {
      image: 'fixtures/2.jpeg',
      user: user1._id,
      Resto: resto1._id,
    },
    {
      image: 'fixtures/2.jpeg',
      user: user1._id,
      Resto: resto1._id,
    },
    {
      image: 'fixtures/2.jpeg',
      user: user1._id,
      Resto: resto1._id,
    },
    {
      image: 'fixtures/2.jpeg',
      user: user1._id,
      Resto: resto1._id,
    },
    {
      image: 'fixtures/2.jpeg',
      user: user1._id,
      Resto: resto1._id,
    },
    {
      image: 'fixtures/2.jpeg',
      user: user1._id,
      Resto: resto1._id,
    },
    {
      image: 'fixtures/2.jpeg',
      user: user1._id,
      Resto: resto2._id,
    },
    {
      image: 'fixtures/4.jpeg',
      user: user2._id,
      Resto: resto2._id,
    },
    {
      image: 'fixtures/4.jpeg',
      user: user2._id,
      Resto: resto2._id,
    },
    {
      image: 'fixtures/4.jpeg',
      user: user2._id,
      Resto: resto2._id,
    },
    {
      image: 'fixtures/4.jpeg',
      user: user2._id,
      Resto: resto2._id,
    },
    {
      image: 'fixtures/4.jpeg',
      user: user2._id,
      Resto: resto2._id,
    },
    {
      image: 'fixtures/4.jpeg',
      user: user2._id,
      Resto: resto2._id,
    },
    {
      image: 'fixtures/4.jpeg',
      user: user2._id,
      Resto: resto2._id,
    },
    {
      image: 'fixtures/4.jpeg',
      user: user2._id,
      Resto: resto2._id,
    },
    {
      image: 'fixtures/4.jpeg',
      user: user2._id,
      Resto: resto2._id,
    },
  );

  for (const image of images) {
    if (image.Resto === resto1._id) {
      resto1.userImage.push(image)
      await resto1.save();
    } else {
      resto2.userImage.push(image)
      await resto2.save();
    }
  }

  for (const review of reviews) {
    if (review.User === user1._id) {
      user1.userReviews.push(review)
    } else {
      user2.userReviews.push(review)
    }
  }

  for (const image of images) {
    if (image.user === user1._id) {
      user1.userImage.push(image)
    } else {
      user2.userImage.push(image)
    }
  }

  const user1Id = user1._id;
  const user2Id = user2._id;

  await User.updateOne({_id: user1Id}, {userResto: [resto1]});
  await User.updateOne({_id: user2Id}, {userResto: [resto2]});
  // await User.findOne({id: user2Id}).then(doc => {
  //   doc.userResto.push(resto2)
  //   doc.save();
  // }).catch(err => {
  //   console.log('Oh! Dark')
  // });

  await mongoose.connection.close();
};

run().catch(console.error);