// ==UserScript==
// @name         bs.to Startseite Serien Skript
// @namespace    http://your.homepage/
// @version      0.2
// @description  Zeigt dir deine Serienlinks direkt auf der Startseite an
// @author       Slyox
// @icon		 http://s.bs.to/favicon.ico
// @match        http://bs.to/
// @grant        none
// @updateURL	 https://github.com/Seglormeister/Pr0gramm.com-by-Seglor/raw/master/pr0gramm_dick.user.js
// ==/UserScript==

var FantasyString = '<ul><li><a href="serie/Supernatural-Zur-Hoelle-mit-dem-Boesen">Supernatural</a></li><li><a href="serie/Vampire-Diaries">Vampire Diaries</a></li><li><a href="serie/Game-of-Thrones">Game of Thrones</a></li><li><a href="serie/The-Originals">The Originals</a></li></ul>';
var AnimeString = '<ul><li><a href="">Naruto Shippuden</a></li><li><a href="serie/Fate-Stay-Night-Unlimited-Blade-Works">Fate/Stay Night: Unlimited Blade Works</a></li><li><a href="serie/Assassination-Classroom">Ansatsu Kyoushitsu</a></li><li><a href="http://bs.to/serie/Attack-on-Titan">Shingeki no Kyojin</a></li></ul>';

var column1 = document.getElementById("column1");
var column2 = document.getElementById("column2");

column1.innerHTML = "<br><h2>Serien</h2>" + FantasyString;
column2.innerHTML = "<br><h2>Anime</h2>" + AnimeString;