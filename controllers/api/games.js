const Game = require('../../models/games')

module.exports = {
    create,
}

async function create(req, res) {
    try {
        const game = await Game.create(req.body)
    } catch (err) {
        res.status(400).json(err)
    }
}
