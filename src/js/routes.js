function routerConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController'
    })
    .state('add', {
      url: '/add',
      // template: '<h1>Add View (Temporary)</h1>',
      templateUrl: 'templates/add.tpl.html',
      controller: 'AddController'
    })
    .state('team', {
      url: '/team',
      template: '<h1>Team View</h1>'
    })
    .state('detail', {
      url: '/detail/:id',
      template: '<h1>This is the detailed View</h1>'
    });

  $urlRouterProvider.otherwise('/');  

}

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };