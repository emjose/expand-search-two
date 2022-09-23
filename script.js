$(".search-btn").click(function () {
	$(".wrapper").addClass("active");
	$(this).css("display", "none");
	$(".search-data").fadeIn(500);
	$(".close-btn").fadeIn(500);
	$(".search-data .line").addClass("active");
	setTimeout(function () {
		$("input").focus();
		$(".search-data label").fadeIn(500);
		$(".search-data span").fadeIn(500);
	}, 800);
});

$(".close-btn").click(function () {
	$(".wrapper").removeClass("active");
	$(".search-btn").fadeIn(800);
	$(".search-data").fadeOut(500);
	$(".close-btn").fadeOut(500);
	$(".search-data .line").removeClass("active");
	$("input").val("");
	$(".search-data label").fadeOut(500);
	$(".search-data span").fadeOut(500);
});

function swRegistration() {
	const heart = ["font-size: 20px", "padding: 12px", "margin: 4px 0 4px 4px", "color: rgba(238,58,136,1)"].join(";");
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register("/expand-search-two/sw.js", {
				scope: "/expand-search-two/",
			})
			.then(function (registration) {
				console.log("%c❤️", heart);
			})
			.catch(function (err) {
				console.log(err);
			});
	}
}

function consoleText() {
	console.clear();
	const styles = [
		"color: white",
		"background: rgba(238,58,136,1)",
		"font-size: 18px",
		"padding: 12px",
		"margin: 6px 0 6px 14px",
	].join(";");
	const styles2 = ["font-size: 14px", "padding: 16px", "margin: 6px 0 6px 0", "color: rgba(238,58,136,1)"].join(";");
	console.log("%cHello World! I'm Emmanuel.", styles);
	console.log("%cThank you for checking out my work!", styles2);
	const gradient = [
		"font-size: 14px",
		"color: #fff",
		"width: 200px",
		"padding: 8px",
		"margin: 6px 0 6px 14px",
		"border-radius: 4px",
		"background: rgba(238,58,136,1)",
		"background: linear-gradient( 109.6deg, rgba(238,58,136,1) 11.2%, rgba(128,162,245,1) 91.1% )",
	].join(";");
	console.log("%cPortfolio%chttps://bit.ly/3QQr1Ux", gradient, styles2);
	console.log("%cLinkedin %chttps://bit.ly/3cygAD4", gradient, styles2);
	console.log("%cGithub   %chttps://bit.ly/3iwQC6U", gradient, styles2);
	console.log("%cThe README   %chttps://bit.ly/3f69ytn", gradient, styles2);
	console.log("%cHave a wonderful day!", styles2);
}

swRegistration();
consoleText();
