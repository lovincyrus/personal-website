// Define route components.
const About = { template: `<div id="main">
	<div id="main-container">
		<div class="about">
			<h1 class="hero">Cyrus Goh</h1>
			<p class="description">
				I am a web developer, an avid JS enthusiast and a cognitive science student at UC Davis. I love to learn by doing things, which is why I am <em>always</em> in progress. I firmly believe that it is not what technology stack you use that make the product great, it is how you implement it. While technology frameworks may not last, but photographs definitely will — you may check out my <a href="https://vsco.co/lovincyrus" target="blank_" class="here"><strong>photography work</strong></a>.
				<br><br>My utmost passion is to connect <em>human</em> and <em>technology</em>, and to build <em>user-centric</em> products. 
				<br><br><code class="note">[@] Currently exploring the startup ecosystem in <a href="https://www.google.com/maps/place/Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur/@3.1385036,101.616949,12z" target="blank_" class="here"><strong>Kuala Lumpur</strong></a></code>
				<br><code class="note">[+] Enjoy answering deep questions on <a href="https://www.deepthoughtapp.com/users/68/" target="blank_" class="here"><strong>Deep Thought</strong></a></code>
				<br><code class="note">[+] Open to <a href="cyrusgoh-resume.pdf" target="_blank" class="here"><strong>remote opportunities</strong></a> 🌟</code>
				<br><code class="note">[0] twitter <a href="https://twitter.com/cyrsgh" target="blank_" class="here"><strong>/cyrsgh</strong></a></code>
				<br><code class="note">[1] github <a href="https://github.com/lovincyrus" target="blank_" class="here"><strong>/lovincyrus</a></code>
				<br><code class="note">[2] devpost <a href="https://devpost.com/lovincyrus" target="blank_" class="here"><strong>/lovincyrus</a></code>
				<br><code class="note">[3] linkedin <a href="https://www.linkedin.com/in/cyrusgoh" target="blank_" class="here"><strong>/in/cyrusgoh</strong></a></code>
				<br><code class="note">[4] 🤝 <a href="mailto:hello@lovincyrus.com" target="blank_" class="here"><strong>hello@lovincyrus.com</strong></a></code>
				<br><code class="note">[5] <a href="https://t.me/lovincyrus" target="blank_" class="here"><strong>Ping me</strong></a> for 💬💡☕️ </code>
				<br><br><br>
				</p>
		</div>
	</div>
</div>` }

const Projects = { template: ` <div id="projects-container">

	<a class="link" href="https://dapps.trustwalletapp.com/" target="_blank">
	<div id="mouseover">	
		<div class="container trust-background">
			<h1 class="pro-name">DApps Browser</h1>
		</div>
		<div class="flex">
			<p class="brief">A browser that interacts with decentralized applications on Ethereum blockchain.</p>
		</div>
	</div>
	</a>

	<a class="link" href="https://github.com/lovincyrus/joyfeed" target="_blank">
		<div id="mouseover">
			<div class="container joyfeed-background">
				<h1 class="pro-name">joyfeed</h1>
			</div>
			<div class="flex">
				<p class="brief">Analyzes human emotions using machine learning and filters negative posts.</p>
			</div>
		</div>
	</a>

	<a class="link" href="https://github.com/lovincyrus/gimo" target="_blank">
		<div id="mouseover">	
			<div class="container gimo-background">
				<h1 class="pro-name">gimo</h1>
			</div>
			<div class="flex">
				<p class="brief">Activity tracker but for GitHub streak.</p>
			</div>
		</div>
	</a>

	<a class="link" href="https://github.com/lovincyrus/penguiin" target="_blank">
		<div id="mouseover">
			<div class="container penguiin-background">
				<h1 class="pro-name">penguiin</h1>
			</div>
			<div class="flex">
				<p class="brief">NASA Space Apps Challenge 2017</p>
			</div>
		</div>
	</a>

	<a class="link" href="https://github.com/lovincyrus/terminal-quotes" target="_blank">
		<div id="mouseover">	
			<div class="container quotes-background">
				<h1 class="pro-name">terminal quotes</h1>
			</div>
			<div class="flex">
				<p class="brief">Display quotes on Terminal.</p>
			</div>
		</div>
	</a>

	<a class="link" href="https://github.com/lovincyrus/ping-stocks" target="_blank">
		<div id="mouseover">	
			<div class="container ping-stocks-background">
				<h1 class="pro-name">ping-stocks</h1>
			</div>
			<div class="flex">
				<p class="brief">Trade stock prices and send emails.</p>
			</div>
		</div>
	</a>

</div> ` }


// Define some routes
const routes = [
	{ path: '/about', component: About, alias: '/' },
	{ path: '/projects', component: Projects }
]


// Create the router instance and pass the `routes` option
const router = new VueRouter({
	routes
})


// Create and mount the root instance.
const app = new Vue({
	router,
	data: {
		aboutActive: 1,
		projectActive: 0
	},
	mounted: function() {
		if (!sessionStorage.getItem("is_loaded") && (router.currentRoute.path === '/about' || router.currentRoute.path === '/')) {
			this.sayHello();
			sessionStorage.setItem("is_loaded", true);
		}

		if (router.currentRoute.path === '/projects') {
			this.aboutActive = 0;
			this.projectActive = 1;
		}

	    console.image("https://i.imgur.com/hKGenSr.jpg");
	},
	methods: {
		sayHello: function() {
			Typed.new("#sayHello", {
				strings: ["Hello. ^100", "I'm glad that you're here. ^100", "No, no, no! ^10", "I'm really happy, pleased, contented, delighted, thrilled, overjoyed, elated, gleeful and thankful that you're here. ^100"]
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

router.beforeEach((to, from, next) => {
	if (to.path === '/about') {
		app.aboutActive = 1;
		app.projectActive = 0;
	} else if (to.path === '/projects') {
		app.projectActive = 1;
		app.aboutActive = 0;
	}

	next();
})