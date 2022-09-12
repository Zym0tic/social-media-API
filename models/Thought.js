const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: { type: String, unique: true, required: true, trim: true, minlength: 1, maxlength: 280},
    createdAt: {
        type: Date,
        default: Date.now,
      },
      username: { type: String, unique: true, required: true, trim: true },
},
{
    toJSON: {
      getters: true,
    },
    id: false,
  });

  module.exports = thoughtSchema;