const { Reaction, Thought, User } = require('../models');

module.exports = {
    // Get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Get a single Thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
            .select('-__V');

            if(!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
              }

            res.json(thought)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Create a new Thought
    async createThought(req, res) {
        try {
            const dbThoughtData = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { username: req.body.username },
                { $addToSet: { thoughts: dbThoughtData._id } },
                { runValidators: true, new: true }
                )

                if(!user) {
                    return res.status(404).json({ message: 'No user with this ID!' });
                }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Update a Thought by ID
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if(!thought) {
                return res.status(404).json({ message: 'No thought with this ID!' });
            }

            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // Delete a Thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });

            if(!thought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }

            res.json({ message: 'thought successfully Deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Create Reaction to Thought
    async addReaction(req, res) {
        try {
      //      dbReactionData = await Reaction.create(req.body)
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
                );

            if(!thought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }
            res.json(thought)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete Reaction to Thought
    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: req.params.reactionId } },
                { runValidators: true, new: true }
                );

            if(!thought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }

            res.json({ message: 'Reaction successfully Deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    }
}