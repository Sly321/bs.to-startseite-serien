// ==UserScript==
// @name         bs.to-serie
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @version      1.1.0
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
	
	var navPages = $(".pages");
	navPages.last().css("top", "52px");
	navPages.first().css("top", "30px");
	$(".navigation-panel").append($(".pages").detach());
	$(".serie > div > strong").detach();
	//$(".navigation-panel").append($(document.createElement("div")).addClass("season-label").html("Staffel"));
	//$(".navigation-panel").append($(document.createElement("div")).addClass("episode-label").html("Episode"));
	$(".pages:first > li:last").detach();
	
	$("#titleEnglish").css("font-size", "12px").css("color", "darkgrey").css("font-weight", "100");
	$("#description").detach();
	$("#newDescription").detach();
	$(".slink").detach();
	$("#video_actions").detach();
	$("#sp_left > div:first > a").detach();
	$("#sp_right > small > a").detach();
	$("#seriesdata > h3").detach();
	var expanded = false;
	$("#sp_left > div:first > p").addClass("serie-description hidden");
	$("#sp_left > div:first > strong").html("Beschreibung ▼").on("click", function() {
		if(expanded) {
			expanded = !expanded;
			$("#sp_left > div:first > p").removeClass("expanded");
			$("#sp_left > div:first > p").addClass("hidden");
			$("#sp_left > div:first > strong").html("Beschreibung ▼");
		} else {
			expanded = !expanded;
			$("#sp_left > div:first > p").removeClass("hidden");
			$("#sp_left > div:first > p").addClass("expanded");
			$("#sp_left > div:first > strong").html("Beschreibung ▲");
		}
	}).css("cursor", "pointer").css("color", "darkgray").css("font-weight", "100");
})();