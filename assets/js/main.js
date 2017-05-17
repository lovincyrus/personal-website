// Typed.js
function sayHello() {
	Typed.new("#sayHello", {
	strings: ["Hello. ^100", "I'm glad that you're here. ^100", "No, no, no! ^10", "I'm really happy, pleased, contented, delighted, thrilled, overjoyed, elated, gleeful and thankful that you're here. ^100"]
	// loop: true,
	// typeSpeed: 30
	});

	$("img").hide();
	$("ul.menu").hide();
	$("h1.hero").hide();
	$("p.description").hide();
	$("code").hide();
	$("#sayHello").delay(12000).fadeOut();
	$("img").delay(12500).fadeIn(1000);
	$("ul.menu").delay(12500).fadeIn(1000);
	$("h1.hero").delay(12500).fadeIn(1000);
	$("p.description").delay(12500).fadeIn(1000);
	$("code").delay(12500).fadeIn(1000);

	$(document).click(function() {
		$("#sayHello").hide();
		$("img").fadeIn();
		$("ul.menu").fadeIn();
		$("h1.hero").fadeIn();
		$("p.description").fadeIn();
		$("code").fadeIn();
	}).keydown(function() {
		$("#sayHello").hide();
		$("img").fadeIn();
		$("ul.menu").fadeIn();
		$("h1.hero").fadeIn();
		$("p.description").fadeIn();
		$("code").fadeIn();
	});
}

if (!sessionStorage.getItem("is_loaded")) {
	sayHello();
	sessionStorage.setItem("is_loaded", true);
} else if (sessionStorage.getItem("is_loaded") == true) {
	console.log("it's loaded bruh");
} else { console.log("oh well"); }
	

// meme
console.image("https://i.imgur.com/hKGenSr.jpg");


$(function() {
   $(".menu").click(function() {
      // remove classes from all
      $(".menu").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });
});