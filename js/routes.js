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

  .state('area1', {
    url: '/area1',
    templateUrl: 'templates/area1.html',
    controller: 'area1Ctrl'
  })

  .state('areas', {
    url: '/areas',
    templateUrl: 'templates/areas.html',
    controller: 'areasCtrl'
  })

  .state('area2', {
    url: '/area2',
    templateUrl: 'templates/area2.html',
    controller: 'area2Ctrl'
  })

  .state('generalArea1', {
    url: '/generalArea1',
    templateUrl: 'templates/generalArea1.html',
    controller: 'generalArea1Ctrl'
  })

  .state('generalArea2', {
    url: '/generalArea2',
    templateUrl: 'templates/generalArea2.html',
    controller: 'generalArea2Ctrl'
  })

  .state('handicapArea1', {
    url: '/handicapArea1',
    templateUrl: 'templates/handicapArea1.html',
    controller: 'handicapArea1Ctrl'
  })

  .state('handicapArea2', {
    url: '/handicapArea2',
    templateUrl: 'templates/handicapArea2.html',
    controller: 'handicapArea2Ctrl'
  })

$urlRouterProvider.otherwise('/home')

  

});