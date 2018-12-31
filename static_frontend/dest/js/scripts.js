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
	const topPos = $("body").offset().top;

	/* Listeners */

	btn_ham.addEventListener('click', switchMenu);

	for(let i=0;i<btn_top.length;i++) {
		btn_top[i].addEventListener('click', goToTop);
	}

	for(let i=0;i<anchors.length;i++) {
		anchors[i].addEventListener('click', goToAndStop);
	}

	/* Slider setup */

	$(".slider").slick();

	/* Go to top */

	function goToTop(e) {
		let pos = 0;
		try {
			($(this).width() <= minWidth)? pos = topPos - marginAnchors : pos = topPos;
			$('html, body').animate({ scrollTop: pos }, 'swing');
		}
		catch(err) {}
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

	/* Set right sticky width */

	wideSticky();
	$(window).resize(function() {
		wideSticky();
	});

	function wideSticky() {
		($(document).width() < maxWidth)? header.style.maxWidth = $("body").width() + "px" : header.style.maxWidth = "";
	}

	$(document).scroll(function() {
		if(mobile){
			menu.className = "close";
			mobile = false;
		}
		if($(this).scrollTop() > 0) {
			if($(this).width() > minWidth) header.classList.add("sticky");
		} else {
			header.classList.remove("sticky")
		}
	});

	/* Go to differents anchors */

	function goToAndStop(e) {
		try {
			let anchor = e.target.href.split('#');
			anchor = "#" + anchor[1];
			if(document.querySelector(anchor)) {
				let total = $(anchor).offset().top - marginAnchors;
				$('html, body').animate({ scrollTop: total }, 'swing');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9faW50ZXJhY3Rpb25zLmpzIiwic3JjL3NjcmlwdHMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cblx0LyogU2V0IHZhcnMgKi9cblxuXHRsZXQgbWF4V2lkdGggPSAxMjgwO1xuXHRsZXQgbWluV2lkdGggPSA3MjA7XG5cdGxldCBtYXJnaW5BbmNob3JzID0gODA7XG5cdGxldCBtb2JpbGUgPSBmYWxzZTtcblxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuXHRjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcblx0Y29uc3QgYnRuX2hhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGFtXCIpO1xuXHRjb25zdCBidG5fdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b3BcIik7XG5cdGNvbnN0IGFuY2hvcnMgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xuXHRjb25zdCB0b3BQb3MgPSAkKFwiYm9keVwiKS5vZmZzZXQoKS50b3A7XG5cblx0LyogTGlzdGVuZXJzICovXG5cblx0YnRuX2hhbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaE1lbnUpO1xuXG5cdGZvcihsZXQgaT0wO2k8YnRuX3RvcC5sZW5ndGg7aSsrKSB7XG5cdFx0YnRuX3RvcFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvVG9Ub3ApO1xuXHR9XG5cblx0Zm9yKGxldCBpPTA7aTxhbmNob3JzLmxlbmd0aDtpKyspIHtcblx0XHRhbmNob3JzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29Ub0FuZFN0b3ApO1xuXHR9XG5cblx0LyogU2xpZGVyIHNldHVwICovXG5cblx0JChcIi5zbGlkZXJcIikuc2xpY2soKTtcblxuXHQvKiBHbyB0byB0b3AgKi9cblxuXHRmdW5jdGlvbiBnb1RvVG9wKGUpIHtcblx0XHRsZXQgcG9zID0gMDtcblx0XHR0cnkge1xuXHRcdFx0KCQodGhpcykud2lkdGgoKSA8PSBtaW5XaWR0aCk/IHBvcyA9IHRvcFBvcyAtIG1hcmdpbkFuY2hvcnMgOiBwb3MgPSB0b3BQb3M7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zIH0sICdzd2luZycpO1xuXHRcdH1cblx0XHRjYXRjaChlcnIpIHt9XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cblx0LyogTW9iaWxlIG1lbsO6ICovXG5cblx0ZnVuY3Rpb24gc3dpdGNoTWVudShlKXtcblx0XHRpZighbW9iaWxlKXtcblx0XHRcdG1lbnUuY2xhc3NOYW1lID0gXCJvcGVuXCI7XG5cdFx0XHRtb2JpbGUgPSB0cnVlO1xuXHRcdH1lbHNle1xuXHRcdFx0bWVudS5jbGFzc05hbWUgPSBcImNsb3NlXCI7XG5cdFx0XHRtb2JpbGUgPSBmYWxzZTtcblx0XHR9XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cblx0LyogU2V0IHJpZ2h0IHN0aWNreSB3aWR0aCAqL1xuXG5cdHdpZGVTdGlja3koKTtcblx0JCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcblx0XHR3aWRlU3RpY2t5KCk7XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIHdpZGVTdGlja3koKSB7XG5cdFx0KCQoZG9jdW1lbnQpLndpZHRoKCkgPCBtYXhXaWR0aCk/IGhlYWRlci5zdHlsZS5tYXhXaWR0aCA9ICQoXCJib2R5XCIpLndpZHRoKCkgKyBcInB4XCIgOiBoZWFkZXIuc3R5bGUubWF4V2lkdGggPSBcIlwiO1xuXHR9XG5cblx0JChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuXHRcdGlmKG1vYmlsZSl7XG5cdFx0XHRtZW51LmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcblx0XHRcdG1vYmlsZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZigkKHRoaXMpLnNjcm9sbFRvcCgpID4gMCkge1xuXHRcdFx0aWYoJCh0aGlzKS53aWR0aCgpID4gbWluV2lkdGgpIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreVwiKVxuXHRcdH1cblx0fSk7XG5cblx0LyogR28gdG8gZGlmZmVyZW50cyBhbmNob3JzICovXG5cblx0ZnVuY3Rpb24gZ29Ub0FuZFN0b3AoZSkge1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgYW5jaG9yID0gZS50YXJnZXQuaHJlZi5zcGxpdCgnIycpO1xuXHRcdFx0YW5jaG9yID0gXCIjXCIgKyBhbmNob3JbMV07XG5cdFx0XHRpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGFuY2hvcikpIHtcblx0XHRcdFx0bGV0IHRvdGFsID0gJChhbmNob3IpLm9mZnNldCgpLnRvcCAtIG1hcmdpbkFuY2hvcnM7XG5cdFx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiB0b3RhbCB9LCAnc3dpbmcnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvdy5vcGVuKFwiaW5kZXgucGhwXCIgKyBhbmNob3IsIFwiX3NlbGZcIik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoKGVycikge31cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxufSk7IiwibGV0IGludGVyYWN0aW9ucyA9IHJlcXVpcmUoJy4vX2ludGVyYWN0aW9ucycpOyJdfQ==
