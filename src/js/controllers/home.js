import { SERVER } from '../server';

function HomeController ($scope, $http, $state) {

	  function init() {
	  	console.log("Success: In the HomeController")
	    
	    $http.get(SERVER).then((response) => {

	      console.log('Gallery data -->', response)

	    });
	  }

	  init();

}; 

HomeController.$inject = ['$scope', '$http', '$state'];
export { HomeController };