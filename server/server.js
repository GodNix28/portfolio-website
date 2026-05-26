const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const projectRoutes =
require("./routes/projectRoutes");

const messageRoutes =
require("./routes/messageRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/projects", projectRoutes);

app.use("/api/messages", messageRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)

.then(() => {
    console.log("MongoDB Connected");
})

.catch((err) => {
    console.log("MongoDB Error:", err);
});

// Test Route
app.get("/", (req, res) => {
    res.send("Portfolio Backend Running");
});

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});