# My Local Node.js Server for Form Handling
User: build a nodejs server to receive an html form post. It should return a 200 response code and print the form values to the console

GitHub Copilot: Optimizing tool selection...I'll create a Node.js server to handle HTML form POST requests. Let me set this up in the current directory where you're working with forms. 


Perfect! I've created a Node.js server for you. Here's how to use it:

**To start the server:**

1. Install dependencies:
```bash
cd my-bootcamp/02-forms-and-inputs/00-local-nodejs-server
npm install
```

1. Run the server:
```bash
npm start
```

**What it does:**
- Listens on port 3000
- Accepts POST requests to `/submit`
- Logs all form data to the console
- Returns a 200 status code with success message
- Also serves your HTML files as static content

**To use with your HTML form**, update your form's action attribute:
NOTE: Copilot didn't only showed "/submit" as the action URL, but I had set the action URL to `http://localhost:3000/submit` in your HTML form like this:
```html
<form action="http://localhost:3000/submit" method="POST">
  <!-- your form fields -->
</form>
```

The server will print all form field values to the console whenever you submit the form!

Made changes.