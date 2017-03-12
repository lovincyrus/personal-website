/**

1. document ready
2. typed.js > fadeOut
3. img and navbar > fadeIn

**/

document.addEventListener("DOMContentLoaded", myFunction);

function myFunction() {
	Typed.new(".sayHello", {
	strings: ["Hello ✨ ^1000", "I'm glad that you're here. ^1000", "No! ^10", "No! ^10", "No! ^10", "I'm really happy, pleased, contented, delighted, thrilled, overjoyed, elated, gleeful, thankful. 🙏 🙏🏻 🙏🏼 🙏🏽 🙏🏾 🙏🏿 ^1000"]
	// loop: true
	// typeSpeed: 50
	});

	$("img").hide();
	$("ul.menu").hide();
	$("img").delay(13000).show(1000);
	$("ul.menu").delay(13000).show(1000);
	$(".sayHello").delay(16000).fadeOut();
}

console.image("https://i.imgur.com/hKGenSr.jpg");