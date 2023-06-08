const { SearchLog } = require('../models')

class History{
    get(callback){
        SearchLog.find()
        .select({__v: false})
        .sort({timeSearched: -1})
        .then(function(records) {
            records = records.map(
                record => {
                    record = record.toObject()
                    let dateString = new Date(record.timeSearched)
                    record.timeSearched = dateString.toUTCString()

                    return record
                }
            )
            
            if(typeof callback === 'function') callback(records)
        })
    }

    update(query, callback) {
        let newLog = new SearchLog({
            searchQuery: query, 
            timeSearched: new Date
        })

        newLog.save()
        .then(function(record){
            if(typeof callback === 'function') callback(record)
        })
    }
}

module.exports = History