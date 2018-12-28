(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
let interactions = require('./_interactions');
},{"./_interactions":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9faW50ZXJhY3Rpb25zLmpzIiwic3JjL3NjcmlwdHMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pJQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG5cdC8qIFNldCB2YXJzICovXG5cblx0bGV0IGRldmljZV9tYXJnaW4gPSAyMDtcblxuXHRpZigkKHRoaXMpLndpZHRoKCkgPiAxMDI0KSB7XG5cdFx0ZGV2aWNlX21hcmdpbiA9IDIwO1xuXHR9IGVsc2UgaWYoJCh0aGlzKS53aWR0aCgpID4gNzIwKSB7XG5cdFx0ZGV2aWNlX21hcmdpbiA9IDEwO1xuXHR9IGVsc2Uge1xuXHRcdGRldmljZV9tYXJnaW4gPSA1O1xuXHR9XG5cblx0aWYoJCggdGhpcyApLndpZHRoKCkgPCAxMjgwKSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5zdHlsZS5tYXhXaWR0aCA9ICQodGhpcykud2lkdGgoKSAtIGRldmljZV9tYXJnaW4gKiA2ICsgXCJweFwiO1xuXHR9IGVsc2Uge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikuc3R5bGUubWF4V2lkdGggPSBcIlwiO1xuXHR9XG5cblx0LyogU2xpZGVyIHNldHVwICovXG5cblx0JChcIi5zbGlkZXJcIikuc2xpY2soe1xuXHRcdGxhenlMb2FkOiAnb25kZW1hbmQnLCAvLyBvbmRlbWFuZCBwcm9ncmVzc2l2ZSBhbnRpY2lwYXRlZFxuXHRcdGluZmluaXRlOiB0cnVlXG5cdH0pO1xuXG5cdC8qIEdvIHRvcCAqL1xuXG5cdGNvbnN0IGJ0bl90b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvcFwiKTtcblxuXHRmb3IobGV0IGk9MDtpPGJ0bl90b3AubGVuZ3RoO2krKykge1xuXHRcdGJ0bl90b3BbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb1RvcCk7XG5cdH1cblx0ZnVuY3Rpb24gZ29Ub3AoZSkge1xuXHRcdGxldCBwb3MgPSAwO1xuXHRcdHRyeSB7XG5cdFx0XHRpZigkKCB0aGlzICkud2lkdGgoKSA8PSA3MjApIHtcblx0XHRcdFx0cG9zID0gJChcImJvZHlcIikub2Zmc2V0KCkudG9wIC0gODA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwb3MgPSAkKFwiYm9keVwiKS5vZmZzZXQoKS50b3A7XG5cdFx0XHR9XG5cdFx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBwb3MgfSwgJ3N3aW5nJyk7XG5cdFx0fVxuXHRcdGNhdGNoKGVycikge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coZXJyKTtcblx0XHR9XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cblx0LyogTW9iaWxlIG1lbsO6ICovXG5cblx0bGV0IG1vYmlsZSA9IGZhbHNlO1xuXG5cdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG5cdGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuXHRjb25zdCBidG5faGFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoYW1cIik7XG5cdGJ0bl9oYW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hNZW51KTtcblxuXHRpZigkKCB0aGlzICkud2lkdGgoKSA8PSA3MjApIHt9XG5cblx0ZnVuY3Rpb24gc3dpdGNoTWVudShlKXtcblx0XHRpZighbW9iaWxlKXtcblx0XHRcdC8vIG1lbnUuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG5cdFx0XHQvLyBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zZVwiKTtcblx0XHRcdG1lbnUuY2xhc3NOYW1lID0gXCJvcGVuXCI7XG5cdFx0XHRtb2JpbGUgPSB0cnVlO1xuXHRcdH1lbHNle1xuXHRcdFx0Ly8gbWVudS5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIik7XG5cdFx0XHQvLyBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHRcdFx0bWVudS5jbGFzc05hbWUgPSBcImNsb3NlXCI7XG5cdFx0XHRtb2JpbGUgPSBmYWxzZTtcblx0XHR9XG5cdFx0LyogaWYoJChcImJvZHlcIikucG9zaXRpb24oKS50b3AgPiAwKSB7XG5cdFx0XHRtZW51LnN0eWxlLnRvcCA9IDA7XHRcblx0XHR9ZWxzZXtcblx0XHRcdG1lbnUuc3R5bGUudG9wID0gJzgwcHgnO1xuXHRcdH0gKi9cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuXHRcdGlmKCAkKCB0aGlzICkud2lkdGgoKSA8IDEyODAgKSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpLnN0eWxlLm1heFdpZHRoID0gJCh0aGlzKS53aWR0aCgpIC0gZGV2aWNlX21hcmdpbiAqIDYgKyBcInB4XCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikuc3R5bGUubWF4V2lkdGggPSBcIlwiO1xuXHRcdH1cblx0fSk7XG5cblx0JChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuXHRcdGlmKG1vYmlsZSl7XG5cdFx0XHRtZW51LmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcblx0XHRcdG1vYmlsZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAwKSB7XG5cdFx0XHRpZigkKCB0aGlzICkud2lkdGgoKSA+IDcyMCkge1xuXHRcdFx0XHRoZWFkZXIuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XG5cdFx0fVxuXHR9KTtcblxuXHQvKiBBbmNob3JzIGFuaW1hdGlvbnMgKi9cblxuXHRjb25zdCBhbmNob3JzID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcblx0Zm9yKGxldCBpPTA7aTxhbmNob3JzLmxlbmd0aDtpKyspIHtcblx0XHRhbmNob3JzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ28pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ28oZSkge1xuXHRcdGNvbnNvbGUubG9nKFwiaG9sYVwiKTtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGFuY2hvciA9IGUudGFyZ2V0LmhyZWYuc3BsaXQoJyMnKTtcblx0XHRcdGFuY2hvciA9IFwiI1wiICsgYW5jaG9yWzFdO1xuXHRcdFx0aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhbmNob3IpKSB7XG5cdFx0XHRcdGxldCB0b3RhbCA9ICQoYW5jaG9yKS5vZmZzZXQoKS50b3AgLSA1MDtcblx0XHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogdG90YWwgfSwgJ3N3aW5nJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCQoYW5jaG9yKS5vZmZzZXQoKS50b3ApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93Lm9wZW4oXCJpbmRleC5waHBcIiArIGFuY2hvciwgXCJfc2VsZlwiKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2F0Y2goZXJyKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhlcnIpO1xuXHRcdH1cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxufSk7IiwibGV0IGludGVyYWN0aW9ucyA9IHJlcXVpcmUoJy4vX2ludGVyYWN0aW9ucycpOyJdfQ==
