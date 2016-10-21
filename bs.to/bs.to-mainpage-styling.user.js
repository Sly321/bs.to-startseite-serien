// ==UserScript==
// @name         bs.to-mainpage-styling
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @description  Styling für die Main Page.
// @include      https://bs.to/
// @include      https://bs.to/settings/series
// @include      https://bs.to/home
// @include      https://bs.to/serie/*
// @icon         https://s.bs.to/favicon.ico
// @version      1.1.5
// @updateURL    https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/bs.to/bs.to-mainpage-styling.user.js
// @require		   https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @grant        unsafeWindow
// ==/UserScript==

(function() {
  'use strict';
  // Standard css
	unsafeWindow.addGlobalStyle("a.nav-link { text-decoration: none; transition: all 0.5s ease; } a.nav-link:hover { box-shadow: inset 0px -10px 15px -10px #1b70d2; border-bottom: 1px solid #2a8af8; padding: 0 25px 0 25px; }");
	unsafeWindow.addGlobalStyle(".navigation-panel > label { position: absolute; }");
	unsafeWindow.addGlobalStyle(".navigation-panel > .label-Favoriten { top: 30px; left: 6px; }");
	unsafeWindow.addGlobalStyle(".navigation-panel > .label-Serien { top: 48px; left: 6px; }");
	unsafeWindow.addGlobalStyle(".navigation-panel > .label-Sitcoms { top: 66px; left: 6px; }");
	unsafeWindow.addGlobalStyle(".navigation-panel > .label-Upcoming { top: 84px; left: 6px; }");
	unsafeWindow.addGlobalStyle(".navigation-panel > .label-Finished { top: 102px; left: 6px; }");
	unsafeWindow.addGlobalStyle(".navigation-panel > .label-Anime { top: 30px; right: 6px; }");
	unsafeWindow.addGlobalStyle(".navigation-panel > .label-Season-2016 { top: 48px; right: 6px; }");
	unsafeWindow.addGlobalStyle(".navigation-panel > .label-Classics { top: 66px; right: 6px; }");
	unsafeWindow.addGlobalStyle(".navigation-panel > .label-Anime-Finished { top: 84px; right: 6px; }");
	unsafeWindow.addGlobalStyle(".navigation-panel > hr { width: 100%; float: left; }");

	// Color related
	unsafeWindow.addGlobalStyle(".serienElement:nth-child(2n+1) { background: #cfddff }");
	unsafeWindow.addGlobalStyle(".serienElement.seen { background: #dadada; }");
	unsafeWindow.addGlobalStyle(".serienElement.seen > a { color: #b3b3b3; }");
	//unsafeWindow.addGlobalStyle(".serienElement.highlighted { background: #cfddff }");

	// Favorites
	unsafeWindow.addGlobalStyle(".standard-css { background: white; padding: 7px; box-shadow: 1px 5px 10px -1px darkgrey; float: left; border-radius: 0; border: 1px solid #ccc; margin: 5px 0 0 5px; }");
	unsafeWindow.addGlobalStyle(".list-container { width: 422px; overflow-y: auto; height: 700px; }");

	// Serie
	unsafeWindow.addGlobalStyle("#sp_left { width: 645px; }");
	unsafeWindow.addGlobalStyle(".pages > li { width: 16px; height: 16px; line-height: 16px; font-size: 12px; border: 1px solid rgb(204, 204, 204); border-radius: 100%; }");
	unsafeWindow.addGlobalStyle(".pages > li > a { border-radius: 100%; }");
	unsafeWindow.addGlobalStyle(".pages > li.button { border: 1px solid rgb(204, 204, 204); border-radius: 5px;}");
	unsafeWindow.addGlobalStyle(".pages > li.button > a { border-radius: 5px;}");
	unsafeWindow.addGlobalStyle(".pages > li.watched { background-color: rgba(46, 204, 113, 0.5) !important; }");
	unsafeWindow.addGlobalStyle(".pages > li.current { background-color: rgba(52,152,219,0.6) !important; }");
	unsafeWindow.addGlobalStyle(".epiInfo { display: none; position: absolute; background-color: white; border: 1px solid black; z-index: 100; margin-left: -200px; padding: 5px; text-align: left; width: 200px; }");
	unsafeWindow.addGlobalStyle(".pages > li:hover > .epiInfo { display: block; }");
	unsafeWindow.addGlobalStyle(".pages { position: absolute; left: 5px; width: 90%; overflow: visible; }");
	unsafeWindow.addGlobalStyle(".season-label { position: absolute; left: 6px; top: 36px; font-size: 14px; }");
	unsafeWindow.addGlobalStyle(".episode-label { position: absolute; left: 6px; top: 57px; font-size: 14px; }");
	unsafeWindow.addGlobalStyle(".serie-description { overflow: hidden; }");
	unsafeWindow.addGlobalStyle(".serie-description.hidden { height: 0; }");
	unsafeWindow.addGlobalStyle(".serie-description.expanded { height: auto; }");
	unsafeWindow.addGlobalStyle("#sp_right img { box-shadow: 5px 5px 10px -2px black; }");
	unsafeWindow.addGlobalStyle("strong { -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }");
	unsafeWindow.addGlobalStyle("iframe { box-shadow: 5px 5px 10px -2px black;}");
	unsafeWindow.addGlobalStyle("#sp_left > a > img { width: 600px; box-shadow: 5px 5px 10px -2px black; } ");
	unsafeWindow.addGlobalStyle("#sp_left > h2 { font-size: 18px; }");
	unsafeWindow.addGlobalStyle("#titleGerman { font-size: 18px; margin-top: 5px; }");
})();
