const Feedback = require('../models/Feedback');
const { validationResult } = require('express-validator');
const { generateAIFeedback } = require('../services/aiServices');

const createFeedback = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { user_input } = req.body;
    const userId = req.user._id;

    const aiFeedback = await generateAIFeedback(user_input);

    const feedback = await Feedback.create({
      userId,
      user_input,
      feedback: aiFeedback
    });

    res.status(201).json({
      success: true,
      message: 'Feedback generated successfully',
      data: {
        id: feedback._id,
        user_input: feedback.user_input,
        feedback: feedback.feedback,
        createdAt: feedback.createdAt
      }
    });
  } catch (error) {
    console.error('Create feedback error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate feedback'
    });
  }
};

const getHistory = async (req, res) => {
  try {
    const userId = req.user._id;
    
    const history = await Feedback
      .find({ userId })
      .sort({ createdAt: -1 })
      .limit(5)
      .select('user_input feedback createdAt');

    res.json({
      success: true,
      message: 'History retrieved successfully',
      data: history
    });
  } catch (error) {
    console.error('Get history error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve history'
    });
  }
};

module.exports = { createFeedback, getHistory };