const Game = require('../../models/games')

module.exports = {
    create,
    find,
    findOne
}

async function create(req, res) {
    try {
        const game = await Game.create(req.body)
    } catch (err) {
        res.status(400).json(err)
    }
}
async function find(req, res) {
    try {
        const game = await Game.find({})
        res.json(game)

    } catch (err) {
        res.status(400).json(err)
    }

}
async function findOne(req, res) {
    try {
        console.log(req.params.gameId)
        const game = await Game.findById(req.params.gameId)
        res.json(game)

    } catch (err) {
        res.status(400).json(err)
    }

}
