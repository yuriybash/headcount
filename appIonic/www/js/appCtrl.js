angular.module('headcount.AppController', [])

.controller('AppController', function($scope, Auth, $http, $window) {

  $scope.signout = function(){

    Auth.signout();
    return $http({
      method: 'GET',
      url: 'https://young-tundra-9275.herokuapp.com/auth/logout'
    })
    .then(function(resp) {
      console.log("You've signed out!");
    });
  };
})
