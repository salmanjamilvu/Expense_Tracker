const mongoose = require('mongoose')

const categories_model = new mongoose.Schema({
    type:{
        type: String,
        default: "Investment"
    },
    color:{
        type: String,
        default: "#FCBE44"
    }
})

const transaction_model = new mongoose.Schema({
    name:{
        type: String,
        default: "Anonymous"
    },
    type:{
        type: String,
        default: "Investment"
    },
    amount:{
        type: Number
    },
    date:{
        type: Date,
        default: new Date()
    }
})

const categories = mongoose.model('categories', categories_model)
const transaction = mongoose.model('transaction', transaction_model)

module.exports = {
    categories,
    transaction
}