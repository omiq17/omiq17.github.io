$(window).on("load", function() {
	// console.log("loaded all image");
	$("#portfolio .spinner").hide();
	$("#portfolio .showcase").css("display", "flex");
});

$(document).ready(function() {
	$(function() {
		$("a.page-scroll").bind("click", function(event) {
			var $anchor = $(this);
			$("html, body")
				.stop()
				.animate(
					{
						scrollTop: $($anchor.attr("href")).offset().top
					},
					1000
				);
			event.preventDefault();
		});
	});

	var headerHeight = $(".s").outerHeight(true);
	$(" #about, #home, #portfolio").css("padding-top", headerHeight);
	$(" #about, #portfolio").css("padding-bottom", headerHeight);

	$(".box__face")
		.on("click", function(event) {
			// console.log($(this).parent()[0]);
			rotate($(this).parent()[0]);
		})
		// Do not rotate on click to link
		.on("click", "a", function(event) {
			event.stopPropagation();
		});
});

// Rotate the box at 180*
function rotate(element) {
	let counter = element.classList[1];
	let angleValue = 180 * counter;
	let newCounter = parseInt(counter) + 1;

	$(element)
		.removeClass(counter)
		.addClass(newCounter.toString());

	$(element).css("transform", "translateZ(-50px) rotateY(-" + angleValue + "deg)");
}
