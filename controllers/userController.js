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
        
       } catch (err) {
        res.status(500).json(err);
       }
    }
}