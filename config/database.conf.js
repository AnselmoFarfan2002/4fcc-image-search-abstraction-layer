const mongoose = require("mongoose")

const dbURI = process.env.MONGO_URI

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const db = mongoose.connect(dbURI, dbOptions)
.then(msg => console.log('DB connected 😎'))

module.exports = db