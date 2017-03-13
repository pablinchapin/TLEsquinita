angular.module('tlService', ['ngResource'])
.factory('tlHub', [
	'$resource',
	function($resource){
		return true;
	}
])