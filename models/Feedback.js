const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  user_input: {
    type: String,
    required: [true, 'User input is required'],
    trim: true,
    maxlength: [2000, 'Input cannot exceed 2000 characters']
  },
  feedback: {
    type: String,
    required: [true, 'Feedback is required'],
    trim: true
  }
}, {
  timestamps: true
});

feedbackSchema.index({ userId: 1, createdAt: -1 });

module.exports = mongoose.model('Feedback', feedbackSchema);