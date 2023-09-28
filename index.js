const express = require('express')
const routes= require('./src/routes/routes')
const app = express();
const bodyParser=require('body-parser')
const mongoose= require('mongoose')
require("dotenv").config(); 
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect(`mongodb://0.0.0.0:27017/${process.env.DB_NAME}`,{useNewUrlParser:true,useUnifiedTopology:true})

const db=mongoose.connection;
db.on('open',()=>{
    console.log("mongoose connected")
})

app.use('/',routes)
app.listen(8000,()=>{
    console.log("listening on")
})
