const generateAIFeedback = async (userInput) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const inputLength = userInput.length;
    let feedback = '';

    if (inputLength < 10) {
      feedback = "Your response is quite brief. Consider providing more details to help me give you better feedback. Try to elaborate on your thoughts and include specific examples.";
    } else if (inputLength < 50) {
      feedback = "Good start! Your response shows some thought, but there's room for improvement. Consider expanding on your main points and providing supporting evidence or examples.";
    } else if (inputLength < 150) {
      feedback = "Well-structured response! You've provided good detail and your points are clear. To make it even better, try to add more specific examples or consider alternative perspectives.";
    } else {
      feedback = "Excellent comprehensive response! You've demonstrated thorough thinking and provided detailed explanations. Your communication is clear and well-organized. Keep up the great work!";
    }

    if (userInput.toLowerCase().includes('problem') || userInput.toLowerCase().includes('issue')) {
      feedback += " I notice you mentioned a problem. Consider breaking it down into smaller components and think about potential solutions step by step.";
    }

    if (userInput.toLowerCase().includes('goal') || userInput.toLowerCase().includes('objective')) {
      feedback += " Great that you're thinking about goals! Make sure your objectives are specific, measurable, and have clear timelines.";
    }

    return feedback;
    
  } catch (error) {
    console.error('AI Service Error:', error);
    return "I apologize, but I'm unable to generate feedback at the moment. Please try again later.";
  }
};

module.exports = { generateAIFeedback };