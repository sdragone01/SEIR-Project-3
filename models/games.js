const mongoose = require('mongoose')
const Schema = mongoose.Schema


const gameSchema = new Schema({
    title:
    {
        type: String,
        required: true,
    },
    genre:
    {
        type: String,
        required: true,
    },
    description:
    {
        type: String,
        required: true,
    },
    link:
    {
        type: String,
        required: false,
    },
    img:
    {
        type: String,
        required: false,
    },
    price:
    {
        type: Number,
        required: true
    },
    username: String,
}, {
    timestamps: true,

})

module.exports = mongoose.model('Game', gameSchema)