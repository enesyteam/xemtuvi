goSua.controller('DetailCtrl', function( $rootScope, $scope, $http, $window, $document, $filter, $stateParams,
	$timeout, MFirebaseService,toastr, toastrConfig, $interval, $location, $uibModal, $uibModalStack ) {
	$scope.Math = window.Math;

	$scope.detailPage = "/pages/default.html";
	$scope.redirectUrl = 'http://amulet1.biquyetlamgiau.net';
	$scope.pageName = 'Money Amulet Thái Lan';

	switch($stateParams.content) {
        case "tv1":
            $scope.detailPage = "/pages/detail-tv1.html";
            $scope.redirectUrl = 'http://amulet1.biquyetlamgiau.net'
            break;
        case "tv2":
            $scope.detailPage = "/pages/detail-tv2.html";
            $scope.redirectUrl = 'http://amulet2.biquyetlamgiau.net'
            break;
        case "tv3":
            $scope.detailPage = "/pages/detail-tv3.html"
            $scope.redirectUrl = 'http://amulet3.biquyetlamgiau.net'
            break;
        case "tv4":
            $scope.detailPage = "/pages/detail-tv4.html"
            $scope.redirectUrl = 'http://amulet4.biquyetlamgiau.net'
            break;
        case "tv5":
            $scope.detailPage = "/pages/detail-tv5.html"
            $scope.redirectUrl = 'http://amulet1.biquyetlamgiau.net'
            break;
        case "tv6":
            $scope.detailPage = "/pages/detail-tv6.html"
            $scope.redirectUrl = 'http://amulet2.biquyetlamgiau.net'
            break;
        case "st1":
            $scope.detailPage = "/pages/detail-story1.html"
            $scope.redirectUrl = 'http://amulet1.biquyetlamgiau.net';
            break;
        case "st2":
            $scope.detailPage = "/pages/detail-story2.html"
            $scope.redirectUrl = 'http://amulet2.biquyetlamgiau.net';
            break;
        case "st3":
            $scope.detailPage = "/pages/detail-story3.html"
            $scope.redirectUrl = 'http://amulet3.biquyetlamgiau.net';
            break;
        case "st4":
            $scope.detailPage = "/pages/detail-story4.html"
            $scope.redirectUrl = 'http://amulet4.biquyetlamgiau.net';
            break;
        default:
    }

    $scope.data = {
    	name: $stateParams.name,
    	age: $stateParams.age,
    }
} )