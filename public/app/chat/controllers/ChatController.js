'use strict';

app.controller('ChatController', ['$scope', 'identity', 'sockets',
    function ($scope, identity, sockets) {
        $scope.identity = identity;

        $scope.messages = [{
            content: 'Initial message',
            sender: 'Pesho'
        }, {
            content: 'Some message',
            sender: 'Gosho'
        }, {
            content: 'GG',
            sender: 'Stamat'
        }, {
            content: 'Lorem ipsum...',
            sender: 'Pesho'
        }, {
            content: 'Some big message, becase the others are very small and I can\'t test what happens',
            sender: 'Pesho D1lgiq'
        }, {
            content: 'Bloka66666',
            sender: 'Gosho'
        }, {
            content: 'Ne go li napisa toq chat be bate',
            sender: 'Vesko'
        }, {
            content: 'Finished',
            sender: 'Vesko'
        }];
        
        $scope.expanded = true;
        
        sockets.on('message received', function (messageData) {
            $scope.messages.push({
                content: messageData.content,
                sender: messageData.sender.local.username
            });
        });

        $scope.sendMessage = function (message) {
            var messageInput = angular.element(document.querySelector('#messageInput'));
            messageInput[0].value = '';
            
            scrollDownMessages();
            
            sockets.emit('chat message', {
                content: message,
                sender: identity.getCurrentUser()
            });
        };
        
        angular.element('#chatbox').ready(function () {
            scrollDownMessages();
        });
}]);

function scrollDownMessages () {
    $("#chatbox .panel-body").animate({
        scrollTop: $('.messages').height()
    }, "slow");
}