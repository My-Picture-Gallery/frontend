import { SERVER }from '../server';

function HomeController ($scope, $http) {
  $scope.pics = [];

	  function init() {
	  	console.log("Success: In the HomeController")
	    
	    $http.get(SERVER).then((response) => {
	      $scope.pics = response.data;
	    });
	  }

	  init();

}; 

HomeController.$inject = ['$scope', '$http'];
export { HomeController };