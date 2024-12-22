const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, 
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { amount } = req.body;

    try {
      const order = await razorpay.orders.create({
        amount: amount * 100, // Convert INR to paise
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
      });

      res.status(200).json({ 
        success: true, 
        orderId: order.id, 
        amount: order.amount 
      });
    } catch (error) {
      console.error("Error creating Razorpay order:", error);
      res.status(500).json({ success: false, error: "Error creating Razorpay order" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
