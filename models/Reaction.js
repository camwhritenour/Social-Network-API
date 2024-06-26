const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectID,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
            ref: 'user',
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: { getters: true},
        id: false,
    }
);

module.exports = reactionSchema;