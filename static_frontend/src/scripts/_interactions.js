(function($){
	"use strict";

	let mobile = false;

	const btn_top = document.querySelectorAll(".top");
	const btn_ham = document.querySelector("#ham");
	const menu = document.querySelector("nav");
	btn_ham.addEventListener('click', switchMenu);

	btn_top.forEach(top => {
		top.addEventListener('click', goTop);
	});

	jquery(document).scroll(function() {
		if(mobile){
			menu.classList.add("close");
			menu.classList.remove("open");
			mobile = false;
		}
	});

	function switchMenu(e){
		if(!mobile){
			menu.classList.add("open");
			menu.classList.remove("close");
			mobile = true;
		}else{
			menu.classList.add("close");
			menu.classList.remove("open");
			mobile = false;
		}
		if(jquery("body").position().top > 0) {
			menu.style.top = 0;	
		}else{
			menu.style.top = '80px';
		}
		e.preventDefault();
	}

	function goTop(e) {
		let top = jquery("body").offset().top;
		jquery('html,body').animate({ scrollTop: top }, 'swing');
		e.preventDefault();
	}

	/* Slider */

	jquery(".slider").slick({
		lazyLoad: 'ondemand', // ondemand progressive anticipated
		infinite: true
	});

})();