const { getRandomQuote } = require('../quotes');

module.exports = (req, res) => {
    res.status(200).json({ quote: getRandomQuote() });
};
