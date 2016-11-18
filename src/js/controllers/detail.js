import SERVER from '../server';

function DetailController ($scope, $http) {
  // $scope.pics = [];

	  function init() {
	  	console.log("Success: In the DetailController")
	    
	    // $http.get(SERVER).then((response) => {
	    //   $scope.pics = response.data;
	    // });
	  }

	  init();

}; 

DetailController.$inject = ['$scope', '$http'];
export { DetailController };