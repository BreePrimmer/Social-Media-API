const { Thought, User } = require('../Models');

module.exports = {
    // get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find({});
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get a single thought
    async getSingleThought(req, res) {
        try{
            const thought = await Thought.findOne({_id: req.params.id});
            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
            console.log('error')
        }
    },
    // create a thought
    async createThought(req, res) {
        try {
            // new thought from the user input
            const newThought = await Thought.create(req.body);
            // finds the user that the thought will belong to and updates the user.
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId},
                // $push is pushing the new thought to the 'thoughts' property of user.
                { $push: {thoughts: newThought._id} },
                // {new: true} will return the document after it has been updated. By default, it returns
                // the document before it is updated.
                {new: true}
            )
            res.status(200).json(user)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // update a thought
    async updateThought(req, res) {
        try {
            const updatedThought = await Thought.findOneAndUpdate(
                { _id: req.params.id },
                { thoughtText: req.body.thoughtText },
                { new: true }
            );
            // according to mongoosejs.com, it says that .save() is the correct way to update
            // an existing document. .save() allows full validation and middleware.
            await updatedThought.save();
            res.status(200).json(updatedThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete a thought
    async deleteThought(req, res) {
        try {
            const deletedThought = await Thought.findOneAndDelete(
                { _id: req.params.id }
            );
            const user = await User.findOneAndUpdate(
                { thoughts: req.params.id },
                // after the thought id is found, it is 'pulled' from the array, aka deleted.
                { $pull: {thoughts: req.params.id} },
                { new: true }
            );
            await user.save()
            res.status(200).json(deletedThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a reaction
    async createReaction(req, res) {
        try {
            const newReaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $push: {reactions: req.body} },
                // validators for update functions are off by default, to enable them, we have
                // to use 'runValidators'
                // we are using a validator on the length of the body
                { new: true, runValidators: true }
            );
            res.status(200).json(newReaction);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete a reaction
    async deleteReaction(req, res) {
        try {
            const deletedReaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: {reactions: {id: req.params.id}} },
                { new: true }
            );
            res.status(200).json(deletedReaction);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}