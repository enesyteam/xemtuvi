var goSua = angular.module('goSua', [
	'ui.router',
	'ngAnimate',
  	'ngSanitize',
    'mFirebase',
    'toastr',
	])
    .constant('appVersion', '4.4.0')
    .constant('releaseDate', 'May-20, 2018')
    .config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    	$locationProvider.hashPrefix('');

    	$urlRouterProvider.otherwise("/");

    	$stateProvider
    		.state( 'home', {
    			url: '/',
    			controller: 'MainCtrl',
    			templateUrl: '/pages/home.html'
    		} )
	    	.state('detail', {
	            url: '/xem-tu-vi/ngay=:day&thang=:month&nam=:year&gioitinh=:gender&amlich=:lunarYear&name=:name',
	            controller: 'DetailCtrl',
	            params     : { day: null, month : null, year: null, gender: null, lunarYear: null, name: null},
	            templateUrl: '/pages/detail.html'
	        })
    })
    .run(themeRun);


function themeRun($window, $rootScope, $timeout) {

}


