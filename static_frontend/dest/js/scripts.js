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
},{}],2:[function(require,module,exports){
let interactions = require('./_interactions');
},{"./_interactions":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9faW50ZXJhY3Rpb25zLmpzIiwic3JjL3NjcmlwdHMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRkEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuXHQvKiBTbGlkZXIgc2V0dXAgKi9cblxuXHQkKFwiLnNsaWRlclwiKS5zbGljayh7XG5cdFx0bGF6eUxvYWQ6ICdvbmRlbWFuZCcsIC8vIG9uZGVtYW5kIHByb2dyZXNzaXZlIGFudGljaXBhdGVkXG5cdFx0aW5maW5pdGU6IHRydWVcblx0fSk7XG5cblx0LyogR28gdG9wICovXG5cblx0Y29uc3QgYnRuX3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9wXCIpO1xuXHRmb3IobGV0IGk9MDtpPGJ0bl90b3AubGVuZ3RoO2krKykge1xuXHRcdGJ0bl90b3BbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb1RvcCk7XG5cdH1cblx0ZnVuY3Rpb24gZ29Ub3AoZSkge1xuXHRcdHRyeSB7XG5cdFx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKFwiYm9keVwiKS5vZmZzZXQoKS50b3AgfSwgJ3N3aW5nJyk7XG5cdFx0fVxuXHRcdGNhdGNoKGVycikge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coZXJyKTtcblx0XHR9XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cblx0LyogTW9iaWxlIG1lbsO6ICovXG5cblx0bGV0IG1vYmlsZSA9IGZhbHNlO1xuXG5cdGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuXHRjb25zdCBidG5faGFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoYW1cIik7XG5cdGJ0bl9oYW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hNZW51KTtcblx0ZnVuY3Rpb24gc3dpdGNoTWVudShlKXtcblx0XHRpZighbW9iaWxlKXtcblx0XHRcdC8vIG1lbnUuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG5cdFx0XHQvLyBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zZVwiKTtcblx0XHRcdG1lbnUuY2xhc3NOYW1lID0gXCJvcGVuXCI7XG5cdFx0XHRtb2JpbGUgPSB0cnVlO1xuXHRcdH1lbHNle1xuXHRcdFx0Ly8gbWVudS5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIik7XG5cdFx0XHQvLyBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHRcdFx0bWVudS5jbGFzc05hbWUgPSBcImNsb3NlXCI7XG5cdFx0XHRtb2JpbGUgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYoJChcImJvZHlcIikucG9zaXRpb24oKS50b3AgPiAwKSB7XG5cdFx0XHRtZW51LnN0eWxlLnRvcCA9IDA7XHRcblx0XHR9ZWxzZXtcblx0XHRcdG1lbnUuc3R5bGUudG9wID0gJzgwcHgnO1xuXHRcdH1cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblx0JChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuXHRcdGlmKG1vYmlsZSl7XG5cdFx0XHQvLyBtZW51LmNsYXNzTGlzdC5hZGQoXCJjbG9zZVwiKTtcblx0XHRcdC8vIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG5cdFx0XHRtZW51LmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcblx0XHRcdG1vYmlsZSA9IGZhbHNlO1xuXHRcdH1cblx0fSk7XG5cblx0LyogQW5jaG9ycyBhbmltYXRpb25zICovXG5cblx0Y29uc3QgYW5jaG9ycyA9IG1lbnUucXVlcnlTZWxlY3RvckFsbChcImFcIik7XG5cdGZvcihsZXQgaT0wO2k8YW5jaG9ycy5sZW5ndGg7aSsrKSB7XG5cdFx0YW5jaG9yc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdvKGUpIHtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGFuY2hvciA9IGUudGFyZ2V0LmhyZWYuc3BsaXQoJyMnKTtcblx0XHRcdGFuY2hvciA9IFwiI1wiICsgYW5jaG9yWzFdO1xuXHRcdFx0aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhbmNob3IpKSB7XG5cdFx0XHRcdCQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoYW5jaG9yKS5vZmZzZXQoKS50b3AgfSwgJ3N3aW5nJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aW5kb3cub3BlbihcImluZGV4LnBocFwiICsgYW5jaG9yLCBcIl9zZWxmXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaChlcnIpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKGVycik7XG5cdFx0fVxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG59KTsiLCJsZXQgaW50ZXJhY3Rpb25zID0gcmVxdWlyZSgnLi9faW50ZXJhY3Rpb25zJyk7Il19
