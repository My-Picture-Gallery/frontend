import SERVER from '../server';

function AddController ($scope, $http) {
  // $scope.pics = [];

	  function init() {
	  	console.log("Success: In the AddController")
	  }

	  init();

	  * create(request, response){
	  	//grab url and caption
	  	//post to server
	  	//response?
	  }

}; 

AddController.$inject = ['$scope', '$http'];
export { AddController };