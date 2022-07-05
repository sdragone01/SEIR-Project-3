const mongoose = require('mongoose')
const Schema = mongoose.Schema
import Game from './games'

var librarySchema = new Schema({
    games: [{ type: Schema.Types.ObjectId, ref: 'Game' }]
})

module.exports = mongoose.model('Library', librarySchema)