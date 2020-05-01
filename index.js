const mongoose = require('mongoose');
const express = require("express");
const cors = require('cors');
const path = require('path');
const User = require('./models/users');
const Message = require('./models/messages');
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

async function start() {
  try {
    await mongoose.connect(
      'mongodb://teletype:qwerty12345@cluster0-shard-00-00.mnbtp.mongodb.net:27017,cluster0-shard-00-01.mnbtp' +
      '.mongodb.net:27017,cluster0-shard-00-02.mnbtp.mongodb.net:27017/users?ssl=true&replicaSet=atlas-e0tboe-shard-0&authSource=admin&retryWrites=true&w=majority',
        {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      }
    );

    app.get('/messages/:id', async (req, res) => {
      const {
        id
      } = req.params;
      const messages = await Message.findOne({index: id})
      res.send(messages);
    });

    app.get('/users/', async (req, res) => {
      const users = await User.find()
      res.send(users);
    });

    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
}

start();
