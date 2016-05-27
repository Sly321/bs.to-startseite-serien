// ==UserScript==
// @name         bs.to Startseiten script
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @description  Zeigt dir deine Lieblingsserien auf der Startseiten an uvm.
// @include      https://bs.to/
// @icon         https://s.bs.to/favicon.ico
// @version      1.2.15
// @require      https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js
// @updateURL    https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/anime-toplist.user.js
// ==/UserScript==


/*
 * Kommentar: How to:
 * //Name: [
 *  [//Serienname, //SerienshortLink (ohne /serie)],
 *  ["Serie 2", "Href 2"]
 * ],
 *
 * Die Komma's beachten, der letzte eintrag hat keins.
 */

// DON'T TOUCH THIS - - - - - -
SerienTab = function(name, serienContainer) {
    this.name = name;
    this.serien = serienContainer;
};

// YOU CAN TOUCH THIS + + + + +
var SerienTabContainerLinks = [new SerienTab("Serien", [["Agents-of-S-H-I-E-L-D", "Marvel-s-Agents-of-S-H-I-E-L-D"],
                                                        ["Arrow", "Arrow"],
                                                        ["Better Call Saul", "Better-Call-Saul"],
                                                        ["Daredevil", "Marvel-s-Daredevil"],
                                                        ["Elementary", "Elementary"],
                                                        ["Extant", "Extant"],
                                                        ["Fear the Walking Dead", "Fear-The-Walking-Dead"],
                                                        ["Game of Thrones", "Game-of-Thrones"],
                                                        ["Gotham", "Gotham"],
                                                        ["House of Cards", "House-of-Cards-US"],
                                                        ["iZombie", "iZombie"],
                                                        ["Lucifer", "Lucifer"],
                                                        ["Marvels Agent Carter", "Marvel-s-Agent-Carter"],
                                                        ["Mr. Robot", "Mr-Robot"],
                                                        ["Supernatural", "Supernatural"],
                                                        ["Suits", "Suits"],
                                                        ["The 100", "The-100"],
                                                        ["The Blacklist", "The-Blacklist"],
                                                        ["The Flash", "The-Flash"],
                                                        ["The Originals", "The-Originals"],
                                                        ["The Royals", "The-Royals"],
                                                        ["The Strain", "The-Strain"],
                                                        ["The Man in the High Castle", "The-Man-in-the-High-Castle"],
                                                        ["The Walking Dead", "The-Walking-Dead"],
                                                        ["Vampire Diaries", "Vampire-Diaries"]]),
                       new SerienTab("Msl's Wannabe's", [["Helix", "Helix"],
                                                        ["Into the Badlands", "Into-the-Badlands"],
                                                        ["Limitless", "Limitless"],
                                                        ["Minority Report", "Minority-Report"],
                                                        ["Scorpion", "Scorpion"],
                                                        ["Shadowhunters: The Mortal Instruments", "Shadowhunters-The-Mortal-Instruments"],
                                                        ["The Shannara Chronicles", "The-Shannara-Chronicles"]]),
                             new SerienTab("Sitcom's", [["How I Met Your Mother", "How-I-Met-Your-Mother"],
                                                        ["Sirens", "Sirens"],
                                                        ["The Big Bang Theory", "The-Big-Bang-Theory"],
                                                        ["The IT Crowd", "The-IT-Crowd"]
                                                        ]),
                            new SerienTab("Completed", [["Constantine", "Constantine"],
                                                        ["Forever", "Forever"],
                                                        ["Hannibal", "Hannibal"],
                                                        ["Nip/Tuck", "Nip-Tuck-Schoenheit-hat-ihren-Preis"],
                                                        ["Revolution", "Revolution"],
                                                        ["The Tomorrow-People", "The-Tomorrow-People"]])
                              ];

