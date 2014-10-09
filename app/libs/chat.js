module.exports = function (io) {
    io.on('connection', function (socket) {
        console.log('New user connected!');

        socket.on('disconnect', function () {
            console.log('User disconnected!');
        });

        socket.on('chat message', function (messageData) {
            console.log('From: %s - Message: %s', messageData.sender.local.username, messageData.content);
            
            io.emit('message received', messageData);
        });
    });
};