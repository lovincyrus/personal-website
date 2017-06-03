// Define route components.
const About = { template: `<div id="main">
	<div id="main-container">
		<div class="about">
			<h1 class="hero">Cyrus Goh</h1>
			<p class="description">
				I am a full stack web developer, front end engineer, an avid Python enthusiast and a cognitive science student at UC Davis. I love to learn by doing things, which is why I am <em>always</em> in progress. I firmly believe that it is not what technology stack you use that make the product great, it is how you implement it. While technology frameworks may not last, but photographs definitely will — you may check out my  <a href="https://vsco.co/lovincyrus" target="blank_" class="here"><strong>photography work</strong></a>.<br><br>My utmost passion is to connect <em>human</em> and <em>technology</em>, and to build <em>user-centric</em> products.</p>
			<code>[!] Currently accepting new projects for Summer 2017 or remote.</code>
		</div>
	</div>

	<div id="contact-container">
		<div class="contact">
			<ul class="link">
				<li class="hook-me-up">twitter</li>
				<a href="https://twitter.com/cyrsgh" class="social-media" target="_blank">/cyrsgh</a>

				<li class="hook-me-up">github</li>
				<a href="https://github.com/lovincyrus" class="social-media" target="_blank">/lovincyrus</a>

				<li class="hook-me-up">linkedin</li>
				<a href="https://www.linkedin.com/in/cyrusgoh" class="social-media" target="_blank">/in/cyrusgoh</a>

				<li class="hook-me-up">email</li>
				<a href="mailto:hello@lovincyrus.com" class="social-media">hello@lovincyrus.com</a>
			</ul>
		</div>
	</div>
</div>` }

const Projects = { template: `	<div id="projects-container">
		<a class="link" href="https://github.com/lovincyrus/joyfeed" target="_blank">
			<div class="container joyfeed-background mouseover">
				<h1 class="pro-name">joyfeed</h1>
				<p class="brief">Analyzes human emotions using machine learning and filters negative posts.</p>
			</div>
		</a>

		<a class="link" href="https://www.lovincyrus.com/fhda" target="_blank">
			<div class="container fhda-background mouseover">
				<h1 class="pro-name">fhda</h1>
				<p class="brief">Gathers FHDA International Alumni.</p>
			</div>
		</a>

		<a class="link" href="https://github.com/lovincyrus/gimo" target="_blank">
			<div class="container gimo-background mouseover">
				<h1 class="pro-name">gimo</h1>
				<p class="brief">Activity tracker but for GitHub streak.</p>
			</div>
		</a>

		<a class="link" href="https://github.com/lovincyrus/penguiin" target="_blank">
			<div class="container penguiin-background mouseover">
				<h1 class="pro-name">penguiin</h1>
				<p class="brief">NASA Space Apps Challenge 2017</p>
			</div>
		</a>

		<a class="link" href="https://github.com/lovincyrus/terminal-quotes" target="_blank">
			<div class="container quotes-background mouseover">
				<h1 class="pro-name">terminal quotes</h1>
				<p class="brief">Display quotes on Terminal.</p>
			</div>
		</a>
	</div>` }




// Define some routes
// const routes = [
// 	{ path: '/about', component: About, alias: '/' },
// 	{ path: '/projects', component: Projects }
// ]


// // Create the router instance and pass the `routes` option
// const router = new VueRouter({
// 	routes
// })


// Create and mount the root instance.
const app = new Vue({
	router,
	mounted: function() {
		if (!sessionStorage.getItem("is_loaded")) {
			this.sayHello();
			sessionStorage.setItem("is_loaded", true);
		}

		$('a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $('a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	    });

	    console.image("https://i.imgur.com/hKGenSr.jpg");
	},
	methods: {
		sayHello: function() {
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
	}
}).$mount('#navbar')