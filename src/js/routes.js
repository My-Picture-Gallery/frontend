function routerConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeController',
    });

  $urlRouterProvider.otherwise('/');  

}

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };