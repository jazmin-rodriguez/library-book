const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/books');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({origin:'*'}));

// Connect to MongoDB
const mongoURI = 'mongodb+srv://jazminrodriguez736:rjRwFpRiWAJIq7IU@cluster0.mmup7.mongodb.net/library-tracker?retryWrites=true&w=majority';

mongoose
  .connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/books', bookRoutes);

// Start the server
const PORT = 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
