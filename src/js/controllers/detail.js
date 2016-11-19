import { SERVER } from '../server';

function DetailController ($scope, $http, $stateParams) {
  $scope.pic = {};

	  function init() {
	  	console.log("Success: In the DetailController");
      console.log("This is stateParams", $stateParams);
      
      $http.get(SERVER + "image/" + $stateParams.id).then((response) => {
	      $scope.pic = response.data;
        // console.log(url);
        // console.log(response.data);
	    });
	  }

	  init();

}; 

DetailController.$inject = ['$scope', '$http', '$stateParams'];
export { DetailController };