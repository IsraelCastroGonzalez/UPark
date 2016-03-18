angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('selectedArea', {
    url: '/selectedArea',
    templateUrl: 'templates/selectedArea.html',
    controller: 'selectedAreaCtrl'
  })

  .state('areas', {
    url: '/areas',
    templateUrl: 'templates/areas.html',
    controller: 'areasCtrl'
  })

  .state('general', {
    url: '/generalArea',
    templateUrl: 'templates/general.html',
    controller: 'generalCtrl'
  })

  .state('handicap', {
    url: '/handicapArea',
    templateUrl: 'templates/handicap.html',
    controller: 'handicapCtrl'
  })

$urlRouterProvider.otherwise('/home')

  

});