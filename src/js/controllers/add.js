import SERVER from '../server';

function AddController ($scope, $http) {
  // $scope.pics = [];

	  function init() {
	  	console.log("Success: In the AddController")
	    
	    // $http.get(SERVER).then((response) => {
	    //   $scope.pics = response.data;
	    // });
	  }

	  init();

}; 

AddController.$inject = ['$scope', '$http'];
export { AddController };