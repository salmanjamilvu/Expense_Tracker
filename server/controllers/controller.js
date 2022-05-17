const {categories, transaction} = require('../models/model')

//create categories
const createCategory = async (req, res) =>{
    const Create = new categories({
        type: "Investment",
        color: "#FCBE44"
    })
    try{
        await Create.save()
        res.json({
            status: true,
            message: "Category insert successfully"
        })
    }
    catch(err){
        res.json({
            status: false,
            message: err
        })
    }
}

//get categories 
const getCategories = async (req, res) =>{
    try{
        const data = await categories.find()
        res.json({
            status: true,
            data: data
        })
    }
    catch(err){
        res.json({
            status: false,
            message: err
        })
    }
}

//create transaction
const createTransaction = async (req, res) =>{
    if(!req.body){
        return res.status(400).json({
            status: false,
            message: "Post HTTP Data not Provided"  
        })
    }

    const create = new transaction(req.body)
    try{
        await create.save()
        res.json({
            status: true,
            message: "Transaction create successfully"
        })
    }
    catch(err){
        res.json({
            status: false,
            message: err
        })
    }
}

//get transaction
const getTransaction = async (req, res) =>{
    try{
        const data = await transaction.find()
        res.json({
            status: true,
            data: data
        })
    }
    catch(err){
        res.json({
            status: false,
            message: err
        })
    }
}

//delete Transaction
const deleteTransaction = async (req, res) =>{
    try{
        await transaction.findByIdAndDelete(req.params.id)
        res.json({
            status: true,
            message: "Transaction delete successfully"
        })
    }
    catch(err){
        res.json({
            status: false,
            message: err
        })
    }
}

//get labels
const getLabels = async (req, res) =>{
    try{
        const data = await transaction.aggregate([
            {
                $lookup:{
                    from: "categories",
                    localField: "type",
                    foreignField: "type",
                    as: "categories_info"
                }
            },
            {
                $unwind : "$categories_info"
            }

        ])
        let result = data.map( v => Object.assign({}, {_id: v._id, name: v.name, type: v.type, amount: v.amount, color: v.categories_info.color}) )
        res.json({
            status: true,
            data: result
        })
    }
    catch(err){
        res.json({
            status: false,
            message: err
        })
    }
}

module.exports = {
    createCategory,
    getCategories,
    createTransaction,
    getTransaction,
    deleteTransaction,
    getLabels   
}