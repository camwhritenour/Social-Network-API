const { Thought } = require('../models');
const User = require('../models/User')

module.exports = {
    //Get All Users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Get User by ID
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .select('-__V');

            if(!user) {
                return res.status(404).json({ message: 'No user with that ID' });
              }

            res.json(user)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Create a new User
    async createUser(req, res) {
       try {
        const dbUserData = await User.create(req.body);
        res.json(dbUserData);
       } catch (err) {
        res.status(500).json(err);
       }
    },
    // Update a User by ID
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if(!user) {
                return res.status(404).json({ message: 'No User with this ID!' });
            }

            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // Delete a User by ID
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndRemove({ _id: req.params.userId });

            if(!user) {
                return res.status(404).json({ message: 'No User with this id!' });
            }

            res.json({ message: 'User successfully Deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Add new friend to User's friend list
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: {friends: req.params.friendId} },
                { runValidators: true, new: true }
                );

                if(!user) {
                    return res.status(404).json({ message: 'No User with this ID!' });
                }
    
                res.json(user);

        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete Friend from User's Friend list
    async removeFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { runValidators: true, new: true }
                );

            if(!user) {
                return res.status(404).json({ message: 'No User with this id!' });
            }

            res.json({ message: 'Friend successfully Deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    }
}