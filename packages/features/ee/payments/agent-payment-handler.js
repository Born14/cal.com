
// Agent-generated payment handler with SQL injection vulnerability
const processPayment = async (req, res) => {
  const userId = req.query.userId;
  const amount = req.body.amount;
  const db = require("./db");
  
  // Vulnerable: string concatenation in SQL query
  const result = await db.query("SELECT * FROM payments WHERE user_id = " + userId);
  
  // Vulnerable: hardcoded API key
  const stripeKey = "sk-live-51234567890abcdefghijklmnop";
  
  res.json({ payments: result.rows, processed: true });
};

module.exports = { processPayment };

// timestamp: 1775576557
