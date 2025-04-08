import mongoose from 'mongoose';

const PredictionResultSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true }, // URL of the uploaded image
  annotatedImageUrl: { type: String, required: true }, // URL of the annotated image (predicted)
  original: { type: String, required: true }, // Original image URL for reference
  prediction: { type: String, required: true }, // Prediction result (for example, 'Tower with Cross Pattern')
  height: { type: Number, required: true }, // Height of the insulator
  width: { type: Number, required: true }, // Width of the insulator
  count: { type: Number, required: true }, // Count of cross pattern predictions
  dimensions: [{
    component: { type: String, required: true }, // Component name (e.g., 'Insulator')
    heightPixels: { type: Number, required: true }, // Height in pixels
    widthPixels: { type: Number, required: true }, // Width in pixels
    mappedHeightCm: { type: Number, required: true }, // Mapped height in cm
    mappedWidthCm: { type: Number, required: true } // Mapped width in cm
  }],
  createdAt: { type: Date, default: Date.now }
});

const PredictionResult = mongoose.model('PredictionResult', PredictionResultSchema);

export default PredictionResult;
