// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let submissions = []; // Store Q&A here

// Receive Question + Answer
app.post("/submit", (req, res) => {
    const { question, answer } = req.body;
    if (!question || !answer) {
        return res.status(400).json({ error: "Missing data" });
    }
    submissions.push({ question, answer, time: new Date().toLocaleString() });
    res.json({ message: "Data received" });
});

// Send stored data to admin page
app.get("/submissions", (req, res) => {
    res.json(submissions);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
