import { SERVER } from '../server';

function DetailController ($scope, $http, $stateParams) {
    $scope.pic = {};

    function init() {
      console.log("Success: In the DetailController");
      $http.get(SERVER + "image/" + $stateParams.id).then((response) => {
        $scope.pic = response.data[0];
        console.log("response.data", response.data);
	    });
	  }; 

	  init();

    $scope.updateLikeCount = function(){
        console.log("Hit the button");

        $scope.pic.likeCount += 1;  

        $http.put(SERVER + "image/" + $stateParams.id + "/likeCount").then((response) => {
          response.likeCount += 1; 
        }); 
    };
}; 

DetailController.$inject = ['$scope', '$http', '$stateParams'];
export { DetailController };