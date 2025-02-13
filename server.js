const mongoose = require('mongoose');
const dotenv= require('dotenv');
dotenv.config({path:'./config.env'});
const express = require('express');

const app = express();

const DB = process.env.DATABASE

mongoose.connect(DB,{
    // useUnifiedTopology: true,
}).then(con => {
    console.log('DB connection successfull');
}).catch((err) => {
    console.error('Error connecting to DB:',err)
});

app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`🚀 Server is running on ${PORT}`);
})
