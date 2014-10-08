'use strict';

app.controller('ChatController', ['$scope', 'identity',
    function ($scope, identity) {
        $scope.identity = identity;

        $scope.messages = [{
            content: 'Initial message',
            sender: 'Pesho'
        }];

        $scope.sendMessage = function (message) {
            //        $scope.messages.push({
            //            content: message,
            //            sender: identity.getCurrentUser().local.username
            //        }); 

            socket.emit('chat message', {
                message: message,
                sender: identity.getCurrentUser()
            });
            
            socket.on('message received', function(messageData) {
                console.log('Message received on server: ', messageData);
            })
        };
}]);