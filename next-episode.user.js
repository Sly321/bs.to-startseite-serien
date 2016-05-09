// ==UserScript==
// @name         Next Episode for bs.to
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @description  Zeigt dir deine Serienlinks direkt auf der Startseite an
// @version      1.2.0
// @include      https://bs.to/serie*
// @icon         https://s.bs.to/favicon.ico
// @grant        none
// @updateURL    https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/next-episode.user.js
// ==/UserScript==

var fallbacks = [
    'Streamcloud',
    'FlashX',
    'Vivo',
];

var linkRegex = /serie\/([\w-]*)\/(\d*)\/(\d*)-([\w-]*)/; // 0: complete, 1: Name, 2: Season, 3: Folge, 4: Name
//["serie/Akame-ga-Kill/1/22-Die-Schwester-durchschneiden", "Akame-ga-Kill", "1", "22", "Die-Schwester-durchschneiden"]

var current = $('section > div > ul:eq(1) > .current');
var currentHref = $('section > div > ul:eq(1) > .current > a').attr("href");
var parent = current.parent();
var children = parent.children();
var indexOfNext = 0;

//delete cookie
function del_cookie (cname)
{
    if (get_cookie (cname))
        document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

//get cookie
function get_cookie (cname)
{
    var name = cname + "=";
    var ca = document.cookie.split (';');
    for (var i = 0; i < ca.length; i++)
    {
        var c = ca[i];
        while (c.charAt (0) == ' ')
            c = c.substring( 1);
        if (c.indexOf (name) === 0)
            return c.substring (name.length, c.length);
    }
    return;
}

//console.log("CurrentHref: " + currentHref);

if(currentHref !== undefined) {
    var result = currentHref.match(linkRegex);
    var Link = result[1];
    console.log ("LINK: " + Link);
    var Season = result[2];
    var Folge = result[3];
    var Name = result[4];
    console.log ("NAME: " + Name);
    var exdays = 50;
    var d = new Date();
    d.setTime (d.getTime () + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toUTCString ();
    var value = [{link: Link, season: Season, folge: Folge, Name: Name}];
    var old_value = [];

    if (get_cookie ("serien_stand_" + Link))
        del_cookie("serien_stand_" + Link);

    old_value.push(value);
    document.cookie = "serien_stand_" + Link + "=" + JSON.stringify(old_value) + "; " + expires + "; path=/";
}

children.each(function( index ) {
    //console.log("for each " + jQuery("a", this).attr("href"));
    var indexHref = jQuery("a", this).attr("href");
    if( indexHref == currentHref)
    {
        indexOfNext = index + 1;
        return false;
    }
});

if(parent.children().size() != indexOfNext)
{
    var completeLink = window.location.href;
    var indexOfSlash = completeLink.lastIndexOf('/') + 1;
    var hoster = completeLink.substr(indexOfSlash, completeLink.lastIndexOf('-') - indexOfSlash);
    //console.log("Hoster: " + hoster);

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
        while(element.length === 0 && fallbacks.length !== 0)
        {
            hoster = fallbacks[0];
            fallbacks.splice(0, 1);
            hosterLink = nextEpisode + '/' + hoster + '-1';
            element = $('a[href="'+ hosterLink +'"]');
        }

        if(element.length !== 0)
        {
            console.log('Hoster: ' + hoster);
            nextEpisode = hosterLink;
        }
    }

    parent.append("<li><a id='next' style='background-color: rgb(44, 168, 210)' href='" + nextEpisode + "'>►</a><div class='epiInfo'>Next</div></li>");
}