require('dotenv').config()
const express = require("express")
const cors = require('cors')
const app = express()
const dbConnection = require('./config/db')

const PORT = process.env.PORT || 5000

//use middleware
app.use(cors())
app.use(express.json())
//Db connection
dbConnection()

app.use('/api/expense', require('./Routes/route'))

app.listen(PORT, ()=>{
    console.log(`Server up and running on port ${PORT}`)
})