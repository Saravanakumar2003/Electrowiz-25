const express = require("express");
const Razorpay = require("razorpay");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // For environment variables

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.REACT_APP_RAZORPAY_KEY_ID, // Add this to your .env file
  key_secret: process.env.RAZORPAY_KEY_SECRET, // Add this to your .env file
});

// Create order endpoint
app.post("/create-order", async (req, res) => {
  const { amount, currency, receipt } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount: amount,
      currency,
      receipt,
    });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
