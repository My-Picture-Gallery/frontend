function routerConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.tpl.html',
      controller: 'AboutController'
    })

    .state('add', {
      url: '/add',
      templateUrl: 'templates/add.tpl.html',
      controller: 'AddController'
    })

    .state('detail', {
      //nested state url : remove the initial / 
      url: '/detail/:id', 
      templateUrl: 'templates/detail.tpl.html', 
      controller: 'DetailController'
    });
    
    // .state('team', {
    //   url: '/team',
    //   template: '<h1>Team View</h1>'
    // })
    
    $urlRouterProvider.otherwise('/');  

}

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };