import { SERVER } from '../server';

function HomeController ($scope, $http, $state) {
	$scope.pictures = []; 

	  function init() {
	  	console.log("Success: In the HomeController")
	    
	    $http.get(SERVER + "images").then((response) => {
			console.log('Array -->', response.data)
			$scope.pictures = response.data;
	    });
	  }

	  init();

}; 

HomeController.$inject = ['$scope', '$http', '$state'];
export { HomeController };