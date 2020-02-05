let projects = [
	{
		title: "Joyoddhoney",
		caption: "A cultural website.",
		image:
			"https://res.cloudinary.com/omiq17/image/upload/q_auto/v1501085935/portfolio/Screenshot_from_2017-07-26_22-45-10.jpg",
		link: "http://joyoddhoney.herokuapp.com"
	},
	{
		title: "Random Quote Machine",
		caption: "A quotation generator.",
		image:
			"https://res.cloudinary.com/omiq17/image/upload/q_auto/v1501085935/portfolio/Selection_004.jpg",
		link: "https://s.codepen.io/omiq17/full/GZpGRN"
	},
	{
		title: "Tic Tac Toe",
		caption: "A game.<br/><span>You can play.</span>",
		image:
			"https://res.cloudinary.com/omiq17/image/upload/q_auto/v1501085935/portfolio/screenshot.jpg",
		link: "http://raqib.me/tictactoe"
	},
	{
		title: "Tribute To Tareque Masud",
		caption: "A tribute page for Tareque Masud.",
		image:
			"https://res.cloudinary.com/omiq17/image/upload/q_auto/v1501085935/portfolio/Selection_006.jpg",
		link: "https://s.codepen.io/omiq17/full/JGVyQz"
	}
];

projects.forEach(function(project) {
	let scene =
		'<div class="scene">' +
		'<div class="box 1">' +
		'<div class="box__face box__face--front">' +
		"<img " +
		'alt="' +
		project.title.toLowerCase() +
		'"' +
		'src="' +
		project.image +
		'"' +
		'class="img-responsive"' +
		"/>" +
		"</div>" +
		'<div class="box__face box__face--back">' +
		"<h2>" +
		project.title +
		"</h2>" +
		"<p>" +
		project.caption +
		"</p>" +
		'<a href="' +
		project.link +
		'" target="_blank">checkout</a>' +
		"</div>" +
		'<div class="box__face box__face--right"></div>' +
		'<div class="box__face box__face--left"></div>' +
		'<div class="box__face box__face--top"></div>' +
		'<div class="box__face box__face--bottom"></div>' +
		"</div>" +
		"</div>";

	$(".showcase").append(scene);
});
