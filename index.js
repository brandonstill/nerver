const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const keys = require('./config/keys');
require('./models/Contact');

mongoose.connect(keys.mongoURI);

// initiate express app
const app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json({ type: '*/*' }));

require('./routes/contactRoutes')(app);

// app listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT);