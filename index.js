const express = require("express");
const path=require('path')
const app = express();
const http=require('http')
const socketio=require('socket.io')
const server=http.createServer(app)
const io =socketio(server)

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname, 'public')));
  
io.on("connection",(socket)=>{
    socket.on('send-position',(data)=>{
        io.emit('recieve-position',{id:socket.id,...data})
    })
    console.log('connected')
})

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(3000, () => console.log("Server is running in the port 3000"));
