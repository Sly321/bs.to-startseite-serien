// ==UserScript==
// @name         Next Episode for bs.to
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @description  Zeigt dir deine Serienlinks direkt auf der Startseite an
// @version      1.0.2
// @include		 http://bs.to/serie*
// @icon		 http://s.bs.to/favicon.ico
// @grant        none
// @updateURL	 https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/next-episode.user.js
// ==/UserScript==

var fallbacks = [
    'Streamcloud',
    'FlashX',
    'Vivo',
];

var current = $('section > div > ul:eq(1) > .current');
var currentHref = $('section > div > ul:eq(1) > .current > a').attr("href");
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
        return false;
    }
});

if(parent.children().size() != indexOfNext)
{
    var completeLink = window.location.href;
    var indexOfSlash = completeLink.lastIndexOf('/') + 1;
    var hoster = completeLink.substr(indexOfSlash, completeLink.lastIndexOf('-') - indexOfSlash);
    console.log("Hoster: " + hoster);
    
    var nextEpisode = jQuery("a", children[indexOfNext]).attr("href");
    console.log("Next Episode: " + nextEpisode);

    // If there's still a "-" it's the episode itself. Hoster don't have it
    if(hoster.indexOf('-') == -1)
    {
        // JS version of PHP's unset
        var index = fallbacks.indexOf(hoster);
        if(index > -1)
        {
            fallbacks.splice(index, 1);
        }

        var hosterLink = nextEpisode + '/' + hoster + '-1';
        var element = $('a[href="'+ hosterLink +'"]');
        while(element.length == 0 && fallbacks.length != 0)
        {
            hoster = fallbacks[0];
            fallbacks.splice(0, 1);
            hosterLink = nextEpisode + '/' + hoster + '-1';
            element = $('a[href="'+ hosterLink +'"]');
        }

        if(element.length != 0)
        {
            console.log('Hoster: ' + hoster);
            nextEpisode = hosterLink;
        }
    }

    parent.append("<li><a id='next' style='background-color: rgb(44, 168, 210)' href='" + nextEpisode + "'>►</a><div class='epiInfo'>Next</div></li>");
}