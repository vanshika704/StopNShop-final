import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/db.js"; // Database connection
import router from "./routes/auth.js"; // Your router

dotenv.config();
connectDB();

const app = express();

// Set up CORS options
const corsOptions = {
  origin: "http://localhost:5174", // The frontend origin
  credentials: true, // Allow credentials (cookies, headers, etc.)
};

// Apply the CORS middleware
app.use(cors(corsOptions));

// Middleware to parse JSON
app.use(express.json());

// Use your authentication routes
app.use("/api/auth", router);

// Default route for the server
app.get("/", (req, res) => res.send("API is running..."));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
