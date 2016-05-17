// ==UserScript==
// @name         Streamcloud Banner Removal
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @version      1.0
// @description  Removes the Banner of JWPlayer from the Stream after 5 sec.
// @author       Sly321
// @icon         http://streamcloud.eu/favicon.ico
// @match        http://streamcloud.eu/*
// @updateURL    https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/streamcloud/banner-removal.user.js
// @grant        none
// ==/UserScript==

jwplayer().onReady(function() {
    $("#mediaplayer_logo").remove();
});