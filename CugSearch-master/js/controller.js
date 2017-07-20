
var webdisplayCtrls = angular.module('webdisplayCtrls',[]);

webdisplayCtrls.controller('freewallCtrl', ['$scope', function ($scope) {

	$scope.weblist = [
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	{"name":"信息工程学院", "url":"xgxy.cug.edu.cn"},
	];


	$scope.onFreewallRepeatFinish = function(){
		freewall_init();
	}
	


	function freewall_init(){
		var wall = new Freewall(".free-wall");
		wall.reset({
			draggable: false,
			selector: '.cell',
			animate: true,
			cellW: 150,
			cellH: 70,
			onResize: function() {
				wall.refresh();
			},
			onBlockMove: function() {
				console.log(this);
			}
		});
		wall.fitWidth();
		$(window).trigger("resize");

		$(".cell").hover(function(){
	    	var weburl=$(this).children(".cover").attr("weburl");
			$(this).siblings().stop().fadeTo(0,0.4);
			$(this).children(".cover").text(weburl);
		},function(){
			var webname=$(this).children(".cover").attr("webname");
			$(this).siblings().stop().fadeTo(0,1);
			$(this).children(".cover").text(webname);
		});
		$(".cell").click(function(){
			var weburl=$(this).children(".cover").attr("weburl");
			window.location.href="http://"+weburl;
		});	
	}





}]);
