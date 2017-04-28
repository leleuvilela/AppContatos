app.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state(
        {
          name: 'hello',
          url: '/hello',
          templateUrl: 'views/hello.html',
          controller: 'helloCtrl'
        }
      )
    .state(
        {
          name: 'about',
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'aboutCtrl'
        }
      );
}]);