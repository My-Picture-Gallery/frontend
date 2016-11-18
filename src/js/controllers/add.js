import { SERVER } from '../server';

function AddController ($scope, $http, $state) {
  // $scope.pics = [];

	  function init() {
	  	console.log("Success: In the AddController");
	  	console.log('Server url -->', SERVER); 
	  }

	  init();

	  $scope.addPicture = (picture) => {
    	$http.post(SERVER + "images", picture).then((response) => {
    	console.log('Uploaded successful -->', response.data); 
      	$state.go('home');
      });
  };

}; 

AddController.$inject = ['$scope', '$http', '$state'];
export { AddController };