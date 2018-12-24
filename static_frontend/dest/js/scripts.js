(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
let interactions = require('./_interactions');
},{"./_interactions":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9faW50ZXJhY3Rpb25zLmpzIiwic3JjL3NjcmlwdHMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIoZnVuY3Rpb24oJCl7XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdGxldCBtb2JpbGUgPSBmYWxzZTtcblxuXHRjb25zdCBidG5fdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b3BcIik7XG5cdGNvbnN0IGJ0bl9oYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hhbVwiKTtcblx0Y29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG5cdGJ0bl9oYW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hNZW51KTtcblxuXHRidG5fdG9wLmZvckVhY2godG9wID0+IHtcblx0XHR0b3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb1RvcCk7XG5cdH0pO1xuXG5cdGpxdWVyeShkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuXHRcdGlmKG1vYmlsZSl7XG5cdFx0XHRtZW51LmNsYXNzTGlzdC5hZGQoXCJjbG9zZVwiKTtcblx0XHRcdG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG5cdFx0XHRtb2JpbGUgPSBmYWxzZTtcblx0XHR9XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIHN3aXRjaE1lbnUoZSl7XG5cdFx0aWYoIW1vYmlsZSl7XG5cdFx0XHRtZW51LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuXHRcdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvc2VcIik7XG5cdFx0XHRtb2JpbGUgPSB0cnVlO1xuXHRcdH1lbHNle1xuXHRcdFx0bWVudS5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIik7XG5cdFx0XHRtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHRcdFx0bW9iaWxlID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGpxdWVyeShcImJvZHlcIikucG9zaXRpb24oKS50b3AgPiAwKSB7XG5cdFx0XHRtZW51LnN0eWxlLnRvcCA9IDA7XHRcblx0XHR9ZWxzZXtcblx0XHRcdG1lbnUuc3R5bGUudG9wID0gJzgwcHgnO1xuXHRcdH1cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnb1RvcChlKSB7XG5cdFx0bGV0IHRvcCA9IGpxdWVyeShcImJvZHlcIikub2Zmc2V0KCkudG9wO1xuXHRcdGpxdWVyeSgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogdG9wIH0sICdzd2luZycpO1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdC8qIFNsaWRlciAqL1xuXG5cdGpxdWVyeShcIi5zbGlkZXJcIikuc2xpY2soe1xuXHRcdGxhenlMb2FkOiAnb25kZW1hbmQnLCAvLyBvbmRlbWFuZCBwcm9ncmVzc2l2ZSBhbnRpY2lwYXRlZFxuXHRcdGluZmluaXRlOiB0cnVlXG5cdH0pO1xuXG59KSgpOyIsImxldCBpbnRlcmFjdGlvbnMgPSByZXF1aXJlKCcuL19pbnRlcmFjdGlvbnMnKTsiXX0=