var SerienTabContainerRechts = [new SerienTab("Anime running", [["Ansatsu Kyōshitsu", "Assassination-Classroom"],
                                                        ["Btooom!", "Btooom"],
                                                        ["Devil is a Part Timer", "The-Devil-is-a-Part-Timer"],
                                                        ["Dragon Ball Super", "Dragonball-Super"],
                                                        ["Elfen Lied", "Elfen-Lied"],
                                                        ["Gate: Jieitai Kanochi nite, Kaku Tatakaeri", "Gate-Jieitai-Kanochi-nite-Kaku-Tatakaeri"],
                                                        ["God Eater", "God-Eater"],
                                                        ["Guilty Crown", "Guilty-Crown"],
                                                        ["Gurren Lagann", "Gurren-Lagann"],
                                                        ["High School DxD", "High-School-D-D"],
                                                        ["Kuusen Madoushi Kouhosei no Kyoukan", "Kuusen-Madoushi-Kouhosei-no-Kyoukan"],
                                                        ["Magi", "Magi-The-Labyrinth-of-Magic"],
                                                        ["Neon Genesis Evangelion", "Neon-Genesis-Evangelion"],
                                                        ["No Game No Life", "No-Game-No-Life"],
                                                        ["Overlord", "Overlord"],
                                                        ["Rokka no Yuusha", "Rokka-no-Yuusha"],
                                                        ["Attack on Titan", "Shingeki-no-Kyojin"],
                                                        ["Spice and Wolf", "Spice-and-Wolf"],
                                                        ["Sword Art Online", "Sword-Art-Online"]]),
                    new SerienTab("Anime Season 2015", [["Owari no Seraph", "Owari-no-Seraph"],
                                                        ["K-Project", "K-Project"],
                                                        ["Jormungand", "Jormungand"],
                                                        ["Black Bullet", "Black-Bullet"],
                                                        ["Log-Horizon", "Log-Horizon"],
                                                        ["D.Gray-Man", "D-Gray-Man"],
                                                        ["Magic Kaito", "Magic-Kaito"],
                                                        ["Pandora Hearts", "Pandora-Hearts"],
                                                        ["Oda Nobuna no Yabou", "Oda-Nobuna-no-Yabou"],
                                                        ["Trinity-Seven", "Trinity-Seven-7-nin-no-Masho-Tsukai"],
                                                        ["Ajin", "Ajin"]]),
                    new SerienTab("Anime Season 2016", [["Koutetsujou no Kabaneri", "Koutetsujou-no-Kabaneri"],
                                                        ["Re: Zero Kara Hajimeru Isekai Seikatsu", "Re-Zero-Kara-Hajimeru-Isekai-Seikatsu"]]),
                        new SerienTab("Big Classic's", [["Bleach", "Bleach"],
                                                        ["Dragonball", "Dragonball"],
                                                        ["Dragonball-Z", "Dragonball-Z"],
                                                        ["Fairy Tail", "Fairy-Tail"],
                                                        ["Fullmetal Alchemist: Brotherhood", "Fullmetal-Alchemist-Brotherhood"],
                                                        ["Hunter-x-Hunter", "Hunter-x-Hunter-2011"],
                                                        ["InuYasha", "InuYasha"],
                                                        ["Naruto", "Naruto"],
                                                        ["Naruto Shippuden", "Naruto-Shippuuden"],
                                                        ["One Piece", "One-Piece"]]),
             new SerienTab("Good and completed Anime", [["Afro Samurai", "Afro-Samurai"],
                                                        ["Akame ga Kill!", "Akame-ga-Kill"],
                                                        ["Blue Exorcist", "Blue-Exorcist"],
                                                        ["Code Geass", "Code-Geass"],
                                                        ["Death Note", "Death-Note"],
                                                        ["Fate/Zero", "Fate-Zero"],
                                                        ["Fate/Stay Night: Unlimited Blade Works", "Fate-Stay-Night-Unlimited-Blade-Works"],
                                                        ["Nanatsu no Tasai", "The-Seven-Deadly-Sins"],
                                                        ["Psycho Pass", "Psycho-Pass"],
                                                        ["Soul Eater", "Soul-Eater"],
                                                        ["Steins;Gate", "Steins-Gate"],
                                                        ["Tokyo Ghoul", "Tokyo-Ghoul"]])
                              ];

