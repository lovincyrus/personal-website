function sayHello() {
	Typed.new("#sayHello", {
	strings: ["Hello. ^100", "I'm glad that you're here. ^100", "No, no, no! ^10", "I'm really happy, pleased, contented, delighted, thrilled, overjoyed, elated, gleeful and thankful that you're here. ^100"]
	// loop: true,
	// typeSpeed: 30
	});

	// hide these lads
	$("img").hide();
	$("ul.menu-container").hide();
	$("h1.hero").hide();
	$("p.description").hide();
	$("code").hide();
	$("li.hook-me-up").hide();
	$("a.social-media").hide();
	$("#projects-container").hide();

	// fadeout
	$("#sayHello").delay(12000).fadeOut();
	$("img").delay(12500).fadeIn(1000);

	// fadein
	$("ul.menu-container").delay(12500).fadeIn(1000);
	$("h1.hero").delay(12500).fadeIn(1000);
	$("p.description").delay(12500).fadeIn(1000);
	$("code").delay(12500).fadeIn(1000);
	$("li.hook-me-up").delay(12500).fadeIn(1000);
	$("a.social-media").delay(12500).fadeIn(1000);

	$(document).click(function() {
		$("#sayHello").hide();
		$("img").fadeIn();
		$("ul.menu-container").fadeIn();
		$("h1.hero").fadeIn();
		$("p.description").fadeIn();
		$("code").fadeIn();
		$("li.hook-me-up").fadeIn();
		$("a.social-media").fadeIn();
	}).keydown(function() {
		$("#sayHello").hide();
		$("img").fadeIn();
		$("ul.menu-container").fadeIn();
		$("h1.hero").fadeIn();
		$("p.description").fadeIn();
		$("code").fadeIn();
		$("li.hook-me-up").fadeIn();
		$("a.social-media").fadeIn();
	});
}

if (!sessionStorage.getItem("is_loaded")) {
	sayHello();
	sessionStorage.setItem("is_loaded", true);
}

console.log("Cyrus Goh © 2017")
console.image("https://i.imgur.com/hKGenSr.jpg");

// change nav
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
    });
});

// switch nav content
$(document).ready(function(){
	document.getElementById("projects-container").style.display = 'none';

    $("a#about").click(function(){
		document.getElementById("main-container").style.display = '';
		document.getElementById("right-main").style.display = '';
		document.getElementById("projects-container").style.display = 'none';
    });
	$("a#projects").click(function(){
		document.getElementById("main-container").style.display = 'none';
		document.getElementById("right-main").style.display = 'none';
		document.getElementById("projects-container").style.display = '';
	});
});