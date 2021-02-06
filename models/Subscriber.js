const mongoose = require('mongoose');
const Address = require('./Address');
const subscribersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  address: [Address],
}
module.exports = mongoose.model('Subscriber', subscribersSchema);
