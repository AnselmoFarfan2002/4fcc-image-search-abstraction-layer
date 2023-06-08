const Searcher = require('./classes/class.searcher.js')
const searcher = new Searcher
const controllers = {}

controllers.getQuery = function(req, res){
    const { query } = req.params
    const { page } = req.query

    searcher.query({query, page}, res.send.bind(res))
}

controllers.getHistory = function(req, res){
    searcher.getHistory(res.send.bind(res))
}

controllers.loadIndex = function(req, res){
    res.render('index', {host: req.hostname})
}

module.exports = controllers