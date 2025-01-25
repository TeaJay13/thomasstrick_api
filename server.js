const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = (require('dotenv').config());
const port = process.env.PORT;
const mongodb = require('./db/connect')

app.use(cors())
.use(express.json())
.use(express.urlencoded({ extended: true }))
.use('/', require('./routes'))



mongodb.inintDb((err, mongodb) => {
   if(err) {
       console.log(err)
   } else {
       app.listen(port)
       console.log('Connected to DB and listening on port ${port}')
   }
})