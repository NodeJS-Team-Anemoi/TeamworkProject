'use strict';

app.factory('userResource', ['$http', '$q', function ($http, $q) {
    var routeUrl = '/users';

    return {
        getAllUsers: function () {
            var deferred = $q.defer();
            $http.get(routeUrl)
                .success(function (users) {
                    deferred.resolve(users);
                })
                .error(function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        },
        getUser: function(id){
            var deferred = $q.defer();
            $http.get(routeUrl + '/' + id)
                .success(function (user) {
                    deferred.resolve(user);
                })
                .error(function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        },
        updateUser: function(id, user){
            var deferred = $q.defer();
            $http.put(routeUrl + '/' + id, user)
                .success(function (user) {
                    deferred.resolve(user);
                })
                .error(function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        },
        deleteUser: function(id){
            var deferred = $q.defer();
            $http.delete(routeUrl + '/' + id)
                .success(function () {
                    deferred.resolve();
                })
                .error(function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }
}]);
