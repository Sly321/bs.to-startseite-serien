// ==UserScript==
// @name         bs.to verlinkungs script zur Startseite
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @description  Bringt dich zur Startseite und nicht auf /home
// @include		 https://bs.to/home*
// @include		 https://bs.to/andere-serien*
// @include		 https://bs.to/serie*
// @include		 https://bs.to/search*
// @include		 https://bs.to/random*
// @include		 https://bs.to/android*
// @icon		 https://s.bs.to/favicon.ico
// @version      2.0.4
// @grant        none
// @updateURL	 https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/script.user.js
// ==/UserScript==

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

$('header>h1>a').replaceWith("<a href='http://bs.to'>Burning-Series - Simpsons und weitere Serien kostenlos online sehen</a>");
$('body>div>nav>ul').replaceWith('<ul><li><a href="http://bs.to">Home</a></li><li id="other-series-nav"><a href="andere-serien">Alle Serien</a></li>' +
'<li><a href="search">Suche</a></li><li><a href="http://forum.bs.to" target="_blank">Forum</a></li><li><a>Mehr</a>'  +
'<ul><li><a href="android">Android-App</a></li><li><a href="faq">FAQ</a></li><li><a href="statistics">Statistiken</a>' +
'</li></ul></li></ul>');