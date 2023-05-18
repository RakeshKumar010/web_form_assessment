const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
app.use(cors())
dotenv.config({path:'./config.env'})
require('./db/conn')
app.use(express.json())
app.use(require('./router/router'))


const port = 8080;

app.listen(port,()=>{
    console.log('server is open at localhost:'+port);
})