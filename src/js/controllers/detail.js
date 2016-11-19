import { SERVER } from '../server';

function DetailController ($scope, $http, $stateParams) {
  $scope.pic = {};

	  function init() {
	  	console.log("Success: In the DetailController")
      let url = SERVER + $stateParams.id;
      
      $http.get(url).then((response) => {
	      $scope.pic = response.data;
        console.log(url);
        // console.log(response.data);
	    });
	  }

	  init();

}; 

DetailController.$inject = ['$scope', '$http', '$stateParams'];
export { DetailController };