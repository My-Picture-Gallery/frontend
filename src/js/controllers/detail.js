import { SERVER } from '../server';

function DetailController ($scope, $http, $stateParams) {
  $scope.pic = {};

    function init() {
      console.log("Success: In the DetailController");
      console.log("This is stateParams", $stateParams);
      
      $http.get(SERVER + "image/" + $stateParams.id).then((response) => {
        $scope.pic = response.data[0];
        console.log("response.data", response.data);
        console.log("This is stateParams", $stateParams);

	    });
	  }

	  init();

}; 

DetailController.$inject = ['$scope', '$http', '$stateParams'];
export { DetailController };