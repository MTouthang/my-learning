import WebSocket, {WebSocketServer} from "ws";
import express from "express";
// import http from 'http'


// // create http server 
// const server = http.createServer(function (request: any, response: any) {
//     console.log(new Date() + "Received request for", + request.url)
// })

const app = express()
const httpServer = app.listen(8080)

// web socket server 
let user = 0
const wss = new WebSocketServer({server: httpServer})

wss.on('connection', function connection(ws){
    ws.on('error', (error) => console.error(error)) // incase of error

    ws.on('message', function message(data, isBinary) {
        wss.clients.forEach(function each(client) {
            if(client.readyState === WebSocket.OPEN) {
                client.send(data, {binary: isBinary})
            }
        })
    })

    console.log('user connected', ++user)
    ws.send("Hello! from Server!!!")


})


