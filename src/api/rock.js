const rockQuotes = require('../quotes/rockQuotes');

const getRandomRock = () => rockQuotes[Math.floor(Math.random() * rockQuotes.length)];

module.exports = (req, res) => {
    res.status(200).json({ rock: getRandomRock() });
};
