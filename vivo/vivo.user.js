// ==UserScript==
// @name         Vivo Script
// @namespace    https://Github.com/Sly321
// @author       Sly321
// @match        https://vivo.sx/*
// @grant        none
// @icon		 https://static.vivo.sx/images/favicon.ico
// @version      1.0
// @grant        none
// @updateURL	 https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/vivo/vivo.user.js

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