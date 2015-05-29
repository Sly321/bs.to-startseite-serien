// ==UserScript==
// @name         bs.to Startseite Serien Skript
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @description  Zeigt dir deine Serienlinks direkt auf der Startseite an
// @include      http://bs.to/
// @include		 http://bs.to/home
// @icon		 http://s.bs.to/favicon.ico
// @version      0.2.7
// @grant        none
// @updateURL	 https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/script.tamper.js
// ==/UserScript==

var FantasyString = '<ul>' + 
'<li><a href="serie/Supernatural-Zur-Hoelle-mit-dem-Boesen">Supernatural</a></li>' + 
'<li><a href="serie/Vampire-Diaries">Vampire Diaries</a></li>' + 
'<li><a href="serie/Game-of-Thrones">Game of Thrones</a></li>' + 
'<li><a href="serie/The-Originals">The Originals</a></li>' + 
'</ul>';

var AnimeString = '<ul>' + 
'<li><a href="serie/Naruto">Naruto</a></li>' + 
'<li><a href="serie/Naruto-Shippuuden">Naruto Shippuden</a></li>' + 
'<li><a href="serie/Fate-Zero">Fate/Zero</a></li>' +
'<li><a href="serie/Fate-Stay-Night-Unlimited-Blade-Works">Fate/Stay Night: Unlimited Blade Works</a></li>' + 
'<li><a href="serie/Assassination-Classroom">Ansatsu Kyoushitsu</a></li>' + 
'<li><a href="serie/Attack-on-Titan">Shingeki no Kyojin</a></li>' + 
'<li><a href="serie/One-Piece">One Piece</a></li>' + 
'<li><a href="serie/Sword-Art-Online">Sword Art Online</a></li>' + 
'<li><a href="serie/Steins-Gate">Steins;Gate</a></li>' + 
'</ul>';

var column1 = document.getElementById("column1");
var column2 = document.getElementById("column2");

column1.innerHTML = "<br><h2>Serien</h2>" + FantasyString;
column2.innerHTML = "<br><h2>Anime</h2>" + AnimeString;

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
};

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};

var teaser = document.getElementById('teaser');
teaser.remove();