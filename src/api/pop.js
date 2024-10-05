const { getRandomPop } = require('../quotes');

module.exports = (req, res) => {
    res.status(200).json({ pop: getRandomPop() });
};
