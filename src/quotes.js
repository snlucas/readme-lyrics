const { rock } = require("./categories/rock");
const { pop } = require("./categories/pop");

const rand = (...categories) => categories.map(category => category[Math.floor(Math.random() * category.length)]);

const getRandomQuote = () => rand(rock, pop);
const getRandomRock = () => rand(rock);
const getRandomPop = () => rand(pop);

module.exports = { getRandomQuote, getRandomRock, getRandomPop };