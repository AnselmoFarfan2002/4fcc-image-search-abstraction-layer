const { Schema, model } = require('mongoose')

const SearchLogSchema = new Schema({
    searchQuery: {
        type: String,
        required: true
    },
    timeSearched: {
        type: Date,
        required: true
    },
})

const SearchLog = new model('imageSearcherHistory', SearchLogSchema)

module.exports = { SearchLog }