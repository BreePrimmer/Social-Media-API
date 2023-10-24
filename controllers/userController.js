const { User } = require('../Models');

module.exports = {
    // gets all users
    async getUsers (req, res) {
        try {
            // finds all users and populates the thoughts
            const users = await User.find()
            .populate({
                path: 'thoughts',
                // -__v has to do with 'versionKey', and this will
                // keep track of the versions of documents.
                select: '-__v'
            });
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get a single user
    async getSingleUser (req, res) {
        try {
            const user = await User.findOne({_id: req.params.id})
            .populate({
                path: 'thoughts',
                select: '-__v'
            });
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // make a new user
    async createUser (req, res) {
        try {
            const newUser = await User.create(req.body);
            res.status(200).json(newUser);
        } catch (err) {
            res.status(500).json(err);
        }  
    },
    // update a user
    async updateUser (req, res) {
        try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: req.params.id },
                // set replaces the value of a field with a new value
                { $set: req.body },
                { new: true, runValidators: true }
            )
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }  
    },
    // delete a user
    async deleteUser (req, res) {
        try {
            const deletedUser = User.findOneAndDelete(
                { _id: req.params.id },
            )
            res.status(200).json(deletedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // ------------------------------------------------------
    // add a friend
    async addFriend (req, res) { 
        try {
            const user = await User.findOne(
                { _id: req.params.userId }
            );

            const friend = await User.findOne(
                { _id: req.params.friendId}
            )

            if (user.friends.includes(friend._id)) {
                res.status(404).json({ message: 'This user is already your friend.'})
            } else {
                const newFriend = await User.findOneAndUpdate(
                    { _id: req.params.userId },
                    { $push: {friends: req.params.friendId} },
                    { new: true }
                )
                res.status(200).json(newFriend);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete a friend
    async deleteFriend(req, res) {
        try {
            const deletedFriend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: {friends: req.params.friendId} },
                { new: true }
            )
            res.status(200).json(deletedFriend);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}