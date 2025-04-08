// backend/models/Analysis.js

const mongoose = require('mongoose');

const analysisSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  uploadedImage: {
    type: String,
    required: true, // Local path ya URL
  },
  predictedResult: {
    type: String,
    required: true, // Local path ya URL
  },
  towerParts: [
    {
      partName: String,
      heightPx: Number,
      widthPx: Number,
      heightCm: Number,
      widthCm: Number,
    }
  ],
  insulator: {
    heightPx: Number,
    widthPx: Number,
  },
  crossPatternCount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Analysis', analysisSchema);
