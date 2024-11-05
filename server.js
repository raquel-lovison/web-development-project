const express = require('express'); // Added the Express library to create the server and handle requests
const app = express(); // Creates an Express app that will determine how our server works

const PORT = 3000; // Set the server's incoming request port & the server will run on http://localhost:3000

app.use(express.static('public')) //Serve static files from the public directory
app.use(express.urlencoded({ extended: true})); // Form info is made available in req.body so it can be processed

// Handles client-side contact form submissions, and also handle 'post' requests that come from "/send"
// Get the info from the request body: name, email and message 
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

// Displays the info from the contact form in the terminal
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log('----');

// Shows a success message back to the user's browser 
    res.send('Success!! Thank you for your message.');
});

// Starts the server
// Shows a message to confirm it's running
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});