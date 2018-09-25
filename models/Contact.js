const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String
});

mongoose.model('contacts', contactSchema);