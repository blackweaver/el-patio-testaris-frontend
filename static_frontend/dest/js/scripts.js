(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

	$(document).resize(function() {
		$( "#log" ).append( "<div>Handler for .resize() called.</div>" );
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
},{}],2:[function(require,module,exports){
let interactions = require('./_interactions');
},{"./_interactions":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9faW50ZXJhY3Rpb25zLmpzIiwic3JjL3NjcmlwdHMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUdBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cblx0LyogU2xpZGVyIHNldHVwICovXG5cblx0JChcIi5zbGlkZXJcIikuc2xpY2soe1xuXHRcdGxhenlMb2FkOiAnb25kZW1hbmQnLCAvLyBvbmRlbWFuZCBwcm9ncmVzc2l2ZSBhbnRpY2lwYXRlZFxuXHRcdGluZmluaXRlOiB0cnVlXG5cdH0pO1xuXG5cdC8qIEdvIHRvcCAqL1xuXG5cdGNvbnN0IGJ0bl90b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvcFwiKTtcblx0Zm9yKGxldCBpPTA7aTxidG5fdG9wLmxlbmd0aDtpKyspIHtcblx0XHRidG5fdG9wW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29Ub3ApO1xuXHR9XG5cdGZ1bmN0aW9uIGdvVG9wKGUpIHtcblx0XHRsZXQgcG9zID0gMDtcblx0XHR0cnkge1xuXHRcdFx0aWYoJCggdGhpcyApLndpZHRoKCkgPD0gNzIwKSB7XG5cdFx0XHRcdHBvcyA9ICQoXCJib2R5XCIpLm9mZnNldCgpLnRvcCAtIDgwO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cG9zID0gJChcImJvZHlcIikub2Zmc2V0KCkudG9wO1xuXHRcdFx0fVxuXHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zIH0sICdzd2luZycpO1xuXHRcdH1cblx0XHRjYXRjaChlcnIpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKGVycik7XG5cdFx0fVxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdC8qIE1vYmlsZSBtZW7DuiAqL1xuXG5cdGxldCBtb2JpbGUgPSBmYWxzZTtcblxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuXHRjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcblx0Y29uc3QgYnRuX2hhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGFtXCIpO1xuXHRidG5faGFtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoTWVudSk7XG5cblx0aWYoJCggdGhpcyApLndpZHRoKCkgPD0gNzIwKSB7fVxuXG5cdGZ1bmN0aW9uIHN3aXRjaE1lbnUoZSl7XG5cdFx0aWYoIW1vYmlsZSl7XG5cdFx0XHQvLyBtZW51LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuXHRcdFx0Ly8gbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvc2VcIik7XG5cdFx0XHRtZW51LmNsYXNzTmFtZSA9IFwib3BlblwiO1xuXHRcdFx0bW9iaWxlID0gdHJ1ZTtcblx0XHR9ZWxzZXtcblx0XHRcdC8vIG1lbnUuY2xhc3NMaXN0LmFkZChcImNsb3NlXCIpO1xuXHRcdFx0Ly8gbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcblx0XHRcdG1lbnUuY2xhc3NOYW1lID0gXCJjbG9zZVwiO1xuXHRcdFx0bW9iaWxlID0gZmFsc2U7XG5cdFx0fVxuXHRcdC8qIGlmKCQoXCJib2R5XCIpLnBvc2l0aW9uKCkudG9wID4gMCkge1xuXHRcdFx0bWVudS5zdHlsZS50b3AgPSAwO1x0XG5cdFx0fWVsc2V7XG5cdFx0XHRtZW51LnN0eWxlLnRvcCA9ICc4MHB4Jztcblx0XHR9ICovXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cblx0JChkb2N1bWVudCkucmVzaXplKGZ1bmN0aW9uKCkge1xuXHRcdCQoIFwiI2xvZ1wiICkuYXBwZW5kKCBcIjxkaXY+SGFuZGxlciBmb3IgLnJlc2l6ZSgpIGNhbGxlZC48L2Rpdj5cIiApO1xuXHR9KTtcblxuXHQkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdFx0aWYobW9iaWxlKXtcblx0XHRcdG1lbnUuY2xhc3NOYW1lID0gXCJjbG9zZVwiO1xuXHRcdFx0bW9iaWxlID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDApIHtcblx0XHRcdGlmKCQoIHRoaXMgKS53aWR0aCgpID4gNzIwKSB7XG5cdFx0XHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreVwiKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8qIEFuY2hvcnMgYW5pbWF0aW9ucyAqL1xuXG5cdGNvbnN0IGFuY2hvcnMgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xuXHRmb3IobGV0IGk9MDtpPGFuY2hvcnMubGVuZ3RoO2krKykge1xuXHRcdGFuY2hvcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnbyk7XG5cdH1cblxuXHRmdW5jdGlvbiBnbyhlKSB7XG5cdFx0Y29uc29sZS5sb2coXCJob2xhXCIpO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgYW5jaG9yID0gZS50YXJnZXQuaHJlZi5zcGxpdCgnIycpO1xuXHRcdFx0YW5jaG9yID0gXCIjXCIgKyBhbmNob3JbMV07XG5cdFx0XHRpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGFuY2hvcikpIHtcblx0XHRcdFx0bGV0IHRvdGFsID0gJChhbmNob3IpLm9mZnNldCgpLnRvcCAtIDUwO1xuXHRcdFx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiB0b3RhbCB9LCAnc3dpbmcnKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJChhbmNob3IpLm9mZnNldCgpLnRvcCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aW5kb3cub3BlbihcImluZGV4LnBocFwiICsgYW5jaG9yLCBcIl9zZWxmXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaChlcnIpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKGVycik7XG5cdFx0fVxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG59KTsiLCJsZXQgaW50ZXJhY3Rpb25zID0gcmVxdWlyZSgnLi9faW50ZXJhY3Rpb25zJyk7Il19
