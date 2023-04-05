const db = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./seedData');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Thought.deleteMany({});

    await User.insertMany(users);
    await Thought.insertMany(thoughts);

    console.log('All Users and Thoughts seeded!');
  } catch (err) {
    console.error(err);
  } finally {
    process.exit(0);
  }
});
