$(function () {
	$("body").paroller();
	$("#comp2").paroller({ factor: '1.0', type: 'foreground', direction: 'horizontal' });
	$(".codesnip").paroller({ factor: '0.1', type: 'foreground', direction: 'horizontal' });
	$("#comp0 img").paroller({ factor: '-0.7', type: 'foreground', direction: 'horizontal' });
	$("h1").paroller({ factor: '-0.7', type: 'foreground', direction: 'horizontal' });

})