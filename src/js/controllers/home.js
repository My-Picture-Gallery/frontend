import { SERVER } from '../server';

function HomeController ($scope, $http, $state) {
	$scope.pics = []; 


	  function init() {
	  	console.log("Success: In the HomeController")
	    
	    $http.get(SERVER + "images").then((response) => {
			console.log('Array -->', response.data)
			$scope.pics = response.data;
	    });
	  }

	  init();

}; 

HomeController.$inject = ['$scope', '$http', '$state'];
export { HomeController };