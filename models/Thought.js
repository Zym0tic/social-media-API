const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: { type: String, required: true, maxlength: 280},
      userName: { type: String, required: true},
      createdAt: {
        type: Date,
        default: Date.now,
        get: v => new Date(v)
      },
    },
);

const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, trim: true, minlength: 1, maxlength: 280},
    createdAt: {
        type: Date,
        default: Date.now,
        get: v => new Date(v)
      },
      userName: { type: String, unique: true, required: true, trim: true },
      reactions: [reactionSchema]
},
{
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  });

  thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });


  const Thought = model('thought', thoughtSchema);
  module.exports = Thought;