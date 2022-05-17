const mongoose = require('mongoose')

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.ATLAS_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        console.log('DB connection successfully')
    }
    catch(err){
        console.log(err)
    }
}

module.exports = dbConnection