const express = require('express');
const { body } = require('express-validator');
const { createFeedback, getHistory } = require('../controllers/feedbackController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

const feedbackValidation = [
  body('user_input')
    .trim()
    .isLength({ min: 1, max: 2000 })
    .withMessage('Input must be between 1 and 2000 characters')
];

router.post('/', authMiddleware, feedbackValidation, createFeedback);
router.get('/history', authMiddleware, getHistory);

module.exports = router;