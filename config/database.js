const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database')
}).catch(err => {
    console.log(err)
}
)


const db = mongoose.connection

db.on('connected', () => {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`)
})