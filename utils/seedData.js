const users = [
  {
    username: 'user1',
    email: 'user1@example.com'
  },
  {
    username: 'user2',
    email: 'user2@example.com'
  },
  {
    username: 'user3',
    email: 'user3@example.com'
  },
  {
    username: 'user4',
    email: 'user4@example.com'
  },
  {
    username: 'user5',
    email: 'user5@example.com'
  }
];

const thoughts = [
  {
    thoughtText: "This is user1's first thought",
    username: 'user1'
  },
  {
    thoughtText: "This is user2's first thought",
    username: 'user2'
  },
  {
    thoughtText: "This is user3's first thought",
    username: 'user3'
  },
  {
    thoughtText: "This is user4's first thought",
    username: 'user4'
  },
  {
    thoughtText: "This is user5's first thought",
    username: 'user5'
  },
  {
    thoughtText: "This is user1's second thought",
    username: 'user1'
  },
  {
    thoughtText: "This is user2's second thought",
    username: 'user2'
  }
];

const reactions = [
  {
    reactionBody: "This is a reaction to user1's first thought",
    username: 'user3'
  },
  {
    reactionBody: "This is a reaction to user1's first thought",
    username: 'user4'
  },
  {
    reactionBody: "This is a reaction to user2's first thought",
    username: 'user5'
  },
  {
    reactionBody: "This is a reaction to user3's first thought",
    username: 'user1'
  },
  {
    reactionBody: "This is a reaction to user4's first thought",
    username: 'user2'
  },
  {
    reactionBody: "This is a reaction to user5's first thought",
    username: 'user3'
  },
];

module.exports = { users, thoughts, reactions };
