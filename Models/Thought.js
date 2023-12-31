const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
            trimm: true
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: function(date){
                return dayJS(date).format('MM/DD/YYYY')
            }
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    }, 
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

