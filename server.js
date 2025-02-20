// server.js
const express = require('express');
const app = express();
const port = 8080;

// Serve static files from the current directory
app.use(express.static(__dirname, { index: 'bxns15.html' }));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
