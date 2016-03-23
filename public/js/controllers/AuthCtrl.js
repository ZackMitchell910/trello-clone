// Code your AuthCtrl here following the project guide - When you have put the commented out code back into your server.js, use the code from below to 
// connect the login function to the backend, and then retest your app.

$scope.login = function(username){
	console.log("username: ", username);
	authService.login(username).then(function(res){
		console.log(res);
		$state.go('list');
	});
};





// angular
    .module('trelloClone')
    .controller('AuthCtrl', function ($scope, $state, authService) {

        $scope.test = 'auth';

        $scope.handleEnterOnInput = function (event) {
            if (event.keyCode === 13) {
                $scope.login();
            }
        };

        $scope.login = function () {
            authService.login($scope.username)
                .then(function (response) {
                    $state.go('todo')
                })
                .catch(function (err) {
                    console.log(err);
                })
        };

        $scope.logout = function () {
            authService.logout()
                .then(function (response) {
                    $state.go('auth')
                })
                .catch(function (err) {
                    console.log(err);
                    $state.go('auth');
                })
        }
});
