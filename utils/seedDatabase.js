const db = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./seedData');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Thought.deleteMany({});

    const createdUsers = await User.insertMany(users);
    const createdThoughts = await Thought.insertMany(thoughts);

    console.log('All Users and Thoughts seeded!');
  } catch (err) {
    console.error(err);
  } finally {
    process.exit(0);
  }
});
