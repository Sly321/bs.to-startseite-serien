// ==UserScript==
// @name         bs.to Startseite Serien Skript
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @description  Zeigt dir deine Serienlinks direkt auf der Startseite an
// @include      http://bs.to/
// @include		 http://bs.to/home
// @icon		 http://s.bs.to/favicon.ico
// @version      1.1
// @grant        none
// @updateURL	 https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/script.user.js
// ==/UserScript==

var LeftString = '<ul>' + 
'<li><a href="serie/Agents-of-S-H-I-E-L-D">Agents-of-S-H-I-E-L-D</a></li>' +
'<li><a href="serie/Arrow">Arrow</a></li>' +
'<li><a href="serie/Better-Call-Saul">Better Call Saul</a></li>' +
'<li><a href="serie/Marvel-s-Daredevil">Daredevil</a></li>' +
'<li><a href="serie/Elementary">Elementary</a></li>' +
'<li><a href="serie/Extant">Extant</a></li>' +
'<li><a href="serie/Forever">Forever</a></li>' +
'<li><a href="serie/Game-of-Thrones">Game of Thrones</a></li>' + 
'<li><a href="serie/Gotham">Gotham</a></li>' +
'<li><a href="serie/House-of-Cards">House of Cards</a></li>' +
'<li><a href="serie/Hannibal">Hannibal</a></li>' +
'<li><a href="serie/iZombie">iZombie</a></li>' +
'<li><a href="serie/Revolution">Revolution</a></li>' +
'<li><a href="serie/Suits">Suits</a></li>' +
'<li><a href="serie/Supernatural-Zur-Hoelle-mit-dem-Boesen">Supernatural</a></li>' + 
'<li><a href="serie/The-100">The 100</a></li>' +
'<li><a href="serie/The-Blacklist">The Blacklist</a></li>' +
'<li><a href="serie/The-Flash">The Flash</a></li>' +
'<li><a href="serie/The-Originals">The Originals</a></li>' + 
'<li><a href="serie/The-Strain">The Strain</a></li>' +
'<li><a href="serie/The-Tomorrow-People">The Tomorrow People</a></li>' +
'<li><a href="serie/Vampire-Diaries">Vampire Diaries</a></li>' + 
'</ul>' +
'<br><h2>Sitcoms</h2><ul>' + 
'<li><a href="serie/The-Big-Bang-Theory">The Big Bang Theory</a></li>' + 
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
'<li><a href="serie/No-Game-No-Life">No Game No Life</a></li>' + 
'<li><a href="serie/Btooom">Btooom!!</a></li>' + 
'</ul>';

var column1 = document.getElementById("column1");
var column2 = document.getElementById("column2");

column1.innerHTML = "<br><h2>Serien</h2>" + LeftString;
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