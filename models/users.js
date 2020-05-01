const { Schema, model } = require('mongoose');

const userWorkSchema = new Schema({
  index: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true
  },
  name: {
    first: {
        type: String,
        required: true
      },
    last: {
      type: String,
      required: true
    }
  },
  lastMessageDate: {
    type: String,
    required: true
  },
  messenger: {
    type: String,
    required: true
  },
  lastMessage : {
    id: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    },
  },
  messageOwner: {
    type: Boolean,
    required: true
  }
});

module.exports = model('User', userWorkSchema);
