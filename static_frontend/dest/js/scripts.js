(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
let interactions = require('./_interactions');
},{"./_interactions":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9faW50ZXJhY3Rpb25zLmpzIiwic3JjL3NjcmlwdHMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEhBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cblx0LyogU2V0IHZhcnMgKi9cblxuXHRsZXQgbWF4V2lkdGggPSAxMjgwO1xuXHRsZXQgbWluV2lkdGggPSA3MjA7XG5cdGxldCBtYXJnaW5BbmNob3JzID0gODA7XG5cdGxldCBtb2JpbGUgPSBmYWxzZTtcblxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuXHRjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcblx0Y29uc3QgYnRuX2hhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGFtXCIpO1xuXHRjb25zdCBidG5fdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b3BcIik7XG5cdGNvbnN0IGFuY2hvcnMgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xuXG5cdC8qIExpc3RlbmVycyAqL1xuXG5cdGJ0bl9oYW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hNZW51KTtcblxuXHRmb3IobGV0IGk9MDtpPGJ0bl90b3AubGVuZ3RoO2krKykge1xuXHRcdGJ0bl90b3BbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb1RvVG9wKTtcblx0fVxuXG5cdGZvcihsZXQgaT0wO2k8YW5jaG9ycy5sZW5ndGg7aSsrKSB7XG5cdFx0YW5jaG9yc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvKTtcblx0fVxuXG5cdC8qIFNsaWRlciBzZXR1cCAqL1xuXG5cdCQoXCIuc2xpZGVyXCIpLnNsaWNrKHtcblx0XHRsYXp5TG9hZDogJ29uZGVtYW5kJyxcblx0XHRpbmZpbml0ZTogdHJ1ZVxuXHR9KTtcblxuXHQvKiBHbyB0byB0b3AgKi9cblxuXHRmdW5jdGlvbiBnb1RvVG9wKGUpIHtcblx0XHRsZXQgcG9zID0gMDtcblx0XHR0cnkge1xuXHRcdFx0aWYoJCggdGhpcyApLndpZHRoKCkgPD0gbWluV2lkdGgpIHtcblx0XHRcdFx0cG9zID0gJChcImJvZHlcIikub2Zmc2V0KCkudG9wIC0gbWFyZ2luQW5jaG9ycztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBvcyA9ICQoXCJib2R5XCIpLm9mZnNldCgpLnRvcDtcblx0XHRcdH1cblx0XHRcdCQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHBvcyB9LCAnc3dpbmcnKTtcblx0XHR9XG5cdFx0Y2F0Y2goZXJyKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhlcnIpO1xuXHRcdH1cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHQvKiBNb2JpbGUgbWVuw7ogKi9cblxuXG5cdGZ1bmN0aW9uIHN3aXRjaE1lbnUoZSl7XG5cdFx0aWYoIW1vYmlsZSl7XG5cdFx0XHRtZW51LmNsYXNzTmFtZSA9IFwib3BlblwiO1xuXHRcdFx0bW9iaWxlID0gdHJ1ZTtcblx0XHR9ZWxzZXtcblx0XHRcdG1lbnUuY2xhc3NOYW1lID0gXCJjbG9zZVwiO1xuXHRcdFx0bW9iaWxlID0gZmFsc2U7XG5cdFx0fVxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG5cdFx0d2lkZVN0aWNreSgpO1xuXHR9KTtcblxuXHR3aWRlU3RpY2t5KCk7XG5cdGZ1bmN0aW9uIHdpZGVTdGlja3koKSB7XG5cdFx0aWYoICQoIHRoaXMgKS53aWR0aCgpIDwgbWF4V2lkdGggKSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpLnN0eWxlLm1heFdpZHRoID0gJChcImJvZHlcIikud2lkdGgoKSArIFwicHhcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5zdHlsZS5tYXhXaWR0aCA9IFwiXCI7XG5cdFx0fVxuXHR9XG5cblx0JChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuXHRcdGlmKG1vYmlsZSl7XG5cdFx0XHRtZW51LmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcblx0XHRcdG1vYmlsZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAwKSB7XG5cdFx0XHRpZigkKCB0aGlzICkud2lkdGgoKSA+IG1pbldpZHRoKSB7XG5cdFx0XHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreVwiKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8qIEdvIGFuY2hvcnMgKi9cblxuXHRmdW5jdGlvbiBnbyhlKSB7XG5cdFx0Y29uc29sZS5sb2coXCJob2xhXCIpO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgYW5jaG9yID0gZS50YXJnZXQuaHJlZi5zcGxpdCgnIycpO1xuXHRcdFx0YW5jaG9yID0gXCIjXCIgKyBhbmNob3JbMV07XG5cdFx0XHRpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGFuY2hvcikpIHtcblx0XHRcdFx0bGV0IHRvdGFsID0gJChhbmNob3IpLm9mZnNldCgpLnRvcCAtIG1hcmdpbkFuY2hvcnM7XG5cdFx0XHRcdCQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHRvdGFsIH0sICdzd2luZycpO1xuXHRcdFx0XHRjb25zb2xlLmxvZygkKGFuY2hvcikub2Zmc2V0KCkudG9wKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvdy5vcGVuKFwiaW5kZXgucGhwXCIgKyBhbmNob3IsIFwiX3NlbGZcIik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoKGVycikge31cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxufSk7IiwibGV0IGludGVyYWN0aW9ucyA9IHJlcXVpcmUoJy4vX2ludGVyYWN0aW9ucycpOyJdfQ==
