// tests/auth.test.mjs

import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from '../routes/auth.js';
import { createServer } from '../server.js'; // we’ll setup this next if needed

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

// 🔁 Connect to test DB before tests
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

// 🔁 Disconnect DB after tests
afterAll(async () => {
  await mongoose.disconnect();
});

describe('Auth Routes', () => {
  it('should register a user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123'
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
  });
});
