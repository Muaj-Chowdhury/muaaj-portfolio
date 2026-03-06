const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); // Use Google DNS to resolve Atlas records

const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL }));

const uri = process.env.MONGO_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

// Connect to MongoDB once when server starts
async function connectDB() {
  try {
    await client.connect();
    db = client.db('portfolio_db'); // Your database name
    console.log('✅ Native MongoDB Driver Connected');
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err);
  }
}
connectDB();

// --- The API Route ---
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1. Validation
    if (!name || !email || !message) {
      return res.status(400).send({ success: false, error: "All fields are required." });
    }

    // 2. Insert into Collection
    const contactCollection = db.collection('messages');
    const result = await contactCollection.insertOne({
      name,
      email,
      message,
      submittedAt: new Date()
    });

    // 3. Response
    res.status(201).send({ 
      success: true, 
      message: "Message received!", 
      id: result.insertedId 
    });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).send({ success: false, error: "Database insertion failed." });
  }
});
app.get("/" , (req , res)=>{
    res.send("Hello from the server!!")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));