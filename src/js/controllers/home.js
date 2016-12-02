import { SERVER } from '../server';

function HomeController ($scope, $http, $state, $stateParams) {
	$scope.pics = [];   

	  function init() {
	  	console.log("Success: In the HomeController")
	    $http.get(SERVER + "images").then((response) => {
			console.log('Array -->', response.data)
			$scope.pics = response.data;
	    });
      
	  }

	  init();

	  // TODO: Update like count
	  // Problem: How to find image by id?
	  // $scope.updateLikeCount = function(){
	  // console.log("Hit the button");
	  // console.log($scope.pics); 
   // 	  }

   	 
   //  $scope.updateLikeCount = function(){
   //      $scope.pic.likeCount += 1;  

   //      $http.put(SERVER + "image/" + $stateParams.id + "/likeCount").then((response) => {
   //        response.likeCount += 1; 
   //        $state.go('home');
   //      });  
   //  };
};

HomeController.$inject = ['$scope', '$http', '$state', '$stateParams'];
export { HomeController };