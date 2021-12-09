import http from 'http';
import socketIO from 'socket.io';

const server: http.Server = http.createServer();
const io: socketIO.Server = new socketIO.Server(server, {
    cors: {origin: '*'}
})

const PORT = 4000;
const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage';

io.on('connection', (socket: socketIO.Socket) => {
    console.log(`Client ${socket.id} connected !!`);

    const roomId = socket.handshake.query.roomId as string; // TODO: Query妥当性
    socket.join(roomId);
    // io.to(socket.id).emit(`あなたは ${socket.id} さんとして入室しました。`)

    socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
        io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
    });

    socket.on("disconnect", () => {
        console.log(`Client ${socket.id} disconnected !!`);
        socket.leave(roomId);
    });
});

server.listen(PORT, () => console.log('Listening on PORT: '+PORT));


