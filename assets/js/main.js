/**

1. document ready
2. typed.js > fadeOut
3. img and navbar > fadeIn

**/

document.addEventListener("DOMContentLoaded", myFunction);

function myFunction() {
	Typed.new(".sayHello", {
	strings: ["Hello. ^100", "I'm glad that you're here. ^100", "No, no, no! ^10", "I'm really happy, pleased, contented, delighted, thrilled, overjoyed, elated, gleeful and thankful that you're here. ^100"]
	// loop: true
	// typeSpeed: 30
	});

	$("img").hide();
	$("ul.menu").hide();
	$(".sayHello").delay(14000).fadeOut();
	$("img").delay(12000).show(1000);
	$("ul.menu").delay(12000).show(1000);
}

console.image("https://i.imgur.com/hKGenSr.jpg");