const rockQuotes = require('./quotes/rockQuotes');
const popQuotes = require('./quotes/popQuotes');

const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomQuote = () => ({
    rock: rand(rockQuotes),
    pop: rand(popQuotes)
});

const getRandomRock = () => rand(rockQuotes);
const getRandomPop = () => rand(popQuotes);

module.exports = { getRandomQuote, getRandomRock, getRandomPop };
