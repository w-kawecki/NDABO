const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Serwowanie wszystkich plików z katalogu głównego
app.use(express.static(path.join(__dirname)));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Aplikacja działa na porcie ${port}`);
});