(function($){
	"use strict";

	let responsive = false;

	const btn_ham = document.querySelector("#ham");
	const menu = document.querySelector("nav");
	btn_ham.addEventListener('click', switchMenu);

	function switchMenu(e){
		if(!responsive){
			menu.classList.add("open");
			menu.classList.remove("close");
			responsive = true;
		}else{
			menu.classList.add("close");
			menu.classList.remove("open");
			responsive = false;
		}
		e.preventDefault();
	}

})();