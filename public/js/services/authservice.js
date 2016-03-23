// Build out your authService here. You will need to make a call to your server and send a body of data with the username,
// then whatever your server returns needs to be returned to the controller.

this.login = function(username) {
   return $http.post(url, {username: username});
};






// angular
    .module('trelloClone')
    .service('authService', function ($http, $q) {
        this.login = function (username) {
            var dfd = $q.defer();
            $http.post('/auth/login', {
                    username: username
                })
                .then(function (response) {
                    dfd.resolve(response.data)
                })
                .catch(function (err) {
                    console.log(err);
                    dfd.reject(err)
                });

            return dfd.promise;
        };

        this.logout = function () {
            var dfd = $q.defer();
            $http.post('/auth/logout')
                .then(function (response) {
                    dfd.resolve(response.data)
                })
                .catch(function (err) {
                    dfd.reject(err)
                });

            return dfd.promise;

        }
});
