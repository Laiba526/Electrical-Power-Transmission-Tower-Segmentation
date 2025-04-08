import cors from 'cors';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import multer from 'multer';
import bodyParser from 'body-parser';
import { spawn } from 'child_process';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const PORT = process.env.PORT || 5000;
const app = express(); // Initialize express app
app.use(cors({origin: 'http://localhost:5173'}));

// Middleware to set Cross-Origin-Opener-Policy
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp'); // Optional, depends on your use case
  next();
});

// Middleware and route setup
app.use(express.json()); // Middleware to parse JSON request bodies
dotenv.config(); // Load environment variables

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Correct way to import routes (Relative Path)
import authRoutes from './routes/auth.js'; // Correct
app.use("/api/auth", authRoutes);
console.log(process.env.MONGO_URI);  // Check if this prints the correct MongoDB URI

// ✅ Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // 30 seconds timeout for selecting the server
  socketTimeoutMS: 45000, // 45 seconds timeout for socket
})
.then(() => console.log("✅ MongoDB Connected!"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "backend/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Upload + prediction route
app.post("/upload", upload.single("image"), (req, res) => {
  const imagePath = path.resolve(__dirname, 'uploads', req.file.filename);

  // Run Python model
  const pythonProcess = spawn('python', [
    path.resolve(__dirname, 'backend', 'model.py'),
    imagePath
  ]);

  let predictionData = '';
  
  pythonProcess.stdout.on('data', (data) => {
    predictionData += data.toString();
  });
  
  pythonProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  
  pythonProcess.on('close', (code) => {
    console.log(`Python process exited with code ${code}`);
    res.json({
      message: "Image uploaded and analyzed!",
      imageUrl: `/uploads/${req.file.filename}`,
      prediction: predictionData.trim(),
    });
  });
});

// Routes
app.use("/api/auth", authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});

export default app; // Export the app object
