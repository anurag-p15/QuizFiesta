// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const regRoutes = require('./routes/registry');
const authRoutes=require('./routes/auth');
const bioRoutes = require('./routes/bio');
const app = express();
app.use(cors());
app.use(express.json()); // Use the built-in express.json() middleware for parsing JSON

const port = process.env.PORT || 5000;

// Connect to MongoDB using Mongoose
const mongoURI = "mongodb+srv://anuragrp:quizfiesta@cluster0.a8yemi7.mongodb.net/?retryWrites=true&w=majority"; // Replace with your MongoDB URI
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Use the '/api/auth' route for adding new user
app.use('/api/registry/register', regRoutes);
app.use('/api/auth/login', authRoutes);
app.use('/api/bio/login', bioRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
