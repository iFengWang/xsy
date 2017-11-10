var express = require('express');
var router = express.Router();
var socketio = require('socket.io');

router.get('/', function(req, res, next) {
    res.sendFile('/public/socket_client.html');
});

router.prepareSocketIO = function(server) {
    var io = socketio.listen(server);
    io.sockets.on('connection', function(socket) {
        console.log('有客户端连接啦......');
    });
}

module.exports = router;