const express = require('express'); // Added the Express library to create the server and handle requests
const bodyParser = require('body-parser'); // Library that parses the body of the request
const app = express(); // Creates an Express app that will determine how our server works

const PORT = 3000; // Set the server's incoming request port & the server will run on http://localhost:3000

app.use(express.static('public')) // Serve static files from the public directory
app.use(bodyParser.json()); // Enable json parsing in the body of the request

// Handles client-side contact form submissions, and also handle 'post' requests that come from "/send"
// Get the info from the request body: name, email and message 
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    // Check if all fields 
    if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required." });
    }

// Displays the info from the contact form in the terminal
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log('----');

// Shows a success message back to the user's browser 
    res.status(200).json({message:'Success!! Thank you for your message.'});
});

// Starts the server
// Shows a message to confirm it's running
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});