goSua.controller('DetailCtrl', function( $rootScope, $scope, $http, $window, $document, $filter, $stateParams,
	$timeout, MFirebaseService,toastr, toastrConfig, $interval, $location, $uibModal, $uibModalStack ) {
	$scope.Math = window.Math;
	$rootScope.currentURL = $location.absUrl();
	$rootScope.title = 'Lá số tử vi 2019 của ' + $stateParams.name;
	$rootScope.description = 'Click để xem lá số tử vi năm 2019 của ' + $stateParams.name;
	$rootScope.ogImage = $location.protocol() + '://' + $location.host() + ':' + $location.port() 
		+ '/images/section-images/' + $stateParams.lunarYear + '.png';
	$scope.slickConfig = {
	    enabled: true,
	    autoplay: true,
	    arrows: false,
	    draggable: true,
	    autoplaySpeed: 5000,
	    method: {},
	    event: {
	        beforeChange: function (event, slick, currentSlide, nextSlide) {
	        },
	        afterChange: function (event, slick, currentSlide, nextSlide) {
	        }
	    }
	};

	function formatDate(date) {
	    var d = new Date(date),
	        month = '' + (d.getMonth() + 1),
	        day = '' + d.getDate(),
	        year = d.getFullYear();

	    if (month.length < 2) month = '0' + month;
	    if (day.length < 2) day = '0' + day;

	    return [day, month, year].join('-') + ': ' + d.getHours() + 'h' + d.getMinutes() + 'ph';
	}

	$scope.order = function(product) {
		$uibModal.open({
	      ariaLabelledBy: 'modal-title-top',
	      ariaDescribedBy: 'modal-body-top',
	      templateUrl: 'myModalContent.html',
	      controller: function($scope) {
	        $scope.name = 'top';
	        $scope.loading = false;
	        $scope.submit = function() {
	        	$scope.loading = true;
	        	// console.log(product);
	        	MFirebaseService.addOrder(Object.assign(product, {
	        		mobile: $scope.mobile,
					birthday: $stateParams.day + '/' + $stateParams.month + '/' + $stateParams.year,
					gender: $stateParams.gender,
					name: $stateParams.name,
					order_time: formatDate(new Date()),
				})).then( function(response) {
					$scope.loading = false;
	        		// alert('Đặt hàng thành công');
	        		closeModal();
	        		toastr.success("Cảm ơn bạn đã để lại thông tin. Chúng tôi sẽ liên hệ với bạn ngay!")
	        	} );
	        }
	      }
	    });
	}

	function closeModal() {
    	$uibModalStack.dismissAll();
    }

	var years = [
	  {
	    "nam": "1905",
	    "am_lich": "Ất Tỵ",
	    "ngu_hanh": "Phú Đăng Hỏa",
	    "giai_nghia": "Lửa đèn to",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Khảm Thuỷ",
	    "menh": "Hỏa",
	    "phat": "Phổ Hiền Bồ Tát"
	  }, 
	  {
	    "nam": "1906",
	    "am_lich": "Bính Ngọ",
	    "ngu_hanh": "Thiên Hà Thủy",
	    "giai_nghia": "Nước trên trời",
	    "menh_nam": "Tốn Mộc",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Thủy",
	    "phat": "Đại Thế Chí Bồ Tát"
	  }, 
	  {
	    "nam": "1907",
	    "am_lich": "Đinh Mùi",
	    "ngu_hanh": "Thiên Hà Thủy",
	    "giai_nghia": "Nước trên trời",
	    "menh_nam": "Chấn Mộc",
	    "menh_nu": "Chấn Mộc",
	    "menh": "Thủy",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "1908",
	    "am_lich": "Mậu Thân",
	    "ngu_hanh": "Đại Trạch Thổ",
	    "giai_nghia": "Đất nền nhà",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Tốn Mộc",
	    "menh": "Thổ",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "1909",
	    "am_lich": "Kỷ Dậu",
	    "ngu_hanh": "Đại Trạch Thổ",
	    "giai_nghia": "Đất nền nhà",
	    "menh_nam": "Khảm Thuỷ",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Thổ",
	    "phat": "Bất Động Minh Vương"
	  }, 
	  {
	    "nam": "1910",
	    "am_lich": "Canh Tuất",
	    "ngu_hanh": "Thoa Xuyến Kim",
	    "giai_nghia": "Vàng trang sức",
	    "menh_nam": "Ly Hoả",
	    "menh_nu": "Càn Kim",
	    "menh": "Kim",
	    "phat": "Phật A-di-đà"
	  }, 
	  {
	    "nam": "1911",
	    "am_lich": "Tân Hợi",
	    "ngu_hanh": "Thoa Xuyến Kim",
	    "giai_nghia": "Vàng trang sức",
	    "menh_nam": "Cấn Thổ",
	    "menh_nu": "Đoài Kim",
	    "menh": "Kim",
	    "phat": "Phật A-di-đà"
	  }, 
	  {
	    "nam": "1912",
	    "am_lich": "Nhâm Tý",
	    "ngu_hanh": "Tang Đố Mộc",
	    "giai_nghia": "Gỗ cây dâu",
	    "menh_nam": "Đoài Kim",
	    "menh_nu": "Cấn Thổ",
	    "menh": "Mộc",
	    "phat": "Thiên Thủ Thiên Nhãn"
	  }, 
	  {
	    "nam": "1913",
	    "am_lich": "Quý Sửu",
	    "ngu_hanh": "Tang Đố Mộc",
	    "giai_nghia": "Gỗ cây dâu",
	    "menh_nam": "Càn Kim",
	    "menh_nu": "Ly Hoả",
	    "menh": "Mộc",
	    "phat": "Hư Không Tạng Bồ Tát"
	  }, 
	  {
	    "nam": "1914",
	    "am_lich": "Giáp Dần",
	    "ngu_hanh": "Đại Khe Thủy",
	    "giai_nghia": "Nước khe lớn",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Khảm Thuỷ",
	    "menh": "Thủy",
	    "phat": "Hư Không Tạng Bồ Tát"
	  }, 
	  {
	    "nam": "1915",
	    "am_lich": "Ất Mão",
	    "ngu_hanh": "Đại Khe Thủy",
	    "giai_nghia": "Nước khe lớn",
	    "menh_nam": "Tốn Mộc",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Thủy",
	    "phat": "Văn Thù Bồ Tát"
	  }, 
	  {
	    "nam": "1916",
	    "am_lich": "Bính Thìn",
	    "ngu_hanh": "Sa Trung Thổ",
	    "giai_nghia": "Đất pha cát",
	    "menh_nam": "Chấn Mộc",
	    "menh_nu": "Chấn Mộc",
	    "menh": "Thổ",
	    "phat": "Phổ Hiền Bồ Tát"
	  }, 
	  {
	    "nam": "1917",
	    "am_lich": "Đinh Tỵ",
	    "ngu_hanh": "Sa Trung Thổ",
	    "giai_nghia": "Đất pha cát",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Tốn Mộc",
	    "menh": "Thổ",
	    "phat": "Phổ Hiền Bồ Tát"
	  }, 
	  {
	    "nam": "1918",
	    "am_lich": "Mậu Ngọ",
	    "ngu_hanh": "Thiên Thượng Hỏa",
	    "giai_nghia": "Lửa trên trời",
	    "menh_nam": "Khảm Thuỷ",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Hỏa",
	    "phat": "Đại Thế Chí Bồ Tát"
	  }, 
	  {
	    "nam": "1919",
	    "am_lich": "Kỷ Mùi",
	    "ngu_hanh": "Thiên Thượng Hỏa",
	    "giai_nghia": "Lửa trên trời",
	    "menh_nam": "Ly Hoả",
	    "menh_nu": "Càn Kim",
	    "menh": "Hỏa",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "1920",
	    "am_lich": "Canh Thân",
	    "ngu_hanh": "Thạch Lựu Mộc",
	    "giai_nghia": "Gỗ cây lựu",
	    "menh_nam": "Cấn Thổ",
	    "menh_nu": "Đoài Kim",
	    "menh": "Mộc",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "1921",
	    "am_lich": "Tân Dậu",
	    "ngu_hanh": "Thạch Lựu Mộc",
	    "giai_nghia": "Gỗ cây lựu",
	    "menh_nam": "Đoài Kim",
	    "menh_nu": "Cấn Thổ",
	    "menh": "Mộc",
	    "phat": "Bất Động Minh Vương"
	  }, 
	  {
	    "nam": "1922",
	    "am_lich": "Nhâm Tuất",
	    "ngu_hanh": "Đại Hải Thủy",
	    "giai_nghia": "Nước biển lớn",
	    "menh_nam": "Càn Kim",
	    "menh_nu": "Ly Hoả",
	    "menh": "Thủy",
	    "phat": "Phật A-di-đà"
	  }, 
	  {
	    "nam": "1923",
	    "am_lich": "Quý Hợi",
	    "ngu_hanh": "Đại Hải Thủy",
	    "giai_nghia": "Nước biển lớn",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Khảm Thuỷ",
	    "menh": "Thủy",
	    "phat": "Phật A-di-đà"
	  }, 
	  {
	    "nam": "1924",
	    "am_lich": "Giáp Tý",
	    "ngu_hanh": "Hải Trung Kim",
	    "giai_nghia": "Vàng trong biển",
	    "menh_nam": "Tốn Mộc",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Kim",
	    "phat": "Thiên Thủ Thiên Nhãn"
	  }, 
	  {
	    "nam": "1925",
	    "am_lich": "Ất Sửu",
	    "ngu_hanh": "Hải Trung Kim",
	    "giai_nghia": "Vàng trong biển",
	    "menh_nam": "Chấn Mộc",
	    "menh_nu": "Chấn Mộc",
	    "menh": "Kim",
	    "phat": "Hư Không Tạng Bồ Tát"
	  }, 
	  {
	    "nam": "1926",
	    "am_lich": "Bính Dần",
	    "ngu_hanh": "Lư Trung Hỏa",
	    "giai_nghia": "Lửa trong lò",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Tốn Mộc",
	    "menh": "Hỏa",
	    "phat": "Hư Không Tạng Bồ Tát"
	  }, 
	  {
	    "nam": "1927",
	    "am_lich": "Đinh Mão",
	    "ngu_hanh": "Lư Trung Hỏa",
	    "giai_nghia": "Lửa trong lò",
	    "menh_nam": "Khảm Thuỷ",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Hỏa",
	    "phat": "Văn Thù Bồ Tát"
	  }, 
	  {
	    "nam": "1928",
	    "am_lich": "Mậu Thìn",
	    "ngu_hanh": "Đại Lâm Mộc",
	    "giai_nghia": "Gỗ rừng già",
	    "menh_nam": "Ly Hoả",
	    "menh_nu": "Càn Kim",
	    "menh": "Mộc",
	    "phat": "Phổ Hiền Bồ Tát"
	  }, 
	  {
	    "nam": "1929",
	    "am_lich": "Kỷ Tỵ",
	    "ngu_hanh": "Đại Lâm Mộc",
	    "giai_nghia": "Gỗ rừng già",
	    "menh_nam": "Cấn Thổ",
	    "menh_nu": "Đoài Kim",
	    "menh": "Mộc",
	    "phat": "Phổ Hiền Bồ Tát"
	  }, 
	  {
	    "nam": "1930",
	    "am_lich": "Canh Ngọ",
	    "ngu_hanh": "Lộ Bàng Thổ",
	    "giai_nghia": "Đất đường đi",
	    "menh_nam": "Đoài Kim",
	    "menh_nu": "Cấn Thổ",
	    "menh": "Thổ",
	    "phat": "Đại Thế Chí Bồ Tát"
	  }, 
	  {
	    "nam": "1931",
	    "am_lich": "Tân Mùi",
	    "ngu_hanh": "Lộ Bàng Thổ",
	    "giai_nghia": "Đất đường đi",
	    "menh_nam": "Càn Kim",
	    "menh_nu": "Ly Hoả",
	    "menh": "Thổ",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "1932",
	    "am_lich": "Nhâm Thân",
	    "ngu_hanh": "Kiếm Phong Kim",
	    "giai_nghia": "Vàng mũi kiếm",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Khảm Thuỷ",
	    "menh": "Kim",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "1933",
	    "am_lich": "Quý Dậu",
	    "ngu_hanh": "Kiếm Phong Kim",
	    "giai_nghia": "Vàng mũi kiếm",
	    "menh_nam": "Tốn Mộc",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Kim",
	    "phat": "Bất Động Minh Vương"
	  }, 
	  {
	    "nam": "1934",
	    "am_lich": "Giáp Tuất",
	    "ngu_hanh": "Sơn Đầu Hỏa",
	    "giai_nghia": "Lửa trên núi",
	    "menh_nam": "Chấn Mộc",
	    "menh_nu": "Chấn Mộc",
	    "menh": "Hỏa",
	    "phat": "Phật A-di-đà"
	  }, 
	  {
	    "nam": "1935",
	    "am_lich": "Ất Hợi",
	    "ngu_hanh": "Sơn Đầu Hỏa",
	    "giai_nghia": "Lửa trên núi",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Tốn Mộc",
	    "menh": "Hỏa",
	    "phat": "Phật A-di-đà"
	  }, 
	  {
	    "nam": "1936",
	    "am_lich": "Bính Tý",
	    "ngu_hanh": "Giảm Hạ Thủy",
	    "giai_nghia": "Nước cuối khe",
	    "menh_nam": "Khảm Thuỷ",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Thủy",
	    "phat": "Thiên Thủ Thiên Nhãn"
	  }, 
	  {
	    "nam": "1937",
	    "am_lich": "Đinh Sửu",
	    "ngu_hanh": "Giảm Hạ Thủy",
	    "giai_nghia": "Nước cuối khe",
	    "menh_nam": "Ly Hoả",
	    "menh_nu": "Càn Kim",
	    "menh": "Thủy",
	    "phat": "Hư Không Tạng Bồ Tát"
	  }, 
	  {
	    "nam": "1938",
	    "am_lich": "Mậu Dần",
	    "ngu_hanh": "Thành Đầu Thổ",
	    "giai_nghia": "Đất trên thành",
	    "menh_nam": "Cấn Thổ",
	    "menh_nu": "Đoài Kim",
	    "menh": "Thổ",
	    "phat": "Hư Không Tạng Bồ Tát"
	  }, 
	  {
	    "nam": "1939",
	    "am_lich": "Kỷ Mão",
	    "ngu_hanh": "Thành Đầu Thổ",
	    "giai_nghia": "Đất trên thành",
	    "menh_nam": "Đoài Kim",
	    "menh_nu": "Cấn Thổ",
	    "menh": "Thổ",
	    "phat": "Văn Thù Bồ Tát"
	  }, 
	  {
	    "nam": "1940",
	    "am_lich": "Canh Thìn",
	    "ngu_hanh": "Bạch Lạp Kim",
	    "giai_nghia": "Vàng chân đèn",
	    "menh_nam": "Càn Kim",
	    "menh_nu": "Ly Hoả",
	    "menh": "Kim",
	    "phat": "Phổ Hiền Bồ Tát"
	  }, 
	  {
	    "nam": "1941",
	    "am_lich": "Tân Tỵ",
	    "ngu_hanh": "Bạch Lạp Kim",
	    "giai_nghia": "Vàng chân đèn",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Khảm Thuỷ",
	    "menh": "Kim",
	    "phat": "Phổ Hiền Bồ Tát"
	  }, 
	  {
	    "nam": "1942",
	    "am_lich": "Nhâm Ngọ",
	    "ngu_hanh": "Dương Liễu Mộc",
	    "giai_nghia": "Gỗ cây dương",
	    "menh_nam": "Tốn Mộc",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Mộc",
	    "phat": "Đại Thế Chí Bồ Tát"
	  }, 
	  {
	    "nam": "1943",
	    "am_lich": "Quý Mùi",
	    "ngu_hanh": "Dương Liễu Mộc",
	    "giai_nghia": "Gỗ cây dương",
	    "menh_nam": "Chấn Mộc",
	    "menh_nu": "Chấn Mộc",
	    "menh": "Mộc",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "1944",
	    "am_lich": "Giáp Thân",
	    "ngu_hanh": "Tuyền Trung Thủy",
	    "giai_nghia": "Nước trong suối",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Tốn Mộc",
	    "menh": "Thủy",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "1945",
	    "am_lich": "Ất Dậu",
	    "ngu_hanh": "Tuyền Trung Thủy",
	    "giai_nghia": "Nước trong suối",
	    "menh_nam": "Khảm Thuỷ",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Thủy",
	    "phat": "Bất Động Minh Vương"
	  }, 
	  {
	    "nam": "1946",
	    "am_lich": "Bính Tuất",
	    "ngu_hanh": "Ốc Thượng Thổ",
	    "giai_nghia": "Đất nóc nhà",
	    "menh_nam": "Ly Hoả",
	    "menh_nu": "Càn Kim",
	    "menh": "Thổ",
	    "phat": "Phật A-di-đà"
	  }, 
	  {
	    "nam": "1947",
	    "am_lich": "Đinh Hợi",
	    "ngu_hanh": "Ốc Thượng Thổ",
	    "giai_nghia": "Đất nóc nhà",
	    "menh_nam": "Cấn Thổ",
	    "menh_nu": "Đoài Kim",
	    "menh": "Thổ",
	    "phat": "Phật A-di-đà"
	  }, 
	  {
	    "nam": "1948",
	    "am_lich": "Mậu Tý",
	    "ngu_hanh": "Thích Lịch Hỏa",
	    "giai_nghia": "Lửa sấm sét",
	    "menh_nam": "Đoài Kim",
	    "menh_nu": "Cấn Thổ",
	    "menh": "Hỏa",
	    "phat": "Thiên Thủ Thiên Nhãn"
	  }, 
	  {
	    "nam": "1949",
	    "am_lich": "Kỷ Sửu",
	    "ngu_hanh": "Thích Lịch Hỏa",
	    "giai_nghia": "Lửa sấm sét",
	    "menh_nam": "Càn Kim",
	    "menh_nu": "Ly Hoả",
	    "menh": "Hỏa",
	    "phat": "Hư Không Tạng Bồ Tát"
	  }, 
	  {
	    "nam": "1950",
	    "am_lich": "Canh Dần",
	    "ngu_hanh": "Tùng Bách Mộc",
	    "giai_nghia": "Gỗ tùng bách",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Khảm Thuỷ",
	    "menh": "Mộc",
	    "phat": "Hư Không Tạng Bồ Tát"
	  }, 
	  {
	    "nam": "1951",
	    "am_lich": "Tân Mão",
	    "ngu_hanh": "Tùng Bách Mộc",
	    "giai_nghia": "Gỗ tùng bách",
	    "menh_nam": "Tốn Mộc",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Mộc",
	    "phat": "Văn Thù Bồ Tát"
	  }, 
	  {
	    "nam": "1952",
	    "am_lich": "Nhâm Thìn",
	    "ngu_hanh": "Trường Lưu Thủy",
	    "giai_nghia": "Nước chảy mạnh",
	    "menh_nam": "Chấn Mộc",
	    "menh_nu": "Chấn Mộc",
	    "menh": "Thủy",
	    "phat": "Phổ Hiền Bồ Tát"
	  }, 
	  {
	    "nam": "1953",
	    "am_lich": "Quý Tỵ",
	    "ngu_hanh": "Trường Lưu Thủy",
	    "giai_nghia": "Nước chảy mạnh",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Tốn Mộc",
	    "menh": "Thủy",
	    "phat": "Phổ Hiền Bồ Tát"
	  }, 
	  {
	    "nam": "1954",
	    "am_lich": "Giáp Ngọ",
	    "ngu_hanh": "Sa Trung Kim",
	    "giai_nghia": "Vàng trong cát",
	    "menh_nam": "Khảm Thuỷ",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Kim",
	    "phat": "Đại Thế Chí Bồ Tát"
	  }, 
	  {
	    "nam": "1955",
	    "am_lich": "Ất Mùi",
	    "ngu_hanh": "Sa Trung Kim",
	    "giai_nghia": "Vàng trong cát",
	    "menh_nam": "Ly Hoả",
	    "menh_nu": "Càn Kim",
	    "menh": "Kim",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "1956",
	    "am_lich": "Bính Thân",
	    "ngu_hanh": "Sơn Hạ Hỏa",
	    "giai_nghia": "Lửa trên núi",
	    "menh_nam": "Cấn Thổ",
	    "menh_nu": "Đoài Kim",
	    "menh": "Hỏa",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "1957",
	    "am_lich": "Đinh Dậu",
	    "ngu_hanh": "Sơn Hạ Hỏa",
	    "giai_nghia": "Lửa trên núi",
	    "menh_nam": "Đoài Kim",
	    "menh_nu": "Cấn Thổ",
	    "menh": "Hỏa",
	    "phat": "Bất Động Minh Vương"
	  }, 
	  {
	    "nam": "1958",
	    "am_lich": "Mậu Tuất",
	    "ngu_hanh": "Bình Địa Mộc",
	    "giai_nghia": "Gỗ đồng bằng",
	    "menh_nam": "Càn Kim",
	    "menh_nu": "Ly Hoả",
	    "menh": "Mộc",
	    "phat": "Phật A-di-đà"
	  }, 
	  {
	    "nam": "1959",
	    "am_lich": "Kỷ Hợi",
	    "ngu_hanh": "Bình Địa Mộc",
	    "giai_nghia": "Gỗ đồng bằng",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Khảm Thuỷ",
	    "menh": "Mộc",
	    "phat": "Phật A-di-đà"
	  }, 
	  {
	    "nam": "1960",
	    "am_lich": "Canh Tý",
	    "ngu_hanh": "Bích Thượng Thổ",
	    "giai_nghia": "Đất tò vò",
	    "menh_nam": "Tốn Mộc",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Thổ",
	    "phat": "Thiên Thủ Thiên Nhãn"
	  }, 
	  {
	    "nam": "1961",
	    "am_lich": "Tân Sửu",
	    "ngu_hanh": "Bích Thượng Thổ",
	    "giai_nghia": "Đất tò vò",
	    "menh_nam": "Chấn Mộc",
	    "menh_nu": "Chấn Mộc",
	    "menh": "Thổ",
	    "phat": "Hư Không Tạng Bồ Tát"
	  }, 
	  {
	    "nam": "1962",
	    "am_lich": "Nhâm Dần",
	    "ngu_hanh": "Kim Bạch Kim",
	    "giai_nghia": "Vàng pha bạc",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Tốn Mộc",
	    "menh": "Kim",
	    "phat": "Hư Không Tạng Bồ Tát"
	  }, 
	  {
	    "nam": "1963",
	    "am_lich": "Quý Mão",
	    "ngu_hanh": "Kim Bạch Kim",
	    "giai_nghia": "Vàng pha bạc",
	    "menh_nam": "Khảm Thuỷ",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Kim",
	    "phat": "Văn Thù Bồ Tát"
	  }, 
	  {
	    "nam": "1964",
	    "am_lich": "Giáp Thìn",
	    "ngu_hanh": "Phú Đăng Hỏa",
	    "giai_nghia": "Lửa đèn to",
	    "menh_nam": "Ly Hoả",
	    "menh_nu": "Càn Kim",
	    "menh": "Hỏa",
	    "phat": "Phổ Hiền Bồ Tát"
	  }, 
	  {
	    "nam": "1965",
	    "am_lich": "Ất Tỵ",
	    "ngu_hanh": "Phú Đăng Hỏa",
	    "giai_nghia": "Lửa đèn to",
	    "menh_nam": "Cấn Thổ",
	    "menh_nu": "Đoài Kim",
	    "menh": "Hỏa",
	    "phat": "Phổ Hiền Bồ Tát"
	  }, 
	  {
	    "nam": "1966",
	    "am_lich": "Bính Ngọ",
	    "ngu_hanh": "Thiên Hà Thủy",
	    "giai_nghia": "Nước trên trời",
	    "menh_nam": "Đoài Kim",
	    "menh_nu": "Cấn Thổ",
	    "menh": "Thủy",
	    "phat": "Đại Thế Chí Bồ Tát"
	  }, 
	  {
	    "nam": "1967",
	    "am_lich": "Đinh Mùi",
	    "ngu_hanh": "Thiên Hà Thủy",
	    "giai_nghia": "Nước trên trời",
	    "menh_nam": "Càn Kim",
	    "menh_nu": "Ly Hoả",
	    "menh": "Thủy",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "1968",
	    "am_lich": "Mậu Thân",
	    "ngu_hanh": "Đại Trạch Thổ",
	    "giai_nghia": "Đất nền nhà",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Khảm Thuỷ",
	    "menh": "Thổ",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "1969",
	    "am_lich": "Kỷ Dậu",
	    "ngu_hanh": "Đại Trạch Thổ",
	    "giai_nghia": "Đất nền nhà",
	    "menh_nam": "Tốn Mộc",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Thổ",
	    "phat": "Bất Động Minh Vương"
	  }, 
	  {
	    "nam": "1970",
	    "am_lich": "Canh Tuất",
	    "ngu_hanh": "Thoa Xuyến Kim",
	    "giai_nghia": "Vàng trang sức",
	    "menh_nam": "Chấn Mộc",
	    "menh_nu": "Chấn Mộc",
	    "menh": "Kim",
	    "phat": "Phật A-di-đà"
	  }, 
	  {
	    "nam": "1971",
	    "am_lich": "Tân Hợi",
	    "ngu_hanh": "Thoa Xuyến Kim",
	    "giai_nghia": "Vàng trang sức",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Tốn Mộc",
	    "menh": "Kim",
	    "phat": "Phật A-di-đà"
	  }, 
	  {
	    "nam": "1972",
	    "am_lich": "Nhâm Tý",
	    "ngu_hanh": "Tang Đố Mộc",
	    "giai_nghia": "Gỗ cây dâu",
	    "menh_nam": "Khảm Thuỷ",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Mộc",
	    "phat": "Thiên Thủ Thiên Nhãn"
	  }, 
	  {
	    "nam": "1973",
	    "am_lich": "Quý Sửu",
	    "ngu_hanh": "Tang Đố Mộc",
	    "giai_nghia": "Gỗ cây dâu",
	    "menh_nam": "Ly Hoả",
	    "menh_nu": "Càn Kim",
	    "menh": "Mộc",
	    "phat": "Hư Không Tạng Bồ Tát"
	  }, 
	  {
	    "nam": "1974",
	    "am_lich": "Giáp Dần",
	    "ngu_hanh": "Đại Khe Thủy",
	    "giai_nghia": "Nước khe lớn",
	    "menh_nam": "Cấn Thổ",
	    "menh_nu": "Đoài Kim",
	    "menh": "Thủy",
	    "phat": "Hư Không Tạng Bồ Tát"
	  }, 
	  {
	    "nam": "1975",
	    "am_lich": "Ất Mão",
	    "ngu_hanh": "Đại Khe Thủy",
	    "giai_nghia": "Nước khe lớn",
	    "menh_nam": "Đoài Kim",
	    "menh_nu": "Cấn Thổ",
	    "menh": "Thủy",
	    "phat": "Văn Thù Bồ Tát"
	  }, 
	  {
	    "nam": "1976",
	    "am_lich": "Bính Thìn",
	    "ngu_hanh": "Sa Trung Thổ",
	    "giai_nghia": "Đất pha cát",
	    "menh_nam": "Càn Kim",
	    "menh_nu": "Ly Hoả",
	    "menh": "Thổ",
	    "phat": "Phổ Hiền Bồ Tát"
	  }, 
	  {
	    "nam": "1977",
	    "am_lich": "Đinh Tỵ",
	    "ngu_hanh": "Sa Trung Thổ",
	    "giai_nghia": "Đất pha cát",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Khảm Thuỷ",
	    "menh": "Thổ",
	    "phat": "Phổ Hiền Bồ Tát"
	  }, 
	  {
	    "nam": "1978",
	    "am_lich": "Mậu Ngọ",
	    "ngu_hanh": "Thiên Thượng Hỏa",
	    "giai_nghia": "Lửa trên trời",
	    "menh_nam": "Tốn Mộc",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Hỏa",
	    "phat": "Đại Thế Chí Bồ Tát"
	  }, 
	  {
	    "nam": "1979",
	    "am_lich": "Kỷ Mùi",
	    "ngu_hanh": "Thiên Thượng Hỏa",
	    "giai_nghia": "Lửa trên trời",
	    "menh_nam": "Chấn Mộc",
	    "menh_nu": "Chấn Mộc",
	    "menh": "Hỏa",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "1980",
	    "am_lich": "Canh Thân",
	    "ngu_hanh": "Thạch Lựu Mộc",
	    "giai_nghia": "Gỗ cây lựu",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Tốn Mộc",
	    "menh": "Mộc",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "1981",
	    "am_lich": "Tân Dậu",
	    "ngu_hanh": "Thạch Lựu Mộc",
	    "giai_nghia": "Gỗ cây lựu",
	    "menh_nam": "Khảm Thuỷ",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Mộc",
	    "phat": "Bất Động Minh Vương"
	  }, 
	  {
	    "nam": "1982",
	    "am_lich": "Nhâm Tuất",
	    "ngu_hanh": "Đại Hải Thủy",
	    "giai_nghia": "Nước biển lớn",
	    "menh_nam": "Ly Hoả",
	    "menh_nu": "Càn Kim",
	    "menh": "Thủy",
	    "phat": "Phật A-di-đà"
	  }, 
	  {
	    "nam": "1983",
	    "am_lich": "Quý Hợi",
	    "ngu_hanh": "Đại Hải Thủy",
	    "giai_nghia": "Nước biển lớn",
	    "menh_nam": "Cấn Thổ",
	    "menh_nu": "Đoài Kim",
	    "menh": "Thủy",
	    "phat": "Phật A-di-đà"
	  }, 
	  {
	    "nam": "1984",
	    "am_lich": "Giáp Tý",
	    "ngu_hanh": "Hải Trung Kim",
	    "giai_nghia": "Vàng trong biển",
	    "menh_nam": "Đoài Kim",
	    "menh_nu": "Cấn Thổ",
	    "menh": "Kim",
	    "phat": "Thiên Thủ Thiên Nhãn"
	  }, 
	  {
	    "nam": "1985",
	    "am_lich": "Ất Sửu",
	    "ngu_hanh": "Hải Trung Kim",
	    "giai_nghia": "Vàng trong biển",
	    "menh_nam": "Càn Kim",
	    "menh_nu": "Ly Hoả",
	    "menh": "Kim",
	    "phat": "Hư Không Tạng Bồ Tát"
	  }, 
	  {
	    "nam": "1986",
	    "am_lich": "Bính Dần",
	    "ngu_hanh": "Lư Trung Hỏa",
	    "giai_nghia": "Lửa trong lò",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Khảm Thuỷ",
	    "menh": "Hỏa",
	    "phat": "Hư Không Tạng Bồ Tát"
	  }, 
	  {
	    "nam": "1987",
	    "am_lich": "Đinh Mão",
	    "ngu_hanh": "Lư Trung Hỏa",
	    "giai_nghia": "Lửa trong lò",
	    "menh_nam": "Tốn Mộc",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Hỏa",
	    "phat": "Văn Thù Bồ Tát"
	  }, 
	  {
	    "nam": "1988",
	    "am_lich": "Mậu Thìn",
	    "ngu_hanh": "Đại Lâm Mộc",
	    "giai_nghia": "Gỗ rừng già",
	    "menh_nam": "Chấn Mộc",
	    "menh_nu": "Chấn Mộc",
	    "menh": "Mộc",
	    "phat": "Phổ Hiền Bồ Tát"
	  }, 
	  {
	    "nam": "1989",
	    "am_lich": "Kỷ Tỵ",
	    "ngu_hanh": "Đại Lâm Mộc",
	    "giai_nghia": "Gỗ rừng già",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Tốn Mộc",
	    "menh": "Mộc",
	    "phat": "Phổ Hiền Bồ Tát"
	  }, 
	  {
	    "nam": "1990",
	    "am_lich": "Canh Ngọ",
	    "ngu_hanh": "Lộ Bàng Thổ",
	    "giai_nghia": "Đất đường đi",
	    "menh_nam": "Khảm Thuỷ",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Thổ",
	    "phat": "Đại Thế Chí Bồ Tát"
	  }, 
	  {
	    "nam": "1991",
	    "am_lich": "Tân Mùi",
	    "ngu_hanh": "Lộ Bàng Thổ",
	    "giai_nghia": "Đất đường đi",
	    "menh_nam": "Ly Hoả",
	    "menh_nu": "Càn Kim",
	    "menh": "Thổ",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "1992",
	    "am_lich": "Nhâm Thân",
	    "ngu_hanh": "Kiếm Phong Kim",
	    "giai_nghia": "Vàng mũi kiếm",
	    "menh_nam": "Cấn Thổ",
	    "menh_nu": "Đoài Kim",
	    "menh": "Kim",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "1993",
	    "am_lich": "Quý Dậu",
	    "ngu_hanh": "Kiếm Phong Kim",
	    "giai_nghia": "Vàng mũi kiếm",
	    "menh_nam": "Đoài Kim",
	    "menh_nu": "Cấn Thổ",
	    "menh": "Kim",
	    "phat": "Bất Động Minh Vương"
	  }, 
	  {
	    "nam": "1994",
	    "am_lich": "Giáp Tuất",
	    "ngu_hanh": "Sơn Đầu Hỏa",
	    "giai_nghia": "Lửa trên núi",
	    "menh_nam": "Càn Kim",
	    "menh_nu": "Ly Hoả",
	    "menh": "Hỏa",
	    "phat": "Phật A-di-đà"
	  }, 
	  {
	    "nam": "1995",
	    "am_lich": "Ất Hợi",
	    "ngu_hanh": "Sơn Đầu Hỏa",
	    "giai_nghia": "Lửa trên núi",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Khảm Thuỷ",
	    "menh": "Hỏa",
	    "phat": "Phật A-di-đà"
	  }, 
	  {
	    "nam": "1996",
	    "am_lich": "Bính Tý",
	    "ngu_hanh": "Giảm Hạ Thủy",
	    "giai_nghia": "Nước cuối khe",
	    "menh_nam": "Tốn Mộc",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Thủy",
	    "phat": "Thiên Thủ Thiên Nhãn"
	  }, 
	  {
	    "nam": "1997",
	    "am_lich": "Đinh Sửu",
	    "ngu_hanh": "Giảm Hạ Thủy",
	    "giai_nghia": "Nước cuối khe",
	    "menh_nam": "Chấn Mộc",
	    "menh_nu": "Chấn Mộc",
	    "menh": "Thủy",
	    "phat": "Hư Không Tạng Bồ Tát"
	  }, 
	  {
	    "nam": "1998",
	    "am_lich": "Mậu Dần",
	    "ngu_hanh": "Thành Đầu Thổ",
	    "giai_nghia": "Đất trên thành",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Tốn Mộc",
	    "menh": "Thổ",
	    "phat": "Hư Không Tạng Bồ Tát"
	  }, 
	  {
	    "nam": "1999",
	    "am_lich": "Kỷ Mão",
	    "ngu_hanh": "Thành Đầu Thổ",
	    "giai_nghia": "Đất trên thành",
	    "menh_nam": "Khảm Thuỷ",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Thổ",
	    "phat": "Văn Thù Bồ Tát"
	  }, 
	  {
	    "nam": "2000",
	    "am_lich": "Canh Thìn",
	    "ngu_hanh": "Bạch Lạp Kim",
	    "giai_nghia": "Bạch Lạp Kim",
	    "menh_nam": "Ly Hoả",
	    "menh_nu": "Càn Kim",
	    "menh": "Kim",
	    "phat": "Phổ Hiền Bồ Tát"
	  }, 
	  {
	    "nam": "2001",
	    "am_lich": "Tân Tỵ",
	    "ngu_hanh": "Bạch Lạp Kim",
	    "giai_nghia": "Vàng chân đèn",
	    "menh_nam": "Cấn Thổ",
	    "menh_nu": "Đoài Kim",
	    "menh": "Kim",
	    "phat": "Phổ Hiền Bồ Tát"
	  }, 
	  {
	    "nam": "2002",
	    "am_lich": "Nhâm Ngọ",
	    "ngu_hanh": "Dương Liễu Mộc",
	    "giai_nghia": "Gỗ cây dương",
	    "menh_nam": "Đoài Kim",
	    "menh_nu": "Cấn Thổ",
	    "menh": "Mộc",
	    "phat": "Đại Thế Chí Bồ Tát"
	  }, 
	  {
	    "nam": "2003",
	    "am_lich": "Quý Mùi",
	    "ngu_hanh": "Dương Liễu Mộc",
	    "giai_nghia": "Gỗ cây dương",
	    "menh_nam": "Càn Kim",
	    "menh_nu": "Ly Hoả",
	    "menh": "Mộc",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "2004",
	    "am_lich": "Giáp Thân",
	    "ngu_hanh": "Tuyền Trung Thủy",
	    "giai_nghia": "Nước trong suối",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Khảm Thuỷ",
	    "menh": "Thủy",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "2005",
	    "am_lich": "Ất Dậu",
	    "ngu_hanh": "Tuyền Trung Thủy",
	    "giai_nghia": "Nước trong suối",
	    "menh_nam": "Tốn Mộc",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Thủy",
	    "phat": "Bất Động Minh Vương"
	  }, 
	  {
	    "nam": "2006",
	    "am_lich": "Bính Tuất",
	    "ngu_hanh": "Ốc Thượng Thổ",
	    "giai_nghia": "Đất nóc nhà",
	    "menh_nam": "Chấn Mộc",
	    "menh_nu": "Chấn Mộc",
	    "menh": "Thổ",
	    "phat": "Phật A-di-đà"
	  }, 
	  {
	    "nam": "2007",
	    "am_lich": "Đinh Hợi",
	    "ngu_hanh": "Ốc Thượng Thổ",
	    "giai_nghia": "Đất nóc nhà",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Tốn Mộc",
	    "menh": "Thổ",
	    "phat": "Phật A-di-đà"
	  }, 
	  {
	    "nam": "2008",
	    "am_lich": "2008",
	    "ngu_hanh": "Thích Lịch Hỏa",
	    "giai_nghia": "Lửa sấm sét",
	    "menh_nam": "Khảm Thuỷ",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Hỏa"
	  }, 
	  {
	    "nam": "2009",
	    "am_lich": "Kỷ Sửu",
	    "ngu_hanh": "Thích Lịch Hỏa",
	    "giai_nghia": "Lửa sấm sét",
	    "menh_nam": "Ly Hoả",
	    "menh_nu": "Càn Kim",
	    "menh": "Hỏa",
	    "phat": "Hư Không Tạng Bồ Tát"
	  }, 
	  {
	    "nam": "2010",
	    "am_lich": "Canh Dần",
	    "ngu_hanh": "Tùng Bách Mộc",
	    "giai_nghia": "Gỗ tùng bách",
	    "menh_nam": "Cấn Thổ",
	    "menh_nu": "Đoài Kim",
	    "menh": "Mộc",
	    "phat": "Hư Không Tạng Bồ Tát"
	  }, 
	  {
	    "nam": "2011",
	    "am_lich": "Tân Mão",
	    "ngu_hanh": "Tùng Bách Mộc",
	    "giai_nghia": "Gỗ tùng bách",
	    "menh_nam": "Đoài Kim",
	    "menh_nu": "Cấn Thổ",
	    "menh": "Mộc",
	    "phat": "Văn Thù Bồ Tát"
	  }, 
	  {
	    "nam": "2012",
	    "am_lich": "Nhâm Thìn",
	    "ngu_hanh": "Trường Lưu Thủy",
	    "giai_nghia": "Nước chảy mạnh",
	    "menh_nam": "Càn Kim",
	    "menh_nu": "Ly Hoả",
	    "menh": "Thủy",
	    "phat": "Phổ Hiền Bồ Tát"
	  }, 
	  {
	    "nam": "2013",
	    "am_lich": "Quý Tỵ",
	    "ngu_hanh": "Trường Lưu Thủy",
	    "giai_nghia": "Nước chảy mạnh",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Khảm Thuỷ",
	    "menh": "Thủy",
	    "phat": "Phổ Hiền Bồ Tát"
	  }, 
	  {
	    "nam": "2014",
	    "am_lich": "Giáp Ngọ",
	    "ngu_hanh": "Sa Trung Kim",
	    "giai_nghia": "Vàng trong cát",
	    "menh_nam": "Tốn Mộc",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Kim",
	    "phat": "Đại Thế Chí Bồ Tát"
	  }, 
	  {
	    "nam": "2015",
	    "am_lich": "Ất Mùi",
	    "ngu_hanh": "Sa Trung Kim",
	    "giai_nghia": "Vàng trong cát",
	    "menh_nam": "Chấn Mộc",
	    "menh_nu": "Chấn Mộc",
	    "menh": "Kim",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "2016",
	    "am_lich": "Bính Thân",
	    "ngu_hanh": "Sơn Hạ Hỏa",
	    "giai_nghia": "Lửa trên núi",
	    "menh_nam": "Khôn Thổ",
	    "menh_nu": "Tốn Mộc",
	    "menh": "Hỏa",
	    "phat": "Như Lai Đại Nhật"
	  }, 
	  {
	    "nam": "2017",
	    "am_lich": "Đinh Dậu",
	    "ngu_hanh": "Sơn Hạ Hỏa",
	    "giai_nghia": "Lửa trên núi",
	    "menh_nam": "Khảm Thuỷ",
	    "menh_nu": "Khôn Thổ",
	    "menh": "Hỏa",
	    "phat": "Bất Động Minh Vương"
	  }, 
	  {
	    "nam": "2018",
	    "am_lich": "Mậu Tuất",
	    "ngu_hanh": "Bình Địa Mộc",
	    "giai_nghia": "Gỗ đồng bằng",
	    "menh_nam": "Ly Hoả",
	    "menh_nu": "Càn Kim",
	    "menh": "Mộc",
	    "phat": "Phật A-di-đà"
	  }
	];

	function change_alias(alias) {
	    var str = alias;
	    str = str.toLowerCase();
	    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
	    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
	    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
	    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
	    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
	    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
	    str = str.replace(/đ/g,"d");
	    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
	    str = str.replace(/ + /g," ");
	    str = str.trim(); 
	    return str;
	}


	$scope.data = {
		day: $stateParams.day,
		month: $stateParams.month,
		year: $stateParams.year,
		lunar_year: $stateParams.lunarYear,
		gender: $stateParams.gender,
		name: $stateParams.name,
	}

	var foundYear = years.filter(function (row) {
		if(row.nam == $scope.data.year) {
			$scope.lunarData = row;
		}
	} );

	var tuoi = [
		{
			tuoi: 'tys',
			intro: 'Thái tuế vi tài cơ ngộ đa, hành sự man thuận đào hoa vượng.<br />Chỉ e nhị hắc tang môn nhiễu, bệnh thống tai ách khó ngăn trừ.',
			section1_title: 'Thái Tuế kiếp tài, phòng mất lòng bạn bè, Vận học hành vượng.',
			section1_itext: '<p>Tuổi Tý vào năm 2019 – Kỷ Hợi do gặp vận Kiếp Tài; khiến vận thế năm nay tương đối kém. Kiếp tài có ý là tranh đoạt, cho nên người tuổi Tý có ít nhiều ảnh hưởng không tốt cả về tài vận, sự nghiệp lẫn hôn nhân. Ngoài ra, bên trong tuổi Tý tàng thiên Can Quý - Thuỷ, Thái tuế lưu niên thiên can là Kỷ (Thổ); cũng có nghĩa là khắc tinh của Quý Thuỷ. Trong năm nay, dễ gặp những chuyện như thị phi, ức chế, mất lòng bạn bè; đặc biệt là đối với Nữ mệnh tuổi Tý mà nói gặp nhiều chuyện không như ý. Vì vậy, trong việc giao tiếp bạn bè hay sự nghiệp chỉ cần bình ổn cũng là điều may mắn rồi, không nên có tham vọng biến đổi gì quá lớn. Tuy nhiên, năm nay có Sao “Tứ Lục” chiếu nên có phần vượng về Học hành, Thi cử, Tiến tu, Danh dự, cộng thêm “Thiên Ất quý nhân”&nbsp; chiếu mệnh nên cũng có hy vọng nhiều về sự giúp đỡ của người khác.</p><p>Tóm lại, Tuổi Tý năm nay làm việc gì cũng nên đề cao tinh thần nhẫn nại lên hàng đầu. Cho dù trong cuộc sống gia đình hàng ngày hay trong công việc, đều nên hết sức tránh tranh chấp với người khác, cần bình tĩnh giải quyết mọi mâu thuẫn. Tuổi Tý cần có sự độc lập, tự chủ tích cực trong suy nghĩ thì tự khắc sẽ có quý nhân giúp đỡ, đồng thời cũng là cơ hội giúp bạn hoàn thiện kỹ năng hơn trong cuộc sống.</p>',
			section2_title1: 'Thiên Ất quý nhân, Thái Dương',
			section2_block1_text: 'Năm nay, người tuổi Tý là năm gặp được Thiên Ất quý nhân, là Thần May mắn nhất trong Mệnh lý thần sát. Cộng thêm Cát tinh Thái Dương nhập cung Điền trạch, điều này có lợi cho việc mua bán nhà đất; tăng thêm tài vận. Cho nên năm nay, người tuổi này chỉ cần phát huy thật tốt tiềm năng và sở trường của mình thì sẽ nắm bắt được cơ hội, được quý nhân phù trợ rất có lợi cho việc phát triển tài vận.',
			section2_title2: 'Thất sát, Kiếp Sát, Thiên Không',
			section2_block2_text: 'Năm nay, nguời tuổi Tý có Quý Thuỷ, Lưu niên thái tuế thiên can là Kỷ (Thổ) cũng chính là Thất tinh của Quý Thuỷ. Cho nên dễ bị tiểu nhân hãm hại, mà bị ảnh hưởng của sao xấu Kiếp Sát, cần chú ý tránh bị bạn bè làm mất đi Tiền tài, nên hạn chế cho bạn bè vay mượn hay đứng ra bảo lãnh về Tiền tài cho ai đó. Khi hợp tác làm ăn với người khác cũng cần tránh bị liên luỵ dẫn đến Thất tài.',
			section3_taivan: '<p style="text-align: justify;">Tuổi Tý năm nay là một năm vất vả mới có được Tài vận. Vì bị ảnh hưởng của Thái tuế Kiếp tài và một số hung tinh khác nên sự nghiệp có chút trắc trở bấp bênh, nên phải ứng biến tốt với mọi điều không như ý trong công việc, ngoài ra còn bị nhiều việc liên quan đến bị bắt nạt và cạnh tranh, cũng dễ vì bạn bè mà dẫn đến phá tài. Cho nên năm nay, cần nhớ không cho người khác vay tiền hoặc bảo lãnh cho người khác. Sử dụng <strong>“Thiên nguyệt Tứ phúc”</strong> chọn ngày giờ an đặt thì có thể giảm thiểu tối đa bất lợi của sao Lưu niên, Ổn định tài vận, sinh thêm tài khí.</p>',
			section3_sunghiep: '<p style="text-align: justify;">Năm nay, có Thiên Ất quý nhân chiếu nên là một năm sự nghiệp, học hành của người tuổi Tý có nhiều cơ hội. Đồng thời, dễ nhận đuợc giúp đỡ của quý nhân, làm việc gì cũng được&nbsp; giúp đỡ. Nhưng cũng vì Lưu niên, có thiên can là Thất Sát lại gặp Kiếp sát nên sự nghiệp không lạc quan về tiền tài lắm, lại dễ bị tiểu nhân hãm hại, cộng thêm sự khắc ứng của một số Hung tinh nên cần chú ý có biến trong công việc. Nếu như bên người dùng vật phẩm <strong>“Tam hợp quý thần”</strong> thì sẽ tiến thêm một bước trong sự nghiệp, được quý nhân giúp đỡ trong nhiều phương diện.</p>',
			section3_taivan_rate: 3,
			section3_sunghiep_rate: 3,
			section4_suckhoe: '<p style="text-align: justify;">Năm nay, vì ngũ hành của năm là Thuỷ, mà ngũ hành của tuổi Tý cũng là Thuỷ nên Thuỷ quá vượng, sẽ không tốt về sức khoẻ của nguời tuổi Tý, dễ mắc các bệnh về Thận hoặc đường tiết niệu, cộng thêm Thiên can của Năm là Thổ. Mà Thuỷ - Thổ tương tranh, nên cần chú ý về giữ gìn vệ sinh sức khoẻ. Ngoài ra, do bị ảnh hưởng của Kiếp Tài và các hung tinh nên mọi phương diện dễ bị trở ngại,&nbsp; tâm trạng khó tránh khỏi lúc thế này lúc thế nọ, cần chú ý điều tiết trạng thái tình cảm của mình. Nên đeo vật phẩm phong thuỷ may mắn <strong>"Thiên Nguyệt Tứ Phúc"</strong> để phù sức khoẻ và được bình an tẩy đi hung khí, thân tâm được thanh tịnh.</p>',
			section4_suckhoe_rate: 1,
			section4_tinhyeu: '<p style="text-align: justify;">Về tổng thể mà nói, thì vận đào hoa của người tuổi Tý năm nay cũng có thể coi là bình thường, không có thể hiện rõ sao đào hoa chiếu, người độc thân không có nhiều cơ hội, người đang yêu thì tình cảm nhạt nhoà, người đã kết hôn thì dễ sinh mâu thuẩn và phiền não, dễ xảy ra chiến tranh lạnh trong cuộc sống vợ chồng; đặc biệt, nữ mệnh Tý nên cẩn thận Đào hoa ảo. Hy vọng tình cảm có những khởi sắc, hôn nhân thêm ngọt ngào.&nbsp;</p>',
			section4_tinhyeu_rate: 2,
			section5_txt1: '<p style="text-align: justify;">Năm 2019, đối với người tuổi Tý thì Tài Vận kém. Vì có Kiếp Tài nên Tài vận gặp khó khăn; và còn có sự ảnh hưởng xấu của các hung tinh khác nên dễ gặp phải việc ngoài ý muốn trong cuộc sống. Kiếm tiền đã khó, giữ còn khó hơn, nên hết sức tránh chung vốn đầu tư, liên kết kinh doanh, hay bảo lãnh về tiền tài cho người khác. Nếu như những ai không khởi sắc về đường Tài Vận trong mấy năm nay thì có thể tìm chuyên gia tư vấn phong thuỷ dựa vào bát tự mà tính toán tư vấn phương án cải vận.</p>',
			section5_txt2: '<p style="text-align: justify;">Năm nay, Kiếp sát hung tinh chiếu mệnh nên tiểu nhân xuất hiện, việc tốt bị cướp, về mối quan hệ của người tuổi Tý dễ xuất hiện tranh đấu, mâu thuẫn ý kiến dễ ảnh hưởng đến việc phát triển sự nghiệp của bản thân, nặng hơn thì bị tiểu nhân làm hại và ảnh hưởng đến danh dự, không thể không đề phòng. Khuyên bạn nên dùng vật phẩm phong thuỷ <strong>“Thiên nguyệt Tứ phúc”</strong> để hoá giải vấn đề tiểu nhân làm ảnh hưởng đến sự nghiệp.</p>',
			section5_txt3: '<p style="text-align: justify;">Năm 2018 với nữ mệnh tuổi Tý gặp Quan tinh xuất hiện đới hợp, vận đào hoa không tệ, nhưng vì thế mà dẫn đến không ít những phiền não, nếu không cẩn thận sẽ dễ dẫn đến vỡ trận đào hoa, tổn hại đến tiền tài và tinh thần, thậm chí còn có kẻ hãm hại dễ dẫn đến việc ngoài ý muốn tổn hại đến thanh danh. Để tránh những điều này xảy ra, kiến nghị bạn nên tư vấn chuyên gia để lấy bát tự vận chuyển lại nhân duyên, với nguời đã kết hôn nên cung cấp bát tự của cả 2 vợ chồng để cùng làm cho vận thế của cả 2 vợ chồng hay cũng như vận hạn, còn tránh trước những khắc ứng không tốt sau này. Đồng thời có những cách đối phó kịp thời, kiến nghị dùng vật phẩm phong thuỷ may mắn<strong> Tam Hợp Quý Nhân</strong>&nbsp;phối kết hợp với&nbsp;<strong>Hồ lô Hòa Hợp</strong>&nbsp;chuyên dùng cho tuổi Tý để áp dụng cho Tứ chính Đào hoa vận, tăng vượng cửu tử tinh, với người đơn thân dễ có hôn sự, người đã kết hôn thì thêm mặn mà, gia đình hạnh phúc mỹ mãn.</p>',
			section5_txt4: '<p style="text-align: justify;">Năm Kỷ Hợi là năm Kiếp Sát với người tuổi Tý, nên dễ gặp phải thị phi. Nếu như có thể hoàn thành công việc một cách xuất sắc, thì tự nhiên quét sạch được mọi cục diện xấu, nhận được sự ghi nhận của đồng nghiệp và cấp trên. Nhưng nếu như không tạo được mối quan hệ tốt với mọi người xung quanh mà tính cách lại ngông cuồng tự đại, chỉ biết cái tôi cá nhân, coi thường người khác thì rất dễ gây ra điều không quý mến của mọi người. Đồng thời, dễ bị tiểu nhân hãm hại, cần chú ý đến lời nói cử chỉ của mình, làm việc gì cũng nên cân nhắc tránh lao vào vòng lao lý vi phạm pháp luật, nếu không thì dễ bị vướng vào thị phi kiện tụng phải ra hầu toà.&nbsp; &nbsp;</p>',
			section6_congchuc: '<p>Năm 2019 người tuổi này có nhiều thăng trầm trong công việc, dễ gặp những khó khăn thử thách mà trước đây chưa từng gặp phải, áp lực công việc lớn. Năm nay cần cầu tiến công việc trong ổn định, khi gặp vấn đề tiến thoái lưỡng nan cần phải tính toán kỹ và giải quyết linh hoạt, không nên hành sự theo cảm tính. Cần điều tiết tốt trong mối quan hệ với người cùng cơ quan. Với những dự án mới cần xúc tiến theo cách bình thường. Nếu như có thay đổi về cương vị làm việc, cần phải nắm bắt tốt, chủ động ứng biến. Nếu như biết dùng vật phẩm <strong>“Thiên nguyệt Tứ phúc” </strong>có thể tăng thêm trợ giúp cho công việc, chuyển bại thành thắng.</p>',
			section6_doanhnhan: '<p>Năm 2019, Tuổi Tý buôn bán kinh doanh áp lực tăng lên gấp đôi. Tuy có Thiên Ất quý nhân thúc vượng tài vận, nhiều dự tính đầu tư mới có vẻ như thành công, cơ hội hợp tác làm ăn có vẻ như xuất hiện ngay trước mắt, nhưng cần phải suy xét, khảo sát thật kỹ lưỡng. Vì có các hung tinh như Kiếp sát, Thiên Không chiếu nên ảnh hưởng ít nhiều cho công việc, cộng thêm Kiếp Tài nên dễ bị tiểu nhân phá hỏng, dẫn đến thị phi kiện tụng bất lợi cho việc đầu tư. Do vậy, nên dùng vật phẩm <strong>“Thiên nguyệt Tứ phúc” </strong>có thể tăng thêm trợ giúp cho công việc , hoá giải bất lợi, giúp cho tài vận được thuận lợi.</p>',
			section6_donthan: '<p>Năm 2019, vì Hung tinh nhiều cát tinh ít nên vận về Đào hoa không được tốt, người độc thân không dễ tìm được đối tượng như ý. Nếu như có thể phát triển tình cảm, người tuổi Tý cần phải có trái tim chân thành để hiểu đối phương, nếu không mặt tình cảm dễ bị ảnh hưởng của áp lực công việc dẫn đến công cốc. Với nữ tuổi Tý năm nay trong mối quan hệ giao tiếp, cần tránh đào hoa ảo, bị lừa tình cảm, dẫn đến thất vọng buồn tủi. Để tránh hiện tượng này nên dùng vật phẩm <strong>“Thiên nguyệt Tứ phúc”</strong> có thể tránh đào hoa ảo. Nếu như đã chót mắc vào rồi thì cần tìm đến thầy phong thuỷ để nhờ sự tư vấn giải quyết.</p>',
			section6_kethon: '<p>Năm 2019, có thể nói là một năm không mấy lạc quan với những người tuổi Tý về mặt tình cảm, vì sự phát tác của Hung tinh mà Cát tinh chiếu lại không rõ nên tình cảm gia đình dễ phát sinh mâu thuẫn, vợ chồng hay tranh cãi nhau, thậm chí dẫn đến chia tay, vì thế nên 2 bên cần phải bao dung hơn cho nhau,&nbsp; vì đến được hôn nhân cũng không phải dễ dàng gì, vậy nên cần giữ gìn tránh để vợ chồng vô lễ với nhau.</p>',
			section6_hocsinh: '<p>Năm 2019, được Tứ Lục tinh tương trợ với người đang theo đuổi việc học thì vấn đề học hành, thi cử…tuy có áp lực lớn nhưng vận thế tương đối khả dĩ, nếu chăm chỉ chuyên tâm sẽ có thành tích đáng kể, với sự phù giúp của Cát Tinh Thái Dương sẽ xuất hiện nhiều quý nhân với việc của bản thân, cần nắm bắt cơ hội quý giá này, dùng vật phẩm phong thủy có thể ổn định củng cố cho việc học được tốt hơn, áo gấm thêm hoa.</p>',
		},
		{
			tuoi: 'suu',
			intro: 'Thái tuế vi tài cơ ngộ đa, hành sự man thuận đào hoa vượng.<br />Chỉ e nhị hắc tang môn nhiễu, bệnh thống tai ách khó ngăn trừ.',
			section1_title: 'Năm Kỷ Hợi 2019: Lưu niên vận thế. Tài tinh cao chiếu, sự nghiệp phát triển vuợng đào hoa.',
			section1_itext: '<p style="text-align: justify;">Năm ngoái, người tuổi Sửu gặp phải năm Thái Tuế tương hình, vận số không mấy sáng sủa. Nhưng vào năm 2019, vận thế đã có sự khôi phục trở lại, may mắn trùng trùng, phát triển cơ đồ, sự nghiệp, đào hoa được như ý. Có thể coi đây, là năm may mắn trong 12 con giáp. Vào năm nay, có Thái Tuế chính là Tài Tinh, trong công việc, sự nghiệp sẽ có đuợc sự phát triển mạnh mẽ và nhiều cơ hội tốt, cầu tài đắc tài, cầu lợi đắc lợi, cầu danh đắc danh. Năm nay, được quý nhân đề bạt có cơ hội phát triển thăng tiến, chỉ cần nắm bắt thật chắc cơ hội nhất định sẽ có nhiều thu hoạch đáng kể. Đối với những nguời buôn bán kinh doanh, năm nay cũng là năm được nhiều nguời biết đến danh tiếng, từ đó mà có thu nhập đáng kể. Năm nay, cũng là một năm vuợng về đào hoa của người tuổi Sửu, người độc thân có được cơ hội nhân duyên tốt đẹp và ổn định, năm nay cũng là một năm có cơ duyên bàn đến hôn sự. Nhưng không nên được chủ quan bởi một số ảnh huởng với những yếu tố sau: Ngũ hành của năm là Thuỷ mà ngũ hành của nguời tuổi Sửu là Thổ, cũng có ý là ngũ hành tương khắc, cộng thêm sự ảnh hưởng của hai Hung tinh là: Nhị Hắc, Tang môn. Vì vậy, trong năm nay, người tuổi Sửu chịu nhiều áp lực và biến động trong cuộc sống. Cần đặc biệt chú ý đến sức khoẻ, sự an toàn trong việc đi lại. Nếu muốn có được kết quả tốt trong công việc vẫn cần phải cố gắng hết mình hay cũng như đầu tư về công sức và trí lực.</p><p style="text-align: justify;">Nói tóm lại, năm nay người tuổi Sửu gặp rất nhiều cơ duyên nhưng ít có cơ hội về việc cầu tài, nên một khi đã có cơ hội rồi thì nhất định phải nắm cho thật chắc, tranh thủ phát triển cơ hội này. Trong những công việc bận rộn hàng ngày, cần phải quan tâm nhiều hơn để gây dựng mối quan hệ tốt với mọi người và giữ được giá trị của bản thân. Trong việc giao tiếp với mọi người, cần chú ý sắp xếp thời gian của mình để gặp gỡ giao lưu nhiều hơn, nhưng cũng cần tránh bị lợi dụng trong vấn đề hợp tác, nếu được như vậy sẽ có thêm đuợc một cơ hội thăng tiến để phát triển.</p>',
			section2_title1: 'Ảm đạm',
			section2_block1_text: '<p>Năm nay, người tuổi Sửu cát tinh ảm đạm, nhưng cũng may là trong năm có tài tinh chiếu rọi, khiến cho con đường tài vận có buớc chuyển biến rõ rệt; đồng thời cũng nhận được sự giúp đỡ của quý nhân tương trợ. Khuyên bạn nên chăm chỉ bỏ công sức ra nhất định sẽ là một năm thu hoạch, phát triển cơ đồ.</p>',
			section2_title2: 'Nhị Hắc, Tang Môn',
			section2_block2_text: '<p style="text-align: justify;">Nhị Hắc hay còn gọi là bệnh phù tinh, đây là một trong những sao xấu nhất, cùng với bộ sao Ngũ Hoàng, Liêm Trinh. Mọi tai họa bất ngờ xấu nhất sẽ dễ tìm đến cửa nên không thể không cẩn thận. Cộng thêm Tang môn, nên người tuổi Sửu năm nay cần lưu ý về sức khoẻ của nguời lớn trong nhà. Đặc biệt, cần hết sức tránh việc đi thăm người ốm, hay tham gia những việc hiếu (việc tang) để tránh hấp thu những năng lượng xấu từ nơi đó khiến cho vận thế của bạn xấu theo và đi xuống.</p>',
			section3_taivan: '<p style="text-align: justify;">Đối với người tuổi Sửu trong năm nay có Thái Tuế là Tài Tinh, có thể coi là một năm thu vào về tiền của, con đuờng tài vận sáng sủa rõ rệt, cầu danh đắc danh, cầu lợi đắc lợi. Cơ hội kinh doanh đến không ngừng, giúp cho việc kinh doanh hợp tác đầu tư được thuận lợi như ý, vì thế không nên bỏ lỡ thời cơ vì đây là một dịp vô cùng tốt mà ông trời ban cho, cần phải chuyển tâm cố gắng. Nhưng trong lúc phấn đấu hành sự cũng cần phải cúi xuống học hỏi, điều tiết tâm trạng của bản thân thật tốt, hết sức tránh những hiểu lầm ngoài ý muốn từ nguời khác. Nếu như muốn một buớc phát triển hay ổn định về tài vận, khuyên bạn nên dùng vật phẩm phong thuỷ may mắn <strong>“Ngũ Phúc tụ tài”</strong> để hoá giải những năng lượng xấu của hung tinh, giúp kích thêm về năng luợng quý nhân phù trợ, tụ khí sinh tài, phát triển sự nghiệp.</p>',
			section3_sunghiep: '<p style="text-align: justify;">Do Thái Tuế của năm là Tài Tinh với người tuổi Sửu, vì Tài có thể sinh Quan, mà vượng về Tài Quan, chính là có lợi cho việc sự nghiệp thuận lợi, thăng quan tiến chức, tăng thêm bổng lộc. Nhưng năm nay nguời tuổi Sửu cũng có dấu hiệu của khắc chế Thái Tuế, cần lưu ý một chút về trạng thái, tinh thần thái độ làm việc, trong quá trình học hành không được vội vàng hấp tấp, dễ dẫn đến hỏng việc. Người công chức năm nay cần phải cẩn thận nhiều hơn về lời nói, hành động nên hết sức khiêm tốn, không được tự kiêu để tránh có lỗi với lãnh đạo hoặc những người xung quanh, mà làm ảnh huởng đến sự phát triển của tiền đồ trong công việc. Khuyên bạn nên dùng <strong>“Thiên nguyệt tứ phúc”</strong> để tăng thêm vận Văn Xương của năm để giúp ích trợ lực và có được quý nhân phù trợ trong công việc và học hành.</p>',
			section3_taivan_rate: 3,
			section3_sunghiep_rate: 3,
			section4_suckhoe: '<p style="text-align: justify;">Người tuổi Sửu năm nay do gặp phải Hung tinh Nhị Hắc, Tang Môn xuất hiện nên cần lưu ý các vấn đề về sức khoẻ và vấn đề đi lại. Do năm nay, sự nghiệp không quá tệ nên áp lực về công việc cũng tăng đáng kể, tránh áp lực để không bị &nbsp;ảnh hưởng đến tâm trạng, dễ mắc các bệnh về tỳ vị. Cho nên, bạn cần hết sức lưu ý tránh làm việc quá sức, bị lao lực, cần lạc quan trong công việc. Ngoài ra, việc hai sao xấu nhập cung, cần hết sức lưu ý đến sức khoẻ của người lớn tuổi trong gia đình. Kiến nghị bạn nên dùng vật phẩm phong thuỷ&nbsp; <strong>“Tam hợp quý thần” </strong>, để khắc chế năng lượng xấu của Hung tinh, thì sẽ hoá giải những trường khí không tốt gây ra bệnh tật, giúp khỏe mạnh bình an.</p>',
			section4_suckhoe_rate: 1,
			section4_tinhyeu: '<p style="text-align: justify;">Vận đào hoa của người tuổi Sửu năm nay cũng có thể coi là tương đối tốt. Người độc thân Nam năm nay đi vào Chính vận về Đào hoa, gặp được Chính Duyên của mình. Nếu như bạn nào vẫn chưa có bạn gái thì có thể tranh thủ nhờ sự giới thiệu mai mối của người lớn tuổi mà dễ thành công. Cần ghi nhớ không được chủ quan và vội vàng, dục tốc bất đạt. Người đã có bạn gái thì cẩn thận việc “Cảm nắng” bên ngoài mà ảnh hưởng đến mối quan hệ hiện tại. Hy vọng trong năm nay nhân duyên của bạn có thể khai hoa kết trái.</p>',
			section4_tinhyeu_rate: 2,
			section5_txt1: '<p>Năm 2019, là năm Tài tinh đối với người tuổi Sửu. Năm nay chỉ cần cố gắng làm việc, thu nhập nhất định sẽ được như ý và nâng lên một bậc. Nhưng vì năm nay Tuổi Sửu và Thái Tuế là có sự khắc chế và các hung tinh lại ảnh hưởng trực tiếp đến sức khoẻ, cũng dễ ảnh hưởng đến tài vận, cho nên việc ưu phiền về tiền tài cũng không ít. Muốn hoá giải Hung ách, ổn định Tài vận, khuyên bạn nên dùng vật phẩm <strong>“Tỳ hưu bạch ngọc”</strong> để tài vận như ý , trong ổn lại có tiến.</p>',
			section5_txt2: '<p style="text-align: justify;">Năm nay, người tuổi Sửu với Thái Tuế là Tài tinh, Vượng về Tài – Quan, vì thế dễ có kẻ khó chịu, nảy sinh ra tiểu nhân. Cho nên, trong năm nay cần phải giữ được tâm trạng bình hoà, khiêm tốn&nbsp; không để mất lòng ai trong quá trình giao tiếp. Cẩn thận trong lời nói hành động của mình, tránh đắc tội với người khác, sẽ tránh đem lại sự phiền nhiễu phức tạp cho chính mình trong cuộc sống. Nên dùng <strong>“Tam hợp quý thần”</strong> để có gia trì cho vận tốt, từ tiểu nhân mà biến thành quý nhân, trợ giúp cho công việc.</p>',
			section5_txt3: '<p style="text-align: justify;">Năm nay là năm có Vận đào hoa vượng, là năm đáng chờ đợi của những người độc thân. Tuy nhiên cái gì cũng có tính hai mặt của nó, không phải là quá vượng mà tốt, đôi khi nó cũng lại đem lại những phiền toái, đau đầu trong vấn đề tình cảm. Đối với những người đã yên bề gia thất nên hết sức cẩn thận, hai vợ chồng nên hiểu kỹ nhau hơn, cẩn thận với mối quan hệ bên ngoài, đừng quá quan tâm đến người khác giới nhiều mà dễ ảnh hưởng đến tình cảm gia đình. Nên dùng <strong>“Hồ lô hòa hợp”</strong> để có thể phòng tránh Đào hoa ảo, sinh vượng đào hoa trong nhà trước.&nbsp;</p>',
			section5_txt4: '<p style="text-align: justify;">Năm nay là năm khắc chế Thái tuế, biến số trong vận thế cũng thay đổi tương đối lớn. Vì thế, mà ảnh hưởng không nhỏ đến các vấn đề về sức khoẻ, cho dù trong công việc hay cuộc sống. Nếu trong quá trình thực hiện mọi việc đều không dễ dàng, sức khoẻ bạn không tốt, thậm chí dễ nảy sinh cáu gắt, mệt mỏi, lúc này dễ chiêu thị phi, kiện tụng, tranh chấp, đề phòng tiểu nhân hãm hại. Đặc biệt, khi ký kết hợp đồng gì thì đều cần lưu ý các điều khoản trong văn bản, hợp đồng và mối quan hệ với người khác, nên làm việc Thiện nhiều sẽ có thiện báo. Như vậy sẽ giúp bạn giảm vận sui và nên dùng kết hợp vật phẩm <strong>“Tam hơp quý thần”</strong> để hoá giải sát khí của Hung tinh.</p>',
			section6_congchuc: '<p>Năm nay người tuổi Sửu chịu ảnh hưởng của Thái Tuế là Tài tinh nên cho dù là người mới lập nghiệp hay người đã lão luyện trong nghề đều có vận thế phát triển rất khá. Trong công việc dễ được lãnh đạo và đồng nghiệp tán thưởng, ghi nhận, có cơ hội tiến thân dần dần, con đường thành công rộng mở phía trước. Năm nay, người tuổi Sửu nên đặt công việc ưu tiên lên làm hàng đầu, đầu tư tâm sức dốc hết sức mình vào làm, sẽ có một cục diện mới được mở ra, thậm chí còn có tiếng trong ngành nghề, từ đó mà thu nhập sẽ thu về đáng kể. Nếu muốn thực sự tăng năng lượng ổn định vận thế may mắn này bạn có thể thỉnh dùng <strong>“Thiên Nguyệt Tứ Phúc” </strong>để hoá giải các nhân tố cản trở công việc năm nay , có diện cho cục diện mới.</p>',
			section6_doanhnhan: '<p>Người buôn bán kinh doanh năm 2019 - Kỷ Hợi rất dễ được Đại quý nhân chỉ điểm và giúp cho công việc có thành tựu đáng kể. Do vậy, nên nắm chắc cơ hội tốt này, tích cực chủ động mở rộng các mối quan hệ xã giao, mở rộng thêm phạm vi giúp đỡ của nhiều người. Vì cục diện của sự nghiệp mà nên quyết tâm đặt nền móng vững chắc này. Vì lưu niên khắc Thái Tuế nên vận thế cũng có lúc trầm lúc bổng, có những lúc không thực sự như ý lắm không nên nản chí. Bạn nên thỉnh dùng <strong>“Ngũ phúc Tụ tài”</strong> để tăng vận quý nhân, quét sạch vận xui.</p>',
			section6_donthan: '<p>Với nam nữ độc thân, năm 2019 là năm vượng vận Đào hoa, cho nên chuyện tình cảm có tiến triển tốt, dễ tìm được một nửa của mình; đặc biệt là nhờ quý nhân làm mai mối, thúc đẩy lương duyên nên cần nắm bắt lấy, sớm gặp được đối tượng tâm đầu ý hợp. Nhưng với những bạn chưa kết hôn cần để ý kỹ về cá tính và phẩm hạnh của đối phương, tránh vội vàng hấp tấp mà ảnh hưởng đến hạnh phúc cả đời.</p>',
			section6_kethon: '<p>Nam nữ đã kết hôn năm nay có vận thế nâng lên, áp lực công việc lớn, đối với gia đình khó tránh khỏi lơ là việc quan tâm, săn sóc; cộng thêm vận đào hoa lại đang vượng, phải đối mặt với nhiều mê hoặc cho nên trong năm nay là một năm đầy thử thách và cám dỗ. Cho nên cần phải đảm bảo trong việc phát triển sự nghịêp, vẫn phải đảm bảo duy trì yếu tố hạnh phúc gia đình, chú ý giữ gìn sức khoẻ, vì mặt này là không thể coi thuờng được. Để đảm bảo duy trì và cân bằng hai vấn đề này, khuyên bạn nên dùng vật phẩm <strong>“Hồ lô hòa hợp”</strong> để hoá giải các ảnh hưởng của Hung tinh và thúc đẩy Vận Cát.</p>',
			section6_hocsinh: '<p>Với người đang đi học do năm 2019 gặp phải Lưu Niên và Tài Tinh nên những người tuổi Sửu đang đi học dễ mắc phải ham chơi, yêu sớm, yêu thầm, hoặc những phương diện tình cảm khác ảnh huởng đến tâm trạng học tập. Phụ huynh cần phải chú ý dạy bảo, nhắc nhở con cái lấy học tập làm trọng, tránh lỡ mất tuơng lai. Ngoài ra có hai Hung Tinh là Bệnh Phù và Tang Môn xuất hiện, cho nên về mặt sức khoẻ của người trẻ tuổi cũng chịu ảnh huởng. Vì vậy, mà việc học hành không có tinh thần và tính tích cực cao nhất. Muốn con cái có sức khoẻ như ý, học hành tiến bộ phụ huynh nên thỉnh <strong>“Tháp Văn xương đá đen”</strong> để ổn định phuơng diện này.</p>',
		},
		{
			tuoi: 'dan',
			intro: 'Lục hợp thái tuế đại cát xương, tài hỷ thoại tâm nhân mạch vượng. <br />Lưu niên gặp sát ám khí trọng khu tuế bảo giá tử khí lai.',
			section1_title: 'Mối quan hệ được mở rộng, sự nghiệp phát triển, phá Thái Tuế',
			section1_itext: '<p style="text-align: justify;">&nbsp; &nbsp;Năm 2019 – Kỷ Hợi, người tuổi Dần do Hợi (Thủy) ngũ hành tương sinh, lại gặp Thái Tuế tương hợp, nên năm nay có thể nói là một năm có nhiều bội thu, công việc có nhiều cơ hội phát triển. Bên cạnh đó, người tuổi Dần năm nay có mối nhân duyên tốt, thích hợp để mở rộng cải thiện các mối quan hệ, là nền tảng tốt cho quá trình đi lên trong sự nghiệp. Năm nay, do có Cát Tinh Thái Âm chiếu mệnh nên đa phần được nữ quý nhân để giúp đỡ. Bước vào năm 2019, những người tuổi Dần sẽ gặp nhiều vận may trong chuyện tình cảm; đặc biệt là cơ hội tốt cho những người độc thân gặp được những nhân duyên tốt trong chuyện tình cảm từ bạn bè, người thân. Về vấn đề tài lộc của những người tuổi Dần chưa được tốt; đặc biệt là biện tài, không thích hợp cho việc đầu cơ, đầu tư vào việc cổ phiếu, ngoại tệ, tiền ảo. Những nguời tuổi Dần do hợp Thái Tuế cũng là phá Thái Tuế, cần thận trọng trong việc phá tiền tài, hôn nhân không thuận, tiểu nhân phá hoại.</p><p style="text-align: justify;">Năm 2019, Tuổi Dần bên cạnh gặp Phá Thái Tuế cộng thêm Nhị hắc Bệnh Phù nhập cung, cùng Dần (nạp Giáp) với Kỷ - Thổ khiến không đủ hợp lực nên người tuổi Dần cẩn thận phá tài, tình cảm tan vỡ, mất mát của cải và cần chú ý chăm sóc sức khoẻ, phòng ngừa bệnh tật. Năm nay, do có hai sao tiểu nhân Vong Thần và Quán Toả phi đến, cũng ý nói là xử lý thị phi tiểu nhân, không nên coi thuờng. Kiến nghị nên dùng vật phẩm phong thuỷ “Thiên Nguyệt Tứ Phúc” để mượn Cát Tinh xua đuổi Hung tinh, làm giảm ảnh huởng của Hung tinh xuống; giúp sinh trợ nguyên thần bản mệnh của nguời tuổi Dần; trừ đi sát khí không tốt, nhằm cải thiện mối quan hệ hợp tác làm ăn. Từ đó mà giúp trợ thân hộ mệnh, bước vào một năm hưng vượng.</p>',
			section2_title1: 'Thái Âm, Tuế Hợp',
			section2_block1_text: '<p>“Cát Tinh Thái Âm” đại diện cho những quý nhân nữ giới mà người tuổi Dần có được. Giúp cho những người tuổi Dần dễ nhận được sự khen thưởng hoặc đánh giá cao của những nguời nữ lớn tuổi và cấp trên. Năm nay, những người nữ tuổi Dần, cho dù làm trong bất kỳ ngành nghề nào đều có những thu nhập tương đối khá. Những người nam giới tuổi Dần năm nay, chuyện tình cảm gặp nhiều thuận lợi; đặc biệt, những độc thân không nên bỏ qua những cơ hội tốt về hôn nhân, tình cảm. Đồng thời, bởi có “Tuế Hợp” tương trợ, những người cầm tinh con Hổ khi gặp khi khó khăn có thể nhờ sự giúp đỡ từ người khác, sẽ luôn gặp hung hoá cát.</p>',
			section2_title2: 'Vong Thần, Quán Toả, Nhị Hắc',
			section2_block2_text: '<p style="text-align: justify;">“Vong thần” chính là về tâm thần bất an, dễ sinh ra thị phi, hoạ hại thậm chí liên quan đến tù tội. “Quán Toả” do khẩu thiệt, thị phi mà dẫn đến tranh chấp, kiện tụng, cần phải dùng lý trí hành sự, tránh xa thị phi. Còn “Nhị hắc” bệnh phù là sao chủ tật bệnh, thị phi nên những người tuổi Dần cũng cần chú ý đến sức khoẻ của người lớn trong gia đình, ra ngoài nên chú ý an toàn.</p>',
			section3_taivan: '<p style="text-align: justify;">Năm nay với người tuổi Dần là năm biện tài đại vận, tài vận đạt đến cực điểm. Tuổi Dần tương hợp một phần với Thái tuế, mà Thái tuế là Tài tinh, nên năm nay tuổi Dần sẽ có nhiều thời cơ tốt để kiếm tiền, có lợi cho việc kinh doanh, hợp tác, đầu tư. Nhưng tiền tài quá vượng cũng sẽ sinh ra lắm áp lực và thị phi. Vì vậy chớ nên quá tham kiếm tiền, hưởng thụ. Nếu có thể thỉnh <strong><em>Tỳ Hưu Bạch Ngọc</em></strong> sẽ càng có tác dụng trợ giúp cho bản thân chiêu tài lộc, hóa giải Hung khí.</p>',
			section3_sunghiep: '<p style="text-align: justify;">Năm nay, người tuổi Dần có Thái Tuế tương trợ, sự nghiệp phát triển, nên cơ hội tiến triển trong công việc nhiều  so với năm cũ. Lại được quý nhân nâng đỡ nên cần chăm chỉ nỗ lực, để biết cách nắm bắt cơ hội tốt; tự học hỏi nhằm nâng cao sức cạnh tranh của bản thân, sự nghiệp nhất định sẽ chuyển biến qua giai đoạn hoàn toàn mới. Việc học hành trong năm này của người tuổi Dần cũng rất tốt, gặp được thầy tốt, hiệu quả học tập được nâng cao. Năm nay, chịu ảnh hưởng của hung tinh, tuyệt đối không được đắc ý mà việc thành lại hoá bại trong gang tấc. Khuyên bạn nên mang theo bên mình vật phẩm phong thuỷ “Thiên Nguyệt Tứ Phúc” nhằm giúp vượng tài vận, học vận, gặp cát vượng cát, mưu sự thuận lợi.</p>',
			section3_taivan_rate: 3,
			section3_sunghiep_rate: 3,
			section4_suckhoe: '<p style="text-align: justify;">Năm 2019 - Kỷ Hợi lại gặp Giáp Kỷ ám hợp, vong thần đáo cung, nên dễ gặp phải thị phi, bệnh tật cùng lúc khiến âm khí rất nặng, khó hoá giải. Người tuổi Dần năm nay cần đặc biệt chú ý về bệnh tật, tránh các hoạt động mạo hiểm liên quan đến độ cao. Cần quan tâm nhiều hơn đến sức khoẻ người lớn và trẻ nhỏ trong nhà, nên tiến hành kiểm tra sức khoẻ định kỳ. Khuyên người tuổi Dần năm nên thỉnh “Hồ lô hóa sát” treo đầu giường, hoá hung vượng tài, phù hộ sức khoẻ cho gia đình.</p>',
			section4_suckhoe_rate: 1,
			section4_tinhyeu: '<p style="text-align: justify;">Do Thái Tuế tương hợp, nên năm nay chuyện tình cảm của người tuổi Dần rất thuận lợi, bất luận là nam hay nữ khi bước vào năm 2019, nhân duyên, đào hoa vận đều rất tốt. Đặc biệt là nam giới tuổi Dần, năm nay dễ dàng gặp được người như ý; chuyện tình cảm tốt đẹp, cần biết nắm bắt cơ hội. Tuy nhiên, do có ảnh hưởng của hung tinh mà sức khoẻ bất ổn khiến tinh thần trở lên bất an; trạng thái suy sụp rõ rệt, hy vọng chuyện tình cảm sớm ngày đơm hoa kết trái, hôn nhân hoà hợp.</p>',
			section4_tinhyeu_rate: 2,
			section5_txt1: '<p>Năm nay do ảnh hưởng của các Hung tinh: “Vong Thần”  “Quán Toả”  lại còn Phá thái tuế, không chỉ bất lợi đến việc cầu tài của người tuổi Dần; mà còn, dễ phát sinh việc phá tài. Vì vậy, nếu muốn để cho con đường tài vận được thuận lợi, bạn không nên quá hoang tưởng về thành công không thực tế. Năm nay, cần chăm chỉ cầu tài, lấy cầu tài làm trọng yếu; không nên lãng phí thời gian vào cổ phiếu, trái phiếu, đất cát mà nên cần chăm chỉ làm ăn kiếm tiền bằng mồ hôi công sức. Khuyên bạn nên thỉnh vật phẩm phong thuỷ “Tam hợp quý thần”, nhằm tăng sự giúp đỡ của quý nhân, tài vận hanh thông như ý.</p>',
			section5_txt2: '<p style="text-align: justify;">Năm nay, người tuổi Dần do hợp Thái Tuế lại có 2 cát tinh Thái Âm, Tuế Hợp cùng chiếu, nên xét về mặt đối nhân xử thế rất có lợi, làm việc gì cũng được mọi người xung quanh giúp đỡ, có thể coi như diều gặp gió, Hổ chắp thêm cánh. Nhưng càng như vậy cũng càng cần để mắt lưu tâm đến Tiểu nhân bên cạnh vì có 2 sao là Vong thần và Quán Tỏa chiếu. Nhắc bạn nên cần chú ý nhiều hơn nữa đến hành động cử chỉ, tránh người khác ghen ghét, đố kỵ chơi xấu sau lưng, dẫn đến vận thế bị kéo xuống. Nên dùng vật phẩm “Tam hợp Quý Thần” để tăng cường vận khí Tam hợp cục sinh, quý nhân giúp đỡ, duy trì năng lượng tốt trong công việc.</p>',
			section5_txt3: '<p style="text-align: justify;">Người tuổi Dần năm 2019 do Hợp Thái tuế, nên đào hoa vận đặc biệt tốt, thu hút người khác giới, người độc thân có cơ duyên gặp được người tâm đầu ý hợp. Nhưng nhất định phải chú ý đề phòng Đào hoa ảo, người đã có gia đình vào năm nay cần chú ý giữ mình, tránh cám dỗ. Để hoá giải rắc rối từ Đào Hoa ảo ngoài luồng quấy nhiễu dẫn đến hạnh phúc gia đình bị sứt mẻ, có thể thông qua “Hồ lô hòa hợp”, nhằm ổn định đào hoa Chính duyên.</p>',
			section5_txt4: '<p style="text-align: justify;">Năm nay do 2 hung tinh là “Vong Thần”, “Quán Toả” nhập mệnh, nên người tuổi Dần vì hao hụt tiền tài mà làm tâm trạng bị căng thẳng. Người làm văn phòng thì dễ bị khẩu thiệt thị phi mà cảm thấy mệt mỏi, thậm chí dễ bị lôi kéo vào câu chuyện kiện tụng. Do vậy, năm nay cần giải quyết mọi công việc một cách thoả đáng và sáng suốt. Tuổi Dần cần biết điều tiết tốt mọi mối quan hệ trong xã hội, lưu ý các điều khoản khi ký kết các hợp đồng thì phải chú ý đặt yếu tố an toàn lên hàng đầu. Không nên làm những việc vi phạm pháp luật tránh bị kiện tụng, tai hoạ bất ngờ ập tới trong công việc. Tốt nhất nên thỉnh pháp khí “Thiên nguyệt tứ phúc” để tăng cường vận Quý nhân, trong lúc làm việc mang tính quan trọng luôn được nhắc nhở kịp thời, hoá giải nhẹ đi những phức tạp mà hung tinh mang lại.</p>',
			section6_congchuc: '<p>Năm 2019 (Kỷ Hợi), người tuổi Dần được Thái Tuế tương trợ; bởi vậy vận thế năm nay tương đối thuận lợi, cơ hội kiếm tiền cũng không ít. Người tuổi Dần làm nhân viên văn phòng chỉ cần làm việc thành thực, phát huy đúng khả năng và tiềm lực bản thân là sẽ có thể đặt được những thành tích nhất định, được thăng chức thăng lương, lại có quý nhân giúp đỡ. Do bị Vong Thần, Quán Tỏa chiếu&nbsp; nên người tuổi Dần năm nay cần chú ý cách cư xử của mình với người xung quanh, để tránh gây phiền phức, cẩn trọng trong lời nói hành động của mình lúc đang vui. Tốt nhất nên có <strong>“Thiên Nguyệt Tứ Phúc”</strong> để hóa giải miệng lưỡi thị phi cũng như các rắc rối trong quan hệ xã giao, có tác dụng trợ lực rất tốt cho việc thăng tiến sự nghiệp.</p>',
			section6_doanhnhan: '<p>Vì Dần Hợi là tương hợp. Nên với những người tuổi Dần làm ăn buôn bán có con đường kiếm tiền rộng mở, trong quá trình làm ăn có cơ hội được gặp gỡ thêm nhiều người cũng có thể coi là quý nhân, tốt cho việc phát triển công việc. Năm nay, do có 2 hung tinh Vong Thần và Quán Toả cùng chiếu, nên dễ bị kiện tụng, phiền phức do tiểu nhân hãm hại. Nên thỉnh vật phẩm <strong>“Tam Hợp Quý Thần”,</strong> để tăng thêm vận quý nhân, giải hung hoá cát.</p>',
			section6_donthan: '<p>Tuổi Dần năm nay gặp lưu niên, tốt cho Vận Đào hoa, được nhiều người xung quanh giới thiệu làm mối kết duyên với người khác giới, nên nắm bắt cơ hội tốt này. Nhưng do chịu ảnh hưởng của các Hung tinh nên vận tình cảm quá lớn dễ thành “con dao hai lưỡi” sẽ rơi vào cảnh “lắm mối tối nằm không”. Tốt nhất nên thỉnh vật phẩm <strong>“Hồ Lô Hòa Hợp” </strong>để ổn định tình duyên, tìm được chính Duyên của mình.</p>',
			section6_kethon: '<p>Những người tuổi Dần đã kết hôn năm nay có vận Duyên tốt, dễ được người xung quanh giúp đỡ, trong các mối quan hệ xã giao bên ngoài với người khác giới nên đề phòng “Đào hoa ngoài luồng”, ảnh hưởng đến hạnh phúc gia đình. Phá Thái Tuế cũng chính là nói tình cảm hôn nhân gia đình dễ dẫn đến tan vỡ. Ngoài ra Hợp Thái Tuế nên Nữ tuổi Dần sẽ có tin vui mang thai. Tốt nhất nên thỉnh vật&nbsp; phẩm <strong>“Thiên Nguyệt Tứ Phúc”</strong> để tăng thêm tăng thêm vận an thai, dưỡng thai khoẻ mạnh, “mẹ tròn con vuông”.</p>',
			section6_hocsinh: '<p>Với những người đang đi học, thì năm nay con đường học vấn thực sự thuận lợi, do hợp Thái Tuế; nên vô cùng thích hợp việc chú tâm học tập. Cần lưu ý Hung tinh, Vong Thần chiếu nên năm nay các sỹ tử tuổi Dần dễ bị các yếu tố bên ngoài tác động, không thể tập trung cho học hành. Cho nên, các sỹ tử cần phải làm chủ bản thân, lấy việc học làm đầu. Các bậc phụ huynh có thể cung thỉnh <strong>“Tháp Văn Xương Đá Đen” </strong>về đặt tại Văn xương vị ở trong nhà nhằm giúp các sỹ tử bình tâm tĩnh trí, nâng cao thành tích học tập.</p>',
		},
		{
			tuoi: 'mao',
			intro: 'Thái tuế sinh phù tướng tinh ưu, Đa tác đa thành vận thế tăng <br />Chỉ e ngũ quỷ quan phủ nhiễu Tốt tụng thị phi nan an sinh',
			section1_title: 'Tam Hợp Thái Tuế, thăng chức tăng lương, vượng học hành.',
			section1_itext: '<p style="text-align: justify;">Tuổi Mão vào năm 2019, Thái Tuế gặp Tam Hợp Quý Nhân, vận thế tiếp tục tăng lên giống như năm 2018, năm nay cũng thuộc vận thế vượng nhất trong 12 con giáp. Bất luận là chuyện làm ăn kinh doanh, hợp tác, tài vận hay hôn nhân gia đình đều thuận lợi hơn năm trước. Đồng thời, Thái Tuế Hợi (Thủy) là ấn tinh của Mão - Mộc, nên sự nghiệp học hành của người tuổi Mão hưng vượng. Cần chăm chỉ học tập sẽ có được thành công nhiều; lại nói có Tướng Tinh chiếu mệnh, lộc vận hanh thông, công việc thuận lợi, được cấp trên ưu ái; vận đào hoa tốt, người độc thân biết nắm bắt cơ hội sẽ nên duyên.</p><p style="text-align: justify;">Thái Tuế sinh Mão Mộc, Ngũ Hành Mộc quá vượng, năm nay trong cát sẽ có tiểu hung. Mộc khắc Thổ, Người tuổi Mão có xu hướng nhìn sự việc quá nặng nề, mà tự chuốc phiền não; ngoài ra, có hung tinh là Ngũ Quỷ, Quan Phù chiếu mệnh nên dễ có rước bệnh vặt vào thân. Đồng thời, cũng hay lỡ lời mà bị thi phi. Lời khuyên: nên dùng vật phẩm phong thuỷ may mắn <strong>“Thiên Nguyệt Tứ Phúc”</strong> để hóa hung giải ách.</p><p style="text-align: justify;">Tóm lại, người tuổi Mão năm nay gặp thời chỉ cần thuận việc mà làm, tích cực đối mặt với khó khăn thử thách, sẽ có quý nhân hỗ trợ.</p>',
			section2_title1: 'Tam hợp quý nhân, Tướng Tinh',
			section2_block1_text: '<p style="text-align: justify;">Người tuổi Mão năm nay lưu niên gặp tam hợp quý nhân, cho nên vận thế ổn định. Sự nghiệp, tài vận, tình cảm đều không ngừng cải thiện. Còn gặp “Tướng Tinh” chiếu mệnh, gặp khó khăn được quý nhân ra tay tương trợ. Sẽ là một năm bạn có thu nhập bội thu.</p>',
			section2_title2: 'Quan Phù, Ngũ Quỷ',
			section2_block2_text: '<p>“Ngũ Qủy” chủ về phá tài, luôn thấy bất an, bệnh tật, tử vong. Người tuổi Mão năm nay có sự lo lắng về sức khỏe. “Quan Phù” ý chỉ tới tố tụng, khẩu thiệt thị phi, phá tài;&nbsp; người tuổi Mão năm nay dễ vì lỡ lời mà tự chuốc họa vào thân; cần phải thận trọng hành sự, xử lý mọi việc. Cho nên, trong năm nay cần cẩn thận cả về công việc lẫn sức khoẻ.</p>',
			section3_taivan: '<p style="text-align: justify;">Người tuổi Mão năm nay là một năm khá thuận lợi, tài vận rất tốt. Vì Thái Tuế năm tạo thế Tam hợp quý nhân nên có nhiều cơ hội cầu tài, đi đâu cũng được quý nhân tương trợ. Được “Tướng Tinh” chiếu mệnh, có danh có lợi, công thành danh toại. Cho nên, năm nay có nhiều cơ hội trong kinh doanh từ bạn bè, người thân. Mà trong khó khăn của công việc thì sẽ lại càng có được nhiều lợi ích, nắm được thời cơ sẽ thu được lợi nhuận đáng kể. Tuy nhiên, về phần bạn bè bị ảnh hưởng bởi hung tinh “Ngũ Quỷ” mà vô cớ nảy sinh cơ sự bất hòa. Người tuổi Mão nên mang theo vật phẩm phong thủy <strong>“Thiên Nguyệt Tứ Phúc”,</strong> nhằm ổn định vận thế, giữ hòa khí các mối quan hệ.</p>',
			section3_sunghiep: '<p style="text-align: justify;">Năm nay là một trong những năm đỉnh điểm sự nghiệp của người tuổi Mão. Thái Tuế tương hợp Tam Hợp Quý Nhân, sự nghiệp thuận buồm xuôi gió, gặp trắc trở có quý nhân giúp đỡ. “Tướng Tinh” nhập mệnh, thời vận tốt. Khi biết nắm vững kiểm soát trong sự nghiệp, thì tài lộc sẽ hanh thông, sớm thăng chức tăng lương, vận học hành vượng. Tuy nhiên, chịu ảnh hưởng của hung tinh “Quan Phù” cũng gây ra những trắc trở không nhỏ. Người tuổi Mão nên mang theo <strong>“Tam Hợp Quý Thần”</strong> biến hung hóa cát, công danh sự nghiệp, học hành càng thuận lợi.</p>',
			section3_taivan_rate: 3,
			section3_sunghiep_rate: 3,
			section4_suckhoe: '<p style="text-align: justify;">Người tuổi Mão năm nay do ảnh hưởng của hung tinh nên sức khỏe có chút đáng quan tâm. Dễ dàng sinh bệnh, đặc biệt là bệnh liên quan đến đường tiêu hóa, cần chú ý đến việc ăn uống. Hơn nữa, do năm nay công việc tăng nhiều dẫn đến người tuổi Mão sẽ bị đặt nặng áp lực, thường xuyên mất ngủ, tâm trạng bất an. Khuyên nên treo <strong>“Hồ Lô hóa sát”</strong> trong phòng ngủ giúp khai thông vận cát, cầu sức khỏe bình an.</p>',
			section4_suckhoe_rate: 1,
			section4_tinhyeu: '<p style="text-align: justify;">Vì là năm tương hợp với Thái tuế nên mặt tình cảm của người tuổi Mão năm nay khá ổn định, nhận được cảm mến từ mọi người xung quanh, giao tiếp rộng. Người độc thân thì được người lớn tuổi làm mai mối, nên nắm bắt cơ hội. Người đang yêu năm nay có cơ hội tiến thêm bước nữa trong việc đi tới hôn nhân. Người đã kết hôn do sự nghiệp vượng khiến quá chú ý tới sự nghiệp mà xem nhẹ yếu tố gia đình khiến đối phương bất mãn, trong lòng dễ nảy sinh rạn nứt. Nên dùng vật phẩm phong thuỷ <strong>“Hồ Lô Hòa Hợp” </strong>để ổn định tình cảm gia đình.</p>',
			section4_tinhyeu_rate: 2,
			section5_txt1: '<p style="text-align: justify;">Tài vận, sự nghiệp có nhiều cơ hội thông qua năng lực, khả năng vốn có của bản thân, mang lại lợi ích không hề nhỏ. “Tướng Tinh” chiếu mệnh, năm nay thường xuyên nhận được sự giúp đỡ, đề bạt từ người khác. Kịp thời nắm bắt được cơ hội, năm nay sẽ là một năm công danh như ý đôi đường của bạn. Nhưng vì chịu ảnh hưởng của hung tinh “Ngũ Quỷ”, “Quan Phù” mà bị phá tài hoặc con đường cầu tài của bạn sẽ bị cản trở. Khuyên&nbsp; bạn nên sử dụng vật phẩm phong thủy <strong>“Tam Hợp Quý Thần Hợi Mão Mùi”,</strong> rất có lợi trong việc giữ tiền tài, chiêu cầu quý nhân giúp đỡ, ổn định vận thế.</p>',
			section5_txt2: '<p style="text-align: justify;">Người tuổi Mão năm nay có Tam Hợp Thái Tuế, có cát tinh bảo hộ, có câu: “Nhân hồng thị phi đa”, không thể không đề phòng tiểu nhân. Không nên quá đắc ý hay phô trương tài hoa, tránh để kẻ tiểu nhân đố kỵ, soi mói. Khuyên bạn nên sử dụng vật phẩm phong thủy <strong>“Thiên Nguyệt Tứ Phúc”, </strong>cải thiện những tình huống tiêu cực, sinh phúc vận, cải thiện mối quan hệ đồng nghiệp, bạn bè, những mối quan hệ trong làm ăn kinh doanh.</p>',
			section5_txt3: '<p style="text-align: justify;">Người tuổi Mão năm nay vận thế đào hoa tốt, nên biết nắm bắt thời cơ, có thể có được nhân duyên mỹ mãn. Tuy nhiên sướng trước thì khổ sau, bạn cần kiên định chuyện tình cảm của mình. Với người độc thân không được đứng núi này trông núi nọ, đến khi quay đầu nhìn lại người luôn ở phía sau đã không còn. Đối với người tuổi Mão đã lập gia đình, cần chú ý đến cảm xúc của đối phương, biết quan tâm lo lắng đúng lúc, tránh tình cảm đổi thay. Khuyên bạn nên có vật phẩm phong thủy <strong>“Tam Hợp Quý Thần”</strong> bên mình, khai cát vận, ổn định chuyện tình duyên.</p>',
			section5_txt4: '<p style="text-align: justify;">Hung tinh “Ngũ Quỷ”, “Quan Phù” nhập mệnh đại diện cho khẩu thiệt thị phi. Năm nay, người tuổi Mão không tránh được gặp phải thị phi, bị tiểu nhân dựng chuyện đàm tiếu. Bạn cần chú ý xây dựng mối quan hệ tốt, nhiệt tình, hào phóng rộng lượng với mọi người; để từ đó, mà chiếm được thiện cảm của mọi người, thoát khỏi rắc rối không cần thiết. Khuyên bạn nên thỉnh vật phẩm phong thủy <strong>“Long Ấn Vượng Quan”</strong> hóa giải sát khí của Hung Tinh, sinh vượng quý nhân vận thế.</p>',
			section6_congchuc: '<p>Năm 2019, là Tam hợp quý nhân nên người tuổi này khá thuận lợi trong sự nghiệp được cấp trên tin tưởng, quý mến, thăng chức tăng lương; đồng nghiệp quan tâm nhiệt thành, vui vẻ. Tuy nhiên, trong công việc cần khiêm tốn, đối xử nhiệt tình, chân thành với người khác, tránh bị tiểu nhân đặt điều thị phi mà ảnh hưởng tới con đường sự nghiệp. Trong công việc, có sự xuất hiện của người cạnh tranh. Khuyên bạn nên thỉnh vật phẩm phong thủy <strong>“Thiên Nguyệt Tứ Phúc”,</strong> thúc vượng vận cát; phần nào hóa giải áp lực, tăng thêm&nbsp; động lực hoàn thành công việc.</p>',
			section6_doanhnhan: '<p>Người tuổi Mão năm 2019 là Hợp Thái tuế, trong việc kinh doanh được quý nhân tận tâm hỗ trợ, chuyện làm ăn lên như diều gặp gió. Tuy nhiên, do ảnh hưởng xấu từ Hung Tinh “Ngũ Quỷ”, “Quan Phù” tránh không khỏi những sự đầu tư vô ích, không công. Năm này nhất định phải giữ hòa khí tốt trong các mối quan hệ, tránh bị tiểu nhân hãm hại mà gặp trắc trở trong việc kinh doanh; phải kinh doanh hợp pháp, đừng vì lợi nhỏ trước mắt mà rước họa vào thân. Khuyên bạn nên thỉnh vật phẩm phong thủy <strong>“Ngũ Phúc Tụ Tài”,</strong> vượng tài hoá sát, tăng cát vận, tụ tài lộc, hóa giải hung tinh.</p>',
			section6_donthan: '<p>Người tuổi Mão năm nay do bị “Ngũ Quỷ” “Quan Phù” ảnh hưởng mà khiến cho tâm trạng dễ nổi nóng bởi chuyện nhỏ nhặt. Đối với người còn độc thân chuyện này sẽ ảnh hưởng xấu đến hình tượng, giảm vận đào hoa. Cũng vì thế mà vô tình bỏ lỡ tâm ý của đối phương. Khuyên bạn nên biết khống chế cảm xúc, bình tĩnh trong mọi việc; bạn cũng nên mang bên mình một vật phẩm phong thủy <strong>“Tam Hợp Quý Thần”</strong>, sẽ giúp bạn trấn tĩnh, thúc vượng đào hoa.</p>',
			section6_kethon: '<p>Năm nay bị hung tinh can nhiễu, đối với sức khỏe của bản thân và người nhà bị ảnh huởng bất lợi. Người đã kết hôn cần quan tâm nhiều hơn tới đối phương, biết cách thay đổi không khí gia đình một chút, thỉnh thoảng nên tạo bất ngờ ngọt ngào cho đối phương; hay những cử chỉ hành động quan tâm không lời. Một phần giúp cải thiện mối quan hệ, một phần nhẹ nhàng hóa giải những mâu thuẫn cãi vã không đáng có. Để phần nào giúp bạn ổn định cuộc sống hôn nhân, khuyên bạn nên thỉnh vật phẩm phong thủy <strong>“Hồ Lô Hòa Hợp”,</strong> tăng cát vận, giữ sự cân bằng hài hòa trong mối quan hệ hôn nhân.</p>',
			section6_hocsinh: '<p>Thái Tuế của năm là Ấn tinh nên đối với người tuổi Mão về con đường học hành thi cử là một năm khá thuận lợi, bạn có lòng chuyên tâm vào việc học, được thầy cô, bạn bè quý mến. Trong việc học hành nhận được nhiều sự giúp đỡ, chỉ dạy; đồng thời, bạn nên thử thách bản thân trong năm nay. Dũng cảm thể hiện con người mình hơn nữa, chủ động trong tranh luận, học tập; nhưng cũng cần dành thời gian nghỉ ngơi hợp lý. Khuyên bạn nên mang theo bên mình vật phẩm phong thủy “<strong>Tam Hợp Quý Thần”</strong>, khai thông vận thế, tăng cường sự lĩnh ngộ.</p>',
		},
		{
			tuoi: 'thin',
			intro: 'Tài tinh nhập khố phong thu niên, đào hoa đáo môn nhược nhân tán<br />Kiện khang biện phùng tử phù nhiễu, trần niên cựu tật quyển thổ lai.',
			section1_title: 'Vận thế tăng, công việc thuận lợi, thoát cảnh độc thân.',
			section1_itext: '<p style="text-align: justify;">&nbsp; &nbsp; &nbsp;Năm 2018, tuổi Thìn Xung phạm Thái Tuế, khiến vận thế giảm sút; sang năm Kỷ Hợi 2019, vận thế cả năm không những bình ổn còn tăng lên liên tục. Năm nay, cũng thuộc vận thế vượng trong 12 con giáp. Thái tuế Hợi (Thủy) là Tài Tinh, rất lợi cho tài vận của người tuổi Thìn, sự nghiệp vì thế mà phát triển mạnh mẽ. Vì vậy, người tuổi Thìn năm nay cần nỗ lực phát huy tiềm năng tài hoa, trí tuệ của bản thân, cần có ý trí tiến thủ, tích cực cố gắng, sẽ có được thu hoạch không nhỏ trong công việc. Đồng thời, tuổi Thìn còn là Thuỷ Khố; lại nói có Tài Tinh nhập khố, sự nghiệp của người kinh doanh phát triển khá lí tưởng; chỉ cần chuyên tâm làm ăn, thành tín làm gốc rễ, có lòng tin vào bản thân thì nhất định sẽ gặt hái được thành tích đáng kể. Trong chuyện tình cảm, Hồng Loan Đào Hoa Tinh nhập mệnh, có thể nói là hỷ khí tràn trề; đối với người độc thân mà nói thì năm nay là một năm đại hỷ, có hy vọng gặp được người tâm đầu ý hợp; người đang yêu cũng có cơ duyên nên vợ nên chồng. Nhưng đối với người tuổi Thìn đã kết hôn, vì Hồng Loan quá vượng mà vào năm nay cần đề phòng có kẻ thứ ba xen vào mối quan hệ.</p><p style="text-align: justify;">Năm nay, lưu niên thiên can của người tuổi Thìn là kiếp Tài Tinh; cẩn thận trọng trong việc hợp tác làm ăn. Lại gặp Thất Xích nhập cung mệnh, cần đề phòng tiểu nhân đặt điều thị phi. Về sức khỏe, năm nay người tuổi Thìn Tử Phù Sát Tinh chiếu mệnh, cần đề phòng bệnh cũ tái phát; đồng thời, cũng cần đề phòng những bệnh kinh niên bộc phát.</p><p>Tóm lại, người tuổi Thìn năm nay tài vận vượng, có nhiều cơ hội lựa chọn phát huy tiềm năng. Nhưng đồng thời cũng vì sự tồn tại của Hung Tinh mà vận thế bị ảnh hưởng. Khuyên bạn nên thỉnh vật phẩm phong thủy <strong><span style="color: #ff0000;">“Thiên Nguyệt Tứ Phúc”</span>, </strong>hóa giải vận hung, vượng cát, thúc quý nhân vận, gặp hung hóa cát.</p>',
			section2_title1: 'Nguyệt Đức, Hồng Loan',
			section2_block1_text: '<p style="text-align: justify;">“Nguyệt Đức” Tinh là sao quý nhân, khiến cho chủ được cát tinh này chiếu sẽ rất có duyên trong mọi mối quan hệ. Giúp những mối quan hệ của người tuổi Thìn năm nay thêm tốt đẹp, giao hảo; chỉ cần nắm bắt cơ hội sẽ giúp ích cho sự nghiệp. Đồng thời, sao này sẽ giúp bạn hóa giải khó khăn, gặp cát hóa hung. Đặc biệt, đối với người thường xuyên phải đi giao lưu bởi đặc thù công việc thì càng có lợi trong việc giữ mối quan hệ tốt đẹp. “Hồng Loan” Tinh nhập mệnh, vận đào hoa vượng, hôn nhân thành toàn, nguời đã kết hôn đề phòng sóng gió trong chuyện tình cảm gia đình. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>',
			section2_title2: 'Tử Phù, Tiểu Hao, Thất Xích',
			section2_block2_text: '<p>“Tử Phù” Tinh nhập bản cung, người tuổi Thìn năm nay cần hết sức thận trọng bệnh cũ tái phát hoặc bệnh tật bộc phát phiền nhiễu không nguôi. Thất Xích Tinh cũng có ý là khẩu nghiệp thị phi, đặc biệt là vướng vào nữ giới mà sinh phiền phức. “Tiểu Hao” ý chỉ tới những vết thương nhỏ hay phá tài một chút, tức tài đến tài đi nhanh chóng.</p>',
			section3_taivan: '<p style="text-align: justify;">Thái tuế tương hợp là Tài Tinh, năm nay người tuổi Thìn tài vận tăng rõ rệt. Sự nghiệp phát triển thuận lợi, thu nhập cao, nhân duyên như cá gặp nước. Có thể gọi là một năm như ý, nhưng không lơ là, cần giữ đầu óc tỉnh táo. Lưu niên thiên can năm nay của người tuổi Thìn là kiếp Tài Tinh, dễ dàng nửa đuờng bị nguời khác cuớp tài, chịu ảnh huởng của Hung Tinh Tiểu Hao, năm nay tài đến tài đi nhanh chóng. Người ưa đầu tư mạo hiểm năm nay cần thận trọng hơn, không nên quá gấp rút vội vàng mà để bị lừa. Năm nay tài vận vượng, nên bạn cần làm nhiều việc thiện, quyên từ thiện, bố thí, làm phước; đặc biệt cho người già, trẻ nhỏ và người khuyết tật. Mặt khác, những tháng tài vận vượng nhất nên chú ý chi tiêu hợp lý, tránh phá tài. Ngoài ra, mang theo bên mình vật phẩm phong thủy <strong>“Thiên Nguyệt Tứ Phúc”, </strong>ổn định vận thế, giữ tài vận.&nbsp;&nbsp;&nbsp;</p>',
			section3_sunghiep: '<p style="text-align: justify;">Người tuổi Thìn năm nay, cầu tài cầu quan đều thuận lợi, sự nghiệp vận thế bình ổn. Lại có Cát tinh “Nguyệt Đức” chiếu mệnh, có lợi cho cạnh tranh trong công việc, thi cử. Người tuổi Thìn năm nay sự nghiệp phát triển thuận lợi, phát huy tài hoa, giữ được mối quan hệ hòa hảo với mọi người, nỗ lực biểu hiện thật tốt sẽ có cơ hội gặt hái lớn; thuận thế mà giải quyết được tất cả khó khăn trước giờ chưa thể giải quyết. Người tuổi Thìn còn đi học năm nay, gặp được giáo viên giỏi kèm cặp, học hành tiến bộ, thành tích cao. Khuyên bạn nên mang theo bên mình vật phẩm phong thủy <strong>“Tam Hợp Quý Thần”,</strong> hóa giải hung tinh “Tiểu Hao” ảnh hưởng tới sự nghiệp, học hành. Tăng thêm lưu niên văn xương vận, sự nghiệp, học hành sẽ gặp được quý nhân giúp đỡ.</p>',
			section3_taivan_rate: 3,
			section3_sunghiep_rate: 3,
			section4_suckhoe: '<p style="text-align: justify;">Năm nay, sức khỏe người tuổi Thìn không mấy lạc quan, chịu ảnh hưởng sát tinh “Tử Phù” nhập mệnh. Năm nay, cần được biệt lưu tâm đề phòng bệnh cũ tái phát, bệnh cũ khó chữa; đồng thời, còn có khả năng sinh thêm bệnh tật. Có thể nói rằng, “phúc bất trùng lai, hoạ vô đơn chí”, hiểm họa không nhỏ. Nếu không cẩn thận để bệnh dai dẳng, phiền nhiễu cả năm. Lưu niên tài tinh, cũng dễ dàng vì quá đầu tư vào công việc hoặc giao lưu tiệc tùng quá độ mà ảnh huởng tổn hại đến sức khoẻ, đặc biệt là tì vị dạ dày, cần chú ý đặc biệt điều tiết về ẩm thực. Lưu niên địa chi Thủy - Thổ tương khắc, ảnh hượng nặng nề tới sức khỏe, cần chú ý điều tiết việc ăn uống. Khuyên bạn năm 2019 này, nên thỉnh vật phẩm phong thủy <strong>“Tam Hợp Quý Thần”</strong>, là vật cát tường cầu bình an sức khỏe, giữ ổn định thể trạng sức khỏe, mọi việc suôn sẻ.</p>',
			section4_suckhoe_rate: 1,
			section4_tinhyeu: '<p style="text-align: justify;">Năm nay, người sinh tuổi Thìn vận đào hoa vượng, dễ dàng nhận được ủng hộ và giúp đỡ từ người khác giới. Người độc thân năm nay, có cơ hội thoát cảnh đơn côi, phải nắm bắt cơ hội, không được vì bảo thủ mà lỡ mất phần lương duyên. “Hồng Loan” tinh nhập mệnh, đối với người đang yêu năm nay thích hợp bàn bạc việc hôn sự. Nhưng cũng cần cẩn thận bị người khác cướp mất mối nhân duyên này. Người đã kết hôn cần đề phòng ý chung nhân có tình ý bên ngoài, duyên tưởng hợp hóa ra mất. Để hôn nhân của bạn được hạnh phúc, ổn định khuyên bạn nên thỉnh <strong>“Tam Hợp Quý Thần”, </strong>có thể tránh trảm đào hoa ảo, trấn trạch hương gia, giúp cho vận đào hoa của bạn áo gấm thêm hoa.</p>',
			section4_tinhyeu_rate: 2,
			section5_txt1: '<p style="text-align: justify;">Người sinh tuổi Thìn năm 2019 tuy biện tài rất vượng, nhưng lưu niên thiên can Kỷ - Thổ mà người tuổi Rồng, địa chi là Thìn - Thổ là Tỷ kiếp, cần cẩn thận một số phương diện phá tài sau: Một là vì quá tham lam trong việc cầu tài mà đầu tư quá mạnh tay khi chưa tìm hiểu kỹ càng; hai là hợp tác làm ăn không cẩn thận bị đối tác lừa; ba là xuất hành thất tài, cần chú ý bảo quản tốt tài sản cá nhân. Khuyên bạn nên thỉnh vật phẩm phong thủy <strong><em>“Tỳ hưu Bạch ngọc”, </em></strong>là vật cát tường tránh hung vượng cát, giữ tài vận.</p>',
			section5_txt2: '<p style="text-align: justify;">Lưu niên thuộc Hợi, Kỷ - Thổ Tỷ kiếp thấu can, xuất hiện tranh tài, tranh đấu trong chuyện tình cảm. Lại thêm Thất Xích sát tinh, người tuổi Thìn năm 2019 dễ bị kẻ tiểu nhân cản trở, phá hoại, đặt điều thị phi trong sự nghiệp, tình duyên. Khuyên bạn khi gặp sự phải thật bình tĩnh, cần đề phòng tiểu nhân ngay cạnh mình, gặp chuyện ngoài ý muốn phải nhờ quý nhân giúp đỡ, mượn sức quý nhân mới mong hóa giải bất lợi. Nếu như trong chuyện tình cảm, tài vận không được như ý muốn, khuyên bạn nên mang vật phẩm phong thủy<strong> “Thiên Nguyệt Tứ Phúc” </strong>theo bên mình, trảm trừ sự quấy nhiễu của tiểu nhân.</p>',
			section5_txt3: '<p style="text-align: justify;">Hồng Loan nhập mệnh, là một năm vận đào hoa tốt đối với người tuổi Thìn. Song, cũng do ảnh hưởng từ hung tinh mà trong tình duyên cũng dễ gặp phải cám dỗ; đặc biệt đối với những nguời đã kết hôn cần giữ khoảng cách trong các mối quan hệ khác giới, tránh bị lôi cuốn, lún sâu vào mà ảnh hưởng tới tình cảm hôn nhân gia đình, nhận lại kết cục không tốt. Khuyên bạn nên thỉnh vật phẩm phong thủy <strong>“Hồ lô Hòa hợp”,</strong> thuận lợi hóa sát vượng vận, bảo vệ tình cảm hôn nhân khỏi thương tổn.</p>',
			section5_txt4: '<p style="text-align: justify;">Năm nay gặp Thất Xích, Tử Phù nhập cung mệnh; người tuổi Thìn có lộc tiền tài, nhưng tình cảm có sự tranh giành, áp lực lớn trong đời sống công việc, vướng vào thị phi. Bát tự với lưu niên xung khắc, dễ mệt mỏi, vướng vào kiện tụng. Vì thế, mà năm nay bạn cần chú ý giữa hòa khí trong các mối quan hệ với mọi người, tránh vì tiền tài mà xảy ra tranh chấp. Đồng thời, thận trọng trong cử chỉ hành động tránh làm phật lòng người khác, mà tự chuốc thị phi vào người. Khuyên bạn tuổi Thìn năm này nên gặp thầy phong thủy để hóa giải, đồng thời kết hợp dùng vật phẩm phong thủy <strong>“Thiên Nguyệt Tứ Phúc”</strong> làm vật tùy thân, hóa hiểm vi di, gặp khó hóa thuận.</p>',
			section6_congchuc: '<p>Năm nay, được Nguyệt Đức chiếu nhập cung mệnh, người tuổi Thìn năm nay có cơ hội tốt, thăng chức tăng lương, được quý nhân giúp đỡ, tài vận tốt. Nhưng lưu niên gặp Thất Xích nhập mệnh, trong công việc với người công chức cần chú ý giữ tốt mối quan hệ, cẩn thận lời nói, tránh lỡ lời mà gây họa; họa từ miệng mà ra, tự chuốc lấy thị phi mà ảnh hưởng đến cuộc sống.&nbsp;&nbsp;</p>',
			section6_doanhnhan: '<p>Lưu niên tương hợp Biện tài vận, đối với người làm ăn kinh doanh lâu năm, hay người đang bắt đầu sự nghiệp kinh doanh mà nói có cơ hội cầu tài rất tốt trong năm này. Thích hợp theo dõi học hỏi đầu tư và quản lý tài chính, khuyên bạn nên nắm bắt cơ hội thích hợp này, âu cũng là chuẩn bị cho con đường thành công phía trước. Năm nay, gặp hung tinh Tử Phù, bạn cần chú ý một số phương diện: Về sức khỏe, không nên làm việc quá sức; ra ngoài cần cẩn thận bị thương. Khuyên bạn nên sớm gặp các chuyên gia về phong thủy, tiến hành phân tích vận thế, kịp thời thúc cát tránh hung.&nbsp;&nbsp;&nbsp;</p>',
			section6_donthan: '<p>Lưu niên gặp Hồng Loan; năm nay vận đào hoa cực tốt, có cơ hội kết duyên với người hợp ý, khả năng thoát cảnh đơn độc rất cao. Nhưng đào hoa quá vượng, đồng thời cũng mang lại không ít phiền não. Bạn cần giữ bản thân thật tỉnh táo, phải biết được bản thân đang cần gì. Khuyên bạn nên giữ gìn, từ chối cám dỗ. Chỉ cùng với người thật sự hợp với mình để phát triển đoạn tình cảm ổn định, dài lâu. Người độc thân muốn mau chóng thoát cảnh đơn côi nên thỉnh vật phẩm phong thủy <strong>“Hồ lô hòa hợp”</strong> theo nhân bát tự, từng bước vượng đào hoa vận, sớm ngày gặp được chính duyên.</p>',
			section6_kethon: '<p>Người tuổi Thìn đã kết hôn năm nay vì chịu ảnh hưởng quá mạnh từ Hồng Loan, mà rất dễ bị cám dỗ từ những mối quan hệ bên ngoài. Cần giữ mình, đặt trách nhiệm với gia đình lên hàng đầu. Đối với người bạn đời phải luôn thật thà, chung thuỷ, tránh đi quá xa vượt sai quỹ đạo tình cảm với nguời khác mà dẫn đến thân bại danh liệt, tình cảm gia đình không giữ được.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>',
			section6_hocsinh: '<p>Lưu niên gặp tài tinh lại có đào hoa tinh nhập mệnh, người tuổi Thìn còn đi học nhân duyên rất tốt, rất dễ dàng yêu đương quá sớm mà ảnh hưởng tới con đường học tập. Người lớn trong nhà cần nhẫn nại từng bước chỉ bảo, dành nhiều thời gian bên con, cũng phần nào khiến mối quan hệ gia đình thêm gắn kết. Phần nào mong con bạn nâng cao tình thần chủ động trong học tập, khuyên bạn nên dùng nhân bát tự của con, kết hợp thỉnh vật phẩm phong thủy <strong>“Bút Văn Xương” </strong>đặt ở bàn học của con, tăng cường văn xương vận, giúp trẻ tập trung học tốt hơn.</p>',
		},
		{
			tuoi: 'tyj',
			intro: 'Xung Phạm Tuế Quân hành vận suy, thị phi khẩu thiệt Thất Xích Lai<br />Chỉ Hữu Trạch Mã Lai Nhập Mệnh, Động Đáo Đồ Trung Hảo Vận Khai',
			section1_title: 'Xung thái tuế, bảo vệ cho sức khoẻ, tình cảm phát triển bên ngoài.',
			section1_itext: '<p>Năm 2019 – Kỷ Hợi, vận thế người tuổi Tị rất đáng lo ngại do <span style="color: #ff0000;">Tị - Hợi tương xung</span>, hay nói cách khác là <span style="color: #ff0000;">Chính Xung Thái Tuế</span>. Tục ngữ có câu: “Thái tuế bất khả xung giả tất hữu họa”; có nghĩa là thái tuế không được xung khắc, xung khắc sẽ có tai họa kéo đến. Lại gặp Đại Hao, Lan Can; sách vận mệnh có viết: “đại hao hao tài lại sinh tai, kiện tụng lao ngục tai phi lai, tài vận bất lợi phòng đạo tặc, cần đề phòng tai nạn đáo ngoại lai”. Cho nên năm nay, người tuổi Tị bị ảnh hưởng lớn bởi xung thái tuế mà các phương diện cuộc sống, công việc, tâm lý, sức khỏe đều không được như ý, có nhiều biến động lớn. Nhẹ thì mất tiền, nặng thì chịu tổn hại vô cùng lớn; lao tâm khổ tứ thành sự mà chỉ nhận được nửa phần công trạng. Đồng thời còn dính vào thị phi, sự cố bất ngờ.</p><p>Thái tuế Hợi (Thủy) là quan tinh, đối với người công chức trong năm nay cần chú&nbsp;ý an toàn trong lao động; thận trọng trong lời nói và cách hành xử với lãnh đạo và đồng nghiệp, làm nhiều bớt nói. Người đã kết hôn trong mối quan hệ gia đình dễ xảy ra bất hòa; khuyên bạn, gặp sự cần nhường nhịn đối phương. Người chưa kết hôn cần đề phòng tình cảm có rạn nứt, bạn nên dành nhiều thời gian quan tâm thấu hiểu nhau hơn, không được để áp lực công việc ảnh hưởng tới tâm trạng mà trút phiền não lên đối phương.</p><p>Tuy nói về tổng thể năm nay người tuổi Tị vận thế là kém nhất trong 12 con giáp, nhưng không có nghĩa là tất cả những người tuổi Tỵ đều kém vận như thế. Cái gọi là “con dao hai luỡi, không xung không phát” người tuổi Tị năm nay vẫn có thể đảo ngược tình thế, vượng vận. Tục ngữ có câu “phúc họa tương ỷ”, hay câu mà người Việt Nam vẫn hay nói là “trong cái rủi có cái may”; nên năm nay có “Dịch Mã” nhập cung, bươn trải bên ngoài có nhiều cơ hội phát triển. Năm nay, đối với người tuổi Tị mà nói cũng có nhiều thay đổi tích cực, có cơ hội cầu tiến. Hơn nữa, người tuổi Tị ngay thẳng, chính trực chỉ cần nỗ lực đón nhận mọi thử thách, mượn giúp đỡ hóa sát chuyển vận, khai thông cát vận, thúc vận tránh hung, sẽ có chuyển biến tích cực trong năm.</p>',
			section2_title1: 'Dịch Mã',
			section2_block1_text: '<p style="text-align: justify;">Năm nay người tuổi Tị xung khắc thái tuế, lại thêm phần cát tinh ảm đạm, thật khiến người ta đau đầu. Dịch Mã Tinh nhập cung mệnh. Mà Dịch Mã đại diện cho biến động, đi xa; người tuổi Tị năm nay có thể sẽ làm việc ở nước ngoài. Sẽ có cơ hội phát triển rất lớn nếu bạn làm việc ở nơi xa nhà, nên nắm lấy cơ hội này. Về con người bạn, cần xét từ nhiều khía cạnh khác nhau để mở rộng thêm nhiều mối quan hệ, để chuẩn bị cho ngày tháng sau này tốt hơn.</p>',
			section2_title2: 'Đại Hao, Lan Can',
			section2_block2_text: '<p style="text-align: justify;">Người tuổi Tị năm nay chịu nhiều ảnh hưởng từ hung tinh Đại Hao, Lan Can; nên gặp họa mất tiền tài, nghề tổ truyền có xu hướng bị mai một. Sách cổ có viết: “tuế phá kiêm lan can, ngộ thử đại bất an, tổn tài ẩu khí hữu, bất nhiên bệnh họa triền”. Xung thái tuế biểu thị xung kích, xung động; tiền tài hao tổn, tiểu nhân châm chọc, mâu thuẫn gia đình, bệnh tật, sự cố an toàn ngoài ý muốn,… mọi việc lớn nhỏ không may mắn đều vận vào thân, cần chủ động hóa giải. Mọi chuyện xảy ra đều có lý do, có nhân duyên, hành sự không được bốc đồng.</p>',
			section3_taivan: '<p style="text-align: justify;">Do ảnh huởng của xung khắc thái tuế mà tài vận năm 2019 của người tuổi Tị vô cùng không ổn định. Lại gặp Đại Hao, phá tài thất tài rất nhiều, cầu tài vất vả, chi tiêu lại nhiều, tài đến tài đi nhanh chóng. Ảnh hưởng của lưu niên thái tuế tương xung mà khiến cho năm nay trở thành một năm kiếm tiền rất khó khăn, cần phải rất nỗ lực trong năm nay. Tuy nhiên, cũng thích hợp đi công tác hoặc du lịch; hơn nữa, nếu trong công việc yêu cầu bạn phải tha hương cầu tài, bạn nên nắm bắt cơ hội này, sẽ có cơ hội phát triển lớn trong sự nghiệp. Khuyên bạn nên thỉnh vật phẩm phong thủy <strong>“Thiên Nguyệt Tứ Phúc” </strong>theo nhân bát tự, khai cát vận, ổn định từ trường.</p>',
			section3_sunghiep: '<p style="text-align: justify;">Năm nay lưu niên xung thái tuế, vận thế bất ổn lại thêm hung tinh Đại Hao, Lan Can cùng lúc chiếu nhập mệnh khiến sự nghiệp như đứng bên bờ vực. Áp lực trong công việc rất lớn, lao tâm lao lực, xuất hiện phiền não khó giải quyết. Tất cả điều này chỉ sợ chỉ có mình bạn đối mặt lấy, không một ai giúp sức. Khuyên bạn nên kiên định nỗ lực kết hợp với khai vận cát tường, hoặc một loại vật phẩm phong thủy để phần nào cải thiện vận thế. Năm nay, nếu muốn chuyển công việc nên đến nơi có cơ hội phát triển hơn chỗ làm cũ, những đơn vị có đầu tư nước ngoài hoặc là những đơn vị mở rộng thị trường ra nước ngoài. Chuyện học hành dễ dàng bị sao nhãng bởi chơi game hoặc áp lực mà bỏ bê học hành, thành tích đi xuống. Khuyên bạn nên mang theo bên mình vật phẩm phong thủy <strong>“Thiên Nguyệt Tứ Phúc”,</strong> vượng tài vận sự nghiệp, trong học hành công việc gặp được quý nhân giúp đỡ.</p>',
			section3_taivan_rate: 3,
			section3_sunghiep_rate: 3,
			section4_suckhoe: '<p style="text-align: justify;">Người tuổi Tỵ năm nay không mấy lạc quan, cần đề phòng các bệnh về tim mạch và da. Bạn nên kiểm tra sức khỏe toàn thân, có sự chuẩn bị sớm nhất. Đặc biệt, năm nay bất luận là khi nào, trong hoàn cảnh nào cũng cần chú ý an toàn; lái xe hay khi làm những công việc mang tính chất nguy hiểm cần đề phòng mọi rủi ro có thể xảy ra. Ngoài ra, do ảnh hưởng từ hung tinh Lan Can, xung thái tuế mà năm nay sẽ gặp tiểu nhân phá đám, mâu thuẫn gia đình, bệnh tật… Ngoài vấn đề về an toàn sức khỏe còn rất nhiều bất lợi khó khăn cản trở bạn trong năm Kỷ Hợi, bạn cần chuẩn bị tâm lý ứng phó, không được để bản thân trầm cảm, lo âu mà mất ngủ, hại sức khỏe. Khuyên bạn nên mang theo vật phẩm phong thủy <strong>“Tam Hợp Quý Thần” </strong>bên mình, biến hung hóa cát, sức khỏe bình an.</p>',
			section4_suckhoe_rate: 1,
			section4_tinhyeu: '<p style="text-align: justify;">Năm nay đào hoa vận không tốt, là do một năm phạm thái tuế, nên khiến tâm trạng bất ổn dễ nổi cáu vô cớ, ảnh hưởng tới hình tượng bản thân. Mất tiền cũng khiến cho mối quan hệ thêm căng thẳng, đấu khẩu tranh cãi khó tránh khỏi, tình cảm hôn nhân cũng vì thế mà rạn nứt. Người độc thân khó có cơ hội tiến triển, không cần cố gượng ép, rất khó phát triển trong tình cảm mới, không nên đặt niềm tin quá lớn vào chuyện tình cảm. Bất luận là người đã kết hay chưa kết hôn cũng nên duy trì tình cảm với đối phương, thành tâm thành ý, bao dung lẫn nhau, gặp xung đột từ từ giải quyết, dành nhiều thời gian bên nhau, quan tâm lẫn nhau nhiều hơn. Mong muốn đoạn tình cảm có thể ra hoa kết trái, tình cảm hôn nhân ngọt ngào ổn định, khuyên bạn nên mang theo bên mình <strong>“Thiên nguyệt Tứ phúc”, </strong>thúc vượng quý nhân vận, ổn định tình duyên.</p>',
			section4_tinhyeu_rate: 2,
			section5_txt1: '<p style="text-align: justify;">Năm nay do có Hung tinh Đại Hao nhập mệnh, hao tài hao vận, tổn thất về tiền rất nghiêm trọng. Cũng may còn có Cát tinh Dịch Mã đến giải cứu, thích hợp phát triển ở nước ngoài; công tác xa hay du lịch, có cơ hội hợp tác nên nắm bắt cơ hội. Vì là một năm đại hao, bạn cũng có thể phần nào hóa giải bằng cách quyên góp tiền vào hoạt động Từ thiện theo khả năng, đó là hình thức phá tài cho việc có ý nghĩa vào việc “Thiện”. Một mặt cũng vì trách nhiệm với xã hội, tích công đức cho bản thân; mặt khác, bạn cũng nên tìm gặp thầy phong thủy để đánh giá vận hung tìm cách hóa giải. Khuyên bạn nên thỉnh <strong>“Tam Hợp Quý Thần”,</strong> giúp gia trạch hưng vượng, làm ăn thuận lợi, buôn may bán đắt, sự nghiệp phát triển.</p>',
			section5_txt2: '<p style="text-align: justify;">Năm nay, người tuổi Tị vận thế rơi vào thế thăng trầm khó đoán, có Hung tinh là Lan Can nhập mệnh, tiểu nhân thị phi không thể tránh khỏi. Tâm trạng dễ bị kích động, nhất định phải khống chế cảm xúc, bình tĩnh đối mặt. Năm nay, làm việc gì cũng phải tuân theo luật pháp, tránh làm chuyện phi pháp, không được vong ơn bội nghĩa. Đối nhân xử thế khiêm nhường, trách đắc tội với người khác mà rước họa vào thân. Khuyên bạn nên thỉnh <strong>“Tam Hợp Quý Thần”,</strong> vượng vận quý nhân, tránh tiểu nhân, thuận lợi bình an.</p>',
			section5_txt3: '<p style="text-align: justify;">Năm 2019 - Kỷ Hợi, người tuổi Thìn vì sự ảnh huởng của xung Thái Tuế nên vận đào hoa rất kém. Nhưng cũng không cần quá lo lắng, chưa chắc đã phải là một ảnh hưởng tiêu cực. “Nghi động bất nghi tĩnh”, muốn giảm ảnh hưởng tiêu cực từ xung thái tuế, bạn chỉ cần chủ động trong hành vi, lời nói tích cực. Người đang yêu cần chủ động hơn trong chuyện tình cảm, thường xuyên tạo những bất ngờ ngọt ngào cho đối phương, đưa tình cảm đi&nbsp;lên. Người độc thân nên chăm đi du lịch, tham gia vào các hoạt động xã hội sẽ tìm thấy được nhiều cơ hội. Có câu “Thái tuế đương đầu tọa, vô hỷ tất hữu họa”, năm nay người tuổi Tị muốn hóa giải vận xấu cũng có thể dùng hỷ sự hóa giải, bằng cách tổ chức cưới hỏi, thêm đinh, xây dựng mối quan hệ công việc mới, khuyên bạn nên mang theo vật phẩm phong thủy <strong>“Thiên Nguyệt Tứ Phúc”.</strong></p>',
			section5_txt4: '<p style="text-align: justify;">Năm 2019 - Kỷ Hợi, Hợi tương thích thái tuế, lại là Thất Sát của Tỵ - Hỏa, nên năm nay người tuổi Tỵ thái tuế xung khắc, xung động tới Thất Sát. Mà Thất Sát lại đại diện cho: cấp trên, lãnh đạo, luật pháp quân đội, tiểu nhân, thế lực ngầm, xã hội đen, xung đột, bắt nạt.. Vì vậy mà năm nay cần giữ mối quan hệ tốt với lãnh đạo, công an. Tốt nhất là nên mang vật phẩm phong thủy “Tam hợp Quý Thần” bên người, thuận lợi hóa giải hung vận, xung phạm thái tuế.</p>',
			section6_congchuc: '<p>Năm nay, đối với những nguời tuổi Tị sự nghiệp gặp thị phi, nhiều biến động, áp lực không nhỏ; thường vì tư tưởng không đồng nhất mà xảy ra tranh cãi với lãnh đạo, phiền não không nguôi. Khuyên bạn hành xử nên nhẫn nại, tránh xung đột, vì chuyển nhỏ mà hỏng đại sự. Có cơ hội nên đi du lịch xa. Năm nay công việc có tiến triển, nếu gặp trường hợp tiến thoái luỡng nan cần bình tĩnh đối phó linh hoạt, không được hành sự thô lỗ. Khuyên bạn nên giữ mối quan hệ tốt với mọi người trong công ty.</p>',
			section6_doanhnhan: '<p>Người làm ăn kinh doanh năm Kỷ Hợi này áp lực tăng bội phần, bởi vì năm nay là năm xung thái tuế, cần lưu ý không tùy tiện trong việc hợp tác, trừ phi đối phương là người đầu tư chủ động thỉnh cầu hợp tác. Bạn không phải đầu tư nhiều tiền và không phải là người ra quyết định chính. Hãy nhớ rằng bạn có thể phải đối mặt với một cuộc khủng hoảng; thậm chí là phá sản trong năm nay. Doanh nghiệp cần chú ý dự trữ tiền để giải quyết khó khăn khi doanh thu không cao. Khuyên bạn nên thỉnh vật phẩm phong thủy <strong>“Tam Hợp Quý Thần” </strong>kết hợp với bát tự, hóa giải bất lợi trong sự nghiệp và ảnh huởng của phá hao.</p>',
			section6_donthan: '<p>Chuyện tình cảm của người tuổi Tị năm nay không mấy lý tưởng. Lưu niên xung Thái tuế, lại không có đào hoa tinh chiếu nhập cung mệnh, lại thêm phần phải dốc sức vào công việc, rất khó gặp được người hợp ý. Năm nay, Dịch Mã nhập mệnh, nên đi công tác xa, phát triển cơ hội bên ngoài, chủ động theo đuổi. Khuyên bạn nên thành tâm thành ý, đặc biệt là giữ mình tỉnh táo, tránh vì áp lực công việc mà ảnh hưởng đến đoạn tình cảm; nếu không thì rất dễ vì áp lực bên ngoài và biến cố mà xảy ra những điều ngoài ý muốn. Vì nhân duyên đào hoa không như ý người mong muốn nên quanh năm dùng nên <strong>“Hồ lô Hòa Hợp”</strong> để tăng vượng đào hoa.</p>',
			section6_kethon: '<p>Năm nay, lưu niên xung khắc Thái tuế, lại gặp hung tinh Lan Can cản trở, khiến bạn phiền muộn trong chuyện tình cảm, khiến những cảm xúc tiêu cực tăng lên; bạn cảm thấy tình cảm của đối phương không còn như trước. Các cặp vợ chồng thời gian này rất dễ xảy ra tranh cãi, thậm chí trở thành đỉnh điểm, cao trào. Đừng quyết định bất cứ điều gì trong thời gian này, tránh hối tiếc về sau. Bạn nên chủ động hòa giải, quan tâm đối phương hơn, không được để áp lực trong công việc chi phối bạn quá nhiều. Năm nay mâu thuẫn trong gia đình và bất lợi trong hôn nhân rất dễ phát sinh. Khuyên bạn nên thỉnh vật phẩm phong thủy<strong> “Hồ Lô Hòa Hợp”</strong> để hóa giải.</p>',
			section6_hocsinh: '<p>Do ảnh hưởng từ Thái tuế xung khắc mà một mặt trong học hành tự cảm thấy có áp lực rất lớn, thành tích khó ổn định. Một mặt khác, có bất kỳ vướng mắc nào phải lập tức giải quyết ngay. Nếu không thể chuyên tâm vào việc học, khuyên người lớn nên thay con trẻ thỉnh <strong>“Tháp Văn Xương Đá Đen”</strong> đặt vào vị trí phong thủy tốt ở trong nhà, giúp con trẻ bình tâm tĩnh khí, chuyên tâm học hành, cải thiện thành tích.</p>',
		},
		{
			tuoi: 'ngo',
			intro: 'Thái tuế kim niên vi quan tinh, Chăm chỉ lao động ắt bội thu<br />Thân thể lộ khắc phòng tật ách, Công bại thuỳ thành dịch lạc không',
			section1_title: 'Sự nghiệp vững vàng, vận thế tốt, áp lực lớn',
			section1_itext: '<p style="text-align: justify;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Năm 2019 của những người tuổi Ngọ, Thái tuế Kỷ Hợi lại là chính cung, tại chính cung lưu niên, cơ hội luôn có rất nhiều. Có thể phát huy triệt để tài năng của bản thân, cũng dễ dàng có được sự công nhận từ cấp trên và đồng nghiệp, có hy vọng được tấn thăng, sự nghiệp vững vàng, vận thế như diều gặp gió. Mặt khác, chính cung của nữ mệnh cũng đại biểu cho sao của người chồng, đối với nữ mệnh mà nói, tình cảm may mắn, những người còn độc thân thì hãy nắm bắt tốt cơ hội.</p><p style="text-align: justify;">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Năm nay, tuy rằng Thái tuế khắc chế, nhưng được khí Nhâm (Thủy) với Đinh (Hỏa) hợp sinh Mộc, có thể biến khắc thành hợp, cho nên nói đây là một năm đầy áp lực và cũng là cơ hội, chỉ cần không sợ vất vả sẽ có được sự đột phá, được quý nhân đánh giá cao. Tuổi Ngọ nên giữ tốt quan hệ với mọi người, mở rộng các mối quan hệ của mình, tìm kiếm người giúp đỡ, làm nền tảng cho sự phát triển trong tương lai. Nhìn tổng thể, mặc dù công việc khó khăn, nhưng vận khí tốt.</p><p style="text-align: justify;">Điểm bất lợi là, tuổi Ngọ năm nay xung với thái tuế, phương diện sức khỏe dễ có chuyển hướng xấu, nên tránh lao lực quá độ. Cần đặc biệt chú ý đến bệnh tim mạch và tai biến, cũng cần tránh các bệnh truyền nhiễm. Những người còn đi học, năm nay sẽ có sự lười biếng, phân tán tinh thần, khó mà tập trung vào việc học, phụ huynh cần dành nhiều thời gian nhắc nhở, kèm cặp và theo sát con cái mình nhiều hơn.</p>',
			section2_title1: 'Tử Vi, Long Đức',
			section2_block1_text: '<p style="text-align: justify;">Tuổi Ngọ năm nay được xem như một năm tương đối thuận lợi. Sao Long Đức cùng với Sao Tử Vi cùng nhập cung, cả hai đều là những sao cao quý, tượng trưng cho quý nhân phù trợ, nỗ lực sẽ có thành quả. Công việc sẽ càng ngày càng tốt, có cơ hội thăng tiến phát triển.</p>',
			section2_title2: 'Thiên Ách, Bạo Bại',
			section2_block2_text: '<p style="text-align: justify;">Sao Thiên Ách chiếu làm người tuổi Ngọ năm nay dễ mắc các bệnh như truyền nhiễm, lưu ý một số bệnh cũ năm nay cũng dễ bị tái phát, các mối quan hệ cũng sẽ bị ảnh hưởng. Sức phá của sao Bạo bại thể hiện trong sự nghiệp của người tuổi Ngọ, cản trợ vận thế, quan hệ giữa người với người. Ngoài ra, nên có dự trù cho mọi chuyện, sẽ dễ gặp phải những thăng trầm bất ngờ. Khi Bạo bại xuất hiện, nhắc nhở người tuổi Ngọ trong công việc nên giữ thái độ khiêm tốn, đừng vì thắng lợi ngay trước mắt mà thả lỏng dễ mất cảnh giác, nếu không dễ sai sót dẫn đến sai lầm, được trước mất sau.</p>',
			section3_taivan: '<p style="text-align: justify;">Chính cung lưu niên, vừa có Tử Vi vừa có Long Đức, hai cát tinh cùng chiếu, sự nghiệp vững chắc, được quý nhân phù trợ. Tuổi Ngọ năm nay Tài vận tốt, là một năm làm nhiều được nhiều. Nhưng sức phá hoại của Hung tinh Bạo Bại đồng thời không thể xem thường, năm nay dễ gặp nhiều thăng trầm, miếng ăn đến miệng lại rơi. Những người thích đầu tư và kinh doanh cá nhân, năm nay chớ tính toán được thua, dục tốc bất đạt, nếu không sẽ bị lừa dối. Kiến nghị những người tuổi Ngọ nên dùng vật phẩm <strong>“Thiên Nguyệt Tứ Phúc”, </strong>vật khai vận này có thể giúp người tuổi Ngọ bảo vệ tài lộc, ổn định từ trường, thu nhập tài vận.</p>',
			section3_sunghiep: '<p style="text-align: justify;">Năm nay, chỉ cần phát huy tốt tài hoa và tiềm năng của bản thân, tích cực cố gắng, công việc sẽ đạt được hiệu suất rất tốt, vừa có quý nhân khen ngợi, vừa có thể nhận được sự giúp đỡ của quý nhân mà mở rộng các mối quan hệ, có lợi rất lớn trong việc phát triển sự nghiệp. Biến số đến từ áp lực phía trên là rất lớn, đặc biệt là phương diện công việc, mối quan hệ với lãnh đạo cấp trên còn có thể phát sinh những chuyện tai bay vạ gió. Cấp dưới làm sai cũng sẽ bị liên đới trách nhiệm, nhất là người có địa vị nhất định thì khả năng phát sinh chuyện này càng cao. Sĩ tử trong năm nay do ảnh hưởng thiên can Kỷ (Thổ), sẽ xuất hiện thói quen lười biếng, không thể chuyên tâm học hành chăm chỉ. Kính mong các vị phụ huynh có thể theo dõi sát sao, nên cầu vật phẩm may mắn <strong>“Tháp Văn Xương đá đen”</strong> đặt trên bàn của con cái để hóa giải.</p>',
			section3_taivan_rate: 3,
			section3_sunghiep_rate: 3,
			section4_suckhoe: '<p style="text-align: justify;">Sức khỏe và sự an toàn là mối quan tâm chính của tuổi Ngọ trong năm nay. Năm nay, lưu niên địa chi làm chính cung, sẽ có hiện tượng khắc thân, thêm sao xấu Thiên Ách sẽ mang đến những năng lượng tiêu cực. Đặc biệt, cần chú ý đến sức khỏe, kịp thời đề phòng, điều trị các bệnh truyền nhiễm, sớm trị bệnh còn tiềm ẩn trong người lâu năm và nên kiểm tra sức khoẻ định kỳ. Ngoài ra, cần chú ý đồ đạc cá nhân khi ra ngoài, vì dễ bị mất mát tài sản. Năm 2019, tuổi Ngọ nếu được <strong>“Thiên Nguyệt Tứ Phúc”</strong> phù trợ, nhất định hóa dữ thành lành, khó khăn mau chóng được giải quyết.</p>',
			section4_suckhoe_rate: 1,
			section4_tinhyeu: '<p style="text-align: justify;">Năm nay là năm vượng về vận đào hoa, người độc thân nhân duyên, vận thế rất tốt, nhất là nữ mệnh tuổi Ngọ; khả năng tìm được người khác giới phù hợp trong công việc cao. Nếu không có người thích hợp xuất hiện, chớ ngại từ tình bạn đi lên, tìm hiểu lẫn nhau. Nếu thấy duyên đến, nên tích cực đón nhận tình cảm của người ta. Người đã kết hôn bị ảnh hưởng rất nhiều, tâm trí dao động, dễ bị cám dỗ bởi người khác giới, ảnh hưởng đến quan hệ tình cảm với một nửa còn lại. Hy vọng tình yêu có thể khai hoa kết trái, hôn nhân ngọt ngào nên có <strong>“Hồ Lô Hòa Hợp”</strong> để thổi bay đào hoa ảo, ổn định tình duyên.</p>',
			section4_tinhyeu_rate: 2,
			section5_txt1: '<p style="text-align: justify;">Năm nay tuổi Ngọ tài vận tốt, nhưng do ảnh hưởng của hai sao xấu là Thiên Ách, Bạo Bại, nên cẩn thận phương diện sức khỏe, các khoản chi tiêu bất ngờ tăng cao. Tuổi Ngọ tuy cố gắng kiếm tiền bù lại nhưng khó mà giữ, càng nên cảnh giác bị rơi vào những cục diện tiến thoái lưỡng nan. Năm nay, có thể phải đối mặt với nguy cơ phá sản. Người kinh doanh cần có một khoản tiền mặt dự trữ, tránh không thể xoay vòng vốn, gây ra một loạt phản ứng dây chuyền. Nếu người nào mấy năm nay tài vận không có khởi sắc, có thể lấy ý kiến của các chuyên gia thông qua bát tự để có được hướng dẫn, chiến lược tài chính chính xác nhất.</p>',
			section5_txt2: '<p style="text-align: justify;">Chịu Thái Tuế khắc chế, vừa ảnh hưởng sao xấu Bạo Bại, năm 2019, tuổi Ngọ ngược lại càng có&nbsp;được quý nhân phù trợ, cũng khó tránh khỏi có kẻ tiểu nhân âm thầm ám hại. Với các đồng nghiệp, có quan hệ cạnh tranh, sau lưng có thể nói điều tiếng không tốt, thậm chí âm mưu ám hại. Cho nên, cần suy nghĩ đến phương pháp làm, các biện pháp giải quyết, giữ tốt quan hệ giữa lãnh đạo và đồng nghiệp. Khi xử lý các tài liệu quan trọng, nên để ý cẩn thận tránh sai sót. Kiến nghị tuổi Ngọ nên thỉnh <strong>“Tam Hợp Quý Thần”</strong> để hóa giải các vấn đề tiểu nhân, tranh chấp tài sản.</p>',
			section5_txt3: '<p style="text-align: justify;">Tuổi Ngọ&nbsp;nữ mệnh năm nay đón chính cung lưu niên, vận đào hoa rất vượng, những người độc thân cần nắm chắc cơ hội. Nhưng trước khi bắt đầu một mối quan hệ, cần tìm hiểu kỹ lưỡng và có sự tin tưởng sẽ có cơ hội thoát cảnh độc thân; nếu quá vội vàng sẽ gây ra hiểu nhầm, dục tốc bất đạt. Còn những người đã tìm được một nửa của mình, vì ảnh hưởng sao xấu Bạo Bại mà mối quan hệ sẽ có nhiều biến động bất ổn. Đặc biệt, các mối quan hệ vừa mới bắt đầu, đối phương bất chợt trong lòng có biến động, cơ hội tiến thêm một bước sẽ dễ bị phá hoại. Tuổi Ngọ nữ mệnh muốn hóa giải sử dụng <strong>“Hồ lô Hòa Hợp” </strong>để bảo vệ tình cảm, hôn nhân.</p>',
			section5_txt4: '<p style="text-align: justify;">Là năm chính cung, đối với tuổi Ngọ&nbsp;mà nói làm việc chóng thành, nhưng có quý nhân chỉ đường, cũng được xem như được nở mày nở mặt. Cơ hội có thể nói là “Có một không hai”, nên càng vào lúc này càng cần chú ý đến lời nói, cử chỉ, thái độ không nên kiêu ngạo, ngang ngạnh, không coi ai ra gì, tránh dẫn đến sự ghét bỏ của người khác và tiểu nhân câu kết hãm hại. Đồng thời, đầu óc đừng quá nóng nảy, đạt được mục đích không từ thủ đoạn, nếu không, dễ dính đến kiện tụng, tranh chấp. Nếu trong cuộc sống thường xuyên bị tiểu nhân liên lụy, tốt nhất trong năm nên có <strong>“Long Ấn Vượng Quan” </strong>để khai vượng vận.</p>',
			section6_congchuc: '<p>Bất kể người mới nhậm chức hay người đã có kinh nghệm lâu năm, chính cung lưu niên của năm 2019 sẽ có có hội tốt để phát triển, bạn nên lựa chọn và nắm bắt để có thể phát huy được năng lực và thế mạnh của bản thân. Tuổi Ngọ nên rèn luyện thân thể, trau dồi kĩ năng của bản thân, học hỏi kinh nghiệm từ người đi trước.</p>',
			section6_doanhnhan: '<p>Năm nay, những người tuổi Ngọ làm kinh doanh vận thế tăng cao, sự nghiệp sẽ có bước đột phá và phát triển mới. Bạn nên nắm bắt và khám phá những cơ hội kinh doanh mới, có thể mạnh dạn đầu tư sẽ ra những thu nhập nhất định, và biết cách quản lý tài chính tốt. Lúc cần thiết có thể tham khảo ý kiến của người xung quanh, thiết lập mối quan hệ tốt với mọi người, hạn chế tối đa tiểu nhân hãm hại. Nên dùng vật phẩm phong thuỷ <strong>“Tam Hợp Quý Thần”</strong> để vượng tài khai vận.</p>',
			section6_donthan: '<p>Gặp chính cung lưu niên, nên những người nữ&nbsp;độc thân trong lúc trời sang thu sẽ có vận đào hoa rất vượng, dễ dàng thông qua tiếp xúc từ các mối quan hệ làm ăn, những thay đổi trong môi trường làm việc, kết giao được với người khác giới ưu tú. Nếu đã gặp được người phù hợp, nên chủ động giữ liên lạc và tìm hiểu, có nhiều cơ hội trở thành tình yêu. Nữ giới tuổi Ngọ trong tình yêu càng muốn mình cùng với nửa kia cùng nhau cố gắng nhiều hơn. Nam giới tuổi Ngọ vận đào hoa lại tương đối yên ắng, nếu muốn nhanh chóng tiến tới, có thể tìm đến các chuyên gia về số mệnh, thông qua phong thủy tăng cường thêm vận đào hoa trong bát tự của mình.</p>',
			section6_kethon: '<p>Tuổi Ngọ&nbsp;đã kết hôn năm nay tài vận và sự nghiệp cực vượng, nhưng sẽ tốn rất nhiều sức lực vào công việc. Những lúc mệt mỏi, làm thêm giờ, tăng ca, khó tránh khỏi lạnh nhạt với gia đình, coi thường sức khỏe. Vì vậy, nên điều chỉnh hợp lý giữa công việc, gia đình và sức khỏe. Chú&nbsp;ý hâm nóng tình cảm gia đình, chăm sóc sức khỏe đúng giờ. Những người đã kết hôn năm nay đối với nửa kia của mình càng cần bao dung nhiều hơn, tránh bị cám dỗ làm tổn hại đến tình cảm gia đình.</p>',
			section6_hocsinh: '<p>Vì lưu niên Thái Tuế Hợi (Thủy) làm Ngọ (Hỏa) chính cung, nên những người đi học trong năm 2019 học hành tiến tới, hiểu ra được nhiều chuyện, có thể chủ&nbsp;động nghiên cứu nghiêm túc. Hơn nữa, năm nay có cơ hội gặp được người thầy giỏi, được thầy chỉ điểm, giúp đỡ rất nhiều, thành tích học tập rất cao. Phụ huynh muốn con mình sự nghiệp thành công, học hành tiến bộ có thể thỉnh dùng “Tháp Văn Xương Đá Đen” để trong bàn học, có thể nâng cao tinh thần học tập.</p>',
		},
		{
			tuoi: 'mui',
			intro: 'Thái Tuế âm thầm lai tương trợ, tư tưởng hoạt bát tìa hoa hiện,<br />Ngũ hoàng tỷ kiếp thường vi hoạ, hoá đi hung thần cát vận lai.',
			section1_title: 'Gặp năm Tam Hợp Quý nhân, sự nghiệp thăng tiến, tài vận hanh thông.',
			section1_itext: '<p style="text-align: justify;">&nbsp;&nbsp;Năm Kỷ Hợi 2019, những người tuổi Mùi được “Tam hợp quý nhân” giúp đỡ, nên năm nay vận thế được nâng lên. Có thể nói là, cầu vồng khởi sắc, mọi con đường đều được thuận lợi. Tóm lại, nguời tuổi Mùi trong năm nay có vận thế tốt thứ 2 trong 12 con giáp. Năm nay, sự nghiệp có những ảnh hưởng tốt và thuận lợi. Nếu như muốn thăng chức hoặc thay đổi công việc thì đây là một cơ hội tốt không nên để lỡ, tích cực cố gắng, tận tâm trong công việc thì sẽ có kết quả đáng bất ngờ. Thái Tuế của năm 2019 là Tài Tinh, do vậy tuổi Mùi năm nay cần phát huy năng lực sáng tạo, cố gắng làm việc sẽ thu hoạch được kết quả đáng kể. Người kinh doanh chịu ảnh hưởng của Thái Tuế năm thiên can là: “Tỷ Kiếp”, không nên đầu tư quá lớn, cần phải cân nhắc kỹ lưỡng khi ký kết, xử lý hợp đồng hay đầu tư hạng mục. Nếu không cẩn thận sẽ ở vào thế bị động, dẫn đến tiền tài bị mất đi. Chuyện tình cảm tương hợp với Thái Tuế, hỉ sự liên miên; đặc biệt, với nam độc thân mà nói, thì năm nay là năm tương đối vượng để kết luơng duyên nên cần nắm bắt cơ hội này. Người đã kết hôn sẽ gặp nhiều phiền toái trong năm nay, vợ chồng bất hoà, mâu thuẫn ý kiến hoặc có sự xuất hiện của kẻ thứ ba dễ gây nên hiểu lầm, tan vỡ gia đình. Còn về người đang yêu thì cần phải đề phòng lời ăn tiếng nói với đối phương, tránh những mâu thuẫn không cần thiết.</p><p>Có điều cần lưu ý là: Hung tinh của năm nay tương đối nhiều. Vì thế, mà người tuổi Mùi chịu ảnh hưởng không ít dẫn đến vận số bị sa sút đi nhiều. Đặc biệt, là hung tinh “Ngũ Hoàng”, “Bạch Hổ” gây bất lợi cho sức khoẻ, hay ốm vặt lâu khỏi. Nếu như, trong năm nay muốn có bước tiến trong sự nghiệp và tình cảm thì khuyên bạn nên dùng vật phẩm phong thuỷ <strong>“Thiên Nguyệt Tứ Phúc”</strong> để hoá giải.</p>',
			section2_title1: 'Không có',
			section2_block1_text: '<p>Trong năm nay, những người tuổi Mùi không có cát tinh chiếu mệnh, nhưng may mắn gặp được Tam hợp quý nhân, cho nên có thể giúp họ có được vận số ổn định; đồng thời, có được quý nhân phù trợ, lúc khó khăn có người giúp đỡ kịp thời. Thái Tuế của năm là chính tài nên chỉ cần chăm chỉ làm việc thì sẽ là một năm có thu hoạch đáng kể. Đối với nam tuổi Mùi đang yêu năm nay sẽ có Hỷ sự.</p>',
			section2_title2: 'Ngũ hoàng, Phi liêm, Bạch hổ',
			section2_block2_text: '<p>“Ngũ hoàng” là một hung tinh, không “nương tay” cho bất kì tuổi nào, nên không thể coi thường. Đây là sao chính về tai hoạ, bất lợi với gia đình và người có tuổi bị chiếu, dễ mắc bệnh và gặp phải thị phi. Là một hung tinh lớn nhất trong cửu tinh, cho nên trong năm nay cần phải hết sức chú ý về mọi phương diện để tránh tai hoạ ập đến. Một hung tinh khác là “Bạch Hổ”, mà sao này chính là Kim thuộc hình thương, dễ xảy ra chuyện mất máu. Cho nên, cần hết sức cẩn thận khi tham gia giao thông và sử dụng những đồ dùng sắc nhọn. “Phi Liêm” là sao về tai hoạ, thị phi, nên cần cẩn trọng trong lời nói, tránh xung đột mâu thuẫn ý kiến với người khác.&nbsp;</p>',
			section3_taivan: '<p style="text-align: justify;">Là một năm chính tài, làm nhiều hưởng nhiều, nên cần nỗ lực làm công việc được giao của mình theo đúng chức trách. Do vận thế về biện tài ảm đạm, lại bị ảnh hưởng bởi sự “Tỷ kiếp” của Thái tuế thiên can, do đó không thích hợp tiến hành đầu tư quá mức. Tóm lại, về phương diện tài vận nên giữ không nên động. Năm nay, kinh doanh nên chú trọng danh tiếng của bản thân, ổn định các mối quan hệ, ở phương diện này cần hao tốn tâm tư để vững bước lên cao. Kiến nghị dùng <strong>“Thiên Nguyệt Tứ Phúc” </strong>để vật này có thể giúp cho người tuổi Mùi bảo vệ tài lộc, ổn định từ trường và tụ tài.</p>',
			section3_sunghiep: '<p style="text-align: justify;">Tuổi này với Thái Tuế của năm nay là Tam hợp quý nhân. Người tuổi Mùi năm nay, sự nghiệp đi đâu, làm gì cũng có người trợ giúp; nên hãy nắm chắc năm hiếm có này, buông bỏ toàn bộ lo lắng và hoài nghi, triệt để phát huy năng lực làm việc, chấp nhận mọi thách thức, ắt sẽ được phù trợ, công thành danh toại. Đồng thời, nhờ có quý nhân mà có thể mở rộng quan hệ xã giao, đối với tương lai sự nghiệp sẽ có sự trợ giúp rất lớn. Năm nay, cũng là một năm để tiếp thu tri thức mới, đừng ngại cơ hội này để học tập bồi dưỡng, vì tương lai hãy tích luỹ kiến thức cho bản thân và tăng cường khả năng cạnh tranh của chính mình. Việc học tập của người tuổi Mùi khá thuận, có trí nhớ và tiếp thu điều mới và thích nghi khá nhanh, do đó hãy nắm chắc vận thế này để nâng cao thứ bậc, trình độ của mình.</p>',
			section3_taivan_rate: 3,
			section3_sunghiep_rate: 3,
			section4_suckhoe: '<p style="text-align: justify;">Do ảnh hưởng của các hung tinh “Ngũ Hoàng”, “Bạch Hổ”, “ Phi Liêm, nên giữ gìn sức khỏe là việc ưu tiên hàng đầu của người tuổi Mùi; đặc biệt chú ý đến phổi, đường ruột, dạ dày, phụ khoa. Ngoài ra, cũng phải chú ý an toàn khi tham gia giao thông, cẩn thận những vật sắc nhọn gây mất máu, cố gắng tránh xa toàn bộ những hoạt động nguy hiểm. Năm 2019, nếu người tuổi Mùi được che chở bởi <strong>“Tam Hợp Quý Thần”</strong> sẽ gặp cát tránh họa, cơ thể và tinh thần được an khang.</p>',
			section4_suckhoe_rate: 1,
			section4_tinhyeu: '<p style="text-align: justify;">Về phương diện tình cảm, do gặp được năm tương hợp, nên chuyện tốt cứ tự nhiên tới. Nhất là đối với nam độc thân tuổi Mùi mà nói, dễ dàng gặp được chính duyên. Vì vậy, những nam độc thân tuổi Mùi hãy tích cực tham gia những buổi xã giao hoặc nhờ cậy người lớn tuổi giới thiệu để gia tăng thêm cơ hội hẹn hò yêu đương. Đối với những người đang ở giai đoạn yêu đương, sẽ có cơ hội tiến thêm bước nữa với nửa kia trong năm nay. Đặc biệt, những người đã lập gia đình phải tránh những tranh chấp bằng lời nói, đề phòng sự xuất hiện của kẻ thứ 3.</p>',
			section4_tinhyeu_rate: 2,
			section5_txt1: '<p style="text-align: justify;">Năm nay, Tài tinh hợp với tuổi. Người tuổi Mùi nóng lòng cầu tài, bừng bừng khí thế trong sự nghiệp, không cẩn thận dễ bị người khác lợi dụng. Mà lại bị ảnh hưởng của Thái Tuế, năm nay tuổi Mùi có khoản đầu tư lớn cùng với đối tác thì 10 phần đều không được như ý. Phải biết “giục tốc bất đạt” cộng thêm không có sao tốt, bị “Ngũ Hoàng”, “Bạch Hổ” bao vây; bởi vậy, không nên nóng vội, càng không thể liều lĩnh. Hy vọng tài vận của bạn vững vàng, hãy sử dụng vật phẩm <strong>“Tam Hợp Quý Thần”</strong> để hóa giải hung vận, đồng thời tăng thêm tài vận.</p>',
			section5_txt2: '<p style="text-align: justify;">Năm nay, hội tụ cả 3 Hung tinh “Ngũ Hoàng”, “Bạch Hổ”, “Phi Liêm”&nbsp; làm ảnh hưởng nghiêm trọng tới công việc và cuộc sống của người tuổi Mùi. Tiểu nhân là không thể tránh khỏi, có điều “chó cắn áo rách”, nghĩa là: tỷ kiếp tọa tài có tiểu nhân đồng hành, giống như sự ganh đua về tiền bạc của đồng nghiệp. Người tuổi Mùi dù trong công việc hay cuộc sống đều rất áp lực; thường xuyên xảy ra những tranh chấp nhỏ, các mối quan hệ luôn gặp phải tình trạng căng thẳng, tình bạn rạn nứt, hợp tác trong công việc kết thúc. Đề nghị đeo vật phẩm <strong>“Thiên Nguyệt Tứ Phúc”</strong> giúp cho bạn tránh xa tiểu nhân, lại gần quý nhân, tăng thêm vận thế quý nhân phù trợ.</p>',
			section5_txt3: '<p style="text-align: justify;">Lưu niên tỷ kiếp tọa tài; nên năm nay, nam độc thân tuổi Mùi tuy vận đào hoa tốt nhưng đường tình duyên cũng không thuận buồm xuôi gió. Trong tình cảm, có xuất hiện sự cạnh tranh của kẻ thứ ba, muốn ôm được giai nhân không chỉ bỏ ra chân thành mà còn phải dùng đến “bí kíp” và tận dụng thời cơ. Cũng có thể thỉnh giáo chuyên gia phong thủy để có những tổng kết về tính cách, đặc điểm của người bạn theo đuổi dựa trên bát tự của đối phương. Đối với người tuổi Mùi đang trong quan hệ yêu đương, hãy bắt lấy cơ hội tốt này, tìm một chuyên gia phong thủy chọn ngày lành tháng tốt để rước nàng về dinh. Ngoài ra, với người đã kết hôn rất dễ đụng phải vận đào hoa ảo, ảnh hưởng tới sự yên ấm gia đình. Tốt nhất hãy treo <strong>“Hồ lô Hòa Hợp”</strong> để hóa giải “Đào hoa ngoài luồng”, tránh những sai lầm không thể quay đầu.</p>',
			section5_txt4: '<p style="text-align: justify;">Năm nay “ Ngũ Hoàng”, “Bạch Hổ”, “ Phi Liêm” đại diện cho khẩu thiệt thị phi. Do đó, người tuổi Mùi phải cẩn thận lời ăn tiếng nói của mình. Công việc, cầu tài, giao tiếp đều phải phải tuân thủ pháp luật, chớ tham mà đi đường tắt, ký hợp đồng hay các văn bản liên quan. Tốt nhất nên kiểm tra kĩ càng; nếu không, bất cẩn có khả năng dính tới kiện tụng, thân bại danh liệt chỉ trong chốc lát. Nên thỉnh <strong>“Long Ấn Vượng Quan”</strong> đặt trong nhà theo hướng dẫn để hóa giải quan tụng.</p>',
			section6_congchuc: '<p>Năm nay là năm hợp Thái tuế, nên người tuổi Mùi có vận thế tiếp tục được tăng lên. Thái tuế năm nay là Tài tinh của tuổi Mùi, là một năm làm việc có của ăn của để; nhưng cũng không được chủ quan và cẩn thận với sự ảnh hưởng của các hung tinh Ngũ Hoàng, Bạch Hổ, Phi Liêm. Nhất là trong những thời khắc quan trọng như thăng chức, ký kết hợp đồng… dễ “xôi hỏng bỏng không”, tuột xích liên tục. Nên dùng vật phẩm phong thuỷ <strong>“Thiên Nguyệt Tứ Phúc” </strong>để mong thoát khỏi những vấn đề không đáng có xảy ra, phát huy tốt khả năng và sở trường của bản thân.</p>',
			section6_doanhnhan: '<p>Năm 2019, vì hợp với Thái Tuế, nên những người tuổi Mùi làm kinh doanh năm nay được quý nhân nhiệt tình giúp đỡ, chỉ điểm mang đến cơ hội phát triển, đồng thời làm tăng tài vận bản thân.</p><p>Nhưng do các hung tinh “Ngũ Hoàng”, “Bach Hổ”, Phi Liêm” quấy phá, mà &nbsp;những người tuổi Mùi nên xử lý thỏa đáng các mối quan hệ, để tránh vì lợi ích khiến nảy sinh tranh chấp dẫn đến mối quan hệ bất hòa, sinh lòng hiềm khích, hợp tác thất bại, làm ăn thua lỗ. Đồng thời, tăng cường bảo mật buôn bán, đề phòng người đồng hành hoặc đối thủ cạnh tranh âm thầm làm chuyện xấu.</p>',
			section6_donthan: '<p>Năm 2019, mặc dù không phải là năm vượng về đào hoa của người tuổi Mùi. Nhưng với Nam độc thân tuổi này lại gặp được tài tinh lai hợp, vận số đào hoa tương đối tốt. Lưu niên tranh tài, nam độc thân tuổi Mùi trong quá trình theo đuổi người khác phái sẽ gặp phải đối thủ cạnh tranh đáng gờm. Mà hung tinh “Ngũ Hoàng” xuất hiện khiến cho tình cảm của người độc thân này thay đổi bất ngờ. Hy vọng các bạn thoát khỏi cảnh cô đơn, hoặc có tình yêu ngọt ngào với bạn bè của những người tuổi Mùi, nên sử dụng <strong>“Hồ Lô Hòa Hợp”</strong> để tăng cường vận hoa đào.</p>',
			section6_kethon: '<p>Là năm Hợp Thái tuế, nên năm nay người tuổi Mùi cùng bạn đời về cơ bản là ổn định, gia đình tốt đẹp, các thành viên trong gia đình thấu hiểu và giúp đỡ nhau. Tuy nhiên, năm nay gặp “Ngũ Hoàng”, “Bach Hổ”, “Phi Liêm” chiếu mệnh, nên dù ít dù nhiều, trong gia đình vẫn có sự bất an, đề phòng mất trộm, các việc hiếu tang, thị phi, tai họa bất ngờ có thể xảy ra. Hy vọng người tuổi Mùi nên sử dụng <strong>“Thiên Nguyệt Tứ Phúc”,</strong> tăng cường vận thế, nên dùng thêm <strong>“Hồ Lô Gỗ Đào”</strong> để trấn trạch, hóa sát, bảo vệ người nhà bình an.</p>',
			section6_hocsinh: '<p>Là năm Tài tinh, hung tinh chế ngự, nên năm nay những người tuổi Mùi đang còn đi học, tâm trí chỉ muốn đi chơi, rất dễ bị cám đỗ từ bên ngoài, khó lòng tập trung vào học tập. Trong quá trình học tập, có nhiều phiền nhiễu, khó tập trung, tư duy logic hỗn loạn, thành tích học tập khó cải thiện. Vì vậy, các bậc phụ huynh nên dùng <strong>“Tháp Văn Xương Đá Đen”</strong> đặt ở vị trí Văn Xương trong nhà để con cái giữ được tâm thái bình tĩnh, thúc đẩy thành tích học tập cho con cái mình.</p>',
		},
		{
			tuoi: 'than',
			intro: 'Thái Tuế Tương Hại Vận Trắc Trở, Vô Chương Hiểm Hại Thị Phi Đa.<br />Thiên Ấn Tỷ Hộ Cát Tường Vượng, Liễu Ám Hoa Minh Kiến Thanh Không',
			section1_title: 'Hại thái tuế, vận tình cảm không lý tưởng, vất vả mới kiếm được tiền.',
			section1_itext: '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Năm Ất Hợi 2019, do Thân - Hợi tương hại, nên gặp Hại Thái Tuế, thuộc vào một trong những loại vận xung con giáp. Có thể nói, sẽ là một năm đối đầu với nhiều sóng gió, luôn gặp bất an. Đường tài vận, năm nay là năm chính trực Hại Thái Tuế lại không có cát tinh chiếu mệnh, tài vận không lý tưởng. Nếu muốn có thành quả, nhất định phải bỏ nhiều công sức vất vả, khổ cực. Đường tình duyên, không có một cát tinh nào tương trợ, phần đa không có duyên với vận đào hoa. Những người độc thân thì cơ duyên tìm thấy bạn đời rất ít, nếu như gặp được người tâm đầu ý hợp thì phải bỏ ra nhiều công sức theo đuổi mới có thể thành công. Nếu là người đã có gia đình hay người đang yêu, nên rất thận trọng trong việc giữ gìn tình cảm, tránh rạn nứt, cũng không nên dễ dàng tin người ngoài, tránh tình trạng vì người ngoài làm ảnh hưởng đến tình cảm mà xa cách dần. Về phương diện sức khỏe, do sao Thái tuế ảnh hưởng, nên đặc biệt chú ý những bệnh về thận và&nbsp;đường tiết niệu. May mắn, năm nay thiên can Kỷ (Thổ), chính Ấn cho những người tuổi Thân, có lợi cho việc thi cử hoặc khảo sát, vận học hành khá tốt, nên những bạn làm công việc công vụ và dạy học, đường công danh năm nay thăng tiến khá rõ ràng.</p><p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nói chung, bên cạnh những con giáp Tương hại Thái Tuế, luôn luôn có tiểu nhân và những điều thị phi, mà năm nay được 3 Cát tinh chiếu, nên người tuổi Thân sẽ được quý nhân giúp đỡ, gặp vận may. Nên chỉ cần biết nắm bắt thời cơ, dám nghĩ dám làm, thì sẽ có nhiều thăng tiến trong con đường sự nghiệp. Người đang mưu cầu thăng quan năm nay rất có hy vọng.</p>',
			section2_title1: 'Thiên đức, Phú đức, Phú tinh',
			section2_block1_text: '<p>Năm nay, tuổi Thân được cát tinh “Thiên Đức” bảo hộ. “Thiên đức” chính là cát tinh của quý nhân nhân từ và hòa nhã. Là Thần có sức mạnh hóa Hung thành Cát; đặc biệt là hóa giải những tai nạn. Người xưa có câu: “Trên Trời có đức hiếu sinh” năm gặp sao Thiên Đức này, báo hiệu cho sắp có quý nhân tương trợ, phúc trong tâm linh, việc gì cũng sẽ hóa giải được. Mà “Thiên Đức” và “Phúc Tinh” đều đại diện cho may mắn, bình an, vạn sự thuận lợi, dù cho có gặp ảnh hưởng bất lợi như thế nào thì cũng vì sự cố gắng nỗ lực của mình cũng sẽ hóa hung thành Cát, thoát khỏi cục diện khó khăn.</p>',
			section2_title2: 'Quyển thiệt, Phị ma',
			section2_block2_text: '<p>“Quyển thiệt” đại diện cho họa từ miệng mà ra, thị phi không dứt. Năm nay, Tuổi Thân cần phải cẩn thận trong lời nói, hành động. “Phị ma” biểu thị cho đề phòng bệnh tật và chăm sóc sức khỏe cho những người thân trong gia đình; đặc biệt là những người lớn tuổi, tránh những việc đau lòng quá mức, ảnh hưởng đến thói quen của bản thân.</p>',
			section3_taivan: '<p style="text-align: justify;">Năm nay, Tuổi Thân gặp Thái tuế, mà thiên can Kỷ - Thổ là Ấn tinh, cũng có nghĩa là, luôn có người lớn tuổi giúp đỡ trong mọi việc là phần lớn. Nên bạn có thể tìm cách nhờ người lớn tuổi, chính là Quý nhân ắt sẽ được trợ giúp, có lợi cho cầu Tài. Nhưng Chính Ấn cũng đại diện cho sự ỷ lại, có biểu hiện đang làm thì dừng lại, thiếu tính cầu tài, không muốn hành động. Nên năm nay, tuổi Thân muốn vượng về đường Tài vận, phải mạnh dạn đột phá, cố gắng nỗ lực hết mình. Hại thái tuế cũng đồng nghĩa với việc dễ phạm phải tiểu nhân hãm hại, lừa gạt; đừng dễ dàng tin tưởng vào những lời hứa của người khác; đặc biệt về tiền tài. Những người đầu tư, có thể đầu tư vào những hạng mục có tính lâu dài để nhận được sự ổn định về mặt lợi ích, nên tính toán, suy nghĩ thật kỹ đối với những hạng mục đầu tư nào.</p>',
			section3_sunghiep: '<p style="text-align: justify;">Năm nay, tuổi Thân gặp Chính Ấn do Thái tuế Kỷ (Thổ), nên rất có lợi cho việc thi cử hay khảo sát, những người làm công vụ hoặc giáo viên có vận tài lộc tăng lên rõ rệt. Năm nay, nên tận dụng cơ hội này không ngừng học tập, trau dồi kiến thức, kỹ năng để chuẩn bị cho sự phát triển trong tương lai. Nhưng năm nay phạm “Hại Thái Tuế”, về mặt sự nghiệp gặp nhiều bất lợi, cần phải cố gắng nỗ lực, giữ gìn mối quan hệ với đồng nghiệp tránh tiểu nhân hãm hại, phải nhận thức rõ năng lực của mình trong việc định hướng kế hoạch cho năm nay, không được nóng vội. Trong nhà, văn phòng làm việc nên bày một số các vật cát tường như <strong>“Tháp Văn Xương Đá Đen”</strong> lấy thế tương sinh để tăng sức mạnh cho vận sự nghiệp, hóa giải Hại Thái tuế. Trong phương diện học tập gặp được Chính Ấn, chính là về văn chương, học hành, những người còn đang đi học sẽ nhận được nhiều vận may, năng lực tìm hiểu nghiên cứu học hành cao.</p>',
			section3_taivan_rate: 3,
			section3_sunghiep_rate: 3,
			section4_suckhoe: '<p style="text-align: justify;">Năm nay, do bị Thái Tuế lộ thân, năng lượng của Thủy quá mạnh, cần đặc biệt chú ý đến nhũng bệnh về thận và tiết niệu. Ngoài ra, chú ý đến sự tồn tại của Hung tinh “Phi Ma”, nên chú ý đến sức khỏe của những người lớn tuổi trong gia đình. Nói chung, năm nay người tuổi Thân dễ phạm tiểu nhân và thị phi rất nhiều, tâm trạng dễ mệt mỏi. Thậm chí, còn dẫn đến bi quan tiêu cực, sẽ ảnh hưởng trực tiếp đến công việc và cuộc sống, chú ý tự điều chỉnh bản thân mình. Những lúc tâm trạng không được ổn định nên nhờ đến sự giúp đỡ của trưởng bối hoặc bạn bè, cũng có thể đi chơi cùng bạn bè cho thoải mái đầu óc; cũng có thể làm cho các mối quan hệ thêm phần gắn bó, lại có thể gần gũi với thiên nhiên, hít thở không khí trong lành, giảm bớt những năng lượng không tốt.</p>',
			section4_suckhoe_rate: 1,
			section4_tinhyeu: '<p style="text-align: justify;">Năm nay, người tuổi Thân không có Cát tinh nào về Đào hoa tương trợ, nên đa phần không có duyên với vận Đào hoa. Những người độc thân, cơ hội nhân duyên khá mù mịt, lại phạm phải Hại Thái Tuế, tìm kiếm mãi mới được người tâm đầu ý hợp, nhưng xung quanh người ấy cũng không ít vệ tinh, làm cho tuổi Thân gặp khá nhiều rắc rối. Những người đã có vợ hoặc người yêu, nếu không biết cách chú ý dành nhiều thời gian cho đối phương, sẽ tạo nên cảm giác bất mãn. Hi vọng tình cảm của mình đâm hoa kết trái, gia đình hạnh phúc thuận hòa, những người tuổi Thân nên đeo <strong>“Thiên nguyệt tứ phúc”</strong> để tăng vận đào hoa, ổn định tình duyên.</p>',
			section4_tinhyeu_rate: 2,
			section5_txt1: '<p style="text-align: justify;">Là năm gặp Hại Thái Tuế, nên thường gặp phải mất tài phá tài. Năm nay, phạm tiểu nhân cũng rất nghiêm trọng, có ảnh hưởng rất lớn đến các mối quan hệ. Nên đề phòng những người khách quen tự nhiên rời bỏ bạn, hoặc bị tiểu nhân hãm hại khiến khuynh gia bại sản. Trên con đường cầu tài, nên lấy ổn định làm cốt lõi, chú ý tiết kiệm những hạng mục đầu tư lớn như bất động sản hoặc kết hợp lập nghiệp nên tính toán cẩn thận. Nên dùng vật phẩm cát tường <strong>“Tam hợp quý thần”</strong> để tăng vận Tài Lộc, đồng thời cũng hóa giải nguy cơ phá tài.</p>',
			section5_txt2: '<p style="text-align: justify;">Năm nay, tuổi Thân gặp số lượng về tiểu nhân nhiều hơn trước. Do “Quyển Thiệt” nhập mệnh, nên người tuổi Thân chủ yếu dễ dính dáng đến khẩu thiệt thị phi, tiểu nhân hãm hại làm tổn hại đến thanh danh của bạn. Năm nay, hỏa khí tương đối lớn, tâm tình dễ bốc hỏa, rất dễ đắc tội với lãnh đạo, bề trên, đồng nghiệp và bạn bè. Nên nhớ trong bất kỳ việc gì cũng không nên tự đắc, làm việc theo cảm tính, những việc nào nên làm thì bình tĩnh mà đối phó, không được nóng vội, lấy hòa khí làm đầu, khiêm tốn khi nhận được lời khen chê. Nên đeo vật phẩm cát tường <strong>“Thiên nguyệt tứ phúc”</strong> làm thần bảo hộ cho mình, cũng góp phần hóa giải nạn tiểu nhân.</p>',
			section5_txt3: '<p style="text-align: justify;">Người tuổi Thân năm nay, về các phương diện đều có áp lực rất lớp, mất nhiều công sức tâm trí cho việc phát triển sự nghiệp, không chú trọng đến việc tình cảm. Chuyện tình cảm của những người đơn thân vẫn giậm chân tại chỗ, ý niệm cá nhân không mãnh liệt. Đối với những người đã có gia đình, người yêu thì công việc có bận đến đâu, tâm lý có bất ổn đến thế nào, cũng nên dành thời gian quan tâm đến một nửa của mình, nên đi chơi đó đây để làm tình cảm của 2 người thêm bền chặt. Nên treo vật phẩm cát tường <strong>“Hồ lô hòa hợp” </strong>để tăng vận đào hoa hoặc giảm nguy cơ gia đình tan vỡ, làm cho bạn có được tình cảm ổn định.</p>',
			section5_txt4: '<p style="text-align: justify;">Chính ở vấn đề “Hại Thái Tuế” nên năm nay vận thế sẽ gặp nhiều bất lợi, phạm tiểu nhân khá nghiêm trọng, dẫn đến không ít chuyện phiền phức. Vì vậy, khi làm việc nên nhường nhịn, điềm đạm giải quyết ổn thỏa các mối quan hệ xã hội, tỉnh táo tránh mắc phải bẫy của tiểu nhân. Tất cả mọi việc tuyệt đối không được tự đắc, nhất định phải thực hiện theo đúng kế hoạch cầu tài của mình; đề phòng trường hợp xảy ra những điều đáng tiếc. Tốt nhất, nên chuẩn bị cho mình vật phẩm cát tường<strong> “Thiên nguyệt tứ phúc” </strong>để giảm áp lực cho bản thân.</p>',
			section6_congchuc: '<p>Những người tuổi Thân năm nay Thái Tuế thiên can Đinh Hỏa làm Chính Ấn, có lợi cho việc phát triển công việc; nên những người làm công vụ dạy học năm nay có đường công danh khá rộng mở. Được các Quý nhân tinh như: “Thiên Đức”, “Phú Đức” và “Phúc tinh” tương trợ, nên năm nay người tuổi Thân quan trường có nhiều may mắn, tư duy minh bạch, chỉ cần nắm bắt đúng thời cơ, tích cực lập kế hoạch hành động và nỗ lực hết mình, thì sẽ được lãnh đạo và quý nhân ghi nhận. Nhất định sẽ có sự phát triển lớn, có khả năng thăng chức, nên chuẩn bị cho mình vật phẩm cát tường <strong>“Tam hợp quý thần”</strong> để tăng tài vận trong sự nghiệp, tăng vận quý nhân.</p>',
			section6_doanhnhan: '<p>Năm 2019 – Kỷ Hợi, những người tuổi Thân phạm “Hại thái tuế”, những người kinh doanh nên chú trọng cách quản lý kinh doanh của mình, nghiên cứu phương pháp tiết kiệm và nhanh chóng thực hiện tất cả vấn đề dựa trên nguyên lý ổn định an toàn. Không nên đầu tư mạo hiểm, cho dù đó có là những cơ hội tốt thì cũng nên suy nghĩ thật kỹ. Nên chuẩn bị cho mình vật phẩm cát tường <strong>“Tam hợp quý thần”</strong> để hóa giải vận xấu từ hại Thái tuế, sinh vượng Tài vận.</p>',
			section6_donthan: '<p>Năm nay, nam nữ tuổi Thân đang độc thân không vượng vận đào hoa, lại vướng phải “Quyển Thiệt”, “Phị Ma” chiếu mệnh, nên gặp phải nhiều chuyện không vui, ảnh hưởng đến tâm lý, đến vận đào hoa của chính mình. Nên tích cực tham gia các hoạt động thể dục thể thao, hoạt động tập thể, điều tiết tâm lý của mình; đồng thời, nên chuẩn bị cho mình vật phẩm cát tường <strong>“Hồ lô hòa Hợp” </strong>để thúc vận đào hoa.</p>',
			section6_kethon: '<p>Do phạm Hại Thái Tuế, sự nghiệp, hôn nhân, gia đình… của những người đã có gia đình sẽ gặp nhiều phiền muộn, áp lực lớn, tâm tư buồn khổ. Đồng thời, cũng hay vướng phải những chuyện thị phi cãi vã hay chiến tranh lạnh, những việc nhỏ trong gia đình sẽ dễ phát cáu, càng những lúc như vậy nên điều chình tâm thái, quan tâm nhiều đến vợ chồng, thì mới có thể làm cho gia đình ôn hòa, hạnh phúc. Cả gia đình đồng lòng mới có thể vượt qua được năm hại Thái tuế. Chuẩn bị cho mình vật phẩm cát tường <strong>“Hồ lô hòa hợp”</strong> giúp gia đình hòa thuận, tôn trọng lẫn nhau là rất cần thiết.</p>',
			section6_hocsinh: '<p>Là năm Chính Ấn, sự nghiệp học hành của người đang đi học rất rộng mở, trong các cuộc thi rất dễ dành được thành tích cao, có sự phù trợ của các Cát tinh “Thiên Đức” “Phúc Đức” “Phúc Tinh”, nên sẽ có nhiều quý nhân giúp cho sự nghiệp học hành của bạn; nên nắm bắt cơ hội tốt này, chuẩn bị cho mình thật tốt. Nên thỉnh vật phẩm bình an <strong>“Tháp Văn Xương đá đen”</strong> để củng cố những kiến thức, thành quả mình đã đạt được.</p>',
		},
		{
			tuoi: 'dau',
			intro: 'Thái Tuế Tương Hại Là Thị Phi, Thân Tâm Ấn Ngưỡng Vận Sa Đà<br />Nhân Hữu Ấn Tinh Bách Việt Tợ, Hắc Ám Tòng Trung Tầm Quang Minh',
			section1_title: 'Hại Thái Tuế, Vận thế không thuận, sức khoẻ bất lợi',
			section1_itext: '<p>Người tuổi Dậu vào năm 2019 – Kỷ Hợi, do sự tương sinh với Thái Tuế, nên về nhân duyên vô cùng tốt. Năm nay, người tuổi Dậu có cơ hội mở rộng được các mối quan hệ mới.</p><p>Về sự nghiệp, công việc, thiên can năm nay xuất hiện Biện Ấn tinh, khiến cho tư tưởng của người tuổi Dậu lại càng nhạy bén, được quý nhân phù trợ, làm nhiều hưởng nhiều. Có khả năng nhạy bén để xử lý tốt khó khăn, cũng như khả năng đánh giá và làm việc độc lập, mang lại tính sáng tạo có tần suất cao cho công việc. Làm việc gì, cũng đều nên có tính chuẩn bị kín kẽ, đầy đủ, tính toán trước sau. Năm nay, vận trình công việc khá, khiến cho hình tượng trong con mắt của đồng nghiệp, lãnh đạo hay bạn bè được nâng cao. Cho dù là công lao, danh tiếng hay chức vụ, công danh đều đạt được cơ hội thăng tiến. Nhưng tuyệt đối không được chủ quan mà tự cao tự đại, sẽ khiến sụp đổ hình tượng trong mắt người khác, dễ bị người khác không ưa.</p><p>Về mặt tình cảm năm nay, địa chi là Dậu cũng là Thực thương của năm, mà thực thương lại sinh tài. Đối với những người độc thân thì đây là một năm tương đối khá về mặt tình cảm. Năm nay, dễ kiếm được người bạn đời như ý, mở ra được mối quan hệ tìm hiểu yêu đương. Với nam đã kết hôn cần phải giữ giới hạn khi giao lưu với người khác phái, tránh bị cảm nắng mà ảnh hưởng tới hạnh phúc gia đình. Nhưng đối với nữ độc thân thì lại có trở ngại lớn, tình cảm không như ý, thân tâm không vui dẫn đến tinh thần bị giảm sút.</p><p>Mặt Tài vận do sao Nhất Bạch nhập cung mệnh, sao này chủ về Tài tinh, cũng là Quan tinh, nên tuổi Dậu năm nay sẽ được danh tiếng cũng được địa vị, văn võ song toàn, tài hỷ song vượng. Bản thân tuổi Dậu thông minh trí tuệ cũng lại hào hoa, cho nên có sự tương trợ của Nhất bạch, nên về mặt tài vận năm nay có được thu hoạch đáng kể.</p><p>Mặt sức khoẻ, cần phải chú ý cẩn thận giữ gìn sức khoẻ, dễ bị mệt mỏi. Kim suy Thuỷ vượng, cần đề phòng bệnh về đường hô hấp và truyền nhiễm.</p><p>Về mặt Hung vận, người tuổi Dậu gặp nhiều Hung tinh như: Thiên Cẩu, Điếu Khách, Tai Sát. Chịu sự ảnh hưởng của Thiên Cẩu nên năm nay dễ gặp các việc ngoài ý muốn, kinh sợ. Do sao này cũng luôn chiêu những điều không may mắn, nên cần đặc biệt cẩn thận chú ý, tránh xảy ra tai hoạ và phải chịu liên luỵ, cần phải xác định trước tinh thần và đề phòng tai họa ập tới. Điếu khách thì đại diện cho bệnh tật và tang khốc, trong nhà chịu nhiều mất mát, cần chú ý hết sức đến vấn đề sức khoẻ của người lớn tuổi; Tai sát là sao chủ về thị phi, nên xuất hiện nguy hiểm và việc không may.</p><p>Tóm lại, người tuổi Dậu trong năm nay có thể nói là một năm trong Cát có Hung, cả năm cần cố gắng hết mình trong công việc, mới có được vị thế, tiền tài. Ngoài ra, cần duy trì chú ý sức khoẻ của bản thân và người nhà không được sơ xuất.</p>',
			section2_title1: 'Nhất Bạch',
			section2_block1_text: '<p>Nhất Bạch tham lang tinh nhập bản cung, mà đây là sao chủ về Tài – Quan, ý nói cả về địa vị danh tiếng, văn võ song toàn, tiếng tăm hiển hách, danh trấn bốn phương; đặc biệt là nam mệnh thông minh nhanh nhạy. Mà Nhất Bạch Tài tinh này kết hợp với Lục bạch - Bát Bạch còn gọi là <strong>TAM ĐẠI TÀI TINH</strong>, cho nên năm nay người tuổi Dậu có sao này chiếu về mặt công danh sự nghiệp, tiền tài là một năm có nhiều cơ hội phát triển.</p>',
			section2_title2: 'Thiên Cẩu, Điếu Khách, Tai Sát',
			section2_block2_text: '<p>Thiển Cẩu hung tinh nhập mệnh cũng ý nói rằng khi đi ra bên ngoài dễ xảy ra tai nạn ngoài ý muốn hoặc bị kinh sợ vì tai nạn. Ngoài ra, cũng phải lưu ý khi ở trong nhà hay đi du lịch nên cần cẩn thận đề phòng tai nạn về Hoả. Điếu Khách ý là bệnh tật tang khóc, gia trạch bất an, tốt nhất nên lưu ý đưa người lớn tuổi trong nhà đi kiểm tra sức khoẻ định kỳ, quan tâm nhiều hơn đến sức khoẻ và an toàn của họ nhiều hơn. Còn Tai Sát thì chủ yếu là việc dữ nguy hiểm dễ xảy ra, nên người tuổi Dậu năm nay cần hết sức lưu ý cẩn thận đề phòng.</p>',
			section3_taivan: '<p style="text-align: justify;">Năm nay là một năm của chính tài biện, tài vận khá tốt, là một năm có cơ hội phát triển. Do thái tuế tạng can là “Thương quan tinh”, “Thương quan sinh Tài” giúp hỗ trợ tài vận, thúc vận. Vì vậy, mà chỉ cần phát huy tối đa tài năng, sở trường vốn có, con đường tài phúc nhất định sẽ thuận lợi đi đến thành công. Nhất Bạch Tinh nhập cung mệnh, con đường cầu tài được quý nhân giúp đỡ, danh lợi thành toàn.</p>',
			section3_sunghiep: '<p style="text-align: justify;">Vì năm nay tương sinh với Thái tuế, nên người tuổi Dậu có nhiều cơ hội phát triển sự nghiệp, hành sự thuận lợi, mở rộng thêm nhiều mối quan hệ va giữ được mối quan hệ hoà nhã với lãnh đạo, đồng nghiệp, cấp dưới. Chỉ cần thể hiện tốt năng lực của bản thân, tích cực phấn đấu, phát huy sở trường trí thông minh, sự nghiệp sẽ lên một tầng cao mới. Lại thêm lưu niên thiên can có Biện ấn tinh xuất hiện; quyền lực hưng vượng, các ngành nghề liên quan đến nghệ thuật, kỹ thuật, ngành dịch vụ, luật sư, bác sỹ… và khả năng lĩnh ngộ kỹ năng phi phàm; làm ít lợi nhiều. Khi công việc gặp trắc trở đều có khả năng xử lý việc một cách nhạy bén. Năm nay là thời cơ tốt cho việc cầu công danh, nhưng khuyên bạn không nên quá kiêu ngạo tự mãn, tránh bị người đời coi ghét. Sự nghiệp học hành có phần khai thông, phát sinh sự hứng thú với một ngành khác với ngành đang theo học, nói không chừng bạn sẽ theo đuổi, phát triển ngành này trong tương lai.</p>',
			section3_taivan_rate: 3,
			section3_sunghiep_rate: 3,
			section4_suckhoe: '<p style="text-align: justify;">Sức khỏe năm nay của người tuổi Dậu do ảnh hưởng của thái tuế, có đôi phần đáng lo ngại. Kim suy Thủy vượng, cần đề phòng bệnh về đường hô hấp và bệnh truyền nhiễm. Mặt khác, do ảnh hưởng của hung tinh Thiên Cẩu nhập mệnh mà người tuổi Dậu trong năm Hợi dễ gặp tai họa, tâm trạng cũng vì thế mà chịu ảnh hưởng không nhỏ. Đi công tác xa hay du lịch cần đề phòng tai nạn bất ngờ; giữ khoảng cách với thiết bị máy móc, nên hạn chế việc tham gia các trò chơi mạo hiểm liên quan tới độ cao. Khuyên bạn nên thỉnh vật phẩm phong thủy <strong>“Thiên Nguyệt Tứ Phúc”</strong> giúp tránh xa bệnh tật, bình an như ý.</p>',
			section4_suckhoe_rate: 1,
			section4_tinhyeu: '<p style="text-align: justify;">Về nhân duyên, đối với người nam nữ còn độc thân, thực thương sinh tài, giúp sớm thoát cảnh đơn độc không phải chuyện khó khăn gì; có nhiều cơ hội lựa chọn đối tượng tốt, phù hợp để phát triển chuyện tình cảm. Đối với nam giới đã lập gia đình, vận đào hoa vượng, nên dễ nảy sinh tình cảm với người khác, cần chú ý giữ khoảng cách với họ. Đối với nữ giới năm nay, chuyện tình cảm không được như ý muốn, khiến bạn có xu hướng trầm cảm; khuyên bạn nên đặt tâm tư và dành thời gian vào công việc.</p>',
			section4_tinhyeu_rate: 2,
			section5_txt1: '<p style="text-align: justify;">Người tuổi Dậu năm nay do chịu ảnh hưởng từ Thiên Cẩu Tinh, cần hết sức cẩn thận bị thua lỗ, tổn hao thoát tài. Hung tinh “Điếu Khách” “Tai sát” nhập mệnh, ảnh hưởng nghiêm trọng đến sức khỏe người thân trong nhà, dễ xảy ra cơ sự chẳng lành, phá tài thất tài. Vì vậy, mà bạn cần thật tỉnh táo trong làm ăn kinh doanh, tiêu pha tránh tổn thất tiền tài; và đặc biệt theo dõi sức khỏe, an toàn của các thành viên trong gia đình. Thành tâm khuyên bạn nên thỉnh vật phẩm phong thủy <strong>“Thiên Nguyệt Tứ Phúc”,</strong> tránh hung vượng cát.</p>',
			section5_txt2: '<p style="text-align: justify;">Người tuổi Dậu năm nay Thái tuế tương sinh, giữ được mối quan hệ đối nhân xử thế tốt; cho nên, không xuất hiện nhiều tiểu nhân quấy nhiễu, phiền não trong năm này. Nhưng do sự tồn tại của hung tinh “Thiên Cẩu” “Điếu Khách” “Tai Sát” mà khiến bạn đôi khi không kiểm soát được cảm xúc, vô tình buông lời lẽ xúc phạm đối phương; khiến họ vốn là quý nhân mà hóa tiểu nhân. Khuyên bạn nên dành thời gian cùng gia đình tổ chức các hoạt động ngoài trời, phần vì thư giãn đầu óc, phần nào nâng cao chất lượng sức khỏe. Đồng thời, nên mang theo vật phẩm phong thủy <strong>“Thiên Nguyệt Tứ Phúc”</strong> cát tường, vượng vận cát.</p>',
			section5_txt3: '<p style="text-align: justify;">Vận đào hoa năm nay lưu niên là Thực Thương, nên người tuổi Dậu cần tỉnh táo chống lại cám dỗ từ bên ngoài, giữ vẹn danh tiếng của bản thân và gia đình. Nam giới độc thân năm nay theo đuổi đối phương, cần tinh ý, tránh bị mù quáng bởi hình thức bên ngoài mà để bị lừa tiền, lừa tình cảm. Nữ giới độc thân có nhiều cơ hội gặp được nhân duyên tốt trong năm, mở rộng mối quan hệ, quen biết nhiều bạn bè mới mà từ đó tìm được người tương đầu ý hợp; nữ giới tuổi Dậu năm này có cơ hội được người lớn tuổi mai mối mà lên tình duyên đẹp. Nếu có thể kết hợp với vật phẩm phong thủy <strong>“Thiên Nguyệt Tứ Phúc”,</strong> khai thông đào hoa vận, chuyện tình cảm của bạn sẽ càng thêm suôn sẻ.</p>',
			section5_txt4: '<p style="text-align: justify;">Thiên Can năm nay xuất hiện Ấn Tinh, người tuổi Dậu vận thế tốt, có gặp trở ngại cũng có quý nhân giúp đỡ mà thuận lợi hóa giải. Vì vậy, bạn nên học hỏi, giao lưu nhiều với người lớn tuổi và những người có kinh nghiệm. Họ sẽ tận tình chỉ dạy, hỗ trợ bạn từ nhiều phương diện khác nhau. Khuyên bạn nên sử dụng bên mình vật phẩm phong thủy <strong>Long Ấn Vượng Quan</strong> để thuận lợi cho việc lĩnh ngộ.</p>',
			section6_congchuc: '<p>Thái tuế thiên can là Kỷ (Thổ) với tuổi Dậu là Ấn tinh, có thể sinh trợ cho tuổi Dậu. Vốn là người giỏi giang, lại gặp thời vận thế tốt, được quý nhân giúp đỡ, nên sự nghiệp phát triển mau chóng, có nhiều cơ hội tốt để tạo nên những thành tựu lớn lao. Lúc này, nếu có thể mang theo bên mình vật phẩm phong thủy <strong>“Thiên Nguyệt Tứ Phúc”, </strong>là một vật cát tường, tránh hung vận vượng quý nhân vận, thì sự nghiệp sẽ càng thuận lợi, tăng vận quý nhân phù trợ.</p>',
			section6_doanhnhan: '<p>Lưu niên thiên can là biện Ấn, nên trong năm nay người kinh doanh có sự nghiệp phát triển thuận lợi, vận thế tốt. Lại có Nhất Bạch là Tài - Quan Tinh tương trợ, con đường danh lợi càng thêm thuận, tiền bạc dư giả. Nhưng nên ghi nhớ, làm ăn kinh doanh không được nóng vội. Năm nay, cần có sự suy tính rõ ràng, việc kinh doanh ổn định, kiếm được lợi nhuận không nhỏ, nhưng không được ỷ thế mà tham lam, nên hài lòng với những thứ bạn đang có. Khuyên bạn nên thỉnh vật phẩm phong thủy <strong>“Tam Hợp Quý Thần”, </strong>thúc vượng tài.</p>',
			section6_donthan: '<p>Năm nay, do ảnh hưởng của hung tinh “Thiên Cẩu”, “Điếu Khách”, “Tai Sát” mà người tuổi Dậu dễ cảm thấy cô độc, trống vắng, tâm trạng giảm sút. Nhưng may thay thực thương sinh Tài, Tài vận ở đây ý chỉ ở người bạn đời. Vì vậy, năm nay nam giới tuổi Dậu có nhiều sự lựa chọn, chỉ cần có thành ý theo đuổi sẽ có cơ hội thành công rất lớn; thoát cảnh độc thân, tận hưởng tình yêu ngọt ngào. Nữ giới độc thân cần tìm đến thầy phong thủy để cải vận đào hoa, mới có hy vọng vượng vận, sau cùng nên thỉnh vật phẩm phong thủy <strong>“Thiên Nguyệt Tứ Phúc”, </strong>để giữ ổn định vận thế.</p>',
			section6_kethon: '<p>Năm nay, do hung tinh cản trở mà sức khỏe, gia trạch đều gặp bất lợi. Cần để mắt tới những điều bất thường trong gia đình, nếu cảm thấy có lòng hoài nghi cần gặp chuyên gia hóa giải. Nếu vẫn không thể yên lòng thì hãy thỉnh <strong>“Hồ Lô Hòa Hợp”, </strong>vật cát tường giúp vượng vận thế gia trạch.&nbsp;</p>',
			section6_hocsinh: '<p>Năm nay là Biện Ấn sinh thân, nên người tuổi Dậu đang đi học vốn hoạt bát, thông minh lại được quý nhân chỉ điểm. Nhất Bạch cát tinh nhập cung mệnh, là một năm rất thuận lợi cho sự nghiệp học hành. Học tập chăm chỉ, hơn nữa còn gặp được thầy cô nhiệt tình chỉ bảo, vận lên như cá gặp nước. Bạn nên nghiêm túc học hỏi từ thầy cô, người lớn tuổi; mạnh dạn thể hiện bản thân, sẽ thu hút được quý nhân giúp đỡ. Năm nay, thích hợp mang bên mình vật phẩm phong thủy <strong>“Thiên Nguyệt Tứ Phúc”, </strong>tăng sự tập trung, sáng tạo trong học tập.</p>',
		},
		{
			tuoi: 'tuat',
			intro: 'Cửu Tử Phi Tinh Lân Mệnh Cung, Nhân Duyên Tụ Khí Đào Hoa Vượng<br />Khả Thán Kiếp Tài Lai Tranh Phúc, Đa Thị Đa Phi Nan Toàn Sinh',
			section1_title: 'Quý nhân vận tốt, sự nghiệp thăng hoa, giữ gìn sức khoẻ',
			section1_itext: '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Năm 2019 - Kỷ Hợi là năm Cửu tử cát tinh chiếu cung mệnh của người tuổi Tuất, vận về quý nhân rất tốt, được mọi người giúp đỡ nhiều. Đồng thời, nếu như phát huy tốt hết khả năng của cá nhân, sẽ thu hút được sự chú ý của lãnh đạo về sự cố gắng và năng lực của bản thân, có thêm hy vọng phát triển. Năm Hợi là Thuỷ cũng chính là chủ về Tài, sự nghiệp phát triển tốt, có thêm nhiều cơ hội cầu tài; đặc biệt, là đối với những người buôn bán kinh doanh mà nói, có thể coi là Tứ hải kiến lợi, cơ hội thấy rõ là bỏ ra một vốn bốn lời. Sao Cửu tử cũng là đại diện cho Vượng về đào hoa, người độc thân có thêm cơ hội gặp được một nửa như ý. Trong đó, Thiên hỷ tinh lại chủ về hôn sự, rất thích hợp cho những đôi bạn trẻ đang yêu có ý định xây dựng tổ ấm cho riêng mình, bước thêm một bước trong tình yêu ra hoa kết trái. Về tổng thể mà nói, người tuổi Tuất là một trong 12 con giáp có số mệnh may mắn trong năm nay.</p><p>Nhân tố bất lợi ở trong năm nay là ở Thái tuế Kỷ (Thổ) với Tuất hình thành nên vận thế Kiếp Tài. Cho nên, có thể coi số tiền kiếm được cũng dễ bị phá tài, bại tài, kiếm thì nhiều nhưng cất đi thì chẳng bao nhiêu, cần lưu ý yếu tố bạn hàng, đối tác làm ăn trong quá trình làm ăn chung hoặc bắt tay cùng làm việc. Ngoài ra, còn có yếu tố trong năm bị Bệnh phù sát của năm chiếu vào tuổi, dễ bị bệnh tật hoặc tai nạn ngoài ý muốn. Người tuổi Tuất năm nay, tuy có Quý nhân phù trợ nhưng lại không quá nhiều, làm việc gì cũng dễ bị gặp trở ngại, cần bình tĩnh xử lý và cân nhắc khi làm việc; đồng thời, cũng nên tăng cường bảo vệ sức khoẻ để tránh tật ách làm ảnh hưởng sinh hoạt và công việc chung.</p>',
			section2_title1: 'Bách Việt, Thiên Hỷ',
			section2_block1_text: '<p>Tuổi Tuất năm nay, Tài tinh tọa trấn, thuận lợi về đường Tài vận, có nhiều cơ hội để phát triển. Cộng thêm có Cát tinh Bách Việt chiếu, nên vượng cho con đường sự nghiệp; địa vị, công việc, sự nghiệp có bước đột phá và phát triển mới tốt hơn. Lại thêm có Thiên hỷ chủ về Hỷ sự, Tài lộc chiếu, nên hôn nhân cập bến, có thêm thiên thần nhỏ. Trong năm nay người tuổi Tuất cần chủ động củng cố tốt các mối quan hệ, tích cực phát huy khả năng của bản thân, chắc chắn sẽ có cơ hội phát triển tốt, không nên “há miệng chờ sung”.</p>',
			section2_title2: 'Bệnh Phù, Quả Tú',
			section2_block2_text: '<p>Năm nay tuổi Tuất bị 2 hung tinh như: Bệnh phù, Quả tú chiếu mệnh nên cần chú ý hết sức giữ gìn sức khoẻ, tránh việc thân tâm không điều tiết tốt, sẽ dễ mắc bệnh, ảnh hưởng sức khoẻ; nghiêm trọng hơn, sẽ phát sinh nhiều chuyện ngoài ý muốn, tai nạn mất máu... Hai sao này ở trong Bát vận chính là sao chủ về Thoái vận, sức ảnh hưởng tương đối lớn. Tóm lại, năm nay bạn không nên chủ quan về sức khoẻ và đi lại, đặc biệt cẩn thận trong vấn đề Phá tài.</p>',
			section3_taivan: '<p style="text-align: justify;">Thái tuế năm nay có sự tương trợ của cát tinh Cửu tinh, cộng thêm quý nhân phù trợ tốt cho tài vận, cho nên thu nhập cũng có thể coi là tạm được. Nhưng điểm bất lợi ở chỗ Thái tuế của năm là Kỷ (Thổ) là Kiếp Tài tinh, việc tốt dễ bị phân tranh, hoặc tiền đến rồi lại đi ngay khó giữ được. Năm nay, bạn dễ gặp phải nhiều vấn đề không như ý, phải dốc hết hầu bao ra; ngoài ra, không có lợi cho Biện tài (thu nhập ngoài luồng), không nên đầu tư số tiền lớn vào cổ phiếu, trái phiếu… Kiến nghị nên dùng vật phẩm phong thuỷ <strong>“Thiên nguyệt Tứ phúc”</strong> để giúp bạn khai vận giữ gìn tiền của, ổn định năng lượng tụ tài.</p>',
			section3_sunghiep: '<p style="text-align: justify;">&nbsp;Năm nay, sẽ là một năm thăng tiến của tuổi Tuất về vấn đề này. Vì có Bách Việt chiếu mệnh, hành sự thuận lợi, tư tưởng sáng suốt, nên chỉ cần biết nắm bắt thật chắc cơ hội, tích cực cố gắng hết mình trong khả năng có thể, thì chắc chắn sẽ nhận được ghi nhận của lãnh đạo và mọi người. Đồng thời, cố gắng hết mình, ắt sẽ có thu hoạch không nhỏ, cơ hội thăng tiến thể hiện rõ, sự nghiệp thuận lợi. Nhưng có điều, không nên chủ quan, bởi có yếu tố bất lợi can của năm nay là Kỷ (Thổ), chính là Kiếp tài tinh nên dễ gặp trục trặc nhỏ về tài vận, có sự tranh đấu không ngừng, khó tránh vất vả. Làm việc gì cũng nên có phương án phòng trừ rủi ro, đề phòng tiểu nhân phá đám. Về học hành, thì đừng để yếu tố ngoại lai không liên quan đến học hành làm ảnh hưởng đến tâm trí học hành của bạn. Khuyên bạn nên dùng vật phẩm Phong thủy <strong>“Tháp Văn Xương Đá Đen”</strong>, chuyển vận để tăng cường năng lượng văn xương, tốt cho học tập, tăng cường quý nhân phù trợ.</p>',
			section3_taivan_rate: 3,
			section3_sunghiep_rate: 3,
			section4_suckhoe: '<p style="text-align: justify;">Về sức khỏe, năm nay có Cửu tinh và Thiên Hỷ chiếu mệnh, nên người tuổi Tuất có trạng thái tinh thần rất tốt, luôn thân thiện cởi mở với mọi người. Nhưng có Bệnh phù tinh chiếu nên sức khoẻ ảnh hưởng, dễ có tật ách, cần chú ý cẩn thận về bệnh Tỳ vị, thận; đồng thời, đối với các cụ tuổi này cần chú ý đến vấn đề về thần kinh suy nhược và những bệnh liên quan đến huyết áp. Cần giữ gìn sức khoẻ, không suy nghĩ nhiều, nếu thấy mệt mỏi cần đi khám bác sỹ. Ngoài ra, trong năm nay nếu đi đâu xa cần hết sức tránh và chú ý an toàn. Nếu dùng vật phẩm <strong>“Thiên nguyệt Tứ phúc”</strong> có thể giúp trợ thân tâm nhẹ nhàng, viễn hành an.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>',
			section4_suckhoe_rate: 1,
			section4_tinhyeu: '<p style="text-align: justify;">Năm nay, là năm tuổi Tuất có vận đào hoa tương đối như ý, người độc thân có cơ hội tìm được nhân duyên của mình, nên tham gia nhiều các hoạt động tập thể, tăng cường giao lưu bạn bè. Người đang yêu hay cũng như người đã kết hôn, cần phải cẩn thận có sự xuất hiện của kẻ thứ 3 dễ gây hiểu lầm cho đôi bên mà tình cảm bị rạn nứt. Nên dùng <strong><em>“Tam hợp quý thần”</em></strong> đề làm giảm vận đào hoa ảo này, ổn định tình cảm của đôi bên.</p>',
			section4_tinhyeu_rate: 2,
			section5_txt1: '<p style="text-align: justify;">Tuổi Tuất năm nay, có Cửu tử tương trợ cộng thêm Thái tuế năm là Tài tinh có lợi về Tài vận, được quý nhân phù trợ. Nhưng lại gặp phải thái tuế năm là Kỷ (Thổ) kiếp tài, nên vất vả kiếm tiền mà lại không giữ được. Nên hết sức tránh hợp tác đầu tư vốn, hợp tác kinh doanh, đứng ra bảo lãnh cho người khác, tránh cảnh “giơ đầu chịu hàng”. Nên tranh thủ giành tiền bạc đi làm từ thiện cho người nghèo, quyên góp tiền bạc giúp đỡ kẻ khó khăn, để chủ động đối phó với ảnh hưởng của kiếp tài, làm giảm đi việc mất tiền không đâu vào đâu. Nếu những ai mà rơi vào cảnh trong những năm trở lại đây không khấm khá lắm về tiền của, có thể nhờ các thầy phong thuỷ tư vấn lấy bát tự, tiến hành một số thủ pháp để cầu tài.</p>',
			section5_txt2: '<p style="text-align: justify;">Trong cuộc sống, luôn không tránh khỏi những kẻ “thừa nước đục thả câu”, “ngư ông đắc lợi”, nói xấu sau lưng kẻ khác… nếu như bạn cảm thấy trong cuộc sống, tình cảm hay công việc có bóng dáng xuất hiện của những người này, thì nên biết rằng đó chính là ảnh hưởng của Tiểu nhân đang nhắm vào số mệnh của bạn. Muốn tránh và hoá giải điều này, trước hết, bạn cần phải xem xét lại hàng ngày mình đã làm điều gì, hay nói gì không phải với người khác hay chưa? Nếu có thì nên thay đổi, nếu chưa thì tránh. Đặc biệt, là trong quá trình giao tiếp với mọi người tránh xung đột, mâu thuẫn, tranh cãi không cần thiết. Vì nó sẽ là nguyên nhân làm tổn hại đến tiền tài và sự nghiệp của bạn. Kiến nghị dùng vật phẩm <strong>“Thiên nguyệt Tứ phúc”</strong> để có thể trợ giúp thông qua năng lượng của nó, hoá giải vấn đề tiểu nhân tránh xung đột với người xung quanh.</p>',
			section5_txt3: '<p style="text-align: justify;">Năm nay, gặp Thiên hỷ chiếu mệnh là năm tốt với những bạn độc thân, với những người đang yêu, hay đã kết hôn cũng có những ảnh hưởng không nhỏ, dễ thu hút được tình cảm của người khác giới. Nhưng với một năm về mặt tình cảm có sự xen kẽ của những sự cạnh tranh mà nói, thì đây không phải là một việc quá tốt. Có những chuyện là đào hoa ngoài luồng xuất hiện sẽ ảnh hưởng đến tình cảm vốn có của đôi bên, thậm chí còn ảnh hưởng, tổn thương đến tinh thần, danh dự của người trong cuộc; tài sản bị phân tán. Do vậy, cần tranh thủ ý kiến của chuyên gia về phong thuỷ để tư vấn phương án giải quyết nhằm làm giảm nguy cơ không hay diễn ra ngoài ý muốn.</p>',
			section5_txt4: '<p style="text-align: justify;">Năm nay, nếu làm việc gì mà không thích, hay không như ý thì cũng nên giữ một tinh thần lạc quan. Cần nếm trải những thử thách mới, dám đương đầu với những khó khăn trong công việc, điều này sẽ có lợi cho sự nghiệp sau này. Nhưng cần chú ý đến lời nói cử chỉ, hành vi của mình, không được ngông cuồng tự đại, mục hạ vô nhân, tránh sự suy nghĩ sai lệch của người khác về mình và tạo cơ hội cho tiểu nhân vào cuộc. Đồng thời, không được có tham vọng quá đà, không từ thủ đoạn nào mà hành sự, bất chấp luật pháp, đạo đức. Nếu không rất dễ lao vào vòng lao lý, kiện tụng, thị phi. Nếu trong cuộc sống hay bị tiểu nhân quấy nhiễu, liên luỵ, tốt nhất nên dùng vật phẩm <strong>“Tam hợp quý thần”.</strong></p>',
			section6_congchuc: '<p>Năm nay, được Thái tuế Cửu Tử chiếu nên là năm có tia hy vọng tốt và cơ hội thuận lợi để phát triển, thăng chức trong công việc. Nếu như có gặp chút trắc trở trong công việc thì cũng chỉ là thử thách nhẹ nhàng với bạn, chỉ cần không ngừng kiên trì vượt qua và điều tiết tâm trạng của bản thân sẽ có kết quả như ý. Dùng vật phẩm phong thuỷ <strong>“Tam Hợp Quý Thần”, </strong>chuyển vận để hoá giải những khó khăn trong công việc dễ gặp phải hàng ngày.</p>',
			section6_doanhnhan: '<p>Năm nay, được Cát tinh: Bách Việt, Thiên Hỷ chiếu mệnh nên với người kinh doanh có cơ hội mở rộng hơn. Về buôn bán như diều gặp gió, có lợi cho mở rộng cách cục kinh doanh trong sự nghiệp, thu nhập cho doanh nghiệp được nâng cao. Nhưng đối với những người chung vốn cổ phần, làm ăn hoặc mới khởi nghiệp thì ngược lại dễ bị ảnh hưởng của Kiếp Tài mà chia miếng cơm cho người khác. Nên dùng <strong>“Thiên nguyệt Tứ phúc”</strong> để tăng vượng tăng tài trong năm.&nbsp;</p>',
			section6_donthan: '<p style="text-align: justify;">Năm nay là năm bản mệnh tuổi Tuất có Thái tuế là Tỷ Kiên, chỉ sự tranh đoạt nên tuổi Tuất năm nay dễ bị người thứ ba xen vào. Lại thêm bị Thái Tuế, Phục Thi, Kiếm Phong chiếu mệnh các mối quan hệ xã giao kém dần đi, với người độc thân bất lợi cho giao tiếp với đối tượng mình để ý, các bạn tốt nhất nên thỉnh <em><strong>Tam Hợp Quý Nhân&nbsp;</strong></em>và <em><strong>Hồ Lô Hòa Hợp</strong> </em>để giảm bớt họa hại, tăng vượng tình duyên.</p>',
			section6_kethon: '<p>Thiên Hỷ chính là đại diện cho duyên đính hôn, kết hôn, sinh sản; nên năm nay, trong nhà dễ có Hỷ sự. Người đã kết hôn, thì năm nay cần cẩn thận và tránh những vấn đề về đào hoa ngoài luồng, đừng để ảnh hưởng đến hạnh phúc gia đình. Tốt nhất nên dùng <strong>“Thiên nguyệt Tứ phúc” </strong>để phòng tránh đào hoa, cảm nắng bên lề.</p>',
			section6_hocsinh: '<p>Năm nay, là năm đa màu sắc của tuổi Tuất trong độ tuổi đang đi học, được tham gia các hoạt động ngoại khoá nhiều hơn, có hứng thú nghiên cứu chuyên sâu với một môn học mới mà không liên quan đến môn học trong nhà trường. Phụ huynh nên nắm bắt việc học của con cái mà có sự định hướng, tạo điều kiện; hay cũng như chỉ dẫn đúng cách cho con, để con có thể phát huy được khả năng và sở trường của mình trong học tập. Nhưng cũng cần điều tiết tốt các môn học trong trường, tránh lơ là mà học hành sa sút; phải cho con học thêm các môn chính để tránh bị hổng kiến thức tại trường khi nghiên cứu môn học con thích. Các bậc phụ huynh có thể thỉnh “<strong>Tháp văn xương đá đen”</strong> về đặt ở phương vị Văn xương trong nhà, để hỗ trợ cho việc học hành, thi cử của các con cái được thêm phần hanh thông.</p>',
		},
		{
			tuoi: 'hoi',
			intro: 'Thái Tuế lân thân hựu lai hình, Vận thế ảm đạm thị phi tăng<br />Khuyên ai tâm tĩnh lòng không rối, Cẩn ngôn thận hành bảo vận lai',
			section1_title: 'Trực thái tuế, làm việc vất vả, cẩn thận phá tài',
			section1_itext: '<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Tuổi Hợi 2019 - Kỷ Hợi là bản mệnh Trực Thái Tuế, Hình thái tuế, hay còn gọi là phạm Thái tuế. Có câu “Thái tuế đương đầu toạ, Vô hỷ tất hữu hoạ”, vậy nên, năm nay tuổi Hợi sẽ có một năm nhiều biến động. Là 1 trong 12 con giáp có tuổi phạm thái tuế xấu nhất.</p><p>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Về mặt công việc, thì bị ảnh hưởng của Thiên can thất sát, nên tiến độ công việc vô cùng chậm, rơi vào cảnh “Dã tràng se cát”. Năm nay là một năm có nhiều ý tưởng làm ăn, nhưng vì nhân tố khách quan và chủ quan mà không thể thực hiện được, điều này dễ khiến cho bạn bị phiền muộn. Nhưng vì có sự xuất hiện của Bát toạ tinh nên cho dù có gặp phải công việc ra sao, cứ tìm đồng nghiệp hoặc cấp dưới thảo luận sẽ nghĩ ra cách giải quyết tốt nhất.</p><p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Về mặt tiền tài, kiếm được thì không nhiều, chi tiêu thì quá đà. Do vậy, không nên đầu tư tài chính vào những mảng lớn; đặc biệt lưu ý với những người buôn bán kinh doanh. Khi thấy có lợi ích gì về tài chính, cần cân nhắc cẩn thận không nên vội vàng, tránh “xôi hỏng bỏng không”, lúc không có thu hoạch gì càng thêm nuối tiếc.</p><p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Về mặt sức khoẻ, cẩn thận năm nay bị tổn hại về tinh thần dẫn đến bệnh nhiều. Đồng thời, cũng dễ dẫn đến các mối quan hệ bị kém đi, xuất hiện cũng không ít khẩu thiệt thị phi.</p><p>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Về mặt tình cảm, những người độc thân có cơ hội nhưng cũng có không ít phiền não. Cần tranh thủ nắm bắt cơ hội khi cảm thấy có đào hoa đến, nhưng cũng cần chú ý tránh đào hoa ảo. Đương nhiên, cũng phải nói rằng, đối với người tuổi Hợi trong năm 2019 không hẳn là toàn Hung không có Cát, trong đó có những Cát tinh chiếu nhưng không rõ ràng. Nếu như lạc quan phấn đấu, tích cực đối mặt với thách thức thì ắt sẽ có quý nhân ngầm phù trợ, đồng thời cũng có thêm cơ hội để bạn thể hiện khả năng của mình. Nếu như về mặt hôn nhân có chút trục trặc, thì đừng lo lắng, vì năm nay có Giải Thần tương trợ chỉ cần bạn biết bao dung thì có thể hoá hung.</p>',
			section2_title1: 'BÁT TOẠ, THẦN GIẢI, THIÊN GIẢI',
			section2_block1_text: '<p>Tuổi Hợi năm nay còn có Bát toạ nhập mệnh, nên danh vọng, sự nghiệp, công việc có nhiều bước tiến mới; đồng thời, cũng nhận được sự giúp đỡ của cấp dưới và đồng nghiệp khiến cho công việc được thuận lợi và phát triển. Giải Thần là thần thiên về hoà giải cũng là sao chuyên về hoá giải các Tai hoạ, giúp ích lớn đối với phương diện tình cảm trong hôn nhân vì đã có Giải thần nhập cung Hôn nhân, giải quyết mọi mâu thuẫn trong hôn nhân vợ chồng; khiến cho tình cảm trong gia đình được hạnh phúc thuận hoà. Với tiểu cát tinh như Thiên Giải thì lại có thể làm giảm một phần năng lượng xấu của các hung tinh.&nbsp;</p>',
			section2_title2: 'PHỤC THI, KIẾM PHONG',
			section2_block2_text: '<p>Năm nay, tuổi Hợi bị hai Hung tinh: Phục Thi và Kiếm Phong nhập mệnh, cần đề phòng những tai nạn ngoài ý muốn, không những, khiến bạn bị tổn thương và đau khổ nhiều. Đồng thời, cũng khiến cho bạn cảm thấy các mối quan hệ bạn bè cũng kém đi, khẩu thiệt thị phi tương đối nhiều.&nbsp;</p>',
			section3_taivan: '<p style="text-align: justify;">Tuổi Hợi năm 2019 có thể coi là đón một năm bản mệnh, phương diện tiền của không phải là năm có thu hoạch lớn gì; nên khiến bạn không có động lực để làm việc, kiếm tiền, tiền tài khó tụ, các chi phí thì lại quá nhiều. Năm nay, túi tiền của mình sẽ phải dốc hết hầu bao, khiến áp lực về đồng tiền với bạn là tương đối lớn. Người buôn bán thì nên nén lại sự đầu tư lớn, không nên thấy tiền tài có lợi mà sáng mắt, rốt cuộc cũng không được gì. Năm nay, nên thủ không nên tiến về Tài vận.</p>',
			section3_sunghiep: '<p style="text-align: justify;">Tuổi Hợi năm nay là năm Trực thái tuế, nên trong công việc ít nhiều sẽ có những biến động lớn về chức vụ, công việc..., khiến bạn thêm đối đầu với những thử thách. Đối với việc học hành thì cũng như vậy, lên xuống bất định. Thay đổi này có tốt có xấu, cần phải biết nắm bắt đón nhận lấy mọi cơ hội. Cho nên năm nay, làm việc gì cũng cần lưu ý, người công chức không nên ra mặt làm việc gì vượt quá khả năng cho phép, hoặc tự coi mình là quá cao. Cũng may mà có Bát toạ nhập mệnh, cơ hội đến không ngừng, khiến bạn có khả năng đầu óc tổ chức lãnh đạo, có thể tích cực mà phát triển sự nghiệp hoặc tiến thêm một bước trong vấn đề thể hiện khả năng làm việc của bản thân. Khuyên bạn nên dùng vật phẩm phong thuỷ <strong>“Thiên nguyệt Tứ phúc” </strong>để có thể tăng thêm vận khí cát tường mang lại năng lượng làm việc.</p>',
			section3_taivan_rate: 3,
			section3_sunghiep_rate: 3,
			section4_suckhoe: '<p style="text-align: justify;">Năm nay, tuổi Hợi vì phạm Thái tuế lại cộng thêm có 2 hung tinh là: Kiếm Phong và Phục Thi nhập cung, nên mặt sức khoẻ có nhiều vấn đề ngoài ý muốn xảy ra đối với bản thân và những người thân trong gia đình. Ngoài ra, việc tham gia giao thông cần cẩn thận tránh xảy ra tai nạn ngoài ý muốn nguy hiểm. Chưa hết, tuổi Hợi lại cùng ngũ hành của năm 2019 là Thuỷ nên sẽ dẫn đến Vượng Thuỷ; vì vậy, cũng cần đặc biệt chú ý đến các bệnh liên quan đến tim, thận. Nếu muốn sức khoẻ bản thân và người nhà được khang thái, bình an, khuyên bạn nên tìm thầy phong thuỷ để tư vấn cụ thể phương pháp hoá giải trong năm.</p>',
			section4_suckhoe_rate: 1,
			section4_tinhyeu: '<p style="text-align: justify;">Đối với người độc thân tuổi Hợi về mặt tình cảm, thì vấn đề về cơ hội và phiền não đều cùng song song xuất hiện. Không nên vội vàng trong mặt tình cảm, cần tìm hiểu lại thật kỹ đối phương và cảm giác của bản thân. Người đang yêu và đã có gia đình thì được ổn định, nhưng không được chủ quan, vẫn phải đề phòng có biến; đặc biệt là, khi cáu giận cần phải kìm nén không được nói nhiều. Hoạ tòng khẩu xuất, nếu quá giữ cái tôi cá nhân sẽ thêm mệt mỏi trong mối quan hệ tình cảm, dễ dẫn đến kết cục không thể cứu vãn, nên biết kìm nén lại và bao dung nhiều hơn. Bởi có cát tinh “Giải thần” chiếu mệnh nên có thể hoá giải được những mâu thuẫn trong vấn đề tình cảm. Ngoài ra, sao này còn có tác dụng hoá giải tai ách, nên chỉ cần chú ý cẩn trọng biết khống chế bản thân về cảm xúc sẽ luôn được bình an.</p>',
			section4_tinhyeu_rate: 2,
			section5_txt1: '<p style="text-align: justify;">Tuổi Hợi năm nay phần lớn do Thái tuế Tỷ kiếp mà phá tài. Tài vận sẽ chịu ảnh hưởng lớn của đồng nghiệp và người lớn tuổi. Thôi thì cứ mặc cho vấn đề tiền tài không khá, nhưng tiền tài sẽ cứ bị chia đi, can nhiễu đến con đường tài vận hanh thông của bạn; chỉ cần tích cực trong thái độ sẽ có quý nhân phù trợ. Năm nay, dùng <strong>“Thiên nguyệt Tứ phúc”</strong> để tài vận không bị tiêu đi một cách vô lý ngoài ý muốn.</p>',
			section5_txt2: '<p style="text-align: justify;">Tuổi Hợi năm nay bị Hung tinh Kiếm phong chiếu mệnh nên mang đến&nbsp; những điều bất lợi từ tiểu nhân ảnh hưởng đến cuộc sống hàng ngày. Nhưng cũng có Giải thần để quý nhân tương trợ, lưu ý việc tránh tiểu nhân hãm hại thì không được coi thường. Tiểu nhân – Quý nhân cùng xuất hiện trong một năm dễ gây khó xử nên cần biết điều tiết cảm xúc bản thân, biết nhẫn nại. Ngoài ra, nếu như dùng&nbsp; <strong>“Thiên nguyệt Tứ phúc”</strong> có thể giúp hoá giải những ảnh hưởng mà tiểu nhân đem lại.</p>',
			section5_txt3: '<p style="text-align: justify;">Tuổi Hợi năm nay Phạm thái tuế nên vận đào hoa không hiển thị rõ, trên con đường tình cảm sẽ gặp nhiều trở ngại và thách thức. Vì có nhiều áp lực đến từ công việc nên nảy sinh ra nhiều mâu thuẫn, khi bên nhau cũng là cơ hội trải nghiệm, chia sẻ với nhau. Với những bạn tuổi Hợi độc thân cần cẩn thận đào hoa ảo xuất hiện, xử lý hết sức khôn khéo tình hình cụ thể. Ngoài ra, nếu như dùng <strong>“Hồ Lô Hòa Hợp”</strong> có thể giúp vuợng vận đào hoa, hoá giải đào hoa ảo.</p>',
			section5_txt4: '<p style="text-align: justify;">Cổ nhân có câu “Thái tuế phục thi kiếm phong tinh, ý ngoại sự cố đa phát sinh, thiếu nhược thị phi thiểu cận cung, bế môn bất xuất nhẫn tu hành”. Vì thế, mà nói người tuổi Hợi không thể tránh khỏi những việc thị phi trong năm nay; đề phòng miệng lưỡi tiểu nhân, chú ý bảo vệ các mối quan hệ, tích cực hơn nữa trong việc giúp đỡ nguời khác, khi giao tiếp với người khác cần khéo léo mà có được sự ủng hộ và cảm thông của người khác. Ngoài ra, nếu như dùng <strong>“Thiên nguyệt Tứ phúc”</strong> có thể giúp hoá giải những ảnh hưởng mà tiểu nhân mang lại.</p>',
			section6_congchuc: '<p>Tuổi Hợi năm nay Trực Thái tuế, tức là bản mệnh và lưu niên năm là Hợi, hay còn gọi là phạm Thái Tuế. Có câu: <strong>“Thái tuế đương đầu toạ, vô hỷ tất hữu hoạ”</strong>, nên ở mặt công việc có nhiều biến chuyển. Với người làm công chức thì biến động tương đối lớn, vận thế cũng tương đối bấp bênh, là lên hay xuống cũng còn xem vào năng lực và nỗ lực của bản thân. Khuyên bạn không nên kiêu ngạo, chỉ biết bản thân, mà bình tâm tĩnh chí. Nếu như dùng <strong>“Thiên nguyệt Tứ phúc</strong>” thì có thể giúp cho công việc thuận lợi bình ổn.</p>',
			section6_doanhnhan: '<p>Tuổi Hợi năm nay do ảnh hưởng của Hình Thái tuế, nên thương nhân cũng trải qua không ít sóng gió. Thay đổi này cũng có thể đem lại từ yếu tố ngoại biên, ví dụ như toàn cảnh kinh tế đi xuống, ngành nghề đang kinh doanh bị ảnh hưởng chung, đồng vốn bị lạm phát nghiêm trọng. Đồng thời, có thêm nhiều cạnh tranh ác liệt hơn; nhưng nó cũng có yếu tố đến từ bên trong, như là nhân tài của công ty bị thất thoát, liên tục gặp rắc rối khiến lòng người bất an. Điều được động viên phần nào, đó là sự ảnh hưởng của phạm thái tuế không ảnh hưởng lớn đến tài chính và thu nhập cá nhân. Nếu như biết nắm chắc tình hình, quản lý tốt nội bộ thì vẫn có cơ hội vượt qua năm nay một cách bình an.</p>',
			section6_donthan: '<p>Năm nay do tuổi Hợi phạm Thái tuế nên duyên phận của những người độc thân có tâm trạng biến động, suy nghĩ nhiều, rồi không mang lại được sức hấp dẫn nhất định với người khác giới. Cho nên, với những bạn đơn thân mà có ý định kết hôn cần khống chế tốt tâm trạng của chính mình, tránh ăn nói làm mất lòng đối phương. Nếu dùng vật phẩm phong thuỷ <strong>“Thiên nguyệt Tứ phúc”</strong> có thể giúp trợ vượng tình cảm, ổn định tình duyên.</p>',
			section6_kethon: '<p>Do nguyên nhân Hợi Tự Hình Thái Tuế chiếu xung, mà những người tuổi Hợi đã kết hôn năm nay dễ có cảm nhận khó chịu, ức chế, luôn có phiền não. Đối với những bạn đã kết hôn mà nói, điều này ảnh hưởng ít nhiều đến đời sống hôn nhân gia đình chung, người nhà luôn cảm thấy tâm trạng của bạn khó hiểu, đặc biệt là ruột thịt trong một nhà. Có thể dùng vật phẩm <strong>“Tam hợp quý thần”</strong> để ổn định trạng thái.</p>',
			section6_hocsinh: '<p>Tuổi Hợi năm nay do Phạm Thái Tuế, nên việc học hành dễ cảm thấy có áp lực thành tích. Tuy nhiên, có Nhất Bạch Tài tinh nhập mệnh, mà Nhất Bạch chủ về danh vọng và quan vị, nên tài vận tuổi Hợi năm nay tương đối tốt. Nhất bạch cũng chủ về thông minh, văn võ toàn tài, thi cử đỗ đạt, công thành danh toại, nên năm nay các sỹ tử tuổi Hợi sẽ có nhiều tiến bộ trong khía cạnh học tập. Chỉ cần không để các yếu tố bên ngoài làm ảnh hưởng đến sự tập trung, chắc chắn sẽ đạt kết quả tốt trong thi cử. Nên tranh thủ năm nay để làm bản lề cho sự nghiệp học hành sau này. Các bậc phụ huynh có thể cung thỉnh <strong>“Tháp văn xương đá đen”</strong> đặt ở vị trí văn xương của con em để hỗ trợ cho việc học hành, thi cử của các sỹ tử được thêm phần hanh thông.</p>',
		},
	];

	tuoi.filter(function (row) {
		if(row.tuoi == $scope.data.lunar_year) {
			$scope.selected = row;
		}
	} );

	var fulll_desc = [
		{
			year: '1950',
			desc: '<p>Người tuổi Dần sinh năm 1950 nạp âm ngũ hành là Tùng Bách Mộc đa phần là người khẩu xà tâm Phật, hay nóng tính, lúc trẻ không giữ&nbsp;được tài vận nhưng đến lúc về già tương đối sung túc. Năm 2019 - Kỷ Hợi nạp âm ngũ hành là Bình Địa Mộc là Tỷ kiếp&nbsp;của tuổi Dần 1950. Nên năm nay đề phòng có tranh chấp cãi vã đồng thời có tiểu nhân gây họa hoặc liên lụy. Cẩn thận gặp chuyện ngoài ý muốn mà chi tiêu nhiều. Đồng thời, đây cũng là năm có nhiều dịp hội ngộ với bạn cũ.</p>'
		},
		{
			year: '1951',
			desc: '<p>Người tuổi Mão sinh năm 1951, nạp âm ngũ hành là Tùng Bách Mộc; là người ngay thẳng, nghĩ gì nói đó, nắm quyền hành trong gia đình. Nạp âm ngũ hành năm 2019 - Kỷ Hợi là Bình Địa Mộc, tức Tỷ Kiếp. Năm nay, cần cẩn thận bị người khác lừa tiền, hành sự cần chắc chắn, không nên đầu tư hoặc đứng ra bảo lãnh về tài chính. Đồng thời, năm nay cũng có nhiều cơ hội trùng phùng với bạn bè xưa.</p><p>Nam mệnh 1951 năm nay gặp sao “Vân Hớn” chiếu mệnh, có thành viên trong gia đình gặp nạn bất an, vật nuôi gặp vấn đề.</p><p>Nữ mệnh 1951 gặp sao “La Hầu” chiếu mệnh, trong năm gặp chuyện phiền não, nên cẩn thận những tai nạn bất ngờ, gặp nạn mất máu.</p>'
		},
		{
			year: '1952',
			desc: '<p>Người sinh tuổi Thìn năm 1952, nạp âm ngũ hành là Trường Lưu Thủy, đại đa số cuộc sống của những người này cực nhọc, tuổi trẻ tài vận đến rồi đi mau chóng, trung niên có phúc phần. Nạp âm ngũ hành năm 2019 là Bình Địa Mộc, tức Thực Thương. Năm nay, cần chú ý sức khỏe của con trẻ, càng quan trọng hơn là giữ gìn sức khỏe của nguời già trong gia đình. Đặc biệt, là vệ sinh an toàn thực phẩm, chú ý nghỉ ngơi đầy đủ, không nên làm việc quá độ.</p><p>Nam mệnh tuổi 68 gặp sao “Thái Dương” chiếu mệnh, tổng thể vận thế tốt, thích hợp đi du lịch, trong nhà có hỷ sự, thêm đinh.</p><p>Nữ mệnh tuổi 68 gặp sao “Thổ Tú” chiếu mệnh, năm nay xuất hiện chuyện chẳng lành, không thích hợp đi xa.</p>'
		},
		{
			year: '1953',
			desc: '<p>Người tuổi Tị sinh năm 1953, nạp âm ngũ hành là Trường Lưu Thủy, là người thông minh lanh lợi, tài vận một đời tốt, về già tận hưởng cuộc sống. Nạp âm ngũ hành năm 2019 là Bình Địa Mộc, tức Thực Thương, vì địa chi năm sinh với địa chi lưu niên tương khắc, nên cần đặc biệt chú ý tới sức khỏe, làm hết những việc bạn thích trong đời này, đồng thời cần chú ý vệ sinh an toàn thực phẩm.</p><p>Nam mệnh tuổi 67 gặp sao “Thái Bạch” chiếu mệnh, thường cảm thấy làm việc không như ý, đi ra ngoài đường cẩn thận trộm cướp.</p><p>Nữ mệnh tuổi 67 gặp sao “Thái Âm” chiếu mệnh, khuyên bạn nên đi khám sức khỏe định kỳ, đặc biệt là bệnh phụ khoa.</p>'
		},
		{
			year: '1954',
			desc: '<p>Tuổi Ngọ 1954, nạp âm ngũ hành Sa Trung Kim, hầu hết là những người hoà khí, thích kết giao bạn bè, gần gũi người có tiếng tăm, ít dựa dẫm vào gia đình. 2019 - Kỷ Hợi nạp âm ngũ hành là Bình Địa Mộc là Tài tinh. Năm nay, lưu niên gặp Thái Tuế tài tinh, tài vận tốt. Nếu dưới sự hướng dẫn chỉ&nbsp;đạo của các chuyên gia đầu tư hợp lý, sẽ&nbsp;đem lại một khoản thu nhập đáng kể. Đồng thời, cần cẩn thận với những lời lẽ nói xấu trên mạng xã hội; nếu thấy không giải quyết được cần lập tức thông báo cho công an hoặc người thân để kịp thời xử lý.</p><p>Nam mệnh 66 tuổi, năm nay sao “Thủy Diệu” chiếu mệnh, trong gia đình có niềm vui thêm con cháu, phù hợp đi du lịch đó đây.</p><p>Nữ mệnh 66 tuổi, năm nay gặp “Mộc Đức” chiếu mệnh, gia đình bình an, nhưng bản thân cần chú ý dễ mắc một số bệnh nhỏ, bạn nên kiểm tra sức khỏe càng sớm càng tốt.</p>'
		},
		{
			year: '1955',
			desc: '<p>Người sinh năm 1955 tuổi Mùi có ngũ hành “Sa Trung Kim” những người này có tính tiết kiệm, đến thời trung niên thuận lợi, ít dựa vào những người thân, sống khá ôn hòa với những người thân trong gia đình, lúc có tuổi, mới tụ được Tài. Năm nay 2019 - Kỷ Hợi, ngũ hành là “Bình Địa Mộc” là Tài Tinh, cả năm gặp được Thái Tuế là tài tinh, vận tiền bạc tốt. Nếu có người có kinh nghiệm chỉ đường, dắt lối về đầu tư đúng cách sẽ nhận được thành quả ngoài mong đợi. Đồng thời, cũng nên đề phòng bị kẻ xấu lừa đảo trên mạng hay tin nhắn, gặp những tình huống chưa nắm rõ tình hình nên thương lượng với người thân hoặc gọi điện cho công an giải quyết.</p><p>Nam mệnh 65 tuổi, năm nay gặp sao “Thổ Tú” chiếu&nbsp; mệnh, coi chừng gia sự không yên, dính dáng đến pháp luật.</p><p>Nữ mệnh 65 tuổi, năm nay gặp sao “Vân Hớn” chiếu mệnh, cẩn thận, chú ý các triệu chứng viêm, đặc biết chú ý đến phụ khoa, chăm sóc da.</p>'
		},
		{
			year: '1956',
			desc: '<p>Người sinh năm 1956, nạp âm ngũ hành là Sơn Hạ Hoả, người tuổi này phần lớn cuộc sống sung túc đầy đủ, lúc trẻ có vất vả, về già được an nhàn, sung sướng. Nạp âm ngũ hành năm Mậu Tuất là “Bình Địa Mộc” là Ấn Tinh. Năm nay, dễ xảy ra áp lực từ gia đình, khiến cho tâm trạng luôn phiền não không yên. Nhưng chỉ cần tích cực đối diện, loại áp lực này sẽ trở thành động lực phù giúp cho gia đình. Ngoài ra, năm nay cũng nên suy nghĩ việc đầu tư bất động sản.</p><p>Nam mệnh 64 tuổi, năm nay sẽ gặp “La Hầu” chiếu mệnh, dễ mắc chuyện thị phi, nếu nghiêm trọng còn mắc phải kiện tụng.</p><p>Người mệnh 64 tuổi, năm nay gặp sao “Kế Đô” chiếu mệnh, cũng bị mắc chuyện thị phi; đồng thời, nên chú ý giải quyết ổn thỏa các mối quan hệ xã hội.</p>'
		},
		{
			year: '1957',
			desc: '<p>Người sinh năm 1957, nạp âm Ngũ hành “Sơn Hạ Hoả” là những người sống nặng tình nghĩa, ăn nên làm ra, đức cao vọng trọng, hồi trẻ vất vả, luôn bị phiền muộn, về già gia cảnh hưng vượng. Nạp âm Ngũ hành năm 2019 là “Bình Địa Mộc” có&nbsp; nghĩa là Ấn Tinh, năm nay dễ bị áp lực từ phía gia đình, khiến cho luôn cảm thấy phiền não mệt mỏi, nhưng chỉ cần tích cực đối diện thì mọi áp lực này cũng sẽ thành động lực giúp cho gia đình. Ngoài ra, năm nay cũng nên suy nghĩ đến vấn đề đầu tư bất động sản.</p><p>Nam mệnh tuổi 63 gặp sao “Mộc Đức” chiếu mệnh, cần chú ý đến sức khỏe nhiều hơn, đặc biệt là gan và mắt, không nên nổi nóng.</p><p>Nữ mệnh tuổi 63 gặp sao “Thủy Diệu” chiếu mệnh, cẩn thận lời nói, đồng thời hạn chế tham gia các hoạt động dưới nước.</p>'
		},
		{
			year: '1958',
			desc: '<p>Người tuổi Tuất sinh năm 1958, nạp âm ngũ hành là Bình Địa Mộc, đa phần là người hòa nhã, tự lập, lúc trẻ không giữ được của, về già mới được sung túc. Năm 2019, Kỷ Hợi nạp âm ngũ hành là Bình Địa Mộc là Tỷ Kiếp của tuổi Tuất 1958, năm nay dễ bị người khác lừa tiền của, cần cẩn thận khi cho vay mượn hoặc bảo lãnh. Năm nay, cũng là năm có nhiều dịp hội ngộ bạn cũ và người thân lâu ngày chưa gặp, làm việc gì mà không như ý thì cần tĩnh tâm, không được nản chí.</p><p>Nam giới sinh năm 1958, năm nay gặp sao “Thái Âm” chiếu mệnh, thích hợp xử lý những việc liên quan đến văn thư giấy tờ, nên đi xa công tác hoặc du lịch xa có lợi cho tài vận.</p><p>Nữ mệnh sinh 1958, năm nay gặp sao “Thái Bạch” chiếu mệnh, chú ý về vấn đề về vệ sinh an toàn thực phẩm, cẩn thận bệnh lý dạ dày, đề phòng tiểu nhân quấy nhiễu lấy mất tiền của.</p>'
		},
		{
			year: '1959',
			desc: '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Người tuổi Hợi sinh năm 1959, nạp âm ngũ hành là Bình Địa Mộc, đa phần là người thông minh, lanh lợi, ăn tiêu đủ dùng, dáng người nhỏ, vợ chồng hòa hợp. Kỷ Hợi 2019, nạp âm ngũ hành là Bình Địa Mộc là Tỷ Kiếp của tuổi Hợi, năm nay dễ bị người khác lừa tiền của, cần cẩn thận khi cho vay mượn hoặc bảo lãnh. Năm nay, cũng là năm có nhiều dịp hội ngộ bạn cũ và người thân lâu ngày chưa gặp.</p><p>Nam sinh năm 1959, năm nay gặp “Kế Đô” chiếu mệnh là hung tinh, làm việc gì cũng không như ý, chú ý vật nuôi trong nhà.</p><p>Nữ sinh năm 1959, năm nay gặp “Thái Dương” chiếu mệnh, rất bất lợi, cần chú ý tai họa bất ngờ.</p>'
		},
		{
			year: '1960',
			desc: '<p>Người tuổi Tý sinh năm 1960, nạp âm ngũ hành Bích Thuợng Thổ. Tuổi này một đời Tài Lộc không thiếu thuờng đuợc quý nhân phù trợ, gặp hung hoá cát. Năm 2019, có nạp âm ngũ hành là Bình Địa Mộc là Quan Tinh, năm nay một mặt gặp nhiều thách thức cần chú ý giữ gìn sức khoẻ.</p><p>Nam mệnh 60 tuổi năm nay gặp Vân Hớn thích hợp giữ mình bình ổn, dễ bị khẩu thiệt thị phi.&nbsp;</p><p>Nữ mệnh 60 tuổi, năm nay La Hầu chiếu mệnh, năm nay dễ bị nạn mất máu, đặc biệt lưu ý những bệnh về phụ khoa .</p>'
		},
		{
			year: '1961',
			desc: '<p>Người tuổi Sửu sinh năm 1961, nạp âm ngũ hành Bích Thượng Thổ, người này đa phần đa nghi, ôn hoà, tuy có đầy đủ trong cuộc sống, không dựa vào người nhà nhưng lúc có tuổi lại không được hưởng Phúc. Năm Kỷ Hợi 2019 có nạp âm ngủ hành là Bành Địa Mộc là Quan tinh, một mặt năm nay cần chú ý sức khoẻ của chính mình, đi lại tham gia giao thông cẩn thận. Mặt khác, thì năm nay nếu có xử lý những vấn đề liên&nbsp; quan đến tài chính, cần phải biết lắng nghe ý kiến người nhà hoặc chuyên gia trong lĩnh vực này, để tránh bị lừa đảo.</p><p>Nam mệnh 59 tuổi năm nay sao “Thái Dương” chiếu mệnh, dễ xảy ra chuyện ngoài ý muốn, cho nên cần bình tĩnh để đối xử với mọi người và mọi thứ xung quanh sao cho đúng mực.</p><p>Nữ mệnh 59 tuổi năm nay sao “Thổ Tú” chiếu mệnh, cần đặc biệt lưu ý các bệnh về phụ khoa.</p>'
		},
		{
			year: '1962',
			desc: '<p>Người tuổi Dần sinh năm 1962, nạp âm ngũ hành là Kim Bạch Kim, đa phần là người suy nghĩ đơn giản, khi còn trẻ công viêc chưa ổn định, về già mới có thể sung túc. Năm 2019 - Kỷ Hợi nạp âm ngũ hành là Bình Địa Mộc là Tài tinh của tuổi Dần 1962, nên trong năm này có ham muốn kiếm tiền lớn, cơ hội kiếm tiền cũng không nhỏ. Chỉ cần làm ăn hợp pháp tự khắc sẽ có thu hoạch, nếu quá tham tiền tài, dễ rơi vào những cạm bẫy đầu tư.</p><p>Nam mệnh sinh năm 1962 năm nay gặp “Thái Bạch” chiếu mệnh, làm việc gì cũng có cảm giác không như ý, cho nên cần hết sức bình tâm đối diện trong mọi việc.</p><p>Nữ mệnh 1962 năm nay gặp “Thái Âm” chiếu mệnh, lưu ý dễ gặp phải bệnh phụ khoa.</p>'
		},
		{
			year: '1963',
			desc: '<p>Người tuổi Mão sinh năm 1963, nạp âm ngũ hành Kim Bạc Kim, đa phần khi còn trẻ tài lộc chưa đủ, về già mới có thể sung túc. Nạp âm ngũ hành năm 2019 - Kỷ Hợi là Bình Địa Mộc, tức Tài Tinh. Năm nay, trong nhà có nhiều việc mừng.</p><p>Nam mệnh 1963, năm nay gặp sao “Thủy Diệu” chiếu mệnh, có hỷ sự xuất hiện, gia đình thêm thành viên nhỏ, đi xa có lộc tiền tài.</p><p>Nữ mệnh 1963 gặp sao “Mộc Đức” chiếu mệnh, năm nay cần cẩn thận có tai nạn liên quan đến mất máu, song vấn đề không phải lo ngại nhiều.</p>'
		},
		{
			year: '1964',
			desc: '<p>Người sinh tuổi Thìn năm 1964, nạp âm ngũ hành là Phúc Đăng Hoả, đại đa số những người này có cuộc sống đầy đủ không lo thiếu ăn thiếu mặc, tuy tuổi trẻ vận thế trung bình nhưng dựa vào nỗ lực hết mình của bản thân mà con đường tiền tài sáng lạng. Nạp âm ngũ hành&nbsp; năm 2019 là Bình Địa Mộc, là Ấn Tinh. Năm nay chịu nhiều áp lực từ gia đình, khiến bạn phiền não không nguôi; nhưng chỉ cần tích cực đối mặt với vấn đề, áp lực từ gia đình này sẽ hóa động lực. Ngoài ra năm nay rất thích hợp cho việc xem xét đầu tư bất động sản.</p><p>Nam mệnh tuổi năm 56 gặp sao “Thổ Tú” chiếu mệnh, năm này sẽ xảy ra cơ sự chẳng lành, gia trạch bất an, gặp kẻ tiểu nhân.</p><p>Nữ mệnh tuổi 56 gặp sao “Vân Hớn” chiếu mệnh, cần lưu tâm xảy ra tai nạn mất máu, chú ý đến chăm sóc sức khỏe phụ khoa.</p>'
		},
		{
			year: '1965',
			desc: '<p>Người tuổi Tị sinh năm 1965, nạp âm ngũ hành là Phật Đăng Hỏa, là người có khí phách thẳng thắn, đại nghĩa, về già ổn định. Nạp âm ngũ hành năm 2019 là Bình Địa Mộc, tức Ấn Tinh, năm nay dễ chịu áp lực từ phía gia đình, khiến bạn phiền não không yên. Nhưng chỉ cần tích cực đối mặt các vấn đề trong cuộc sống, áp lực từ gia đình và sự nghiệp sẽ hóa thành động lực. Bởi vậy, năm nay thích hợp mua nhà mới.</p><p>Nam mệnh tuổi 55 gặp sao “La Hầu” chiếu mệnh, gặp rắc rối về thị phi, tiểu nhân. Đồng thời cần chú ý sức khỏe mắt, gan.</p><p>Nữ mệnh tuổi 55 gặp sao “Kế Đô” chiếu mệnh, gặp chuyên thị phi, gia trạch bất ổn.</p>'
		},
		{
			year: '1966',
			desc: '<p>Tuổi Ngọ 1966, nạp âm ngũ hành Thiên Hà Thủy, hầu hết là người có cuộc sống nhàn nhã, thích hợp làm chuyên môn tay chân, đến trung niên mới phát tài. 2019 - Kỷ Hợi lưu niên nạp âm ngũ hành Bình Địa Mộc là thực thương, người kinh doanh năm nay rất có lộc, nhiều cơ hội kiếm tiền, nếu có thể kết hợp với <strong>“Thiên Nguyệt Tứ Phúc”</strong> sẽ có thể thúc đẩy tài vận, tăng cường giàu có. Viên chức năm nay ngược lại cần phải cực kì cẩn trọng, giữ mình khiêm tốn, tránh xúc phạm lãnh đạo, đồng nghiệp và những người xung quanh, ảnh hưởng đến triển vọng nghề nghiệp sau này.</p><p>Nam mệnh 54 tuổi năm nay gặp sao “Mộc Đức” chiếu mệnh, nên chú ý các bệnh về mắt, chứng lão hoá về mắt có khả năng xuất hiện rõ hơn.</p><p>Nữ mệnh 54 tuổi năm nay sao “Thủy Diệu” chiếu mệnh, nên chú ý khẩu thiệt thị phi, đồng thời tránh các hoạt động trên sông nước như: Bơi lội, ngồi thuyền.</p>'
		},
		{
			year: '1967',
			desc: '<p>Người sinh năm Mùi 1967, có ngũ hành “Thiên Hà Thủy”, những người này tâm tính buồn vui thất thuờng, rất biết ăn nói, danh lợi có phần, đủ ăn đủ mặc. Năm nay, năm Kỷ Hợi có ngũ hành “Bình Địa Mộc” là Thực thương, những ông chủ lập nghiệp kinh doanh là một năm tiền bạc nhiều, đầu óc kiếm tiền thông suốt, có nhiều cơ hội kiếm tiền, nếu như có thể kết hợp từ Bát tự “thiên tài nhập khố” hay <strong>“Ngũ Phúc Tụ Tài”</strong> đặt ở cung Tài thì sẽ được lộc tiền tài. Những người làm công ăn lương, năm nay cần phải chú ý trong lời nói, hành động, tránh đắc tội với lãnh đạo, khách hàng và những đồng nghiệp xung quanh, ảnh hưởng đến tiền đồ sau này.</p><p>Nam mệnh 53 tuổi, năm nay gặp sao “Thái Âm” chiếu mệnh, vận thế ổn định, mọi việc đều ổn.</p><p>Nữ mệnh 53 tuổi, năm nay gặp “Thái Bạch” chiếu mệnh cùng với “Bạch hổ”, đối với mệnh nữ mà nói, có nhiều điều cần kiêng kị, đi lại chú ý an toàn, đề phòng trộm cắp.</p>'
		},
		{
			year: '1968',
			desc: '<p>Người sinh năm 1968, nạp âm ngũ hành là Đại Trạch Thổ, người tuổi này phần lớn vất vả mới làm nên, nữ thì luôn phải vững chí độc lập, không nhờ được người nhà, về già hưng vượng hơn. Nạp âm ngũ hành năm 2019 là “Bình Địa Mộc” Là Quan tinh. Năm nay dễ xảy ra các loại “Đào chiến” và tranh chấp, và cũng có cơ hội phát triển về địa vị trong sự nghiệp. Người buôn bán kinh doanh, nên cẩn thận xử lý về các mặt liên quan đến thuế, để tránh phiền phức. Có thể dùng <strong>“Long Ấn Vượng Quan”</strong> để hoá giải thị phi, tiểu nhân, thúc vượng vận quý nhân.</p><p>Nam mệnh 52 tuổi năm nay, gặp sao “Kế Đô” chiếu mệnh chú ý đến những việc ngoài ý muốn.</p><p>Người mệnh 52 tuổi, năm nay sẽ gặp sao Thái Dương chiếu mệnh, rất không tốt, dễ gặp họa ngoài ý muốn.</p>'
		},
		{
			year: '1969',
			desc: '<p>Người sinh năm 1969, nạp âm Ngũ hành “Đại Trạch Thổ” là những người tâm tính thông minh, cuộc sống đầy đủ, người nhà khó nhờ, làm việc như ý. Nạp âm ngũ hành năm 2019 là “Bình Địa Mộc” có nghĩa là Quan Tinh, năm nay gặp nhiều thử thách và cạnh tranh, sẽ có sự phát triển sự nghiệp thêm một bước nữa, địa vị được nâng cao, người kinh doanh cần cẩn thận xử lý những việc liên quan đến thuế, tránh phiền phức đến thân; hy vọng là một năm thăng chức tăng lương. Khuyên bạn thỉnh vòng tay khai vận <strong>“Tam Hợp Quý Thần”,</strong> thuận lợi hóa giải thị phi, thúc vượng quý nhân vận.</p><p>Nam mệnh tuổi 51 năm nay gặp sao “Vân Hớn” chiếu mệnh, hành sự cần chiếu theo khả năng của bản thân, không nên cố gắng quá mà sự hóa thành không.</p><p>Nữ mệnh tuổi 51 gặp sao “La Hầu” chiếu mệnh, cần đề phòng tai nạn mất máu, chú ý chăm sóc sức khỏe mắt, miệng.&nbsp;</p>'
		},
		{
			year: '1970',
			desc: '<p>Người tuổi Tuất sinh năm 1970, nạp âm ngũ hành là Thoa Xuyến Kim, đa phần nhanh nhẹn, gần người quyền quý, muốn gì được nấy, chăm chỉ cần cù, về già hưởng phúc. Năm 2019 - Kỷ Hợi nạp âm ngũ hành là Bình Địa Mộc là Tài tinh&nbsp; của tuổi Tuất 1970, cần phải vất vả mới kiếm được tiền, nên chú ý điều độ thân thể, tránh lao lực quá sức. Ngoài ra, còn phải đề phòng nạn đào hoa làm ảnh hưởng đến gia đình và danh dự, luôn phải tỉnh táo đầu óc, không để bị mê hoặc.</p><p>Nam sinh năm 1970, năm nay gặp “Thái Dương” chiếu mệnh, “Hành niên trực Thái Dương, chung tuế đắc an khang”,&nbsp; trong nhà đón thành viên mới chào đời, đi xa nhà công tác có lợi cho tài vận.</p><p>Nữ sinh năm 1970, gặp “Thổ Tú” chiếu mệnh, cần đề phòng tiểu nhân quấy nhiễu, năm nay không nên đi xa.&nbsp;&nbsp;&nbsp;&nbsp;</p>'
		},
		{
			year: '1971',
			desc: '<p>Người tuổi Hợi sinh năm 1971, nạp âm ngũ hành là Thoa Xuyến Kim, đa phần khi còn trẻ tài lộc chưa đủ, về già mới có thể sung túc. Kỷ Hợi 2019, nạp âm ngũ hành là Bình Địa Mộc là Tài Tinh của tuổi Hợi 1971, cần phải vất vả mới kiếm được tiền, nên chú ý chăm sóc điều độ thân thể, tránh lao lực quá sức. Ngoài ra, còn phải đề phòng nạn đào hoa làm ảnh hưởng đến gia đình và danh dự bản thân.</p><p>Nam sinh năm 1971, năm nay gặp “Thái Bạch” chiếu mệnh, hành niên trực Kim Tinh nên làm việc gì cũng như ý. Năm nay, cũng có nhiều điều đau đầu, tuy nhiên trong nhà dễ có tin vui thêm đinh.</p><p>Nữ giới sinh 1971 năm nay gặp “Thái Âm” chiếu mệnh, cần đề phòng bệnh phụ khoa, đi xa có lợi về tài vận.</p>'
		},
		{
			year: '1972',
			desc: '<p>Người tuổi Tý sinh năm 1972, nạp âm ngũ hành Tang Đố Mộc, người tuổi này phần lớn hay bị thân tâm buồn khổ, tuổi trung niên có đầy đủ về điều kiện ăn ở, nguời thân lạnh nhạt, hễ làm việc gì cũng phải tự mình lo. Năm 2019 có nạp âm ngũ hành là Bình Địa Mộc, năm nay cần lưu ý có kẻ lừa tiền, không nên đầu tư tiền vào những chỗ không đảm bảo. Đồng thời, năm nay có nhiều cơ hội được gặp gỡ với bạn bè thân cùng ôn lại thời xưa.</p><p>Nam mệnh 48 tuổi năm nay gặp Thuỷ Diệu chiếu mệnh nên thích hợp đi công tác xa, du lịch nơi xa, dễ có lợi cho tài vận.</p><p>Nữ mệnh 48 tuổi năm nay gặp Mộc Đức chiếu mệnh dễ có bệnh mất máu, nhưng có điều may là nguời nhà bình an, vợ chồng hoà thuận.</p>'
		},
		{
			year: '1973',
			desc: '<p>Người tuổi Sửu sinh năm 1973, nạp âm ngũ hành Tang Đố Mộc, người này phần lớn có nhiều cơ hội lựa chọn trong công việc, không sợ thị phi, không dựa vào được con cái, vợ chồng hoà thuận. Năm Kỷ Hợi nạp âm ngũ hành là Bình Địa Mộc, tức là Tỷ Kiếp, năm nay sẽ gặp chuyện tranh cãi, đồng thời cần cẩn thận những nguy hại của tiểu nhân làm liên luỵ, cẩn thận thoát tài ngoài ý muốn. Ngoài ra, năm nay có nhiều dịp được gặp lại bạn cũ.</p><p>Nam mệnh 47 tuổi năm nay sao “Thổ Tú” chiếu mệnh, dễ gặp phải chuyện khẩu thiệt thị phi, khi ký hợp đồng cần chú ý các điều khoản, không đứng ra bảo lãnh về tiền của cho người khác.</p><p>Nữ mệnh tuổi 47 năm nay sao Vân Hớn chiếu mệnh cần lưu ý các bệnh về phụ khoa.</p>'
		},
		{
			year: '1974',
			desc: '<p>Người tuổi Dần sinh năm 1974, nạp âm ngũ hành là Đại Khê Thủy, đa phần là người thành thực, có số được ở bên người quyền quý, ăn mặc đủ dùng. Năm 2019 - Kỷ Hợi nạp âm ngũ hành là Bình Địa Mộc là thực thương của tuổi Dần 1974. Người tuổi Dần 1974 năm nay sẽ phải bận rộn vất vả vì công viêc và gia đình, có cơ hội kiếm tiền nhiều nhưng tiền bạc cũng phải chi tiêu nhiều, nên cần chú ý cân đối. Cần đặt Thiên tài nhập khố ở cung tài vị trong nhà để mong Tích tài. Người làm văn phòng năm nay cần cẩn thận trong lời nói, hành động, khiêm tốn làm việc để tránh đắc tội với lãnh đạo, đồng nghiệp và khách hàng trong quá trình làm việc mà không hay biết sẽ ảnh hưởng đến công việc sau này.</p><p>Nam mệnh1974 năm nay gặp “La Hầu” chiếu mệnh, có câu “Hành niên trực La Hầu, chủ nhân bách sự ưu” nên dễ bị khẩu thiệt thị phi, kiện tụng, khiếu nại.</p><p>Nữ Mệnh 1986 năm nay gặp “Kế Đô” chiếu mệnh, cần đề phòng miệng lưỡi thị phi. Nên đi du lịch hoặc đi công tác xa nhà sẽ thích hợp cho việc cầu Tài.</p>'
		},
		{
			year: '1975',
			desc: '<p>Người tuổi Mão sinh năm 1975, nạp âm ngũ hành Đại Khê Thủy. Đại đa số những người này trung niên phát đạt, có số bên người quyền quý. Nạp âm ngũ hành năm 2019 - Kỷ Hợi là Bình Địa Mộc, tức là năm Thực Thương. Con đường tiền tài của người này thuận lợi, có nhiều cơ hội cầu tài. Nếu như có thể phối kết hợp nhân bát tự với vật phẩm phong thủy <strong>“Ngũ Phúc Tụ Tài</strong>” đặt ở vị trí tài lộc trong nhà, thì việc cầu tài sẽ vượng. Tuy nhiên, năm này công chức nên thận trọng lời nói, đối đãi với người khác hòa nhã; tránh đắc tội với lãnh đạo, đồng nghiệp mà ảnh hưởng tới con đường sự nghiệp. Đại đa số gia đình người tuổi Mão sinh năm 1975, năm nay sẽ có tin tốt.</p><p>Nam mệnh 1975 gặp sao “Mộc Đức” chiếu mệnh, nên cẩn thận các bệnh về mắt.</p><p>Nữ mệnh 1975 gặp sao “Thủy Diệu” chiếu mệnh, nhất định phải chú ý lời ăn tiếng nói, tránh thị phi; hạn chế tham gia các hoạt động dưới nước hoặc sử dụng các công cụ đi lại trên nước.</p>'
		},
		{
			year: '1976',
			desc: '<p>Người sinh tuổi Thìn năm 1976, nạp âm ngũ hành là Sa Trung Thổ, đại đa số những người này thông minh, lanh lợi; thân nhàn tâm lao, trung niên sự nghiệp hưng vượng. Nạp âm ngũ hành năm 2019 là Bình Địa Mộc tức Quan Tinh. Năm nay dễ dính vào chuyện kiện tụng mà khiến cho tâm trạng rối bời; đồng thời, cần đề phòng tai nạn mất máu. Khuyên bạn năm nay gặp cơ sự trước tiên nên nhường nhịn người khác, đồng thời cũng phải đi kiểm tra sức khoẻ định kỳ.</p><p>Nam mệnh tuổi 44 năm nay gặp sao “Thái Âm” chiếu mệnh, mọi chuyện trong năm khá thuận lợi, lại thêm Nguyệt Đức Tinh nhập mệnh, được quý nhân giúp đỡ, thích hợp đi xa cầu tài.</p><p>Nữ mệnh tuổi 44 gặp sao “Thái Bạch” chiếu mệnh, năm nay xảy ra rất nhiều vấn đề, phải đề phòng mất trộm, tiểu nhân hãm hại sau lưng.</p>'
		},
		{
			year: '1977',
			desc: '<p>Người tuổi Tị sinh năm 1977, nạp âm ngũ hành là Sa Trung Thổ, là người danh lợi song toàn, phần lớn là những người được gần người quyền quý. Tính tình &nbsp;mạnh mẽ nhưng ngang bướng, sự nghiệp hiển hách. Nạp âm ngũ hành năm 2019 là Bình Địa Mộc, là Quan Tinh, có sự tranh giành trong chuyện tình cảm; sự nghiệp gặp cơ hội nâng cao địa vị. Người làm ăn kinh doanh cần cẩn thận các vấn đề liên quan đến thuế doanh nghiệp, tránh phiền phức rước vào thân. Mong ước sớm ngày thăng chức tăng lương, nên đeo vòng tay phong thủy <strong>“Tam Hợp Quý Thần”, </strong>hóa giải tiểu nhân thị phi, thúc vượng quý nhân vận.</p><p>Nam mệnh tuổi 43 gặp sao “Kế Đô” chiếu mệnh, nên đi xa, tránh điều không hay xảy ra cho người trong gia đình, gia trạch trung bình.</p><p>Nữ mệnh tuổi 43 gặp sao “Thái Dương” chiếu mệnh, là một sao bất lợi với nữ giới, năm nay thường gặp họa bất ngờ.</p>'
		},
		{
			year: '1978',
			desc: '<p>Tuổi Ngọ 1978, nạp âm ngũ hành là Thiên Thượng Hỏa, hầu hết là người có&nbsp;ý chí cao, dung mạo đoan trang, tính tình hiền hòa, thời trẻ gặp nhiều tai vạ, hay xung khắc với người nhà. 2019 năm Kỷ Hợi lưu niên nạp âm ngũ hành là Bình Địa Mộc là ấn tinh. Trong công việc năm nay, dễ được đề bạt lên vị trí mới, nhưng quá trình gian khổ. Đồng thời, có cơ hội mua bất động sản và xe cộ, dù quá trình dễ bị cản trở nhưng ắt có quý nhân giúp đỡ thành công.</p><p>Nam mệnh 42 tuổi, năm nay gặp sao “Vân Hớn” chiếu mệnh, tất cả mọi quyết định nên lấy việc giữ gìn sức khoẻ là hàng đầu. Về sức khỏe, cần chú ý va chạm xe cộ.</p><p>Nữ mệnh 42 tuổi, năm nay sao La Hầu chiếu mệnh, dễ khẩu thiệt thị phi, dễ mắc các bệnh như: về miệng, mắt, phụ khoa.</p>'
		},
		{
			year: '1979',
			desc: '<p>Người sinh năm 1979, tuổi Mùi nạp âm Ngũ hành là “Thiên Thượng Hoả”, những người này có tâm từ bi, mau mồm miệng, lộc tự đến, tiền đồ rộng mở, được quý nhân phù trợ, lúc trẻ không thuận nhưng trung niên bắt đầu làm ăn phát đạt. Năm Kỷ Hợi 2019, có ngũ hành “Bình Địa Mộc” là Ấn tinh nên năm nay những người tuổi này dễ thăng quan tiến chức nhưng trong công việc cũng khá vất vả. Đồng thời, năm nay có nhiều cơ hội để mua nhà, mua xe nhưng cũng có nhiều trở ngại.</p><p>Nam mệnh 41 tuổi, năm nay gặp sao “Thái Dương” chiếu mệnh, tổng thể vận thế tốt hơn, thích hợp đi xa cầu tài, đi du lịch, đi công tác, trong nhà có nhiều việc vui.</p><p>Nữ mệnh 41 tuổi, năm nay gặp sao “Thổ Tú” chiếu mệnh không nên dính líu đến pháp luật, tránh việc đi xa, đề phòng tiểu nhân quấy phá. Nên giảm bớt và hạn chế đi xa.</p>'
		},
		{
			year: '1980',
			desc: '<p>&nbsp;Người sinh năm 1980, nạp âm ngũ hành là Thạch Lựu Mộc; nguời tuổi này phần lớn cả đời chăm chỉ, nữ hiền lương. Nạp âm ngũ hành năm 2019 là “Bình Địa Mộc” là Tỷ Kiếp. Năm nay, dễ xảy ra tranh chấp về lời nói với người khác, cẩn thận tiểu nhân hãm hại, mà mất đi tiền tài. Nên tích cực tham gia nhiều các hoạt động, gặp gỡ hội họp với bạn bè cũ.</p><p>Nam mệnh 40 tuổi, năm nay gặp “Thái Bạch” chiếu mệnh, sẽ gặp nhiều việc không thuận ý, chú ý tiểu nhân phá hoại.</p><p>Nữ mệnh 40 tuổi, năm nay gặp “Thái Âm” chiếu mệnh, chú ý sức khỏe; đặc biệt là bệnh phụ khoa và những người lớn tuổi sẽ gặp cảnh khó sinh.</p>'
		},
		{
			year: '1981',
			desc: '<p>Người sinh năm 1981, nạp âm Ngũ hành “Thạch Lựu Mộc” là những người thông minh lanh lợi, tinh thần sảng khoái, được mọi người kính trọng, tiền của đủ dùng, nhưng lạnh nhạt với người thân. Nạp âm Ngũ hành năm 2019 là “Bình Địa Mộc” có nghĩa là Tỷ Kiếp. Năm nay, làm việc tuy có sự giúp đỡ của người lớn tuổi và bạn thân nhưng cũng cần đề phòng gặp người cản đường, bị tiểu nhân chỉ chích; đặc biệt, không được đứng ra bảo lãnh, cho vay tín dụng.</p><p>Nam mệnh 39 tuổi, gặp sao “Thủy Diệu” chiếu mệnh, năm nay gia đình có hỷ khánh, đi xa sinh tài vượng, có lộc tiền tài.</p><p>Nữ mệnh 39 tuổi gặp sao “Mộc Đức” chiếu mệnh, nên cẩn thận tai nạn mất máu, hôn nhân hòa hợp, người nhà bình an.</p>'
		},
		{
			year: '1982',
			desc: '<p>Người tuổi Tuất sinh năm 1982, nạp âm ngũ hành là Đại Hải Thủy, đa phần là những người hay làm việc tốt, có quý nhân đề bạt, trăm việc thuận lợi, về già sung túc. Năm 2019 - Kỷ Hợi nạp âm ngũ hành là Bình Địa Mộc là thực thương của tuổi Tuất 1982. Năm 2019, sẽ có nhiều ý tưởng sáng tạo, tư duy linh hoạt, vì vậy càng thể hiện xuất sắc trong công việc, được người khác tán thưởng ghi nhận. Nhưng cũng cần chú ý, không được quá đề cao bản thân, cẩn thận trong lời nói, hành động tránh đắc tội với lãnh đạo hoặc mọi người xung quanh, ảnh hưởng đến việc tiến thân trong công việc.</p><p>Nam giới sinh năm 1982, năm nay gặp “Thổ Tú” chiếu mệnh, cần chú ý xử lý tốt những điều khoản trong hợp đồng, đề phòng thị phi quấy nhiễu.</p><p>Nữ sinh năm 1982, gặp sao “Vân Hớn” chiếu mệnh nên đề phòng sảy thai, cẩn thận gặp nạn mất máu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>'
		},
		{
			year: '1983',
			desc: '<p>Người tuổi Hợi sinh năm 1983, nạp âm ngũ hành là Đại Hải Thủy, đa phần là những người cương trực thẳng thắn, không giỏi giao tiếp, tài lộc sung túc, xa người thân, về già vận khí có phần tốt hơn. 2019 nạp âm ngũ hành là Bình Địa Mộc là thực thương của tuổi Hợi 1983, năm nay sẽ là năm có nhiều ý tưởng sáng tạo, tư duy linh hoạt. Vì vậy, càng thể hiện xuất sắc trong công việc, càng phải cần chú ý đề phòng bị người khác hiểu lầm, dẫn đến khẩu thiệt thị phi.</p><p>Nam sinh năm 1983, năm nay gặp “La Hầu” chiếu mệnh, cần đề phòng khẩu thiệt thị phi và các bệnh về tim, gan hoặc bệnh về mắt.</p><p>Nữ 1983 năm nay gặp “Kế Đô” chiếu mệnh, nên cần đề phòng miệng lưỡi thị phi, gia trạch bất an.</p>'
		},
		{
			year: '1984',
			desc: '<p>Người tuổi Tý sinh năm 1984, nạp âm ngũ hành Hải Trung Kim, nguời sinh năm này phần lớn học nhiều nhưng ít thành. Lúc nhỏ hay gặp tai nạn, ít đuợc nhờ anh em bạn bè, thường phải tự lực cánh sinh. Nạp âm năm 2019 là Bình Địa Mộc là Tài tinh, năm nay phải vất vả mới có tiền của, là năm được thăng quan tiến chức đồng thời cũng là năm có vận đào hoa tương đối tốt.</p><p>Nam mệnh 23 tuổi năm nay sao Mộc Đức chiếu mệnh, cần cẩn thận với những&nbsp; bệnh liên quan đến gan và mắt; làm việc gì cũng cần điều tiết tâm trạng.</p><p>Nữ mệnh 36 tuổi năm nay sao Thuỷ Diệu chiếu mệnh, dễ bị khẩu thiệt thị phi, quấy nhiễu. Đồng thời cần chú ý với những hạn liên quan đến thuỷ, hạn chế các hoạt động liên quan đến nước.</p>'
		},
		{
			year: '1985',
			desc: '<p>Người tuổi Sửu sinh năm 1985, nạp âm ngũ hành Hải Trung Kim, học hành chăm chỉ nhưng ít thành công. Hồi nhỏ hay gặp tai nạn nhỏ, anh em ít được nhờ cậy, cần phải tự cánh sinh. Nạp âm năm Kỷ Hợi 2019 là Bình Địa Mộc là Tài Tinh nên năm nay sẽ vất vả mới được Tài; cần giữ gìn sức khoẻ của bản thân, tránh làm việc lao lực quá sức. Ngoài ra, năm nay có Đào Hoa ảo nên dễ ảnh hưởng đến hôn nhân gia đình hoặc danh dự cá nhân bị ảnh hưởng, luôn phải giữ đầu óc được tỉnh táo, không được để mê hoặc.</p><p>Nam mệnh 35 tuổi năm nay gặp sao “Thái Âm” chiếu mệnh làm gì cũng được như ý, có thể cầu danh lợi, cũng thích hợp để thể hiện tình cảm với nửa kia.</p><p>Nữ mệnh 35 tuổi năm nay sao “Thái Bạch” chiếu mệnh có cơ hội chuyện hôn nhân cưới gả, nhưng cần cẩn thận bệnh về dạ dày và các bệnh liên quan đến phụ khoa. Cần cẩn thận đề phòng tiểu nhân hãm hại.</p>'
		},
		{
			year: '1986',
			desc: '<p>Người tuổi Dần sinh năm 1986, Nạp âm ngũ hành là Lư Trung Hỏa, đa phần là người miệng lưỡi sắc sảo, tâm tình chính trực, được ở bên người quyền quý. Năm 2019 - Kỷ Hợi, nạp âm là Bình Địa Mộc là ấn tinh của tuổi Dần 1986. Năm nay, người sinh năm 1986 sẽ có cơ hội phát triển cuộc sống của mình, bước vào một giai đoạn mới trong cuộc đời. Trong năm nay, nếu có giao dịch về nhà cửa, xe cộ thì phải đặc biệt chú ý đến các điều khoản hợp đồng, tránh xảy ra sai sót.</p><p>Nam mệnh sinh năm 1986 năm nay có “Kế Đô” chiếu mệnh nên sẽ gặp nhiều chuyện bất ngờ, thích hợp cho việc đi xa kiếm tiền, không nên ở nhà quá lâu. Cần chú ý đến sức khỏe và an toàn của vật nuôi trong nhà.</p><p>Nữ mệnh 1986 năm nay có sao “Thái Dương” chiếu mệnh, sao này không lợi cho nữ giới, cần phải đề phòng tai họa ập tới bất ngờ.</p>'
		},
		{
			year: '1987',
			desc: '<p>Người tuổi Mão sinh năm 1987, nạp âm ngũ hành Lư Trung Hỏa. Người này vốn thông minh tài chí, có phúc phần. Nạp âm ngũ hành 2019 - Kỷ Hợi là Bình Địa Mộc, là Ấn Tinh của tuổi Mão; lại thêm Thái Tuế tương hợp, nên năm nay, vận thế rất tốt có lợi cho địa vị, chức danh có sự thay đổi. Là một năm thích hợp cho việc mua bán bất động sản, xe cộ.</p><p>Nam mệnh 1987 năm nay gặp sao “Kế Đô” chiếu mệnh, sẽ có đột phá lớn, thích hợp đi xa cầu tài; không nên chỉ ngồi nhà mà ôm mộng xa xôi. Một phần cũng nên chú ý tới thú cưng trong nhà.</p><p>Nữ mệnh 1987 gặp sao “Thái Dương” chiếu mệnh, đây là sao bất lợi cho nữ, cẩn thận đề phòng những tai nạn bất ngờ.</p>'
		},
		{
			year: '1988',
			desc: '<p style="text-align: justify;">&nbsp;Người sinh tuổi Thìn năm 1988, nạp âm ngũ hành là Đại Lâm Mộc; đa số những người này đều có cuộc sống yên bình, hay được gần người cao quý, có danh có lợi, người nữ thì thiện lương nhu mì, ăn nói vô tư. Nạp âm ngũ hành năm 2019 là Bình Địa Mộc, tức là Tỷ Kiếp. Do xung Thái Tuế Tỷ Kiếp, cho nên năm nay gặp nhiều điều oái oăm, hay bị tiểu nhân chỉ trích hoặc bị bạn thân làm liên luỵ.</p><p>Nam mệnh tuổi 32 gặp sao “Thái Dương” chiếu mệnh, tổng thể vận thế tốt, thích hợp đi xa cầu tài; gia đình có hỷ.</p><p>Nữ mệnh tuổi 32 gặp sao Thổ Tú chiếu mệnh, “hành niên trị thổ tinh, quan sự lai tương thẩm”, năm nay cần cẩn thận chuyện thị phi, kiện tụng, tiểu nhân hãm hại, tránh đi xa.</p>'
		},
		{
			year: '1989',
			desc: '<p>Người tuổi Tị sinh năm 1989, nạp âm ngũ hành là Lâm Đại Mộc, là người thông minh lanh lợi, vợ chồng hòa thuận, thành sự như ý, đàn ông khôn ngoan sáng tạo, đàn bà biết đối nhân xử thế. Nạp âm ngũ hành năm 2019 là Tỷ Kiếp, năm nay sẽ phải đối mặt với rất nhiều sự cạnh tranh. Đồng thời xuất hiện tiểu nhân tranh công vụ lợi; nhưng cũng có quý nhân đứng ra giúp đỡ.</p><p>Nam mệnh tuổi 31 gặp sao “Thái Bạch” chiếu mệnh, chiến đấu hết mình vì công việc; những người làm việc về công chức ở nơi làm việc cần nhẫn nại.</p><p>Nữ mệnh tuổi 31 gặp sao “Thái Âm” chiếu mệnh, những người đang mang thai cần chú ý an dưỡng, chuẩn bị trước tinh thần phải sinh mổ.</p>'
		},
		{
			year: '1990',
			desc: '<p>Tuổi Ngọ 1990, nạp âm ngũ hành là Lộ Bàng Thổ, phần lớn hầu hết là người đơn giản nghĩ đâu nói đấy, sống gần người khá giả, cuộc sống khá sung túc, không lo thiếu quần áo, đất đai. Đàn ông có xu hướng cố chấp, phụ nữ có tướng vượng phu. 2019 - Kỷ Hợi, lưu niên nạp âm ngũ hành Bình Địa Mộc là Quan tinh, điều này đại diện cho công việc sẽ có nhiều không gian phát triển, nhiều cơ hội được khách hàng đánh giá cao. Những bạn làm công ăn lương hoặc khởi nghiệp thì năm nay là một năm đầy cơ hội mới, tuy nhiên áp lực tương đối lớn. Nhưng sẽ có thu hoạch tương xứng từ công sức bỏ ra.</p><p>Nam mệnh 30 tuổi năm nay gặp “Thuỷ Diệu” chiếu mệnh thích hợp đi xa, du lịch sẽ tốt và có lợi cho tài vận.</p><p>Nữ mệnh 30 tuổi gặp sao “Mộc Đức” chiếu mệnh, dễ mắc các bệnh vặt hoặc nghiêm trọng hơn thì gặp nạn mất máu, nên chú ý giữ gìn sức khoẻ.</p>'
		},
		{
			year: '1991',
			desc: '<p>Người sinh năm 1991 tuổi Mùi, nạp âm Ngũ hành là “Lộ Bàng Thổ”, người này là những người có chí khí, một đời khoan dung, lúc trẻ thường gặp nhiều tai hoạ nhưng đến trung niên làm ăn phát đạt, vợ chồng hòa hợp.</p><p>Năm Kỷ Hợi 2019, nạp âm ngũ hành “Bình Địa Mộc” tức quan tinh, năm nay là một năm có nhiều tiến bộ và thăng tiến. Những người tuổi này đi làm hay lập nghiệp, thì đều có nhiều cơ hội mới, tuy công việc áp lực tương đối lớn, nhưng sẽ đạt được nhiều thành quả.</p><p>Nam mệnh 29 tuổi, năm nay gặp sao “Thổ Tú” chiếu mệnh, nên rất dễ bị khẩu thiệt thị phi, làm việc gì không nên bảo thủ ý kiến của mình, sẵn sàng đối mặt với khó khăn thử thách.</p><p>Nữ mệnh 29 tuổi, năm nay sao “Vân Hớn” chiếu mệnh nên cẩn thận các vấn đề về sinh nở như: khó sinh, sảy thai, sinh non đối với phụ nữ mang thai. Đồng thời, đề phòng các bệnh về da.</p>'
		},
		{
			year: '1992',
			desc: '<p>Người sinh năm 1992, nạp âm ngũ hành là Kiếm Phong Kim, người tuổi này phần lớn khéo léo thông minh, tính cách ôn hoà, công danh đạt được cả. Cả nam lẫn nữ đều có chân mệnh Phú Quý. Nạp âm ngũ hành năm Mậu Tuất là “Bình Địa Mộc” Là Tài Tinh, nên năm nay cần phải dựa vào sự cố gắng của bản thân, vất vả một chút mới có được tiền tài. Trong công việc, phải chấp nhận gian khổ mới được việc, lãnh đạo mới trọng dụng và giao cho những việc quan trọng. Về mặt tình cảm, rất vượng về vận đào hoa, người đơn thân dễ gặp ý trung nhân của mình; với người đã có gia đình, cẩn thận gặp Đào hoa ảo bên ngoài.&nbsp;&nbsp;</p><p>&nbsp;Nam mệnh 28 tuổi, năm nay gặp phải sao “La Hầu” chiếu mệnh. “Hành niên trực La Hầu, chủ nhân bách sự ưu”, nên dễ phạm phải khẩu thiệt thị phi, tiểu nhân hãm hại, gặp rắc rối trong vấn đề giải quyết giấy tờ.</p><p>Nữ mệnh 28 tuổi, gặp “Kế Đô” chiếu mệnh, chủ yếu phạm thị phi nên ra ngoài đi du lịch, không nên ở lâu trong nhà</p>'
		},
		{
			year: '1993',
			desc: '<p>Người sinh năm 1993, nạp âm Ngũ hành “Kiếm Phong Kim” là những người chính trực công bằng, cả đời có của ăn của để, bình ổn đầy đủ, không tham của người khác, lạnh nhạt với người thân. Nạp âm Ngũ hành năm 2019 là “Bình Địa Mộc” có nghĩa là Tài Tinh năm nay cần phải tự thân nỗ lực, phải gian khổ mới có tiền tài, trong công việc phải chăm chỉ thật thà, mới nhận được sự đánh giá cao và trọng dụng của lãnh đạo. Về mặt tình cảm, thì vận Đào hoa rất vượng, người đơn thân rất dễ gặp ý trung nhân, người đã có gia đình cẩn thận đào hoa ảo.</p><p>Nam mệnh 27 tuổi, gặp sao “Mộc Đức” chiếu mệnh nên cẩn thận đề phòng bệnh về mắt, tránh để mắt quá mỏi; cẩn thận những bệnh về gan.</p><p>Nữ mệnh 27 tuổi gặp sao “Thủy Diệu” chiếu mệnh năm nay cần cẩn thận miệng lưỡi, tránh các hoạt động dưới nước.</p>'
		},
		{
			year: '1994',
			desc: '<p>Người tuổi Tuất sinh năm 1994, nạp âm ngũ hành là Sơn đầu hỏa, đa phần là miệng lưỡi sắc sảo, mưu trí, trung niên vất vả, danh tiếng vang xa. Năm 2019 - Kỷ Hợi, nạp âm ngũ hành là Bình Địa Mộc, là ấn tinh của tuổi Tuất 1994, nên năm nay sẽ là một năm có nhiều bước tiến mới trong cuộc sống. Năm nay, thích hợp cho tuổi Tuất bồi dưỡng bản thân, tăng cường học tập. Nếu như năm nay có các giao dịch lớn về nhà cửa, xe cộ cần lưu ý kỹ về các điểu khoản.</p><p>Nam sinh năm 1994, năm nay có “Thái Âm” chiếu mệnh, làm gì cũng nên tuỳ duyên tuỳ tâm, cần chú ý các điều khoản chi tiết trong hợp đồng.</p><p>Nữ sinh năm 1994, năm nay có sao “Thái Bạch” chiếu mệnh, cần đề phòng vấn đề về vệ sinh an toàn thực phẩm, cẩn thận bệnh lý dạ dày, cẩn thận tiểu nhân quấy nhiễu.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>'
		},
		{
			year: '1995',
			desc: '<p>Người tuổi Hợi sinh năm 1995, nạp âm ngũ hành là Sơn Đầu Hỏa, đa phần là người hòa thuận với mọi người, tuổi nhỏ gặp nhiều vận hạn, vợ chồng hòa hợp. Năm 2019, Kỷ Hợi nạp âm ngũ hành là Bình Địa Mộc là ấn tinh của tuổi Hợi, nên năm nay đối với người sinh năm 1995 sẽ là một năm có nhiều bước tiến trong cuộc sống. Năm nay thích hợp cho tuổi Hợi bồi dưỡng bản thân, học tập nâng cao nghiệp vụ; nếu có giao dịch về nhà cửa, xe cộ thì phải chú ý hợp đồng và các điều khoản.</p><p>Nam sinh năm 1995, 25 tuổi năm nay có “Kế Đô” chiếu mệnh, “Hành niên gặp Kế Đô, tai hoạ bất thời vô” chú ý đi lại an toàn, đề phòng thị phi.</p><p>Nữ sinh năm 1995, năm nay có sao “Thái Dương” chiếu mệnh, cần đề phòng các bệnh về sảy thai, khó sinh và chú ý điều tiết tâm trạng của mình.</p>'
		},
		{
			year: '1996',
			desc: '<p>Nữ mệnh 36 tuổi năm nay sao Thuỷ Diệu chiếu mệnh, dễ bị khẩu thiệt thị phi, quấy nhiễu. Đồng thời cần chú ý với những hạn liên quan đến thuỷ, hạn chế các hoạt động liên quan đến nước.</p><p>Nam mệnh 24 tuổi, năm nay sao Vân Hớn chiếu mệnh, nên chú ý cẩn thận hành sự, làm việc gì không nên đứng ra chịu trách nhiệm, cẩn thận bị thị phi, kiện tụng.</p><p>Nữ mệnh 24 tuổi, năm nay gặp sao La Hầu chiếu mệnh, cần đề phòng sảy thai, chú ý kiểm soát tâm trạng</p>'
		},
		{
			year: '1997',
			desc: '<p>Người tuổi Sửu sinh năm 1997, nạp âm ngũ hành Giản Hạ Thuỷ. Người sinh năm này phần lớn tính tình ôn hoà, không thiếu điều kiện về ăn mặc, lúc trẻ Tài Lộc luôn không thiếu, về già vui cảnh bên con cháu. Năm Kỷ Hợi 2019, Nạp âm năm là Bình Địa Mộc là thực thương, năm nay có nhiều ý tưởng sáng tạo mới trong lập nghiệp, có cơ hội được phát huy tài năng và phát triển trong công việc nhận được sự ghi nhận của mọi người xung quanh. Tuyệt đối không được không biết tự lượng sức mình, tự kiêu mà sinh ra hiểu lầm, ghen ghét của mọi người xung quanh, rồi dẫn đến khẩu thiệt thị phi, khiến cho vận đang tốt thành xấu.</p><p>Nam mệnh 23 tuổi năm nay sao “Thái Dương” chiếu mệnh gặp người khác phái và nảy sinh mối quan hệ tình cảm yêu đương. Tháng này thích hợp đi xa công tác, du lịch.</p><p>Nữ mệnh tuổi 23 năm nay sao “Thổ Tú” chiếu mệnh, nhiều chuyện không như ý xảy ra, đề phòng tiểu nhân hãm hại. Chú ý cẩn thận khiếu nại, kiện cáo.</p>'
		},
		{
			year: '1998',
			desc: '<p>Người tuổi Dần sinh năm 1998, nạp âm ngũ hành là Thành Đầu Thổ, đa phần là người ngay thẳng, chính trực, sớm thành đạt, đối xử với mọi người lịch sự, nhã nhặn. Sự nghiệp về sau ắt có cơ hội lớn. Năm 2019 - Kỷ Hợi nạp âm ngũ hành là Bình Địa Mộc là Quan tinh của tuổi Dần 1998, vậy nên năm nay người sinh năm 1998 sẽ là một năm có bước tiến mới. Về học hành, công việc có nhiều cơ hội mới xuất hiện, áp lực tương đối lớn, chỉ có cố gắng phấn đấu không ngừng nghỉ mới mong đạt được mục đích và thu hoạch đáng kể.</p><p>Nam mệnh sinh năm 1998 gặp “Thái Bạch” chiếu mệnh: Làm bất cứ việc gì cũng luôn không như ý, thuận lợi. Chỉ cần tích cực đối diện, cố gắng vượt qua mới mong thoát khỏi khó khăn thử thách.</p><p>Nữ mệnh 1998 năm nay gặp “Thái Âm” chiếu mệnh, dễ bị bệnh liên quan đến phụ khoa, cẩn thận động thai, xảy thai, cần giữ gìn sức khoẻ.</p>'
		},
		{
			year: '1999',
			desc: '<p>Người tuổi Mão sinh năm 1999, nạp âm ngũ hành Thành Đầu Thổ, có quan hệ hòa khí giữa các thành viên trong gia đình, một đời ấm no. Nạp âm ngũ hành năm 2019 - Kỷ Hợi là Bình Địa Mộc, tức Quan Tinh. Năm nay, người này sẽ có bước tiến vượt trội trong sự nghiệp, gặp nhiều cơ hội mới. Tuy áp lực công việc rất lớn nhưng thành quả thu lại cũng không hề nhỏ.</p><p>Nam mệnh 1999 tuổi Mão năm nay gặp sao “Thủy Diệu” chiếu mệnh; “hành niên trực thủy tinh, tài hỷ chủ trùng hưng”. Năm nay, sẽ có hỷ sự đáng chúc mừng, đi xa phát triển sự nghiệp sẽ có lợi về tiền tài.</p><p>Nữ giới 1999 tuổi Mão năm nay gặp sao “Mộc Đức” chiếu mệnh, dễ gặp nạn liên quan đến mất máu. Tuy nhiên, gia đình hòa hợp, được bình an.</p>'
		},
		{
			year: '2000',
			desc: '<p>Người tuổi Thìn sinh năm 2000, nạp âm ngũ hành là Bạch Lạc Kim; là người danh lợi song toàn, một đời chăm chỉ không lo thiếu ăn thiếu mặc. Nạp âm ngũ hành năm 2019 là Bình Địa Mộc tức Tài Tinh, năm nay sẽ là một năm thu hoạch đáng kể của bạn. Đi làm thuê hay bắt đầu kinh doanh, trong sự nghiệp của bạn đều sẽ xuất hiện những cơ hội mới. Tuy áp lực trong công việc khá lớn, song thành quả bạn nhận được sẽ xứng đáng với công sức bạn bỏ ra. Tuy nhiên, năm nay bạn cần lưu tâm tới sức khỏe của bản thân, không nên quá lao lực. Năm nay, xuất hiện Vụ Thủy Đào Hoa, người trẻ tuổi dễ vì chuyện yêu đương mà sao nhãng học hành, cần hết sức tỉnh táo.</p><p>Nam mệnh tuổi 20 năm nay gặp sao “Thổ Tú” chiếu mệnh, đối với sinh viên năm nay sẽ là một năm học hành vất vả, gặp được thầy giỏi. Người đi làm cần làm việc cẩn thận, tránh sai sót để lãnh đạo trách móc, giữ đầu óc tỉnh táo không để bị mê hoặc.</p><p>Nữ giới tuổi 20 năm nay gặp sao “Vân Hớn” chiếu mệnh, một mặt dễ bị nổi mụn nóng, đề phòng phá thai hay gặp vấn đề về bệnh phụ khoa, cần lưu ý khó sinh, sảy thai.</p>'
		},
		{
			year: '2001',
			desc: '<p>Người tuổi Tị sinh năm 2001, nạp âm ngũ hành là “Bạch Lạp Kim”, đa số những người này đều có mưu trí, trí khí hơn nguời, có tham vọng lớn, hành sự được quý nhân giúp đỡ, trung niên chuyển vận, về già có phúc đức, sống thọ. Nạp âm ngũ hành năm 2019 là Bình Địa Mộc, tức Tài Tinh. Năm nay tự thân nỗ lực, cầu tài dù có vất vả; nhưng chăm chỉ không ngừng trong công việc sẽ được lãnh đạo cất nhắc. Chuyện tình cảm, đào hoa vận rất vượng, người độc thân rất dễ dàng gặp được ý trung nhân.</p><p>Nam mệnh tuổi 19 gặp sao “La Hầu” chiếu mệnh, cần đề phòng tiểu nhân; đồng thời, chú ý đến sức khỏe mắt và gan.</p><p>Nữ mệnh tuổi 19 gặp sao “Kế Đô” chiếu mệnh, tránh tranh cãi với người khác về những chuyện nhỏ nhặt.</p>'
		},
		{
			year: '2002',
			desc: '<p>Tuổi Ngọ 2002, nạp âm ngũ hành là Dương Liễu Mộc, hầu hết siêng năng, tuổi trẻ có tiền nhưng không giữ&nbsp;được. 2019 - Kỷ Hợi lưu niên nạp âm ngũ hành là Bình Địa Mộc, chính là Tỷ kiếp, thanh thiếu niên năm nay kết giao bạn bè rộng rãi, dễ có bạn mới, nhưng nên nhìn gương sáng để học theo, chớ kết giao kẻ xấu, kẻo dễ bị liên lụy.</p><p>Nam mệnh 18 tuổi, năm nay gặp sao “Mộc Đức” chiếu mệnh, sắp thi cử nên chú ý không dùng thị lực quá mức, giảm tầm nhìn.</p><p>Nữ mệnh 18 tuổi, gặp “Thủy Diệu” chiếu mệnh, dễ bị khẩu thiệt thị phi, làm việc gì cũng cần giữ mọi thứ bình tĩnh, điều tiết cảm xúc bản thân.</p>'
		},
		{
			year: '2003',
			desc: '<p>Người sinh năm 2003, nạp âm Ngũ hành “Dương Liễu Mộc” là những người thẳng thắn, nhanh mồm miệng, làm việc gì cũng nhanh nhẹn, có tiền nhưng không giữ được, tiền đến lại đi. Năm nay, có Nạp âm Ngũ hành “Bình Địa Mộc”, nên dễ giao lưu được với nhiều bạn bè, dễ kết thân bạn mới. Nhưng, do năm nay Hình Thái Tuế nên cần chọn bạn mà chơi nếu không sẽ gặp cảnh xỏ mũi.</p><p>Nam mệnh 17 tuổi, gặp sao “Thái Âm” chiếu mệnh nên mọi việc có thể vừa ý, đồng thời cũng được phụ huynh và thầy cô dạy bảo nhiều.</p><p>Nữ mệnh 17 tuổi gặp sao “Thái Bạch” chiếu mệnh nên chú ý vệ sinh thực phẩm để ngăn ngừa các bệnh liên quan đến đường tiêu hóa.&nbsp;</p>'
		},
		{
			year: '2004',
			desc: '<p>Người sinh năm 2004, nạp âm ngũ hành là Tuyền Trung Thuỷ. Người tuổi này tâm tính ôn hoà, nhẹ nhàng, gia cảnh khấm khá, vợ chồng hoà thuận. Nạp âm ngũ hành năm 2019 là “Bình Địa Mộc” là Thực thương. Tuổi Thân lúc trẻ rất hiếu động, tư duy linh hoạt, rất tò mò với những cái gì mới, dễ phân tán tinh thần trong học tập. Có nhiều cơ hội tham gia các hoạt động ngoại khoá nên không chú ý học học hành. Nếu lấy Bát tự và đặt <strong>“Tháp Văn Xương Đá Đen”</strong> ở bàn học sẽ thúc đẩy tinh thần học tập được tập trung hơn.</p><p>Nam mệnh 16 tuổi, năm nay sẽ gặp sao “Kế Đô” chiếu mệnh, có những lúc sẽ gặp cảnh vô vọng.</p><p>Nữ mệnh 16 tuổi, năm nay gặp “Thái Dương” chiếu mệnh, không tốt cho nữ, chú ý đến phụ khoa và vấn đề sức khỏe, tránh sảy thai.</p>'
		},
		{
			year: '2005',
			desc: '<p>Người sinh năm 2005, nạp âm Ngũ hành “Tuyền Trung Thuỷ” là những người Tâm trực, lời nói nhanh nhẹn, có chí khí, không thiếu thứ gì, Phúc Thọ song toàn, ai ai cũng quý. Nạp âm Ngũ hành năm 2019 là “Bình Địa Mộc” có nghĩa là Thực Thương, người sinh tuổi Dậu trong năm nay đặc biệt hiếu động, tư duy linh hoạt, rất hiếu kỳ khám phá những cái mới. Nếu tham gia nhiều các hoạt động ngoại khoá, e là sẽ ảnh hưởng đến sự tập trung học tập. Nếu như có thể phối hợp Bát tự và đặt ở trên bàn vị trí Văn Xương một pháp khí <strong>“Tháp Văn Xương Đá Đen” </strong>sẽ khiến cho lấy lại được cân bằng trong học tập, tập trung học hành hơn.</p><p>Nam mệnh 15 tuổi, gặp sao “Vân Hớn” chiếu mệnh nên cẩn thận bị cám dỗ hoặc xảy ra cơ sự tranh cãi với người khác.</p><p>Nữ mệnh 15 tuổi gặp sao “La Hầu” chiếu mệnh, năm nay sẽ gặp nhiều chuyện phiền lòng, đồng thời cẩn thận tai nạn mất máu.</p>'
		},
		{
			year: '2006',
			desc: '<p>Người tuổi Tuất sinh năm 2006, nạp âm ngũ hành là Ốc Thượng Thổ, đa phần là người hào khí hòa thuận, tài vận hanh thông, tự lập sự nghiệp, trung niên vất vả, về già hưởng phúc. Năm 2019 - Kỷ Hợi, nạp âm ngũ hành là Bình Địa Mộc là quan tinh của tuổi Tuất 2006. Do bị Thái tuế khắc chế, người tuổi Tuất khi còn nhỏ hay bị phụ huynh và giáo viên dạy dỗ nghiêm khắc. Đến quãng thời gian thi cử, các bạn tuổi Tuất thường xuyên phải đối mặt với áp lực lớn, dễ sinh ra tâm lý phản kháng. Bởi vậy, người tuổi Tuất khi còn trẻ phải biết điều hòa tâm lý và áp lực, mới mong vượt qua mọi kỳ thi, đạt kết quả như ý trong học tập.</p><p>Nam mệnh sinh 2006 gặp “Thái Dương” chiếu mệnh, năm nay là một năm như ý về mọi mặt, thích hợp đi du lịch xa.</p><p>Nữ giới 2006 năm nay gặp sao “Thổ Tú” chiếu mệnh, năm nay cần đề phòng sức khoẻ của thú cưng trong nhà; đồng thời, chú ý điều chỉnh chất lượng giấc ngủ của bản thân.</p>'
		},
		{
			year: '2007',
			desc: '<p>Người tuổi Hợi sinh năm 2007, nạp âm ngũ hành là Ốc Thượng Thổ, đa phần là người khéo léo, thông minh, tự lập, thường có con tương đối muộn, tài vận hanh thông, cuộc sống bình ổn.</p><p>Năm 2019 - Kỷ Hợi nạp âm ngũ hành là Bình Địa Mộc là quan tinh của tuổi Hợi 2007, do vậy bị Thái tuế khắc chế. Với người tuổi Hợi khi còn nhỏ hay bị phụ huynh và giáo viên dạy dỗ nghiêm khắc. Đến quãng thời gian thi cử, các bạn tuổi Hợi thường xuyên phải đối mặt với áp lực lớn, dễ sinh ra tâm lý phản kháng. Bởi vậy, người tuổi Hợi khi còn trẻ phải biết điều chế tâm lý và áp lực.</p><p>Nam sinh năm 2007, 13 tuổi gặp “Thái Bạch” chiếu mệnh, năm nay về mặt học tập có phần giảm sút, cần hết sức lưu ý, cố gắng nhiều hơn nữa.&nbsp;&nbsp;</p><p>Nữ sinh năm 2007, 13 tuổi năm nay gặp “Thái Âm” chiếu mệnh, cần đề phòng giữ gìn sức khoẻ.</p>'
		},
		{
			year: '2008',
			desc: '<p>Người tuổi Tý sinh năm 2008, nạp âm ngũ hành Tích Lịch Hoả. Nguời này thông minh lanh lợi vô cùng, tâm thông văn võ, vợ chồng hoà thuận, sau này có điều kiện về kinh tế. Nạp âm ngũ hành năm 2019 là Bình Địa Mộc. Là ấn tinh, năm nay đặc biệt nhận được sự quan tâm chăm sóc của người lớn, đồng thời cũng sẽ gặp phải sự nhắc nhở dạy dỗ nghiêm khắc của thầy cô.</p><p>Nhưng cũng nhờ có thế mà sẽ có lợi cho việc học hành với Nam 12 tuổi. Năm nay gặp phải sao Thuỷ Diệu chiếu mệnh có nhiều đột phá trong học hành đồng thời thích hợp cùng cha mẹ đi du lịch nơi xa.</p><p>Với nữ 12 tuổi, năm nay gặp Mộc Đức chiếu mệnh, nên năm nay cần chú ý đến sức khoẻ, dễ gặp phải bệnh vặt đau vặt, nhưng không vấn đề gì đáng kể.</p>'
		},
		{
			year: '2009',
			desc: '<p>Người tuổi Sửu sinh năm 2009, Nạp âm ngũ hành Bích Lịch Hoả người này phần lớn thẳng tính nhanh mồm miệng, cuộc sống đầy đủ, lúc về già sẽ hưởng Phúc lớn. Năm Kỷ Hợi 2019, có nạp âm ngũ hành là Bình Địa Mộc, là Thực thương, các bạn trẻ trong năm nay vô cùng hiếu động, tư duy nhanh nhẹn, luôn tò mò khám phá với những cái mới; nên khi có nhiều cơ hội tham gia các hoạt động ngoại khoá, sẽ dễ phân tán tư tưởng học hành.&nbsp;&nbsp;</p><p>Nam mệnh 11 tuổi năm nay sao “Thổ Tú” chiếu mệnh, năm nay đi ra ngoài gặp nhiều chuyện không như ý, phụ huynh cần quan tâm nhiều hơn con cái và tạo điều kiện tốt nhất cho con. Ngoài ra, cần chú ý đến vấn đề sức khoẻ của Thú cưng trong nhà.</p><p>Với nữ mệnh 11 tuổi &nbsp;năm nay gặp sao “Vân Hớn” chiếu mệnh dễ có bệnh tật phiền não liên quan đến da, chú ý sức khoẻ của thú cưng trong nhà.</p>'
		},
	];

	fulll_desc.filter(function (row) {
		if(row.year == $scope.data.year) {
			$scope.full_desc = row;
		}
	} )

	$scope.getTimes = function(n){
	     return new Array(n);
	};

	var ads = [
		{
			"name": 'Vòng đá mắt hổ vàng',
			"desc": 'Chiếc vòng của vượng khí, tài lộc, sang trọng và sức mạnh',
			"price": 380000,
			"old_price": 590000,
			"img_100": "vong_mat_ho_vang.jpg",
			"gender": "",
			"ages": "1970 1971 1976 1977 1984 1985 1990 1991 1992 1993 1998 1999 2000 2001"
		},
		{
			"name": 'Vòng đá mắt hổ vàng tâm',
			"desc": 'Chiếc vòng của vượng khí, tài lộc, sang trọng và sức mạnh',
			"price": 380000,
			"old_price": 590000,
			"img_100": "vong_mat_ho_vang_tam.jpg",
			"gender": "",
			"ages": "1970 1971 1976 1977 1984 1985 1990 1991 1992 1993 1998 1999 2000 2001"
		},
		{
			"name": 'Vòng đá mắt hổ đỏ',
			"desc": 'Chiếc vòng mang lại may mắn, thịnh vượng, tiền tài trong phong thủy',
			"price": 380000,
			"old_price": 590000,
			"img_100": "vong_mat_ho_do.jpg",
			"gender": "",
			"ages": "1976 1977 1978 1979 1986 1987 1990 1991 1994 1995 1998 1999"
		},
		{
			"name": 'Vòng đá mát hổ xanh lục',
			"desc": 'Chiếc vòng của trí tuệ minh mẫn, giúp cân bằng năng lượng, giải tỏa căng thẳng',
			"price": 380000,
			"old_price": 590000,
			"img_100": "vong_mat_ho_xanh_luc.jpg",
			"gender": "",
			"ages": "1972 1973 1978 1979 1980 1981 1986 1987 1988 1989 1994 1995"
		},
		{
			"name": 'Vòng đá onyx',
			"desc": 'Chiếc vòng của tài lộc, sức khỏe, may mắn, bình an',
			"price": 380000,
			"old_price": 590000,
			"img_100": "vong_onyx.jpg",
			"gender": "",
			"ages": "1972 1973 1974 1975 1980 1981 1982 1983 1988 1989 1996 1997"
		},
		{
			"name": 'Vòng đá thạch anh tím',
			"desc": 'Chiếc vòng đem tới may mắn, bình an, tăng cường sức khỏe, hỗ trợ tài lộc, công việc',
			"price": 380000,
			"old_price": 590000,
			"img_100": "vong_thach_anh_tim.jpg",
			"gender": "nữ",
			"ages": "1976 1977 1978 1979 1986 1987 1990 1991 1994 1995 1998 1999"
		},
		{
			"name": 'Vòng đá thạch anh hồng',
			"desc": 'Chiếc vòng giúp tăng sự sáng tạo, kết nối các mối quan hệ, tạo sự thân thiện, tin tưởng và bền vững',
			"price": 380000,
			"old_price": 590000,
			"img_100": "vong_thach_anh_hong.jpg",
			"gender": "nữ",
			"ages": "1976 1977 1978 1979 1986 1987 1990 1991 1994 1995 1998 1999"
		},
		{
			"name": 'Vòng đá mã não đỏ',
			"desc": 'Chiếc vòng là biểu tượng cho sự trường tồn, hưng thịnh, đem lại phú quý, kéo dài tuổi thọ chủ nhân',
			"price": 380000,
			"old_price": 590000,
			"img_100": "vong_ma_nao_do.jpg",
			"gender": "nữ",
			"ages": "1976 1977 1978 1979 1986 1987 1990 1991 1994 1995 1998 1999"
		},
		{
			"name": 'Vòng đá aquamarin',
			"desc": 'Chiếc vòng giúp gia chủ giải tỏa căng thẳng, mệt mỏi, tâm thần minh mẫn, trợ giúp trên con đường công danh sự nghiệp',
			"price": 380000,
			"old_price": 590000,
			"img_100": "vong_aquamarin.jpg",
			"gender": "nữ",
			"ages": "1972 1973 1974 1975 1980 1981 1982 1983 1988 1989 1996 1997"
		},
		{
			"name": 'Vòng gỗ sưa đỏ',
			"desc": 'Chiếc vòng giúp gia chủ phát lộc, làm ăn thuận lợi, đẩy lùi tà khí, âm khí',
			"price": 750000,
			"old_price": 1050000,
			"img_100": "vong_go_sua.jpg",
			"gender": "nam",
			"ages": ""
		},
		{
			"name": 'Vòng gỗ huyết rồng',
			"desc": 'Chiếc vòng giúp cân bằng năng lượng trong cơ thể, giúp gia chủ luôn bình an, khỏe mạnh, tạo sinh khí hút tiền tài may mắn',
			"price": 390000,
			"old_price": 590000,
			"img_100": "vong_go_huyet_rong.jpg",
			"gender": "",
			"ages": ""
		},
		{
			"name": 'Vòng trầm hương',
			"desc": 'Chiếc vòng làm gia tăng vượng khí, đem lại may mắn, thuận lợi trong làm ăn, công việc',
			"price": 850000,
			"old_price": 1050000,
			"img_100": "vong_tram_huong.jpg",
			"gender": "",
			"ages": ""
		},
		{
			"name": 'Dây chuyền mặt Phật Thiên Thủ Thiên Nhãn',
			"desc": 'Vị phật độ mệnh cho người tuổi Tý',
			"price": 299000,
			"old_price": 499000,
			"img_100": "mp_tttn.jpg",
			"gender": "",
			"ages": "1960 1972 1984 1996 2008"
		},
		{
			"name": 'Dây chuyền mặt Phật Hư Không Tạng Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Sửu, Dần',
			"price": 299000,
			"old_price": 499000,
			"img_100": "mp_hkt.jpg",
			"gender": "",
			"ages": "1961 1973 1974 1985 1986 1997 1998"
		},
		{
			"name": 'Dây chuyền mặt Phật Văn Thù Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Mão',
			"price": 299000,
			"old_price": 499000,
			"img_100": "mp_vt.jpg",
			"gender": "",
			"ages": "1963 1975 1987 1999 2011"
		},
		{
			"name": 'Dây chuyền mặt Phật Phổ Hiền Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Thìn, Tỵ',
			"price": 299000,
			"old_price": 499000,
			"img_100": "mp_ph.jpg",
			"gender": "",
			"ages": "1964 1976 1977 1988 1989 2000 2001"
		},
		{
			"name": 'Dây chuyền mặt Phật Đại Thế Chí Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Ngọ',
			"price": 299000,
			"old_price": 499000,
			"img_100": "mp_dtc.jpg",
			"gender": "",
			"ages": "1966 1978 1990 2002"
		},
		{
			"name": 'Dây chuyền mặt Phật Như Lai Đại Nhật',
			"desc": 'Vị phật độ mệnh cho người tuổi Mùi, Thân',
			"price": 299000,
			"old_price": 499000,
			"img_100": "mp_nldn.jpg",
			"gender": "",
			"ages": "1967 1979 1980 1991 1992 2004"
		},
		{
			"name": 'Dây chuyền mặt Phật Bất Động Minh Vương',
			"desc": 'Vị phật độ mệnh cho người tuổi Dậu',
			"price": 299000,
			"old_price": 499000,
			"img_100": "mp_bdmv.jpg",
			"gender": "",
			"ages": "1957 1969 1981 1993 2005"
		},
		{
			"name": 'Dây chuyền mặt Phật A Di Đà',
			"desc": 'Vị phật độ mệnh cho người tuổi Tuất, Hợi',
			"price": 299000,
			"old_price": 499000,
			"img_100": "mp_add.jpg",
			"gender": "",
			"ages": "1958 1970 1971 1982 1983 1994 1995 2007"
		},
		{
			"name": 'Dây chuyền mặt phật bạc Phật Thiên Thủ Thiên Nhãn',
			"desc": 'Vị phật độ mệnh cho người tuổi Tý',
			"price": 480000,
			"old_price": 680000,
			"img_100": "m311.jpg",
			"gender": "nam",
			"ages": "1960 1972 1984 1996 2008"
		},
		{
			"name": 'Dây chuyền mặt phật bạc Phật Hư Không Tạng Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Sửu, Dần',
			"price": 480000,
			"old_price": 680000,
			"img_100": "m312.jpg",
			"gender": "nam",
			"ages": "1961 1973 1974 1985 1986 1997 1998"
		},
		{
			"name": 'Dây chuyền mặt phật bạc Phật Văn Thù Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Mão',
			"price": 480000,
			"old_price": 680000,
			"img_100": "m313.jpg",
			"gender": "nam",
			"ages": "1963 1975 1987 1999"
		},
		{
			"name": 'Dây chuyền mặt phật bạc Phật Phổ Hiền Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Thìn, Tỵ',
			"price": 480000,
			"old_price": 680000,
			"img_100": "m314.jpg",
			"gender": "nam",
			"ages": "1964 1976 1977 1988 1989 2000 2001"
		},
		{
			"name": 'Dây chuyền mặt phật bạc Phật Đại Thế Chí Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Ngọ',
			"price": 480000,
			"old_price": 680000,
			"img_100": "m315.jpg",
			"gender": "nam",
			"ages": "1966 1978 1990 2002"
		},
		{
			"name": 'Dây chuyền mặt phật bạc Phật Như Lai Đại Nhật',
			"desc": 'Vị phật độ mệnh cho người tuổi Mùi, Thân',
			"price": 480000,
			"old_price": 680000,
			"img_100": "m316.jpg",
			"gender": "nam",
			"ages": "1967 1979 1980 1991 1992 2004"
		},
		{
			"name": 'Dây chuyền mặt phật bạc Phật Bất Động Minh Vương',
			"desc": 'Vị phật độ mệnh cho người tuổi Dậu',
			"price": 480000,
			"old_price": 680000,
			"img_100": "m317.jpg",
			"gender": "nam",
			"ages": "1969 1981 1993 2005"
		},
		{
			"name": 'Dây chuyền mặt phật bạc Phật A Di Đà',
			"desc": 'Vị phật độ mệnh cho người tuổi Tuất, Hợi',
			"price": 480000,
			"old_price": 680000,
			"img_100": "m318.jpg",
			"gender": "nam",
			"ages": "1958 1970 1971 1982 1983 1994 1995 2007"
		},
		{
			"name": 'Vòng tay mặt Phật Thiên Thủ Thiên Nhãn',
			"desc": 'Vị phật độ mệnh cho người tuổi Tý',
			"price": 299000,
			"old_price": 499000,
			"img_100": "vt_tttn.jpg",
			"gender": "nữ",
			"ages": "1960 1972 1984 1996 2008"
		},
		{
			"name": 'Vòng tay mặt Phật Hư Không Tạng Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Sửu, Dần',
			"price": 299000,
			"old_price": 499000,
			"img_100": "vt_hkt.jpg",
			"gender": "nữ",
			"ages": "1961 1973 1974 1985 1986 1997 1998 2010"
		},
		{
			"name": 'Vòng tay mặt Phật Văn Thù Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Mão',
			"price": 299000,
			"old_price": 499000,
			"img_100": "vt_vt.jpg",
			"gender": "nữ",
			"ages": "1963 1975 1987 1999 2011"
		},
		{
			"name": 'Vòng tay mặt Phật Phổ Hiền Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Thìn, Tỵ',
			"price": 299000,
			"old_price": 499000,
			"img_100": "vt_ph.jpg",
			"gender": "nữ",
			"ages": "1964 1976 1977 1988 1989 2000 2001"
		},
		{
			"name": 'Vòng tay mặt Phật Đại Thế Chí Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Ngọ',
			"price": 299000,
			"old_price": 499000,
			"img_100": "vt_dtc.jpg",
			"gender": "nữ",
			"ages": "1966 1978 1990 2002"
		},
		{
			"name": 'Vòng tay mặt Phật Như Lai Đại Nhật',
			"desc": 'Vị phật độ mệnh cho người tuổi Mùi, Thân',
			"price": 299000,
			"old_price": 499000,
			"img_100": "vt_nldn.jpg",
			"gender": "nữ",
			"ages": "1967 1979 1980 1991 1992 2004"
		},
		{
			"name": 'Vòng tay mặt Phật Bất Động Minh Vương',
			"desc": 'Vị phật độ mệnh cho người tuổi Dậu',
			"price": 299000,
			"old_price": 499000,
			"img_100": "vt_bdmv.jpg",
			"gender": "nữ",
			"ages": "1969 1981 1993 2005"
		},
		{
			"name": 'Vòng tay mặt Phật A Di Đà',
			"desc": 'Vị phật độ mệnh cho người tuổi Tuất, Hợi',
			"price": 299000,
			"old_price": 499000,
			"img_100": "vt_add.jpg",
			"gender": "nữ",
			"ages": "1958 1970 1971 1982 1983 1994 1995 2007"
		},
		{
			"name": 'Nhẫn Bát nhã tâm kinh - Phật Thiên Thủ Thiên Nhãn',
			"desc": 'Vị phật độ mệnh cho người tuổi Tý',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n111.jpg",
			"gender": "nam",
			"ages": "1960 1972 1984 1996 2008"
		},
		{
			"name": 'Nhẫn Bát nhã tâm kinh - Phật Hư Không Tạng Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Sửu, Dần',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n112.jpg",
			"gender": "nam",
			"ages": "1961 1973 1974 1985 1986 1997 1998"
		},
		{
			"name": 'Nhẫn Bát nhã tâm kinh - Phật Văn Thù Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Mão',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n113.jpg",
			"gender": "nam",
			"ages": "1963 1975 1987 1999 2011"
		},
		{
			"name": 'Nhẫn Bát nhã tâm kinh - Phật Phổ Hiền Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Thìn, Tỵ',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n114.jpg",
			"gender": "nam",
			"ages": "1964 1976 1977 1988 1989 2000 2001"
		},
		{
			"name": 'Nhẫn Bát nhã tâm kinh - Phật Đại Thế Chí Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Ngọ',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n115.jpg",
			"gender": "nam",
			"ages": "1966 1978 1990 2002"
		},
		{
			"name": 'Nhẫn Bát nhã tâm kinh - Phật Như Lai Đại Nhật',
			"desc": 'Vị phật độ mệnh cho người tuổi Mùi, Thân',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n116.jpg",
			"gender": "nam",
			"ages": "1967 1979 1980 1991 1992 2004"
		},
		{
			"name": 'Nhẫn Bát nhã tâm kinh - Phật Bất Động Minh Vương',
			"desc": 'Vị phật độ mệnh cho người tuổi Dậu',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n117.jpg",
			"gender": "nam",
			"ages": "1969 1981 1993 2005"
		},
		{
			"name": 'Nhẫn Bát nhã tâm kinh - Phật A Di Đà',
			"desc": 'Vị phật độ mệnh cho người tuổi Tuất, Hợi',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n118.jpg",
			"gender": "nam",
			"ages": "1958 1970 1971 1982 1983 1994 1995 2007"
		},
		{
			"name": 'Nhẫn Um Ma Ni Bát Ni Hồng - Phật Thiên Thủ Thiên Nhãn',
			"desc": 'Vị phật độ mệnh cho người tuổi Tý',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n211.jpg",
			"gender": "nam",
			"ages": "1960 1972 1984 1996 2008"
		},
		{
			"name": 'Nhẫn Um Ma Ni Bát Ni Hồng - Phật Hư Không Tạng Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Sửu, Dần',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n212.jpg",
			"gender": "nam",
			"ages": "1961 1973 1974 1985 1986 1997 1998 2010"
		},
		{
			"name": 'Nhẫn Um Ma Ni Bát Ni Hồng - Phật Văn Thù Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Mão',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n213.jpg",
			"gender": "nam",
			"ages": "1963 1975 1987 1999 2011"
		},
		{
			"name": 'Nhẫn Um Ma Ni Bát Ni Hồng - Phật Phổ Hiền Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Thìn, Tỵ',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n214.jpg",
			"gender": "nam",
			"ages": "1964 1976 1977 1988 1989 2000 2001"
		},
		{
			"name": 'Nhẫn Um Ma Ni Bát Ni Hồng - Phật Đại Thế Chí Bồ Tát',
			"desc": 'Vị phật độ mệnh cho người tuổi Ngọ',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n215.jpg",
			"gender": "nam",
			"ages": "1966 1978 1990 2002"
		},
		{
			"name": 'Nhẫn Um Ma Ni Bát Ni Hồng - Phật Như Lai Đại Nhật',
			"desc": 'Vị phật độ mệnh cho người tuổi Mùi, Thân',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n216.jpg",
			"gender": "nam",
			"ages": "1967 1979 1980 1991 1992 2004"
		},
		{
			"name": 'Nhẫn Um Ma Ni Bát Ni Hồng - Phật Bất Động Minh Vương',
			"desc": 'Vị phật độ mệnh cho người tuổi Dậu',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n217.jpg",
			"gender": "nam",
			"ages": "1969 1981 1993 2005"
		},
		{
			"name": 'Nhẫn Um Ma Ni Bát Ni Hồng - Phật A Di Đà',
			"desc": 'Vị phật độ mệnh cho người tuổi Tuất, Hợi',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n218.jpg",
			"gender": "nam",
			"ages": "1958 1970 1971 1982 1983 1994 1995 2007"
		},
		{
			"name": 'Nhẫn Bát nhã tâm kinh',
			"desc": 'Biểu tượng của tiền tài, sức khỏe, công danh sự nghiệp , may mắn, bình an, hạnh phúc',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n221.jpg",
			"gender": "nam",
			"ages": ""
		},
		{
			"name": 'Nhẫn Bát nhã tâm kinh',
			"desc": 'Biểu tượng của tiền tài, sức khỏe, công danh sự nghiệp , may mắn, bình an, hạnh phúc',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n261.jpg",
			"gender": "nam",
			"ages": ""
		},
		{
			"name": 'Nhẫn Kim cang chú',
			"desc": 'Biểu tượng của may mắn, bình an, sức khỏe, trừ tà',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n231.jpg",
			"gender": "nam",
			"ages": ""
		},
		{
			"name": 'Nhẫn Um Ma Ni Bát Ni Hồng',
			"desc": 'Biểu tượng của may mắn, bình an, sức khỏe, trừ tà',
			"price": 450000,
			"old_price": 650000,
			"img_100": "n241.jpg",
			"gender": "nam",
			"ages": ""
		},
		{
			"name": 'Vòng Chỉ đỏ kim vàng',
			"desc": 'Chiếc vòng may mắn, tình duyên dành riêng cho bạn',
			"price": 480000,
			"old_price": 680000,
			"img_100": "cdkv.jpg",
			"gender": "nữ",
			"ages": ""
		},
		{
			"name": 'Vòng Chỉ đỏ mã não tuổi Tý',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Tý',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmn_tys.jpg",
			"gender": "nữ",
			"ages": "1960 1972 1984 1996 2008"
		},
		{
			"name": 'Vòng Chỉ đỏ mã não tuổi Sửu',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Sửu',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmn_suu.jpg",
			"gender": "nữ",
			"ages": "1961 1973 1985 1997"
		},
		{
			"name": 'Vòng Chỉ đỏ mã não tuổi Dần',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Dần',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmn_dan.jpg",
			"gender": "nữ",
			"ages": "1974 1986 1998"
		},
		{
			"name": 'Vòng Chỉ đỏ mã não tuổi Mão',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Mão',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmn_mao.jpg",
			"gender": "nữ",
			"ages": "1963 1975 1987 1999"
		},
		{
			"name": 'Vòng Chỉ đỏ mã não tuổi Thìn',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Thìn',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmn_thin.jpg",
			"gender": "nữ",
			"ages": "1964 1976 1988 2000"
		},
		{
			"name": 'Vòng Chỉ đỏ mã não tuổi Tỵ',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Tỵ',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmn_tyj.jpg",
			"gender": "nữ",
			"ages": "1955 1977 1989 2001"
		},
		{
			"name": 'Vòng Chỉ đỏ mã não tuổi Ngọ',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Ngọ',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmn_ngo.jpg",
			"gender": "nữ",
			"ages": "1966 1978 1990"
		},
		{
			"name": 'Vòng Chỉ đỏ mã não tuổi Mùi',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Mùi',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmn_mui.jpg",
			"gender": "nữ",
			"ages": "1967 1979 1991"
		},
		{
			"name": 'Vòng Chỉ đỏ mã não tuổi Thân',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Thân',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmn_than.jpg",
			"gender": "nữ",
			"ages": "1968 1980 1992"
		},
		{
			"name": 'Vòng Chỉ đỏ mã não tuổi Dậu',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Dậu',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmn_dau.jpg",
			"gender": "nữ",
			"ages": "1969 1981 1993"
		},
		{
			"name": 'Vòng Chỉ đỏ mã não tuổi Tuất',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Tuất',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmn_tuat.jpg",
			"gender": "nữ",
			"ages": "1970 1982 1994"
		},
		{
			"name": 'Vòng Chỉ đỏ mã não tuổi Hợi',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Hợi',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmn_hoi.jpg",
			"gender": "nữ",
			"ages": "1971 1983 1995"
		},
		{
			"name": 'Vòng Chỉ đỏ đá mặt trăng tuổi Tý',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Tý',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmt_tys.jpg",
			"gender": "nữ",
			"ages": "1972 1984 1996"
		},
		{
			"name": 'Vòng Chỉ đỏ đá mặt trăng tuổi Sửu',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Sửu',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmt_suu.jpg",
			"gender": "nữ",
			"ages": "1973 1985 1997"
		},
		{
			"name": 'Vòng Chỉ đỏ đá mặt trăng tuổi Dần',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Dần',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmt_dan.jpg",
			"gender": "nữ",
			"ages": "1974 1986 1998"
		},
		{
			"name": 'Vòng Chỉ đỏ đá mặt trăng tuổi Mão',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Mão',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmt_mao.jpg",
			"gender": "nữ",
			"ages": "1975 1987 1999"
		},
		{
			"name": 'Vòng Chỉ đỏ đá mặt trăng tuổi Thìn',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Thìn',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmt_thin.jpg",
			"gender": "nữ",
			"ages": "1976 1988 2000"
		},
		{
			"name": 'Vòng Chỉ đỏ đá mặt trăng tuổi Tỵ',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Tỵ',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmt_tyj.jpg",
			"gender": "nữ",
			"ages": "1977 1989 2001"
		},
		{
			"name": 'Vòng Chỉ đỏ đá mặt trăng tuổi Ngọ',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Ngọ',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmt_ngo.jpg",
			"gender": "nữ",
			"ages": "1978 1990"
		},
		{
			"name": 'Vòng Chỉ đỏ đá mặt trăng tuổi Mùi',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Mùi',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmt_mui.jpg",
			"gender": "nữ",
			"ages": "1979 1991"
		},
		{
			"name": 'Vòng Chỉ đỏ đá mặt trăng tuổi Thân',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Thân',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmt_than.jpg",
			"gender": "nữ",
			"ages": "1980 1992"
		},
		{
			"name": 'Vòng Chỉ đỏ đá mặt trăng tuổi Dậu',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Dậu',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmt_dau.jpg",
			"gender": "nữ",
			"ages": "1981 1993"
		},
		{
			"name": 'Vòng Chỉ đỏ đá mặt trăng tuổi Tuất',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Tuất',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmt_tuat.jpg",
			"gender": "nữ",
			"ages": "1982 1994"
		},
		{
			"name": 'Vòng Chỉ đỏ đá mặt trăng tuổi Hợi',
			"desc": 'Chiếc vòng tình duyên, may mắn dành riêng cho người tuổi Hợi',
			"price": 350000,
			"old_price": 590000,
			"img_100": "cdmt_hoi.jpg",
			"gender": "nữ",
			"ages": "1983 1995"
		},
		{
			"name": 'Bùa May mắn Solomon',
			"desc": 'Bùa May mắn Solomon trợ giúp gia chủ cầu tài, cầu lộc, trừ tà, giúp sự nghiệp hanh thông phát triển',
			"price": 450000,
			"old_price": 650000,
			"img_100": "ak211.jpg",
			"gender": "nam",
			"ages": ""
		},
	];

	// $scope.data = {
	// 	day: $stateParams.day,
	// 	month: $stateParams.month,
	// 	year: $stateParams.year,
	// 	lunar_year: $stateParams.lunarYear,
	// 	gender: $stateParams.gender,
	// 	name: $stateParams.name,
	// }

	$scope.ads = [];

	ads.filter(function (row) {
		// quảng cáo phù hợp với mọi tuổi => kiểm tra giới tính
		if (row.ages.length == 0) {
			// quảng cáo không phân biệt giới tính
			if (row.gender.length == 0) {
				$scope.ads.push(row);
			} else {
				// kiểm tra giới tính
				var genderVi = $scope.data.gender == 'male' ? 'nam' : 'nữ';
				if (row.gender.split(" ").indexOf(genderVi) > -1) {
					$scope.ads.push(row);
				}
			}
		} else if(row.ages.split(" ").indexOf($scope.data.year) > -1) {
			if (row.gender.length == 0) {
				$scope.ads.push(row);
			} else {
				// kiểm tra giới tính
				var genderVi = $scope.data.gender == 'male' ? 'nam' : 'nữ';
				if (row.gender.split(" ").indexOf(genderVi) > -1) {
					$scope.ads.push(row);
				}
			}
		}
		
	} )

	function shuffle(array) {
	    let counter = array.length;

	    // While there are elements in the array
	    while (counter > 0) {
	        // Pick a random index
	        let index = Math.floor(Math.random() * counter);

	        // Decrease counter by 1
	        counter--;

	        // And swap the last element with it
	        let temp = array[counter];
	        array[counter] = array[index];
	        array[index] = temp;
	    }

	    return array;
	}

	shuffle($scope.ads);

	$scope.getAdsLength = function(){
	    var results = [];
	    
	    while ($scope.ads.length) {
	        results.push($scope.ads.splice(0, Math.floor($scope.ads.length/2)));
	    }
	    
	    return results;
	}
} )