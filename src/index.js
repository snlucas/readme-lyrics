const express = require('express');
const { getRandomQuote, getRandomRock, getRandomPop } = require('./quotes');

const app = express();
const port = process.env.PORT || 3000;

app.get('/quote', (req, res) => {
    res.json(getRandomQuote());
});

app.get('/rock', (req, res) => {
    res.json(getRandomRock());
});

app.get('/pop', (req, res) => {
    res.json(getRandomPop());
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
