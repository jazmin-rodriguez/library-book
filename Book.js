const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String },
  isbn: { type: String, required: true },
  status: { type: String, default: "available" },
  checkedOutBy: { type: String, default: null },
  dueDate: { type: Date, default: null },
});

module.exports = mongoose.model('Book', BookSchema);
