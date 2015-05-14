angular.module('headcount.AppController', [])

.controller('AppController', function($scope, Auth, $http, $window) {

  $scope.signout = function(){

    Auth.signout();
    return $http({
      method: 'GET',
      url: '/auth/logout'
    })
    .then(function(resp) {
      console.log("You've signed out!");
    });
  };
  // Form data for the login modal

  // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  // // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };

  // // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  // };

  // // Perform the login action when the user submits the login form
  // $scope.doLogin = function(user) {
  //   $rootScope.user = user;
  //   $rootScope.users.push({
  //     name: user,
  //     id: $rootScope.users.length + 1
  //   })
  //   $scope.modal.hide();
  // };
})