// DON'T TOUCH THIS - ALL THIS DOWN HERE - - - - - - -
SerienLinks = [];
for(var y = 0; y < SerienTabContainerLinks.length; y++)
{
  var Serien = '<h3><span class="header-title">' + SerienTabContainerLinks[y].name + '</span></h3><div><ul>';
  for(var x = 0; x < SerienTabContainerLinks[y].serien.length; x++) {
    Serien += '<li><a class="serie-title" href="serie/' + SerienTabContainerLinks[y].serien[x][1] + '">' + SerienTabContainerLinks[y].serien[x][0] + '</a></li>';
  }
  Serien += '</ul></div>';
  SerienLinks.push(Serien);
}

SerienRechts = [];
for(var y = 0; y < SerienTabContainerRechts.length; y++)
{
  var Serien = '<h3><span class="header-title">' + SerienTabContainerRechts[y].name + '</span></h3><div><ul>';
  for(var x = 0; x < SerienTabContainerRechts[y].serien.length; x++) {
    Serien += '<li><a class="serie-title" href="serie/' + SerienTabContainerRechts[y].serien[x][1] + '">' + SerienTabContainerRechts[y].serien[x][0] + '</a></li>';
  }
  Serien += '</ul></div>';
  SerienRechts.push(Serien);
}

var accordionLinks  = "<div id='accordionLinks'>";
for(var x = 0; x < SerienLinks.length; x++) {
  accordionLinks += SerienLinks[x];
}
accordionLinks += "</div>";

var accordionRechts = "<div id='accordionRechts'>";
for(var x = 0; x < SerienRechts.length; x++) {
  accordionRechts += SerienRechts[x];
}
accordionRechts += "</div>";

var section = "<div class='home'><div id='column1' class='column'>" + accordionLinks + "</div><div id='column2' class='column'>" + accordionRechts + "</div></div>";

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

$("head").append('<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">');

//delete cookie
unsafeWindow.del_cookie = function (cname)
{
    if (get_cookie (cname))
        document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
};

//get cookie
unsafeWindow.get_cookie = function (cname)
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

