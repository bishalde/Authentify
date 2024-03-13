const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const http = require('http');
const socketIO = require('socket.io');

const Auth = require('./routes/Auth')


const PORT = 80;
const MONGO_URI = 'mongodb://localhost:27017/Authentify';
const MONGO_ATLAS_URI = 'mongodb+srv://bishalde:bishalde@authentify.rcoblju.mongodb.net/?retryWrites=true&w=majority&appName=Authentify'

const app = express();
const server = http.createServer(app);
const io = socketIO(server);



app.use(cors())
app.use(bodyParser.json())

// app.use(express.static(__dirname + '/public'));


// io.on('connection', (socket) => {
//     console.log('A user connected : ', socket.id);

//     socket.on("init", (id) => {
//         console.log('User initialized with ID:', id);
//     });

//     socket.emit("greetUser", "Hello, welcome! Please enter your name.");

//     socket.on("nameRes", (data) => {
//         console.log('Received name:', data);
//         // Here you can emit the next step, like asking for phone number
//         socket.emit("phone", "Please enter your phone number.");
//     });

//     socket.on("phoneRes", (data) => {
//         console.log('Received phone:', data);
//         // Here you can emit the next step, like asking for email
//         socket.emit("email", "Please enter your email address.");
//     });

//     // Handle disconnection
//     socket.on('disconnect', () => {
//         console.log('User disconnected');
//     });
// });



app.get('/', (req, res) => {
    const message = {
        message: 'Authentify API HOME',
        status: 200,
        timestamp: new Date().toISOString(),
        routes:['/api/auth/login',"/api/auth/register"]
    }
  res.status(200).json(message);
});

app.use("/api/auth",Auth)



const connectToDB = async() =>{
    try {
        await mongoose.connect(MONGO_ATLAS_URI,{
        })
        .then(
            server.listen(PORT,()=>{
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