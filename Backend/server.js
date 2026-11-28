const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI,)
  .then(()=>console.log("MongoDB connected successfully"))
  .catch((err)=>console.log(err))


app.get('/', (req, res) => {
    res.send("Get api working")
})

app.get('/api', (req, res) => {
    res.send("Get api working")
})

app.listen(3000, () => {
    console.log('server running on 3000');
})