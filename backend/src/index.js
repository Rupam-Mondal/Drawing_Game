import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

const app = express();

const server = http.createServer(app);
const io = new Server(server);


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping' , (req , res) => {
    return res.json({
        message: 'pong'
    })
})

io.on('connection', (socket) => {
  console.log('a user connected');
});


server.listen(3000 , () => {
    console.log('Server is running on 3000');
})