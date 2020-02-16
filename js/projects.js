let projects = [
	{
		title: "Wisekeep",
		caption: "Storage mangament system",
		type: "Professional project, Role: Frontend Developer",
		image:
			"https://res.cloudinary.com/omiq17/image/upload/c_fit,h_500,w_800/v1581828850/portfolio/wisekeep.png",
		link: "https://wisekeep.hk/"
	},
	{
		title: "Doctors Manga",
		caption: "Android Mobile App for reading Doctors related comics.",
		type: "Professional project, Role: React Native App Developer",
		image:
			"https://res.cloudinary.com/omiq17/image/upload/v1581836391/portfolio/doctors_manga.png",
		link: "https://play.google.com/store/apps/details?id=co.jp.doctors_manga"
	},
	{
		title: "Joyoddhoney",
		caption: "Cultural website",
		type: "Personal project",
		image:
			"https://res.cloudinary.com/omiq17/image/upload/v1501087942/portfolio/joyoddhoney.png",
		link: "http://joyoddhoney.herokuapp.com"
	},
	// {
	// 	title: "Random Quote Machine",
	// 	caption: "Quotation generator",
	// 	type: "Personal project",
	// 	image:
	// 		"https://res.cloudinary.com/omiq17/image/upload/v1501088115/portfolio/quote-machine.png",
	// 	link: "https://s.codepen.io/omiq17/full/GZpGRN"
	// },
	{
		title: "Tic Tac Toe",
		caption: "Paper-and-pencil Game",
		type: "Personal project",
		image:
			"https://res.cloudinary.com/omiq17/image/upload/q_auto/v1501085935/portfolio/screenshot.jpg",
		link: "http://raqib.me/tictactoe"
	},
	{
		title: "Checkers",
		caption: "Board Game",
		type: "Personal project",
		image: "https://res.cloudinary.com/omiq17/image/upload/v1581843617/portfolio/checkers.png",
		link: "http://raqib.me/checkers/"
	},
	{
		title: "Tribute To Tareque Masud",
		caption: "A tribute page for Tareque Masud",
		type: "Personal project",
		image: "https://res.cloudinary.com/omiq17/image/upload/v1501088129/portfolio/tribute.png",
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
		'<p class="type">' +
		project.type +
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
