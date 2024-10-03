const express = require('express');
const { getRandomQuote, getRandomNuMetal } = require('./quotes');

const app = express();
const port = process.env.PORT || 3000;

app.get('/quote', (req, res) => {
    res.json(getRandomQuote());
});

app.get('/nu-metal', (req, res) => {
    res.json(getRandomNuMetal());
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
