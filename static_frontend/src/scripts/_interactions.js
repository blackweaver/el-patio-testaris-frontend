$(document).ready(function() {

	/* Set vars */

	let device_margin = 20;

	if($(this).width() > 1024) {
		device_margin = 20;
	} else if($(this).width() > 720) {
		device_margin = 10;
	} else {
		device_margin = 5;
	}

	if($( this ).width() < 1280) {
		document.querySelector("header").style.maxWidth = $(this).width() - device_margin * 6 + "px";
	} else {
		document.querySelector("header").style.maxWidth = "";
	}

	/* Slider setup */

	$(".slider").slick({
		lazyLoad: 'ondemand', // ondemand progressive anticipated
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
			// menu.classList.add("open");
			// menu.classList.remove("close");
			menu.className = "open";
			mobile = true;
		}else{
			// menu.classList.add("close");
			// menu.classList.remove("open");
			menu.className = "close";
			mobile = false;
		}
		/* if($("body").position().top > 0) {
			menu.style.top = 0;	
		}else{
			menu.style.top = '80px';
		} */
		e.preventDefault();
	}

	$(window).resize(function() {
		if( $( this ).width() < 1280 ) {
			document.querySelector("header").style.maxWidth = $(this).width() - device_margin * 6 + "px";
		} else {
			document.querySelector("header").style.maxWidth = "";
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
				let total = $(anchor).offset().top - 50;
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