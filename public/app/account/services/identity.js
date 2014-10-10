//'use strict';
//
//app.factory('identity', function($window, UsersResource) {
//    var user;
//    if ($window.bootstrappedUserObject) {
//        user = new UsersResource();
//        angular.extend(user, $window.bootstrappedUserObject);
//    }
//    return {
//        currentUser: user,
//        isAuthenticated: function() {
//            return !!this.currentUser;
//        },
//        isAuthorizedForRole: function(role) {
//            return !!this.currentUser && this.currentUser.local.role === role;
//            //return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
//        }
//    }
//});
'use strict';

app.factory('identity', ['$cookieStore', function($cookieStore) {
    var cookieStorageUserKey = 'currentApplicationUser';

    var currentUser;
    return {
        getCurrentUser: function() {
            var savedUser = $cookieStore.get(cookieStorageUserKey);
            if (savedUser) {
                return savedUser;
            }

            return currentUser;
        },
        setCurrentUser: function(user) {
            if (user) {
                $cookieStore.put(cookieStorageUserKey, user);
            }
            else {
                $cookieStore.remove(cookieStorageUserKey);
            }

            currentUser = user;
        },
        isAuthenticated: function() {
            var result;
            
            try {
                result = !!this.getCurrentUser();
            }
            catch (err) {
                result = false;
            }
                
            return result;
        },
        isAdmin: function() {
            var result;
            try {
                result = this.getCurrentUser().local.role === 'Admin';
            }
            catch (err) {
                result = false;
            }
            
            return result;
        }
    }
}]);