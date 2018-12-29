$(document).ready(function() {

	/* Set vars */

	if($( this ).width() < 1280 ) {
		document.querySelector("header").style.maxWidth = $("body").width() + "px";
		document.querySelector("header").classList.add("fix-sticky-size");
	} else {
		console.log("hola");
		document.querySelector("header").style.maxWidth = "";
		document.querySelector("header").classList.remove("fix-sticky-size");
	}

	/* Slider setup */

	$(".slider").slick({
		lazyLoad: 'ondemand',
		infinite: true
	});

	/* Go top */

	const btn_top = document.querySelectorAll(".top");

	for(let i=0;i<btn_top.length;i++) {
		btn_top[i].addEventListener('click', goTop);
	}
	function goTop(e) {
		let pos = 0;
		try {
			if($( this ).width() <= 720) {
				pos = $("body").offset().top - 80;
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

	let mobile = false;

	const header = document.querySelector("header");
	const menu = document.querySelector("nav");
	const btn_ham = document.querySelector("#ham");
	btn_ham.addEventListener('click', switchMenu);

	if($( this ).width() <= 720) {}

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
		if( $( this ).width() < 1280 ) {
			document.querySelector("header").style.maxWidth = $("body").width() + "px";
			document.querySelector("header").classList.add("fix-sticky-size");
		} else {
			document.querySelector("header").style.maxWidth = "";
			document.querySelector("header").classList.remove("fix-sticky-size");
		}
	});

	$(document).scroll(function() {
		if(mobile){
			menu.className = "close";
			mobile = false;
		}
		if($(window).scrollTop() > 0) {
			if($( this ).width() > 720) {
				header.classList.add("sticky");
			}
		} else {
			header.classList.remove("sticky");
		}
	});

	/* Anchors animations */

	const anchors = menu.querySelectorAll("a");
	for(let i=0;i<anchors.length;i++) {
		anchors[i].addEventListener('click', go);
	}

	function go(e) {
		console.log("hola");
		try {
			let anchor = e.target.href.split('#');
			anchor = "#" + anchor[1];
			if(document.querySelector(anchor)) {
				let total = $(anchor).offset().top - 100;
				$('html,body').animate({ scrollTop: total }, 'swing');
				console.log($(anchor).offset().top);
			} else {
				window.open("index.php" + anchor, "_self");
			}
		}
		catch(err) {
			// console.log(err);
		}
		e.preventDefault();
	}

});