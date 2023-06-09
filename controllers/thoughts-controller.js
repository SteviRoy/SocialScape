const { Thought, User } = require('../models');

const thoughtsController = {
  getAllThoughts(req, res) {
    Thought.find({})
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
    },
    createThought({ body }, res) {
      Thought.create(body)
      .then(({ _id, username }) => {
      return User.findOneAndUpdate(
      { username: username },
      { $push: { thoughts: _id } },
      { new: true }
      );
      })
      .then(dbUserData => {
      if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this username!' });
      return;
      }
      res.json({ message: 'Thought successfully created!' });
      })
      .catch(err => res.status(400).json(err));
      },
      
      updateThought({ params, body }, res) {
      Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(dbThoughtData => {
      if (!dbThoughtData) {
      res.status(404).json({ message: 'No thought found with this id!' });
      return;
      }
      res.json(dbThoughtData);
      })
      .catch(err => res.status(400).json(err));
      },
      
      deleteThought({ params }, res) {
      Thought.findOneAndDelete({ _id: params.id })
      .then(dbThoughtData => {
      if (!dbThoughtData) {
      res.status(404).json({ message: 'No thought found with this id!' });
      return;
      }
      res.json(dbThoughtData);
      })
      .catch(err => res.status(400).json(err));
      },
      
      addReaction({ params, body }, res) {
      Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
      )
      .then(dbThoughtData => {
      if (!dbThoughtData) {
      res.status(404).json({ message: 'No thought found with this id!' });
      return;
      }
      res.json(dbThoughtData);
      })
      .catch(err => res.status(400).json(err));
      },
      
      deleteReaction({ params }, res) {
      Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
      )
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => res.status(400).json(err));
      }
      };
      
      module.exports = thoughtsController;