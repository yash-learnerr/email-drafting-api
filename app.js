const express = require("express");
const bodyParser = require("body-parser"); // Import body-parser to parse incoming JSON request bodies
require("dotenv").config();

const emailRoutes = require("./routes/email"); // Import the email generation route handler

const app = express(); // Create an Express app instance
app.use(bodyParser.json()); // Middleware to parse JSON request bodies

app.use("/generate-email", emailRoutes);

// Define the port from environment variable or use 5000 as default
const PORT = process.env.PORT || 5000;

// Start the server and log the URL it's running on
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
