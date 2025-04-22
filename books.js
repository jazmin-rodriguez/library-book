const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// List all available books
router.get('/available', async (req, res) => {
  try {
    const books = await Book.find({ status: 'available' });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// List all checked-out books
router.get('/checked-out', async (req, res) => {
  try {
    const books = await Book.find({ status: 'checked-out' });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Check out a book
router.put('/checkout/:id', async (req, res) => {
  const { id } = req.params;
  const { checkedOutBy, dueDate } = req.body;

  try {
    const book = await Book.findByIdAndUpdate(
      id,
      { status: 'checked-out', checkedOutBy, dueDate },
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Check in a book
router.put('/checkin/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByIdAndUpdate(
      id,
      { status: 'available', checkedOutBy: null, dueDate: null },
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
