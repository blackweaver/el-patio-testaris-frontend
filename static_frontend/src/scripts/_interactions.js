$(document).ready(function() {

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
		try {
			$('html,body').animate({ scrollTop: $("body").offset().top }, 'swing');
		}
		catch(err) {
			// console.log(err);
		}
		e.preventDefault();
	}

	/* Mobile menú */

	let mobile = false;

	const menu = document.querySelector("nav");
	const btn_ham = document.querySelector("#ham");
	btn_ham.addEventListener('click', switchMenu);
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
		if($("body").position().top > 0) {
			menu.style.top = 0;	
		}else{
			menu.style.top = '80px';
		}
		e.preventDefault();
	}
	$(document).scroll(function() {
		if(mobile){
			// menu.classList.add("close");
			// menu.classList.remove("open");
			menu.className = "close";
			mobile = false;
		}
	});

	/* Anchors animations */

	const anchors = menu.querySelectorAll("a");
	for(let i=0;i<anchors.length;i++) {
		anchors[i].addEventListener('click', go);
	}

	function go(e) {
		try {
			let anchor = e.target.href.split('#');
			anchor = "#" + anchor[1];
			if(document.querySelector(anchor)) {
				$('html,body').animate({ scrollTop: $(anchor).offset().top }, 'swing');
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