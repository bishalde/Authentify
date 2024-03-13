const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const Auth = require('./routes/Auth')



const app = express();
const PORT = 80;
const MONGO_URI = 'mongodb://localhost:27017/Authentify';
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    const message = {
        message: 'Authentify API HOME',
        status: 200,
        timestamp: new Date().toISOString(),
        routes:['/api/auth/login']
    }
  res.status(200).json(message);
});

app.use("/api/auth",Auth)



const connectToDB = async() =>{
    try {
        await mongoose.connect(MONGO_URI,{
        })
        .then(
            app.listen(PORT,host="0.0.0.0",()=>{
                console.log(`Authentify API is running on : http://localhost:${PORT}`)
            }
        ))
        .then(console.log('MongoDB Connected'))
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
connectToDB()