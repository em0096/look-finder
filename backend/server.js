const express = require("express"); // Import Express
const cors = require("cors"); // Import CORS middleware

// Initialize Express app
const app = express();

// allow requests from the frontend
app.use(cors({
  origin: 'http://localhost:5173',
})); 

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const routes = require("./routes/looks");

app.use("/api/looks", routes); // Use the looks routes for /api/looks endpoint

app.listen(4000);
