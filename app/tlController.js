app.controller('tlController', [
	'$scope', '$timeout', '$q', '$http',
	function($scope, $timeout, $q, $http){

		$scope.model = {
			number : 0,
			result : 'Ready'
		};

		$scope.getCategories = getCategories;
		$scope.getProducts = getProducts;

		function getCategories(){
			console.log('categories');

		};

		function getProducts(){
			console.log('products');
		};


		$scope.getCategories();
		$scope.getProducts();


	}
]);