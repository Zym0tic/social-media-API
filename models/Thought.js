const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: { type: String, required: true, maxlength: 280},
      username: { type: String, required: true},
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
);

const thoughtSchema = new Schema({
    thoughtText: { type: String, unique: true, required: true, trim: true, minlength: 1, maxlength: 280},
    createdAt: {
        type: Date,
        default: Date.now,
      },
      username: [{ type: Schema.Types.ObjectId, ref: 'user' }],
      reactions: [reactionSchema]
},
{
    toJSON: {
      getters: true,
    },
    id: false,
  });

  thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });


  const Thought = model('thought', thoughtSchema);
  module.exports = Thought;