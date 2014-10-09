'use strict';

app.factory('sockets', ['$rootScope',
    function ($rootScope) {
        var socket = io.connect();

        return {
            on: function (eventName, callback) {
                function wrapper() {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                }

                socket.on(eventName, wrapper);

                return function () {
                    socket.removeListener(eventName, wrapper);
                };
            },

            emit: function (eventName, data, callback) {
                socket.emit(eventName, data, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        if (callback) {
                            callback.apply(socket, args);
                        }
                    });
                });
            }
        };
}]);