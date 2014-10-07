'use strict';

app.factory('auth', ['$http', '$q', 'identity', 'UsersResource', function($http, $q, identity, UsersResource) {
    return {
        signup: function(user) {
            var deferred = $q.defer();
            
            $http.post('/auth/signup', 
                'username=' + user.username + '&password=' + user.password + '&address=' + user.address + '&email=' + user.email, 
                { headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
                .success(function(response) {
                    identity.setCurrentUser(response.user);
                    deferred.resolve(true);
                });;

//            var user = new UsersResource(user);
//            user.$save().then(function() {
//                identity.setCurrentUser(user);
//                deferred.resolve();
//            }, function(response) {
//                deferred.reject(response);
//            });

            return deferred.promise;
        },
        update: function(user) {
            var deferred = $q.defer();

//            var updatedUser = new UsersResource(user);
//            updatedUser._id = identity.currentUser._id;
//            updatedUser.$update().then(function() {
//                identity.currentUser.firstName = updatedUser.firstName;
//                identity.currentUser.lastName = updatedUser.lastName;
//                deferred.resolve();
//            }, function(response) {
//                deferred.reject(response);
//            });

            return deferred.promise;
        },
        login: function(user){
            var deferred = $q.defer();
            $http.post('/auth/login', 'username=' + user.username + '&password=' + user.password, 
                { headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
                .success(function(response) {
                    identity.setCurrentUser(response.user);
                    deferred.resolve(true);
                });

            return deferred.promise;
        },
        logout: function() {
            var deferred = $q.defer();

            $http.get('/auth/logout').success(function() {
                identity.setCurrentUser(undefined);
                deferred.resolve();
            })

            return deferred.promise;
        },
        isAuthenticated: function() {
            if (identity.isAuthenticated()) {
                return true;
            }
            else {
                return $q.reject('not authorized');
            }
        },
        isAuthorizedForRole: function(role) {
            if (identity.isAuthorizedForRole(role)) {
                return true;
            }
            else {
                return $q.reject('not authorized');
            }
        }
    }
}]);