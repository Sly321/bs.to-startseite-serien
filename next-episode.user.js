// ==UserScript==
// @name         Next Episode for bs.to
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @description  Zeigt dir deine Serienlinks direkt auf der Startseite an
// @version      0.1
// @include		 http://bs.to/serie*
// @icon		 http://s.bs.to/favicon.ico
// @grant        none
// @updateURL	 https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/next-episode.user.js
// ==/UserScript==

var current = $('section>div>ul:eq(1)>.current');
var currentHref = $('section>div>ul:eq(1)>.current>a').attr("href");
console.log("CurrentHref: " + currentHref);
var parent = current.parent();
var children = parent.children();
var indexOfNext = 0;

children.each(function( index ) {
    console.log("for each " + jQuery("a", this).attr("href"));
    var indexHref = jQuery("a", this).attr("href");
    if( indexHref == currentHref)
    {
        console.log("found him");
        indexOfNext = index + 1;
        return;
    }
});

var nextEpisode = jQuery("a", children[indexOfNext]).attr("href");
console.log("Next Episode: " + nextEpisode);

var nextEpisodeSC = nextEpisode + '/Streamcloud-1';
var nextEpisodeNV = nextEpisode + '/NowVideo-1';
parent.append("<li><a style='background-color: rgb(44, 168, 210)' href='" + nextEpisodeSC + "'>►</a><div class='epiInfo'>Streamcloud</div></li>");
parent.append("<li><a style='background-color: rgb(252, 109, 76)' href='" + nextEpisodeNV + "'>►</a><div class='epiInfo'>NowVideo</div></li>");
