const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); 

const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();

// --- Middleware ---
app.use(express.json());

// Professional CORS: Allows your specific Vercel URL + Local Development
const allowedOrigins = [process.env.CLIENT_URL, 'http://localhost:8080'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db('portfolio_db'); 
    console.log('✅ Native MongoDB Driver Connected');
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err);
  }
}
connectDB();

// --- 1. THE PING ROUTE (Wake-up call) ---
// This matches the fetch in your App.tsx
app.get('/api/ping', (req, res) => {
  res.status(200).json({ status: "active", message: "Server is awake!" });
});

// --- 2. THE CONTACT ROUTE ---
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!db) {
      return res.status(503).json({ success: false, error: "Database not ready yet." });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "All fields are required." });
    }

    const contactCollection = db.collection('messages');
    const result = await contactCollection.insertOne({
      name,
      email,
      message,
      submittedAt: new Date()
    });

    res.status(201).json({ 
      success: true, 
      message: "Message received!", 
      id: result.insertedId 
    });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ success: false, error: "Database insertion failed." });
  }
});

app.get("/", (req, res) => {
    res.send("Portfolio Backend is Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));