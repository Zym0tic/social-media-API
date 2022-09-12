const { Schema, model } = require('mongoose');
const thoughtSchema = require('Thought');

const userSchema = new Schema({
    userName: { type: String, unique: true, required: true, trim: true },
    email: { type: String, required: true },
    thoughts: [thoughtSchema],
});

const User = model('user', userSchema);
module.exports = User;