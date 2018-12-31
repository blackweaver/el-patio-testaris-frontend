$(document).ready(function() {

	/* Set vars */

	let maxWidth = 1280;
	let minWidth = 720;
	let marginAnchors = 80;
	let mobile = false;

	const header = document.querySelector("header");
	const menu = document.querySelector("nav");
	const btn_ham = document.querySelector("#ham");
	const btn_top = document.querySelectorAll(".top");
	const anchors = menu.querySelectorAll("a");
	const topPos = $("body").offset().top;

	/* Listeners */

	btn_ham.addEventListener('click', switchMenu);

	for(let i=0;i<btn_top.length;i++) {
		btn_top[i].addEventListener('click', goToTop);
	}

	for(let i=0;i<anchors.length;i++) {
		anchors[i].addEventListener('click', goToAndStop);
	}

	/* Slider setup */

	$(".slider").slick();

	/* Go to top */

	function goToTop(e) {
		let pos = 0;
		try {
			($(this).width() <= minWidth)? pos = topPos - marginAnchors : pos = topPos;
			$('html, body').animate({ scrollTop: pos }, 'swing');
		}
		catch(err) {}
		e.preventDefault();
	}

	/* Mobile menú */

	function switchMenu(e){
		if(!mobile){
			menu.className = "open";
			mobile = true;
		}else{
			menu.className = "close";
			mobile = false;
		}
		e.preventDefault();
	}

	/* Set right sticky width */

	wideSticky();
	$(window).resize(function() {
		wideSticky();
	});

	function wideSticky() {
		($(document).width() < maxWidth)? header.style.maxWidth = $("body").width() + "px" : header.style.maxWidth = "";
	}

	$(document).scroll(function() {
		if(mobile){
			menu.className = "close";
			mobile = false;
		}
		if($(this).scrollTop() > 0) {
			if($(this).width() > minWidth) header.classList.add("sticky");
		} else {
			header.classList.remove("sticky")
		}
	});

	/* Go to differents anchors */

	function goToAndStop(e) {
		try {
			let anchor = e.target.href.split('#');
			anchor = "#" + anchor[1];
			if(document.querySelector(anchor)) {
				let total = $(anchor).offset().top - marginAnchors;
				$('html, body').animate({ scrollTop: total }, 'swing');
			} else {
				window.open("index.php" + anchor, "_self");
			}
		}
		catch(err) {}
		e.preventDefault();
	}

});