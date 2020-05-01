const { Schema, model } = require('mongoose');

const messageWorkSchema = new Schema({
  index: {
    type: Number,
    required: true
  },
  messages: [
    {
      id: {
        type: Number,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      messageOwner: {
        type: Boolean,
        required: true
      }
    }
  ]
  ,
});

module.exports = model('Message', messageWorkSchema);
