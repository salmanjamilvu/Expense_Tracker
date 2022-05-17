const express = require('express')
const {
    createCategory,
    getCategories,
    createTransaction,
    getTransaction,
    deleteTransaction,
    getLabels
} = require('../controllers/controller')

const router = express.Router()
router.post('/', createCategory)
router.get('/', getCategories)

//transaction
router.post('/transaction/', createTransaction)
router.get('/transaction/', getTransaction)
router.delete('/transaction/:id', deleteTransaction)
//get labels
router.get('/labels/', getLabels)

module.exports = router