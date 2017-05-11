app.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state(
        {
          name: 'index',
          url: '',
          templateUrl: 'views/index.html',
          controller: 'indexCtrl'
        }
      );
}]);