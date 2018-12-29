(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
let interactions = require('./_interactions');
},{"./_interactions":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9faW50ZXJhY3Rpb25zLmpzIiwic3JjL3NjcmlwdHMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkhBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cblx0LyogU2V0IHZhcnMgKi9cblxuXHRpZigkKCB0aGlzICkud2lkdGgoKSA8IDEyODAgKSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5zdHlsZS5tYXhXaWR0aCA9ICQoXCJib2R5XCIpLndpZHRoKCkgKyBcInB4XCI7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5jbGFzc0xpc3QuYWRkKFwiZml4LXN0aWNreS1zaXplXCIpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUubG9nKFwiaG9sYVwiKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpLnN0eWxlLm1heFdpZHRoID0gXCJcIjtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJmaXgtc3RpY2t5LXNpemVcIik7XG5cdH1cblxuXHQvKiBTbGlkZXIgc2V0dXAgKi9cblxuXHQkKFwiLnNsaWRlclwiKS5zbGljayh7XG5cdFx0bGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG5cdFx0aW5maW5pdGU6IHRydWVcblx0fSk7XG5cblx0LyogR28gdG9wICovXG5cblx0Y29uc3QgYnRuX3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9wXCIpO1xuXG5cdGZvcihsZXQgaT0wO2k8YnRuX3RvcC5sZW5ndGg7aSsrKSB7XG5cdFx0YnRuX3RvcFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvVG9wKTtcblx0fVxuXHRmdW5jdGlvbiBnb1RvcChlKSB7XG5cdFx0bGV0IHBvcyA9IDA7XG5cdFx0dHJ5IHtcblx0XHRcdGlmKCQoIHRoaXMgKS53aWR0aCgpIDw9IDcyMCkge1xuXHRcdFx0XHRwb3MgPSAkKFwiYm9keVwiKS5vZmZzZXQoKS50b3AgLSA4MDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBvcyA9ICQoXCJib2R5XCIpLm9mZnNldCgpLnRvcDtcblx0XHRcdH1cblx0XHRcdCQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHBvcyB9LCAnc3dpbmcnKTtcblx0XHR9XG5cdFx0Y2F0Y2goZXJyKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhlcnIpO1xuXHRcdH1cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHQvKiBNb2JpbGUgbWVuw7ogKi9cblxuXHRsZXQgbW9iaWxlID0gZmFsc2U7XG5cblx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcblx0Y29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG5cdGNvbnN0IGJ0bl9oYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hhbVwiKTtcblx0YnRuX2hhbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaE1lbnUpO1xuXG5cdGlmKCQoIHRoaXMgKS53aWR0aCgpIDw9IDcyMCkge31cblxuXHRmdW5jdGlvbiBzd2l0Y2hNZW51KGUpe1xuXHRcdGlmKCFtb2JpbGUpe1xuXHRcdFx0bWVudS5jbGFzc05hbWUgPSBcIm9wZW5cIjtcblx0XHRcdG1vYmlsZSA9IHRydWU7XG5cdFx0fWVsc2V7XG5cdFx0XHRtZW51LmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcblx0XHRcdG1vYmlsZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuXHRcdGlmKCAkKCB0aGlzICkud2lkdGgoKSA8IDEyODAgKSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpLnN0eWxlLm1heFdpZHRoID0gJChcImJvZHlcIikud2lkdGgoKSArIFwicHhcIjtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikuY2xhc3NMaXN0LmFkZChcImZpeC1zdGlja3ktc2l6ZVwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5zdHlsZS5tYXhXaWR0aCA9IFwiXCI7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJmaXgtc3RpY2t5LXNpemVcIik7XG5cdFx0fVxuXHR9KTtcblxuXHQkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdFx0aWYobW9iaWxlKXtcblx0XHRcdG1lbnUuY2xhc3NOYW1lID0gXCJjbG9zZVwiO1xuXHRcdFx0bW9iaWxlID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDApIHtcblx0XHRcdGlmKCQoIHRoaXMgKS53aWR0aCgpID4gNzIwKSB7XG5cdFx0XHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreVwiKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8qIEFuY2hvcnMgYW5pbWF0aW9ucyAqL1xuXG5cdGNvbnN0IGFuY2hvcnMgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xuXHRmb3IobGV0IGk9MDtpPGFuY2hvcnMubGVuZ3RoO2krKykge1xuXHRcdGFuY2hvcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnbyk7XG5cdH1cblxuXHRmdW5jdGlvbiBnbyhlKSB7XG5cdFx0Y29uc29sZS5sb2coXCJob2xhXCIpO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgYW5jaG9yID0gZS50YXJnZXQuaHJlZi5zcGxpdCgnIycpO1xuXHRcdFx0YW5jaG9yID0gXCIjXCIgKyBhbmNob3JbMV07XG5cdFx0XHRpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGFuY2hvcikpIHtcblx0XHRcdFx0bGV0IHRvdGFsID0gJChhbmNob3IpLm9mZnNldCgpLnRvcCAtIDEwMDtcblx0XHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogdG90YWwgfSwgJ3N3aW5nJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCQoYW5jaG9yKS5vZmZzZXQoKS50b3ApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93Lm9wZW4oXCJpbmRleC5waHBcIiArIGFuY2hvciwgXCJfc2VsZlwiKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2goZXJyKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhlcnIpO1xuXHRcdH1cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxufSk7IiwibGV0IGludGVyYWN0aW9ucyA9IHJlcXVpcmUoJy4vX2ludGVyYWN0aW9ucycpOyJdfQ==
