// ==UserScript==
// @name         Streamcloud Banner Removal
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @version      1.2
// @description  Removes the Banner of JWPlayer from the Stream after 5 sec.
// @author       Sly321
// @icon         http://streamcloud.eu/favicon.ico
// @match        http://streamcloud.eu/*
// @updateURL    https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/streamcloud/banner-removal.user.js
// @grant        none
// ==/UserScript==

setTimeout(function() {
    $(".proform").submit();
}, 11000);

var displayTimeout;

jwplayer().onReady(function() {
    $("#mediaplayer_logo").remove();
    mediaplayer = jwplayer();
    mediaplayer.play();
    document.getElementById("mediaplayer_display").addEventListener("mousewheel", function(e) {
        var curVol = mediaplayer.getVolume();
        clearTimeout(displayTimeout);
        var newVol;
        if(e.deltaY < 0) {
            newVol = curVol + 5;
            if (newVol > 100) {
                newVol = 100;
            }
            mediaplayer.setVolume(newVol);
        } else {
            newVol = curVol - 5;
            if (newVol < 0) {
                newVol = 0;
            }
            mediaplayer.setVolume(newVol);
        }
        $("#mediaplayer_controlbar_volumeoverlay").css("visibility", "visible");
        $("#mediaplayer_controlbar_volumeoverlay").css("opacity", "1");
        $("#mediaplayer_controlbar").css("display", "inline-block");
        $("#mediaplayer_controlbar").css("opacity", "1");
        displayTimeout = setTimeout(function() {
            $("#mediaplayer_controlbar_volumeoverlay").css("visibility", "hidden");
            $("#mediaplayer_controlbar_volumeoverlay").css("opacity", "0");
            $("#mediaplayer_controlbar").css("display", "none");
            $("#mediaplayer_controlbar").css("opacity", "0");
        }, 3000);
    }, false);
});
