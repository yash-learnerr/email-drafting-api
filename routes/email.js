const express = require("express"); // Import the Express module
const router = express.Router(); // Create a new Express router instance
const generateEmail = require("../services/emailService");

/**
 * @route   POST /
 * @desc    Generate a professional email based on provided summary
 * @access  Public
 */
router.post("/", async (req, res) => {
  try {
    const { summary } = req.body;

    // Validate that summary is provided
    if (!summary) return res.status(400).json({ error: "Summary is required" });

    // Call the generateEmail function
    const email = await generateEmail(summary);

    res.json({ email });
  } catch (err) {
    console.error("Error generating email:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
