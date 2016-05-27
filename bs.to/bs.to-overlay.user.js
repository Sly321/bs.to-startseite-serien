// ==UserScript==
// @name         bs.to Styling Script
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @description  Stellt des Stil von bs.to um.
// @include      https://bs.to/serie/*
// @include      https://bs.to/andere-serien/
// @icon         https://s.bs.to/favicon.ico
// @version      1.0.3
// @updateURL    https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/bs.to/bs.to-overlay.user.js
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

//delete cookie
del_cookie = function (cname)
{
    if (get_cookie (cname))
        document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
};

//get cookie
get_cookie = function (cname)
{
    var name = cname + "=";
    var ca = document.cookie.split (';');
    for (var i = 0; i < ca.length; i++)
    {
        var c = ca[i];
        while (c.charAt (0) == ' ')
            c = c.substring( 1);
        if (c.indexOf (name) === 0)
            return JSON.parse(c.substring (name.length, c.length));
    }
    return;
};

set_cookie = function (cname, value)
{
    var d = new Date();
    var exdays = 50;
    d.setTime (d.getTime () + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toUTCString ();
    document.cookie = cname + "=" + JSON.stringify(value) + "; " + expires + "; path=/";
};


var overlay = "";
if (get_cookie("overlay") === undefined) {
    set_cookie("overlay", "blue");
    overlay = "blue";
} else {
    overlay = get_cookie("overlay");
}

var setStyles = function(std_bg, def_bg, hov_bg, def_tc, std_tc, bord_c, bg_url, htm_bg) {
    var tr_all = "transition: background 1s ease;";
    addGlobalStyle('#root > header { background: url(' + bg_url + ') no-repeat #fff; }');
    addGlobalStyle('#user { background-color: '+ std_bg +' color: ' + std_tc + '; }');
    addGlobalStyle('#user > a { transition: all 1s ease; color: ' + std_tc + '; }');
    addGlobalStyle('#tabbar { ' + tr_all + ' background: '+ std_bg +' }');
    addGlobalStyle('nav > ul > li > a { ' + tr_all + ' color: ' + std_tc + '; background-color: ' + def_bg + ' }');
    addGlobalStyle('nav > ul > li > a { color: ' + std_tc + '; }');
    addGlobalStyle('html { ' + tr_all + ' background: ' + htm_bg + ' }');
    addGlobalStyle('nav > ul > li > a:hover { background: ' + hov_bg + ' url("images/ui-bg_glass_75_e6e6e6_1x400.png") 50% 50% repeat-x; }');
    addGlobalStyle('.home li:nth-child(even) { background-color: ' + def_bg + ' }');
    addGlobalStyle('nav > ul > li > a:hover { color: '+ std_bg +' }');
    addGlobalStyle('tr:nth-child(even) { background-color: ' + def_bg + ' }');
    addGlobalStyle('.pages > .watched > a { background-color: ' + def_bg + ' color: ' + std_tc + '; }');
    addGlobalStyle('.pages > .current > a { background-color: ' + std_bg + ' color: ' + std_tc + '; }');
    addGlobalStyle('.pages > li > a { background-color: ' + 'white;' + ' color: black; }');
    addGlobalStyle('.pages > li > a:hover {background-color: '+ std_bg +'color: ' + std_tc + ';}');
    addGlobalStyle('.dynamic-back { background: '+ std_bg +' color: ' + std_tc + '; }');
    addGlobalStyle('nav > ul { background-color: ' + std_bg + ' }');
};

setRedOverlay = function() {
    var std_bg = "#C2261A;";  // Von User Hintergrund, Aktiven Elementen wie der Liste / Des Tabs
    var def_bg = "#E1ABA1;";  // Default Background, von Inaktiven Tab Elementen und jedem 2. Serien Link
    var hov_bg = '#E2736A';   // Hover Background von Tab Elementen
    var def_tc = "#EFEFEF;";  // Default Textcolor von den Inaktiven Tabelement (leicht ausgegraut)
    var std_tc = "white;";    // Default Textcolor von den Aktiven Element in Liste / Tab und Account
    var bord_c = "white;";    // Border Color der Tabs
    // Hintergrundbild (900x169 pixel)
    var bg_url = "https://img10.deviantart.net/8e83/i/2012/136/5/f/cat_woman_vs_harley_quinn__tmb__by_l15ard-d4zys2g.jpg";
    // Farbverlauf des Hintergrunds
    var htm_bg = "linear-gradient(to bottom,#710000 0,#842A2A 200px,#720202 100%);";

    setStyles(std_bg, def_bg, hov_bg, def_tc, std_tc, bord_c, bg_url, htm_bg);
};

setGOTOverlay = function() {
    var std_bg = "#7F1C16;";  // Von User Hintergrund, Aktiven Elementen wie der Liste / Des Tabs
    var def_bg = "#DEDEDE;";  // Default Background, von Inaktiven Tab Elementen und jedem 2. Serien Link
    var hov_bg = '#E3C606;';   // Hover Background von Tab Elementen
    var def_tc = "#B92308;";  // Default Textcolor von den Inaktiven Tabelement (leicht ausgegraut)
    var std_tc = "white;";    // Default Textcolor von den Aktiven Element in Liste / Tab und Account
    var bord_c = "white;";    // Border Color der Tabs
    // Hintergrundbild (900x169 pixel)
    var bg_url = "http://fs5.directupload.net/images/160512/svpl4cby.jpg";
    // Farbverlauf des Hintergrunds
    var htm_bg = "linear-gradient(to bottom,#919191 0,#000000 200px,#919191 100%);";

    setStyles(std_bg, def_bg, hov_bg, def_tc, std_tc, bord_c, bg_url, htm_bg);
};

setOrangeOverlay = function() {
    var std_bg = "#B86100;";  // Von User Hintergrund, Aktiven Elementen wie der Liste / Des Tabs
    var def_bg = "#E0A25D;";  // Default Background, von Inaktiven Tab Elementen und jedem 2. Serien Link
    var hov_bg = '#D47C1D;';   // Hover Background von Tab Elementen
    var def_tc = "#EFEFEF;";  // Default Textcolor von den Inaktiven Tabelement (leicht ausgegraut)
    var std_tc = "white;";    // Default Textcolor von den Aktiven Element in Liste / Tab und Account
    var bord_c = "white;";    // Border Color der Tabs
    // Hintergrundbild (900x169 pixel)
    var bg_url = "http://img11.deviantart.net/23c7/i/2012/211/0/e/magnetic_orange_5760x1080_by_crackruckles-d594wqv.jpg";
    // Farbverlauf des Hintergrunds
    var htm_bg = "linear-gradient(to bottom,#B96100 0,#D0822F 200px,#BB6404 100%);";

    setStyles(std_bg, def_bg, hov_bg, def_tc, std_tc, bord_c, bg_url, htm_bg);
};

setRedOverlay = function() {
    var std_bg = "#C2261A;";  // Von User Hintergrund, Aktiven Elementen wie der Liste / Des Tabs
    var def_bg = "#E1ABA1;";  // Default Background, von Inaktiven Tab Elementen und jedem 2. Serien Link
    var hov_bg = '#E2736A';   // Hover Background von Tab Elementen
    var def_tc = "#EFEFEF;";  // Default Textcolor von den Inaktiven Tabelement (leicht ausgegraut)
    var std_tc = "white;";    // Default Textcolor von den Aktiven Element in Liste / Tab und Account
    var bord_c = "white;";    // Border Color der Tabs
    // Hintergrundbild (900x169 pixel)
    var bg_url = "https://img10.deviantart.net/8e83/i/2012/136/5/f/cat_woman_vs_harley_quinn__tmb__by_l15ard-d4zys2g.jpg";
    // Farbverlauf des Hintergrunds
    var htm_bg = "linear-gradient(to bottom,#710000 0,#842A2A 200px,#720202 100%);";

    setStyles(std_bg, def_bg, hov_bg, def_tc, std_tc, bord_c, bg_url, htm_bg);
};

setBlueOverlay = function() {
    addGlobalStyle('#root > header { background: url(https://s.bs.to/img/header.png) no-repeat #fff; }');
    addGlobalStyle('#user { background-color: #66f; color: #000; }');
    addGlobalStyle('#user > a { transition: all 1s ease; color: black; }');
    addGlobalStyle('#tabbar { transition: background 1s ease; background: #66f; }');
    addGlobalStyle('.ui-state-default a { transition: background 1s ease; color: #555555; background-color: #BBBBFF; }');
    addGlobalStyle('.ui-state-active a { transition: background 1s ease; color:#212121; background-color: #6666FF; }');
    addGlobalStyle('.ui-state-active, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active { border-color: #aaaaaa; color: #212121; }');
    addGlobalStyle('.ui-state-default a, .ui-state-default a:link { color: #555555; }');
    addGlobalStyle('.ui-state-active a:link { color: #212121; }');
    addGlobalStyle('html { transition: background 1s ease; background: linear-gradient(to bottom,#003d71 0,#112276 200px,#003d71 100%); }');
    addGlobalStyle('.ui-widget-content .ui-state-active { transition: background 1s ease; background: #6666FF; }');
    addGlobalStyle('.ui-widget-header .ui-state-hover a { background: #9A9AFF url("images/ui-bg_glass_75_e6e6e6_1x400.png") 50% 50% repeat-x; }');
    addGlobalStyle('.home li:nth-child(even) { background-color: #bbf; }');
    addGlobalStyle('ul > li > a:hover { color: #66F; }');
    addGlobalStyle('tr:nth-child(even) { background-color: #bbf; }');
    addGlobalStyle('.pages>.current { background-color: #99f; }');
    addGlobalStyle('.pages>li>a:hover {background-color: #66f;color: white;}');
    addGlobalStyle('.dynamic-back { background: #6666FF; color: white; }');
};

if(overlay == "blue") {
    setBlueOverlay();
} else if (overlay == "red") {
    setRedOverlay();
} else if (overlay == "orange") {
    setOrangeOverlay();
} else if (overlay == "got") {
    setGOTOverlay();
} else {
    console.log("not even undefined: " + overlay);
}
addGlobalStyle('#root > header > h1 > a { width: 520px; }');
addGlobalStyle('#user:hover { width: 142px; height: 132px; padding: 7px;}');
addGlobalStyle('#user { transition: all 1s ease; margin-right: 175px; height: 13px; width: 142px; padding-top: 2px; overflow: hidden; }');
addGlobalStyle('ul > li > a { text-decoration: none; font-size: 95%; }');
addGlobalStyle('ul > li > span:hover { cursor: not-allowed;; }');
addGlobalStyle('.ui-accordion-content > ul > li { width: 420px; height: 21px; display: flex; }');
addGlobalStyle('ul > li > .serie-title { float: left; flex-grow: 1; }');
addGlobalStyle('ul > li > .serie-info { float: right;  }');
addGlobalStyle('.dynamic-back { height: 20px; margin-top: 10px; margin-left: 20px; margin-right: 20px; border-radius: 5px; text-align: center; font-size: 16px; cursor: pointer; }');