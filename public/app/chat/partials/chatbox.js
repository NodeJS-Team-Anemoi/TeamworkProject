'use strict';

app.directive('chatbox', function () {
    return {
        restrict: 'E',
        templateUrl: '/app/chat/partials/chat.html'
    }
});