const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {

    getThoughts(req, res) {
        Thought.find()
          .then(async (users) => {
            const userObj = {
              users
            };
            return res.json(thoughtrObj);
          })
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },

      getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .select('-__v')
          .then(async (thought) =>
            !user
              ? res.status(404).json({ message: 'No thought with that ID' })
              : res.json({
                  Thought
                })
          )
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },

      createThought(req, res) {
        Thought.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },

      deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
          .catch((err) => res.status(500).json(err));
      },

      updateUser(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with this id!' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
};
