const axios = require('axios')
const History = require('./class.history')

class Searcher{
    constructor(sizePage = 10) {
        this.url = process.env.SERVICE_IMAGE_URL
        this.key = process.env.SERVICE_IMAGE_KEY
        this.sizePage = sizePage
        this.History = new History
    }

    query({query, page}, callback) {
        const {url, key, sizePage} = this
        page = page ? '&page=' + page : ''
        
        this.History.update(query)
        
        axios.get(`${url}search?query=${encodeURIComponent(query)}&per_page=${sizePage}${page}`, {
            headers: {
                'Authorization': key
            }
        })
        .then( res => {
            const { data } = res
            const { photos } = data
            
            delete data.photos
            console.log(data)

            photos.forEach(photo => photo.description = photo.alt);
            callback({images: photos})
        })
        .catch( err => callback(err) )
    }
    
    getHistory(callback){
        this.History.get(function(data){
            if(typeof callback === 'function') callback(data)
        })
    }
}

module.exports = Searcher