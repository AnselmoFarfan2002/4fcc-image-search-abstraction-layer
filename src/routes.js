const { Router } = require("express")
const router = Router()

const {
    loadIndex,
    getQuery,
    getHistory
} = require('./controllers')

router
    .route('/')
    .get(loadIndex)

router
    .route('/query/:query')
    .get(getQuery)

router
    .route('/recent')
    .get(getHistory)


module.exports = router