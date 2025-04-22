const mongoose = require('mongoose');
const Book = require('./models/Book');

const mongoURI = 'mongodb+srv://jazminrodriguez736:rjRwFpRiWAJIq7IU@cluster0.mmup7.mongodb.net/library-tracker?retryWrites=true&w=majority';

mongoose
  .connect(mongoURI)
  .then(async () => {
    console.log('Connected to MongoDB for seeding');

    const books = [
      { title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', isbn: '1111', status: 'available' },
      { title: 'Book 2', author: 'Author 2', publisher: 'Publisher 2', isbn: '2222', status: 'available' },
      { title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', isbn: '3333', status: 'available' },
      { title: 'Book 4', author: 'Author 4', publisher: 'Publisher 4', isbn: '4444', status: 'available' },
      { title: 'Book 5', author: 'Author 5', publisher: 'Publisher 5', isbn: '5555', status: 'available' },
      { title: 'Book 6', author: 'Author 6', publisher: 'Publisher 6', isbn: '6666', status: 'available' },
      { title: 'Book 7', author: 'Author 7', publisher: 'Publisher 7', isbn: '7777', status: 'available' },
      { title: 'Book 8', author: 'Author 8', publisher: 'Publisher 8', isbn: '8888', status: 'available' },
      { title: 'Book 9', author: 'Author 9', publisher: 'Publisher 9', isbn: '9999', status: 'available' },
      { title: 'Book 10', author: 'Author 10', publisher: 'Publisher 10', isbn: '1010', status: 'available' },
    ];

    try {
      await Book.insertMany(books);
      console.log('Database seeded successfully');
    } catch (err) {
      console.error('Error seeding database:', err);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch((err) => console.error('Connection error:', err));