unsafeWindow.set_cookie = function (cname, value)
{
    var d = new Date();
    var exdays = 50;
    d.setTime (d.getTime () + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toUTCString ();
    document.cookie = cname + "=" + JSON.stringify(value) + "; " + expires + "; path=/";
};

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('.serie-info { float: right; font-size: 13px; padding: 2px; }');
addGlobalStyle('.ui-state-default a { color: #555555; background-color: #BBBBFF; text-decoration: none; }');
addGlobalStyle('.ui-state-active a, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active { background: #6666FF; font-weight: normal; color: #212121; }');
addGlobalStyle('.ui-state-hover a { background: #9A9AFF; font-weight: normal; color: #212121; }');
addGlobalStyle('.ui-widget-content { background: #FFFFFF; margin: 0px; padding: 0px; border: 0px }');
addGlobalStyle('.ui-widget-header { border: 1px solid #000000; background-color: #6666FF; background: none }');
addGlobalStyle('.ui-tabs.nav { width: 900px; height: 32px; padding-right: 0px; padding-left: 0px; padding-top: 0px; }');
addGlobalStyle('.ui-corner-all { border-radius: 4px; ');
addGlobalStyle('.ui-tabs .ui-tabs-nav { margin: 0; padding: .2em .2em 0; }');
addGlobalStyle('.ui-helper-reset { line-height: 1.3; text-decoration: none; font-size: 100%; list-style: none; }');
addGlobalStyle('.ui-helper-clearfix:before, .ui-helper-clearfix:after { content: ""; display: table; border-collapse: collapse; }');
addGlobalStyle('.ui-helper-clearfix:after { clear: both; }');
addGlobalStyle('.ui-accordion .ui-accordion-content { padding: 0px; }');
addGlobalStyle('::-webkit-scrollbar { width: 0.5em; height: 0.5em; }::-webkit-scrollbar-track {box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);}::-webkit-scrollbar-thumb { background: rgba(100, 100, 100, 0.8); border-radius: 5px;}::-webkit-scrollbar-corner,::-webkit-scrollbar-thumb:window-inactive { background: rgba(100, 100, 100, 0.4); }');
addGlobalStyle('.column { width: 420; margin: 5px; } ');
addGlobalStyle('#column1 { float:left; } ');
addGlobalStyle('#column2 { float:right; } ');
addGlobalStyle('#tabbar { background-color: #66f; width: 900px; height: 33px; padding: 0; border-radius: 0px; border-left: 0px; border-right: 0px}');
addGlobalStyle('#tabbar > li > a { padding-bottom: 5px; padding-top: 5px; height: 22px;}');
addGlobalStyle('#tabbar > li { margin: 0px; border: 0px border-left: 1px; border-right: 1px; border-radius: 0px}');
addGlobalStyle('#ui-accordion-accordionLinks-header-0 { padding: 5px 0px 5px 30px; }');
addGlobalStyle('#ui-accordion-accordionRechts-header-0 { padding: 5px 0px 5px 30px; }');
addGlobalStyle('#ui-accordion-accordionLinks-header-1 { padding: 5px 0px 5px 30px; }');
addGlobalStyle('#ui-accordion-accordionRechts-header-1 { padding: 5px 0px 5px 30px; }');
addGlobalStyle('#ui-accordion-accordionLinks-header-2 { padding: 5px 0px 5px 30px; }');
addGlobalStyle('#ui-accordion-accordionRechts-header-2 { padding: 5px 0px 5px 30px; }');
addGlobalStyle('#ui-accordion-accordionLinks-header-3 { padding: 5px 0px 5px 30px; }');
addGlobalStyle('#ui-accordion-accordionRechts-header-3 { padding: 5px 0px 5px 30px; }');
addGlobalStyle('#ui-accordion-accordionLinks-header-4 { padding: 5px 0px 5px 30px; }');
addGlobalStyle('#ui-accordion-accordionRechts-header-4 { padding: 5px 0px 5px 30px; }');
addGlobalStyle('#ui-tabs-5 > .half-prefs > div { padding: 15px; }');
addGlobalStyle('#ui-tabs-5 > .half-prefs > div > h3 { margin-top: 0; margin-bottom: 10px; }');
addGlobalStyle('#ui-tabs-5 > .half-prefs > div > input { margin-right: 15px; }');
addGlobalStyle('.delbtn { color: white !important; float: right; font-size: 14px; border: none; background: #212121; border-radius: 100%; height: 19px; width: 20px; margin-top: 1px; padding: 0px 0px 0px 0px; z-index: 15; text-decoration: none; text-align: center; margin-left: 5px; }');

addGlobalStyle('#root > header > h1 > a { width: 520px; }');
addGlobalStyle('#user:hover { width: 142px; height: 132px; padding: 7px;}');
addGlobalStyle('#user { transition: all 1s ease; margin-right: 175px; height: 13px; width: 142px; padding-top: 2px; overflow: hidden; }');
addGlobalStyle('ul > li > a { text-decoration: none; font-size: 95%; }');
addGlobalStyle('ul > li > span:hover { cursor: not-allowed;; }');
addGlobalStyle('.ui-accordion-content > ul > li { width: 420px; height: 21px; display: flex; }');
addGlobalStyle('ul > li > .serie-title { float: left; flex-grow: 1; font-size: 15px; padding-top: 1px;}');
addGlobalStyle('ul > li > .serie-info { float: right;  }');
addGlobalStyle('.dynamic-back { height: 20px; margin-top: 10px; margin-left: 20px; margin-right: 20px; border-radius: 5px; text-align: center; font-size: 16px; cursor: pointer; }');

var overlay = "";
if (unsafeWindow.get_cookie("overlay") === undefined) {
    unsafeWindow.set_cookie("overlay", "blue");
    overlay = "blue";
} else {
    overlay = unsafeWindow.get_cookie("overlay");
}

var setStyles = function(std_bg, def_bg, hov_bg, def_tc, std_tc, bord_c, bg_url, htm_bg) {
    var tr_all = "transition: background 1s ease;";
    addGlobalStyle('#root > header { background: url(' + bg_url + ') no-repeat #fff; }');
    addGlobalStyle('#user { background-color: '+ std_bg +' color: ' + std_tc + '; }');
    addGlobalStyle('#user > a { transition: all 1s ease; color: ' + std_tc + '; }');
    addGlobalStyle('#tabbar { ' + tr_all + ' background: '+ std_bg +' }');
    addGlobalStyle('.ui-state-default a { ' + tr_all + ' color: ' + std_tc + '; background-color: ' + def_bg + ' }');
    addGlobalStyle('.ui-state-active a { ' + tr_all + ' color: ' + std_tc + '; background-color: '+ std_bg +' }');
    addGlobalStyle('.ui-state-active, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active { border-color: ' + bord_c + ' color: ' + std_tc + '; }');
    addGlobalStyle('.ui-state-default a, .ui-state-default a:link { color: ' + def_tc + ' }');
    addGlobalStyle('.ui-state-active a:link { color: ' + std_tc + '; }');
    addGlobalStyle('html { ' + tr_all + ' background: ' + htm_bg + ' }');
    addGlobalStyle('.ui-widget-content .ui-state-active { ' + tr_all + ' background: '+ std_bg +' }');
    addGlobalStyle('.ui-widget-header .ui-state-hover a { background: ' + hov_bg + ' url("images/ui-bg_glass_75_e6e6e6_1x400.png") 50% 50% repeat-x; }');
    addGlobalStyle('.home li:nth-child(even) { background-color: ' + def_bg + ' }');
    addGlobalStyle('ul > li > a:hover { color: '+ std_bg +' }');
    addGlobalStyle('tr:nth-child(even) { background-color: ' + def_bg + ' }');
    addGlobalStyle('.pages>.current { background-color: ' + def_bg + ' }');
    addGlobalStyle('.pages>li>a:hover {background-color: '+ std_bg +'color: ' + std_tc + ';}');
    addGlobalStyle('.dynamic-back { background: '+ std_bg +' color: ' + std_tc + '; }');
};

unsafeWindow.setRedOverlay = function() {
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

unsafeWindow.setGOTOverlay = function() {
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

unsafeWindow.setOrangeOverlay = function() {
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

unsafeWindow.setRedOverlay = function() {
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

unsafeWindow.setBlueOverlay = function() {
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
    addGlobalStyle('.pages>.current { background-color: #E1ABA1; }');
    addGlobalStyle('.pages>li>a:hover {background-color: #C2261A;color: white;}');
    addGlobalStyle('.dynamic-back { background: #6666FF; color: white; }');
};

if(overlay == "blue") {
    unsafeWindow.setBlueOverlay();
} else if (overlay == "red") {
    unsafeWindow.setRedOverlay();
} else if (overlay == "orange") {
    unsafeWindow.setOrangeOverlay();
} else if (overlay == "got") {
    unsafeWindow.setGOTOverlay();
}

addGlobalStyle('.half-prefs { width: 50%; float: left; };');

var other = '<div align="center" style="margin-top: 20px; margin-bottom: 100px;">Platzhalter links:<br>' +
    '<a href="http://www.animenewsnetwork.com/encyclopedia/ratings-anime.php">Anime News Network</a><br>' +
    '<a href="http://www.anisearch.com/anime/toplist">Anisearch</a><br>' +
    '<a href="http://www.eliteanimes.com/anime/toplist/">Eliteanimes</a><br>' +
    '<a href="http://proxer.me/?set=popular#top">Proxer</a><br>' +
    '</div>';

//var teaser = document.getElementById('teaser');
//teaser.remove();
document.getElementsByTagName('footer')[0].innerHTML = "";
document.getElementsByTagName('nav')[0].innerHTML = "";
document.getElementsByTagName('section')[1].remove();
$("a[href='home']").attr("href", "");

$('nav').html('<div id="tabsbar">' +
                 '<ul id="tabbar">' +
                   '<li>' +
                     '<a href="#ui-tabs-1">Serien</a>' +
                   '</li>' +
                   '<li>' +
                     '<a href="#ui-tabs-2">Dynamisch</a>' +
                   '</li>' +
                   '<li>' +
                     '<a href="#ui-tabs-3">Links</a>' +
                   '</li>' +
                   '<li>' +
                       '<a class="btn" href="#ui-tabs-4">Alle Serien</a>' +
                   '</li>' +
                   '<li>' +
                       '<a class="btn" href="#ui-tabs-5">Einstellungen</a>' +
                   '</li>' +
                 '</ul>' + '<div id="ui-tabs-1" style="display: block; padding: 0px;">' +
                 section +
                 '</div>' +
                 '<div id="ui-tabs-2" style="display: block; padding: 0px;">' +
                 //proxerAnimes   +
                 '</div>' +
                 '<div id="ui-tabs-3" style="display: block; padding: 0px;">' +
                 other +
                 '</div>'+
                 '<div id="ui-tabs-4" style="display: block; padding: 0px;">' +
                 '</div>'+
                 '<div id="ui-tabs-5" style="display: block; padding: 0px;">' +
                 '</div>'+
               '</div>');

unsafeWindow.loadUITab = function(_link) {
    $('#ui-tabs-2').load(_link, function() {
        $("#ui-tabs-2 title").remove();
        $("#ui-tabs-2 base").remove();
        $("#ui-tabs-2 meta").remove();
        $("#ui-tabs-2 link").remove();
        $("#ui-tabs-2 #root header").remove();
        $("#ui-tabs-2 #root footer").remove();
        $("#ui-tabs-2 #root nav").remove();
        $("#ui-tabs-2 #root .andere-serien p").remove();
        $("#ui-tabs-2 #root .andere-serien h2").remove();
        $("#ui-tabs-2 #serInput").css("font-size", "15px");
        $("#ui-tabs-2 #seriesContainer").css("font-size", "17px");
        $("#ui-tabs-2 #seriesContainer").css("font-family", "calibri");
        $("#ui-tabs-2").css("font-size", "12px");

        $('#ui-tabs-2 a').each(function() {
            var href = $(this).attr('href');
            var target = $(this).attr('target');
            if (target != "_blank") {
                $(this).attr('onclick', "loadUITab('https://bs.to/" + href + "');")
                    .removeAttr('href');
            } else {
                console.log("blank: " + href);
            }
        });

        $("#ui-tabs-2 > #root").html('<div class="dynamic-back" onclick="' + "loadUITab('https://bs.to/andere-serien/');" + '">Zurück zur Suche</div>' + $("#ui-tabs-2 > #root").html());
    });
};

unsafeWindow.loadUITab('https://bs.to/andere-serien/');

$(function() {
    $("#tabsbar").tabs();
    $("a[href=#ui-tabs-1]").click(function() {
        $("#tabs").tabs("option", "active", 0);
    });
    $("a[href=#ui-tabs-2]").click(function() {
        $("#tabs").tabs("option", "active", 1);
    });
    $("a[href=#ui-tabs-3]").click(function() {
        $("#tabs").tabs("option", "active", 2);
    });
    $("a[href=#ui-tabs-4]").click(function() {
        window.location = 'https://bs.to/andere-serien/';
        $("#tabs").tabs("option", "active", 3);
    });
    $("a[href=#ui-tabs-5]").click(function() {
        $("#tabs").tabs("option", "active", 4);
    });
});

$(function() {
    $( "#accordionLinks" ).accordion({
      heightStyle: "content"
    });
  });
$(function() {
    $( "#accordionRechts" ).accordion({
      heightStyle: "content"
    });
  });

// Cookie Action!

function getAllSeriesCookies() {
    var theCookies = document.cookie.split(';');
    var regexForSerie = /serien_stand_([\w-]*)=([.\[\]\{\}\"\w:,-]*)/;
    var cookieArray = [];
    for (var i = 1 ; i <= theCookies.length; i++) {
        var theSerieMatch = theCookies[i-1].match(regexForSerie);
        if(theSerieMatch !== null) {
           cookieArray.push(theSerieMatch[2]);
        }
    }
    return cookieArray;
}

function addSerieInfoToElements(cookieArray) {
    for (var x = 0; x < cookieArray.length; x++) {
        var parsedCookie = JSON.parse(cookieArray[x])[0][0];
        var element;
        if ($('a[href="serie/'+ parsedCookie.link + '"]')[0] === undefined) {
            console.log("Undefined: " + parsedCookie.link);
        } else {
            element = $('a[href="serie/'+ parsedCookie.link + '"]')[0].parentElement;
            if(parsedCookie.Name !== undefined) {
                var thelink = "serie/" + parsedCookie.link + "/" + parsedCookie.season + "/" + parsedCookie.folge + "-" + parsedCookie.Name;
                element.innerHTML += "<a href='" + thelink + "'class='serie-info'>Last: S" + parsedCookie.season + " E" + parsedCookie.folge + "</a>";
            } else {
                element.innerHTML += "<span class='serie-info'>Last: S" + parsedCookie.season + " E" + parsedCookie.folge + "</span>";
            }
        }
    }
}

addSerieInfoToElements(getAllSeriesCookies());

// Get the headers!
// $("#column1 div h3");
var lTitles = $("#column1 div h3 .header-title");
var rTitles = $("#column2 div h3 .header-title");

var preferencesTab = $('#ui-tabs-5');
var input = "<div class='half-prefs'><div><h3>Check to Hide</h3>";

for (var x = 0; x < lTitles.length; x++) {
    input += '<input type="checkbox" name="' + lTitles[x].innerHTML + '" value="0"/>' + lTitles[x].innerHTML + "<br>";
}

for (var x = 0; x < rTitles.length; x++) {
    input += '<input type="checkbox" name="' + rTitles[x].innerHTML + '" value="0"/>' + rTitles[x].innerHTML + "<br>";
}

input += "</div></div><div class='half-prefs'><div><h3>Overlay</h3>";
input += '<input onclick="set_cookie(' + "'overlay', 'blue'" + '); setBlueOverlay();" type="radio" id="blue_standard" name="overlay" value="blue"><label for="blue_standard"> Blue - Standard</label><br>';
input += '<input onclick="set_cookie(' + "'overlay', 'red'" + '); setRedOverlay();" type="radio" id="red_batman" name="overlay" value="red"><label for="red_batman">  Red - Batman</label><br>';
input += '<input onclick="set_cookie(' + "'overlay', 'orange'" + '); setOrangeOverlay();" type="radio" id="orange_black" name="overlay" value="orange"><label for="orange_black">  Orange is the new Black</label><br>';
input += '<input onclick="set_cookie(' + "'overlay', 'got'" + '); setGOTOverlay();" type="radio" id="got" name="overlay" value="got"><label for="got">  GOT - Alpha</label><br>';
input += "</div></div>";

preferencesTab.html(input);

if(overlay == "blue")
    $("#blue_standard").attr('checked', true);
else if(overlay == "red")
    $("#red_batman").attr('checked', true);
else if(overlay == "orange")
    $("#orange_black").attr('checked', true);
else if(overlay == "got")
    $("#got").attr('checked', true);