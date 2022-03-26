const mongoose = require('mongoose');
const {nanoid} = require('nanoid');
const config = require('./config');
const Resto = require("./models/Resto");
const User = require("./models/User");

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

  await Resto.create(
    {
      title: 'KFC',
      description: 'Etiam ornare dictum consectetur. Nunc iaculis tortor at neque molestie auctor. Aliquam eget imperdiet turpis. Donec vel quam mauris. Vivamus gravida placerat dui sit amet iaculis. Phasellus viverra finibus orci et pellentesque. Sed vehicula felis sed felis consequat, eget molestie ex rhoncus. Quisque id venenatis lectus, ut malesuada velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur auctor sapien sed consequat placerat.',
      image: 'fixtures/1.jpeg',
      user: user1._id,
      userReview: [
        {
          description: 'Etiam ornare dictum consectetur. Nunc iaculis tortor at neque molestie auctor. Aliquam eget imperdiet turpis. Donec vel quam mauris. Vivamus gravida placerat dui sit amet iaculis. Phasellus viverra finibus orci et pellentesque.',
          ReviewFood: 3,
          ReviewQuality: 3,
          ReviewInterior: 0,
          User: user1._id,
        },
        {
          description: 'Etiam ornare dictum consectetur. Nunc iaculis tortor at neque molestie auctor. Aliquam eget imperdiet turpis. Donec vel quam mauris. Vivamus gravida placerat dui sit amet iaculis. Phasellus viverra finibus orci et pellentesque.',
          ReviewFood: 1,
          ReviewQuality: 1,
          ReviewInterior: 0,
          User: user1._id,
        },
        {
          description: 'Etiam ornare dictum consectetur. Nunc iaculis tortor at neque molestie auctor. Aliquam eget imperdiet turpis. Donec vel quam mauris. Vivamus gravida placerat dui sit amet iaculis. Phasellus viverra finibus orci et pellentesque.',
          ReviewFood: 5,
          ReviewQuality: 5,
          ReviewInterior: 0,
          User: user2._id,
        },
      ],
      userImage: [
        {
          image: 'fixtures/2.jpeg',
          user: user1._id,
        },
        {
          image: 'fixtures/2.jpeg',
          user: user1._id,
        },
        {
          image: 'fixtures/2.jpeg',
          user: user1._id,
        },
        {
          image: 'fixtures/2.jpeg',
          user: user1._id,
        },
        {
          image: 'fixtures/2.jpeg',
          user: user1._id,
        },
        {
          image: 'fixtures/2.jpeg',
          user: user1._id,
        },
        {
          image: 'fixtures/2.jpeg',
          user: user1._id,
        },
        {
          image: 'fixtures/2.jpeg',
          user: user1._id,
        },
      ]
    },
    {
      title: 'Macdonalds',
      description: 'Etiam ornare dictum consectetur. Nunc iaculis tortor at neque molestie auctor. Aliquam eget imperdiet turpis. Donec vel quam mauris. Vivamus gravida placerat dui sit amet iaculis. Phasellus viverra finibus orci et pellentesque. Sed vehicula felis sed felis consequat, eget molestie ex rhoncus. Quisque id venenatis lectus, ut malesuada velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur auctor sapien sed consequat placerat.',
      image: 'fixtures/3.jpeg',
      user: user2._id,
      userReview: [
        {
          description: 'Etiam ornare dictum consectetur. Nunc iaculis tortor at neque molestie auctor. Aliquam eget imperdiet turpis. Donec vel quam mauris. Vivamus gravida placerat dui sit amet iaculis. Phasellus viverra finibus orci et pellentesque.',
          ReviewFood: 5,
          ReviewQuality: 5,
          ReviewInterior: 5,
          User: user2._id,
        },
        {
          description: 'Etiam ornare dictum consectetur. Nunc iaculis tortor at neque molestie auctor. Aliquam eget imperdiet turpis. Donec vel quam mauris. Vivamus gravida placerat dui sit amet iaculis. Phasellus viverra finibus orci et pellentesque.',
          ReviewFood: 3,
          ReviewQuality: 3,
          ReviewInterior: 5,
          User: user2._id,
        },
        {
          description: 'Etiam ornare dictum consectetur. Nunc iaculis tortor at neque molestie auctor. Aliquam eget imperdiet turpis. Donec vel quam mauris. Vivamus gravida placerat dui sit amet iaculis. Phasellus viverra finibus orci et pellentesque.',
          ReviewFood: 1,
          ReviewQuality: 2,
          ReviewInterior: 5,
          User: user1._id,
        },
      ],
      userImage: [
        {
          image: 'fixtures/4.jpeg',
          user: user2._id,
        },
        {
          image: 'fixtures/4.jpeg',
          user: user2._id,
        },
        {
          image: 'fixtures/4.jpeg',
          user: user2._id,
        },
        {
          image: 'fixtures/4.jpeg',
          user: user2._id,
        },
        {
          image: 'fixtures/4.jpeg',
          user: user2._id,
        },
        {
          image: 'fixtures/4.jpeg',
          user: user2._id,
        },
        {
          image: 'fixtures/4.jpeg',
          user: user2._id,
        },
        {
          image: 'fixtures/4.jpeg',
          user: user2._id,
        },
        {
          image: 'fixtures/4.jpeg',
          user: user2._id,
        },
      ]
    },
  );

  await mongoose.connection.close();
};

run().catch(console.error);