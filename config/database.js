const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE.URL)

const db = mongoose.connection

db.on('connected', () => {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`)
})