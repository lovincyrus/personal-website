// Define route components.
const About = {
	template: `<div id="main">
	<div id="main-container">
		<div class="about">
			<h1 class="hero">Cyrus Goh</h1>
			<p class="description">
			I am a software engineer, app developer, JS enthusiast and a cognitive science student at UC Davis. I love to learn by doing things, which is why I am <em>always</em> in progress. I firmly believe that it is not what technology stack you use that make the product great, it is how you implement it. While technology frameworks may not last, but photographs definitely will — you may check out my <a href="https://vsco.co/lovincyrus" target="blank_" class="here"><strong>photography work</strong></a>. Learn <a href="http://blog.lovincyrus.com" target="blank_" class="here"><strong>more</strong></a> about why I do what I do.
				<br><br>My utmost passion is to connect <em>human</em> and <em>technology</em>, and to build <em>user-centric</em> products. 
				<br><br><code class="note">[!] Currently seeking new grad opportunities! 🎓</code>
				<br><code class="note">[-] Previously at <a href="http://8xprotocol.com" target="blank_" class="here"><strong>8x Protocol</strong></a>, <a href="https://hackdavis.io/" target="blank_" class="here"><strong>HackDavis</strong></a>, <a href="https://trustwalletapp.com/" target="blank_" class="here"><strong>Trust Wallet</strong></a>, <a href="https://myfave.com/" target="blank_" class="here"><strong>Fave</strong></a></code>
				<br><code class="note">[+] Enjoy answering deep questions on <a href="https://www.deepthoughtapp.com/users/68/" target="blank_" class="here"><strong>Deep Thought</strong></a></code>
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
</div>`
}

const Projects = {
	template: ` <div id="projects-container">

	<a class="link" href="https://hackdavis.io" target="_blank">
	<div id="mouseover">	
		<div class="container hackdavis-background">
			<h1 class="pro-name">HackDavis</h1>
		</div>
		<div class="flex">
			<p class="brief">HackDavis 2019 | February 9 - 10, 2019</p>
		</div>
	</div>
	</a>

	<a class="link" href="https://devpost.com/software/cao" target="_blank">
	<div id="mouseover">	
		<div class="container cao-background">
			<h1 class="pro-name">CAO</h1>
		</div>
		<div class="flex">
			<p class="brief">ETHSanFrancisco</p>
		</div>
	</div>
	</a>

	<a class="link" href="https://people.davisakpsi.com" target="_blank">
	<div id="mouseover">	
		<div class="container people-background">
			<h1 class="pro-name">People</h1>
		</div>
		<div class="flex">
			<p class="brief">Discover brothers in the professional world</p>
		</div>
	</div>
	</a>

	<a class="link" href="https://dapps.trustwalletapp.com/" target="_blank">
	<div id="mouseover">	
		<div class="container trust-background">
			<h1 class="pro-name">DApps Browser</h1>
		</div>
		<div class="flex">
			<p class="brief">A browser that interacts with decentralized applications on Ethereum blockchain</p>
		</div>
	</div>
	</a>

	<a class="link" href="https://github.com/lovincyrus/joyfeed" target="_blank">
		<div id="mouseover">
			<div class="container joyfeed-background">
				<h1 class="pro-name">joyfeed</h1>
			</div>
			<div class="flex">
				<p class="brief">Analyzes human emotions using machine learning and filters negative posts</p>
			</div>
		</div>
	</a>

	<a class="link" href="https://github.com/lovincyrus/wakie-wakie" target="_blank">
		<div id="mouseover">
			<div class="container wakie-background">
				<h1 class="pro-name">wakie wakie</h1>
			</div>
			<div class="flex">
				<p class="brief">Automated wake up call using Twilio Voice</p>
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
				<p class="brief">Display quotes on Terminal</p>
			</div>
		</div>
	</a>

</div> `
}


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

		console.log("Contact: hello@lovincyrus.com")
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