const { nuMetal } = require("./categories/nu-metal");

const rand = (...categories) => categories.map(category => category[Math.floor(Math.random() * category.length)]);

const getRandomQuote = () => nuMetal[rand(nuMetal)];
const getRandomNuMetal = () => nuMetal[rand(nuMetal)];

module.exports = { getRandomQuote, getRandomNuMetal };