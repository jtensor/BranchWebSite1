angular.module('website', [ 'ngRoute' ])
.config(function($routeProvider){
	$routeProvider
	// .when('/blog', {templateUrl:'/blog'})
	.when('/experiments',{templateUrl:'partials/experiments.html'})
	.when('/home', {templateUrl:'partials/home.html'})
	.otherwise({redirectTo:'/home'});
})
.controller('MainCtrl', function($scope,$location){
	$scope.setRoute = function(route){
		$location.path(route);
	}
})
