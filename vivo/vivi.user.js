// ==UserScript==
// @name         Vivo Script
// @namespace    https://Github.com/Sly321
// @version      0.1
// @author       You
// @match        https://vivo.sx/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var accessBtn = document.getElementById("access");
	if(accessBtn !== null) {
		var interval;
		interval = setInterval(function() {
			if(accessBtn.innerHTML == "Continue to video") {
				accessBtn.click();
				window.clearInterval(interval);
			}
		}, 1000);
	} else {
		flowplayer().toggle();
	}
})();