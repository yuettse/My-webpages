$(document).ready(function () {
	
	function Color() {
		return '#' + Math.random().toString(10).slice(2, 8);
	};

	$(".box").on("mouseenter", function () {
		$(this).css('background-color', Color());
		$(this).css('box-shadow', "0 0 20px white");
		$(this).css('z-index', "100000");
		$(this).css('height', "50px");
		$(this).css('width', "10000px");
	});

	$(".box").on("mouseleave", function () {
		$(this).css('box-shadow', "none");
		$(this).css('z-index', "1");
		$(this).css('height', "10px");
		$(this).css('width', "10000px");
	});
});
