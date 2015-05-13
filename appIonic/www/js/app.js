// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('headcount', [
  'ionic',
  'headcount.services',
  'headcount.events',
  'headcount.accounts',
  'headcount.auth',
  'ui.bootstrap'
])
.config(function($stateProvider){
  $stateProvider
    .state('signin', {
      url: '/signin',
      templateUrl: '../templates/signin.html',
      controller: 'AuthController'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '../templates/signup.html',
      controller: 'AuthController'
    })
    .state('event', {
      url: '/event',
      templateUrl: '../templates/event.html',
      controller: 'eventsController',
      authenticate: true
    })
    .state('events', {
      url: '/events',
      templateUrl: '../templates/eventslist.html',
      controller: 'EventsController',
      authenticate: true
    })
    .state('newevent', {
      url: '/newevent',
      templateUrl: '../templates/newevent.html',
      controller: 'EventsController',
      authenticate: true
    })
    .state('accounts', {
      url: '/accounts',
      templateUrl: '../templates/accounts.html',
      controller: 'AccountsController',
      authenticate: true
    })
    .otherwise({
      redirectTo: '/events'
    });
})
.factory('EventsFactory', function ($rootScope) {

})
.factory('AttachTokens', function ($window, $location) {

})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
