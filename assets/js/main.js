// sayHello
document.addEventListener("DOMContentLoaded", myFunction);

function myFunction() {
	Typed.new(".sayHello", {
	strings: ["Hello. ^100", "I'm glad that you're here. ^100", "No, no, no! ^10", "I'm really happy, pleased, contented, delighted, thrilled, overjoyed, elated, gleeful and thankful that you're here. ^100"]
	// loop: true
	// typeSpeed: 30
	});

	$("img").hide();
	$("ul.menu").hide();
	$(".sayHello").delay(12000).fadeOut();
	$("img").delay(12500).show(1000);
	$("ul.menu").delay(12500).show(1000);
}

// triggered click or keyboard to skip sayHello
$(window).click(function() {
	$(".sayHello").hide();
	$("img").show();
	$("ul.menu").show();
}).keydown(function() {
	$(".sayHello").hide();
	$("img").show();
	$("ul.menu").show();
});

// meme
console.image("https://i.imgur.com/hKGenSr.jpg");