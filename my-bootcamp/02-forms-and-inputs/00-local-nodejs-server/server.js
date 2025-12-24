/*
  My simple Node.js server to handle form submissions.
  This server listens for POST requests and logs the form data to the console.
*/

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON (if needed)
app.use(express.json());

// Serve static files (HTML forms) from current directory
app.use(express.static(__dirname));

// Handle POST requests
app.post('/submit', (req, res) => {
  console.log('Form data received:');
  console.log('-------------------');
  console.log(req.body);
  console.log('-------------------');
  
  // Return 200 response
  res.status(200).send('Form received successfully!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Waiting for form submissions...');
});
