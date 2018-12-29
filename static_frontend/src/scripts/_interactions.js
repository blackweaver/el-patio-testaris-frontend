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

	/* Listeners */

	btn_ham.addEventListener('click', switchMenu);

	for(let i=0;i<btn_top.length;i++) {
		btn_top[i].addEventListener('click', goToTop);
	}

	for(let i=0;i<anchors.length;i++) {
		anchors[i].addEventListener('click', go);
	}

	/* Slider setup */

	$(".slider").slick({
		lazyLoad: 'ondemand',
		infinite: true
	});

	/* Go to top */

	function goToTop(e) {
		let pos = 0;
		try {
			if($( this ).width() <= minWidth) {
				pos = $("body").offset().top - marginAnchors;
			} else {
				pos = $("body").offset().top;
			}
			$('html,body').animate({ scrollTop: pos }, 'swing');
		}
		catch(err) {
			// console.log(err);
		}
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

	$(window).resize(function() {
		wideSticky();
	});

	wideSticky();
	function wideSticky() {
		if( $( this ).width() < maxWidth ) {
			document.querySelector("header").style.maxWidth = $("body").width() + "px";
		} else {
			document.querySelector("header").style.maxWidth = "";
		}
	}

	$(document).scroll(function() {
		if(mobile){
			menu.className = "close";
			mobile = false;
		}
		if($(window).scrollTop() > 0) {
			if($( this ).width() > minWidth) {
				header.classList.add("sticky");
			}
		} else {
			header.classList.remove("sticky");
		}
	});

	/* Go anchors */

	function go(e) {
		console.log("hola");
		try {
			let anchor = e.target.href.split('#');
			anchor = "#" + anchor[1];
			if(document.querySelector(anchor)) {
				let total = $(anchor).offset().top - marginAnchors;
				$('html,body').animate({ scrollTop: total }, 'swing');
				console.log($(anchor).offset().top);
			} else {
				window.open("index.php" + anchor, "_self");
			}
		}
		catch(err) {}
		e.preventDefault();
	}

});