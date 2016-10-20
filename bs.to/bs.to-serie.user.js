// ==UserScript==
// @name         bs.to-serie
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @version      1.0.0
// @description  For fixing the bs.to series site
// @match        https://bs.to/serie/*
// @icon         https://s.bs.to/favicon.ico
// @grant        unsafeWindow
// @updateURL	 https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/bs.to/bs.to-serien.user.js
// @require		 https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
	var serieContainer = $(document.querySelector(".serie"));
	
	// Start
	unsafeWindow.buildLogin();
	unsafeWindow.buildNav();
	unsafeWindow.clearRoot();
	unsafeWindow.appendEssentialsToRoot();
	
	var root = $("#root");
	serieContainer.addClass("standard-css");
	root.append(serieContainer);
})();