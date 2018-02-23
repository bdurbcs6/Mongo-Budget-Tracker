const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
  amount: Number,
  description: String,
  budget: {
    tpe: mongoose.Schema.Types.ObjectId,
    red: 'budget'
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category'
  }
});

module.exports = mongoose.model('expense', expenseSchema);