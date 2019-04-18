var goSua = angular.module('goSua', [
	'ui.router',
	'ngAnimate',
    'ui.bootstrap',
  	'ngSanitize',
    'mFirebase',
    'toastr',
    'slick',
	])
    .constant('appVersion', '4.4.0')
    .constant('releaseDate', 'May-20, 2018')
    .config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    	$locationProvider.hashPrefix('');

    	$urlRouterProvider.otherwise("/");

    	$stateProvider
    		.state( 'home', {
    			url: '/c=:content',
    			controller: 'MainCtrl',
                params     : { content: null},
    			templateUrl: '/pages/home.html'
    		} )
	    	.state('detail', {
	            url: '/c=:content/a=:age/n=:name/detail',
	            controller: 'DetailCtrl',
                params     : { age: null},
	            templateUrl: '/pages/detail.html'
	        })
    })
    .run(themeRun);


function themeRun($window, $rootScope, $timeout) {

}


