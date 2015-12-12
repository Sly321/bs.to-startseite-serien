// ==UserScript==
// @name         bs.to Top Anime Script
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @description  Zeigt dir eine Anime Toplist auf der Startseite an 25/100 verlinkt.
// @include      http://bs.to/
// @icon         http://s.bs.to/favicon.ico
// @version      0.8.7.5
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js
// @updateURL    https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/anime-toplist.user.js
// ==/UserScript==

var Serien = '<ul>' +
    '<li><a href="serie/Agents-of-S-H-I-E-L-D">Agents-of-S-H-I-E-L-D</a></li>' +
    '<li><a href="serie/Arrow">Arrow</a></li>' +
    '<li><a href="serie/Better-Call-Saul">Better Call Saul</a></li>' +
    '<li><a href="serie/Constantine">Constantine</a></li>' +
    '<li><a href="serie/Marvel-s-Daredevil">Daredevil</a></li>' +
    '<li><a href="serie/Elementary">Elementary</a></li>' +
    '<li><a href="serie/Extant">Extant</a></li>' +
    '<li><a href="serie/Fear-the-Walking-Dead">Fear the Walking Dead</a></li>' +
    '<li><a href="serie/Forever">Forever</a></li>' +
    '<li><a href="serie/Game-of-Thrones">Game of Thrones</a></li>' +
    '<li><a href="serie/Gotham">Gotham</a></li>' +
    '<li><a href="serie/House-of-Cards">House of Cards</a></li>' +
    '<li><a href="serie/Hannibal">Hannibal</a></li>' +
    '<li><a href="serie/iZombie">iZombie</a></li>' +
    '<li><a href="serie/Marvel-s-Agent-Carter">Marvels Agent Carter</a></li>' +
    '<li><a href="/serie/Nip-Tuck-Schoenheit-hat-ihren-Preis">Nip/Tuck</a></li>' +
    '<li><a href="serie/Revolution">Revolution</a></li>' +
    '<li><a href="serie/Suits">Suits</a></li>' +
    '<li><a href="serie/Supernatural-Zur-Hoelle-mit-dem-Boesen">Supernatural</a></li>' +
    '<li><a href="serie/The-100">The 100</a></li>' +
    '<li><a href="serie/The-Blacklist">The Blacklist</a></li>' +
    '<li><a href="serie/The-Flash">The Flash</a></li>' +
    '<li><a href="serie/The-Originals">The Originals</a></li>' +
    '<li><a href="serie/The-Strain">The Strain</a></li>' +
    '<li><a href="serie/The-Tomorrow-People">The Tomorrow People</a></li>' +
    '<li><a href="serie/The-Walking-Dead">The Walking Dead</a></li>' +
    '<li><a href="serie/Vampire-Diaries">Vampire Diaries</a></li>' +
    '</ul>';

var SitComs = '<ul>' +
    '<li><a href="serie/The-Big-Bang-Theory">The Big Bang Theory</a></li>' +
    '</ul>';

var AnimeOld = '<ul>' +
'<li><a href="serie/Afro-Samurai">Afro Samurai</a></li>' +
'<li><a href="serie/Akame-ga-Kill">Akame ga Kill!</a></li>' +
'<li><a href="serie/Assassination-Classroom">Ansatsu Kyoushitsu</a></li>' +
'<li><a href="serie/Btooom">Btooom!</a></li>' +
'<li><a href="serie/Code-Geass">Code Geass</a></li>' +
'<li><a href="serie/The-Devil-is-a-Part-Timer">Devil is a Part Timer</a></li>' +
'<li><a href="serie/Dragonball-Super">Dragonball Super</a></li>' +
'<li><a href="serie/Elfen-Lied">Elfen Lied</a></li>' +
'<li><a href="serie/Fate-Zero">Fate/Zero</a></li>' +
'<li><a href="serie/Fate-Stay-Night-Unlimited-Blade-Works">Fate/Stay Night: Unlimited Blade Works</a></li>' +
'<li><a href="serie/Guilty-Crown">Guilty Crown</a></li>' +
'<li><a href="serie/Gurren-Lagann">Gutten Lagann</a></li>' +
'<li><a href="serie/High-School-D-D">Highschool DxD</a></li>' +
'<li><a href="serie/InuYasha">InuYasha</a></li>' +
'<li><a href="serie/Naruto">Naruto</a></li>' +
'<li><a href="serie/Naruto-Shippuuden">Naruto Shippuden</a></li>' +
'<li><a href="serie/Neon-Genesis-Evangelion">Neon Genesis Evangelion</a></li>' +
'<li><a href="serie/No-Game-No-Life">No Game No Life</a></li>' +
'<li><a href="serie/One-Piece">One Piece</a></li>' +
'<li><a href="serie/Psycho-Pass">Psycho Pass</a></li>' +
'<li><a href="serie/Shingeki-no-Kyojin">Shingeki no Kyojin</a></li>' +
'<li><a href="serie/Spice-and-Wolf">Spice and Wolf</a></li>' +
'<li><a href="serie/Steins-Gate">Steins;Gate</a></li>' +
'<li><a href="serie/Sword-Art-Online">Sword Art Online</a></li>' +
'<li><a href="serie/Tokyo-Ghoul">Tokyo Ghoul</a></li>' +
    '</ul>';
    
var AnimeNew = '<ul>' +
'<li><a id="magi" href="serie/Magi-The-Labyrinth-of-Magic">Magi - The Labyrinth of Magic</a></li>' +
'<li><a id="gate" href="serie/Gate-Jieitai-Kanochi-nite-Kaku-Tatakaeri">Gate: Jieitai Kanochi nite, Kaku Tatakaeri</a></li>' +
'<li><a id="over" href="serie/Overlord">Overlord</a></li>' +
'<li><a id="over" href="serie/God-Eater">God Eater</a></li>' +
'<li><a id="over" href="serie/Rokka-no-Yuusha">Rokka no Yuusha</a></li>' +
'<li><a id="over" href="serie/Kuusen-Madoushi-Kouhosei-no-Kyoukan">Kuusen Madoushi Kouhosei no Kyoukan</a></li>' +
'<li><a id="over" href="/serie/Owari-no-Seraph">Owari no Seraph</a></li>' +
'<li><a id="over" href="/serie/The-Irregular-at-Magic-High-School">The Irregular at Magic High School</a></li>' +
'<li><a id="over" href="/serie/K-Project/1">K-Project</a></li>' +
'<li><a id="over" href="/serie/Jormungand/1">Jormungand</a></li>' +
'<li><a id="over" href="/serie/Black-Bullet">Black Bullet</a></li>' +
'<li><a id="over" href="/serie/Log-Horizon/1">Log-Horizon</a></li>' +
'</ul>';

var accordionLinks  = "<div id='accordionLinks'><h3>Serien</h3><div>" + Serien + '</div><h3>Sitcoms</h3><div>' + SitComs + "</div></div>";
var accordionRechts = "<div id='accordionRechts'><h3>Anime</h3><div>" + AnimeOld + "</div><h3>New *__*</h3><div>" + AnimeNew + "</div></div>";

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

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

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
addGlobalStyle('.ui-accordion .ui-accordion-content { padding: 0px; }')
addGlobalStyle('::-webkit-scrollbar { width: 0.5em; height: 0.5em; }::-webkit-scrollbar-track {box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);}::-webkit-scrollbar-thumb { background: rgba(100, 100, 100, 0.8); border-radius: 5px;}::-webkit-scrollbar-corner,::-webkit-scrollbar-thumb:window-inactive { background: rgba(100, 100, 100, 0.4); }');

addGlobalStyle('.column { width: 420; margin: 5px; } ');
addGlobalStyle('#column1 { float:left; } ');
addGlobalStyle('#column2 { float:right; } ');
addGlobalStyle('#tabbar { background-color: #66f; width: 900px; height: 45px; padding: 0; border-radius: 0px; border-left: 0px; border-right: 0px}');
addGlobalStyle('#tabbar > li > a { padding-bottom: 11px; padding-top: 11px; height: 22px;}');
addGlobalStyle('#tabbar > li { margin: 0px; border: 0px border-left: 1px; border-right: 1px; border-radius: 0px}');

var proxerAnimes = '<div style="min-width:0;" align="center"><h1>Anime Toplist</h1></div>' +
    '<table class="inner" style="min-width:0;margin-left: 5px;" align="center"><tbody><tr><td align="center">' +
    '<a href="serie/sword-art-online">' +
    '<img style="margin: 10px;" class="tip" title="1# Sword Art Online II" width="150" height="190" src="//cdn.proxer.me/cover/7697.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/akame-ga-kill">' +
    '<img style="margin: 10px;" class="tip" title="2# Akame ga Kill!" width="150" height="190" src="//cdn.proxer.me/cover/8399.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/fairy-tail">' +
    '<img style="margin: 10px;" class="tip" title="3# Fairy Tail (2014)" width="150" height="190" src="//cdn.proxer.me/cover/8335.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/Parasyte-Probability-of-Survival">' +
    '<img style="margin: 10px;" class="tip" title="4# Kiseijuu: Sei no Kakuritsu" width="150" height="190" src="//cdn.proxer.me/cover/9723.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/one-piece">' +
    '<img style="margin: 10px;" class="tip" title="5# One Piece" width="150" height="190" src="//cdn.proxer.me/cover/53.jpg">' +
    '</a>' +
    '</td></tr><tr><td align="center">' +
    '<a href="serie/Hunter-x-Hunter-2011">' +
    '<img style="margin: 10px;" class="tip" title="6# Hunter X Hunter (2011)" width="150" height="190" src="//cdn.proxer.me/cover/2089.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/tokyo-ghoul">' +
    '<img style="margin: 10px;" class="tip" title="7# Tokyo Ghoul" width="150" height="190" src="//cdn.proxer.me/cover/8614.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/fairy-tail">' +
    '<img style="margin: 10px;" class="tip" title="8# Fairy Tail" width="150" height="190" src="//cdn.proxer.me/cover/74.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/naruto-shippuuden">' +
    '<img style="margin: 10px;" class="tip" title="9# Naruto Shippuuden" width="150" height="190" src="//cdn.proxer.me/cover/46.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/Tokyo-Ghoul">' +
    '<img style="margin: 10px;" class="tip" title="10# Tokyo Ghoul √A" width="150" height="190" src="//cdn.proxer.me/cover/10160.jpg">' +
    '</a>' +
    '</td></tr><tr><td align="center">' +
    '<a href="serie/shingeki-no-kyojin">' +
    '<img style="margin: 10px;" class="tip" title="11# Shingeki no Kyojin" width="150" height="190" src="//cdn.proxer.me/cover/5840.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/Sword-Art-Online">' +
    '<img style="margin: 10px;" class="tip" title="12# Sword Art Online" width="150" height="190" src="//cdn.proxer.me/cover/4167.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/Nanatsu-no-Taizai">' +
    '<img style="margin: 10px;" class="tip" title="13# Nanatsu no Taizai" width="150" height="190" src="//cdn.proxer.me/cover/9747.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/The-Irregular-at-Magic-High-School">' +
    '<img style="margin: 10px;" class="tip" title="14# Mahouka Koukou no Rettousei" width="150" height="190" src="//cdn.proxer.me/cover/8256.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/Seirei-Tsukai-no-Blade-Dance">' +
    '<img style="margin: 10px;" class="tip" title="15# Seirei Tsukai no Blade Dance" width="150" height="190" src="//cdn.proxer.me/cover/6586.jpg">' +
    '</a>' +
    '</td></tr><tr><td align="center">' +
    '<a href="serie/No-Game-No-Life">' +
    '<img style="margin: 10px;" class="tip" title="16# No Game No Life" width="150" height="190" src="//cdn.proxer.me/cover/6587.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/Akatsuki-no-Yona">' +
    '<img style="margin: 10px;" class="tip" title="17# Akatsuki no Yona" width="150" height="190" src="//cdn.proxer.me/cover/9651.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/High-School-D-D">' +
    '<img style="margin: 10px;" class="tip" title="18# High School DxD BorN" width="150" height="190" src="//cdn.proxer.me/cover/9219.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/Ao-Haru-Ride">' +
    '<img style="margin: 10px;" class="tip" title="19# Ao Haru Ride" width="150" height="190" src="//cdn.proxer.me/cover/8606.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/Death-Parade">' +
    '<img style="margin: 10px;" class="tip" title="20# Death Parade" width="150" height="190" src="//cdn.proxer.me/cover/10393.jpg">' +
    '</a>' +
    '</td></tr><tr><td align="center">' +
    '<a href="serie/Terror-in-Tokyo">' +
    '<img style="margin: 10px;" class="tip" title="21# Zankyou no Terror" width="150" height="190" src="//cdn.proxer.me/cover/8455.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/Shinmai-Maou-no-Testament">' +
    '<img style="margin: 10px;" class="tip" title="22# Shinmai Maou no Testament" width="150" height="190" src="//cdn.proxer.me/cover/9918.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/DRAMAtical-Murder">' +
    '<img style="margin: 10px;" class="tip" title="23# DRAMAtical Murder" width="150" height="190" src="//cdn.proxer.me/cover/8476.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/Seraph-of-the-End">' +
    '<img style="margin: 10px;" class="tip" title="24# Owari no Seraph" width="150" height="190" src="//cdn.proxer.me/cover/11065.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="serie/Log-Horizon">' +
    '<img style="margin: 10px;" class="tip" title="25# Log Horizon Season 2" width="150" height="190" src="//cdn.proxer.me/cover/8438.jpg">' +
    '</a>' +
    '</td></tr><tr><td align="center">' +
    '<a href="/info/9052#top">' +
    '<img style="margin: 10px;" class="tip" title="26# Kuroko no Basket 3" width="150" height="190" src="//cdn.proxer.me/cover/9052.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/8862#top">' +
    '<img style="margin: 10px;" class="tip" title="27# Grisaia no Kajitsu" width="150" height="190" src="//cdn.proxer.me/cover/8862.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/10195#top">' +
    '<img style="margin: 10px;" class="tip" title="28# Absolute Duo" width="150" height="190" src="//cdn.proxer.me/cover/10195.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/9329#top">' +
    '<img style="margin: 10px;" class="tip" title="29# Trinity Seven" width="150" height="190" src="//cdn.proxer.me/cover/9329.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/6584#top">' +
    '<img style="margin: 10px;" class="tip" title="30# Madan no Ou to Vanadis" width="150" height="190" src="//cdn.proxer.me/cover/6584.jpg">' +
    '</a>' +
    '</td></tr><tr><td align="center">' +
    '<a href="/info/9341#top">' +
    '<img style="margin: 10px;" class="tip" title="31# Ookami Shoujo to Kuro Ouji" width="150" height="190" src="//cdn.proxer.me/cover/9341.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/1533#top">' +
    '<img style="margin: 10px;" class="tip" title="32# Mirai Nikki" width="150" height="190" src="//cdn.proxer.me/cover/1533.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/10595#top">' +
    '<img style="margin: 10px;" class="tip" title="33# Dungeon ni Deai o Motomeru no wa Machigatteiru darō ka?" width="150" height="190" src="//cdn.proxer.me/cover/10595.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/9200#top">' +
    '<img style="margin: 10px;" class="tip" title="34# Shigatsu wa Kimi no Uso" width="150" height="190" src="//cdn.proxer.me/cover/9200.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/6318#top">' +
    '<img style="margin: 10px;" class="tip" title="35# Love Stage!!" width="150" height="190" src="//cdn.proxer.me/cover/6318.jpg">' +
    '</a>' +
    '</td></tr><tr><td align="center">' +
    '<a href="/info/7717#top">' +
    '<img style="margin: 10px;" class="tip" title="36# Bishoujo Senshi Sailor Moon: Crystal" width="150" height="190" src="//cdn.proxer.me/cover/7717.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/198#top">' +
    '<img style="margin: 10px;" class="tip" title="37# Bleach" width="150" height="190" src="//cdn.proxer.me/cover/198.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/8338#top">' +
    '<img style="margin: 10px;" class="tip" title="38# Haikyuu!!" width="150" height="190" src="//cdn.proxer.me/cover/8338.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/8703#top">' +
    '<img style="margin: 10px;" class="tip" title="39# Gekkan Shoujo Nozaki-kun" width="150" height="190" src="//cdn.proxer.me/cover/8703.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/3318#top">' +
    '<img style="margin: 10px;" class="tip" title="40# Kuroko no Basket" width="150" height="190" src="//cdn.proxer.me/cover/3318.jpg">' +
    '</a>' +
    '</td></tr><tr><td align="center">' +
    '<a href="/info/9960#top">' +
    '<img style="margin: 10px;" class="tip" title="41# Seiken Tsukai no World Break" width="150" height="190" src="//cdn.proxer.me/cover/9960.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/8962#top">' +
    '<img style="margin: 10px;" class="tip" title="42# Tokyo ESP" width="150" height="190" src="//cdn.proxer.me/cover/8962.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/2357#top">' +
    '<img style="margin: 10px;" class="tip" title="43# High School DxD" width="150" height="190" src="//cdn.proxer.me/cover/2357.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/9831#top">' +
    '<img style="margin: 10px;" class="tip" title="44# Cross Ange: Tenshi to Ryuu no Rondo" width="150" height="190" src="//cdn.proxer.me/cover/9831.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/9248#top">' +
    '<img style="margin: 10px;" class="tip" title="45# Ansatsu Kyoushitsu" width="150" height="190" src="//cdn.proxer.me/cover/9248.jpg">' +
    '</a>' +
    '</td></tr><tr><td align="center">' +
    '<a href="/info/353#top">' +
    '<img style="margin: 10px;" class="tip" title="46# Hagane no Renkinjutsushi: Fullmetal Alchemist" width="150" height="190" src="//cdn.proxer.me/cover/353.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/59#top">' +
    '<img style="margin: 10px;" class="tip" title="47# Death Note" width="150" height="190" src="//cdn.proxer.me/cover/59.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/4704#top">' +
    '<img style="margin: 10px;" class="tip" title="48# Sakurasou no Pet na Kanojo" width="150" height="190" src="//cdn.proxer.me/cover/4704.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/4812#top">' +
    '<img style="margin: 10px;" class="tip" title="49# K" width="150" height="190" src="//cdn.proxer.me/cover/4812.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/8594#top">' +
    '<img style="margin: 10px;" class="tip" title="50# Aldnoah.Zero" width="150" height="190" src="//cdn.proxer.me/cover/8594.jpg">' +
    '</a>' +
    '</td></tr><tr><td align="center">' +
    '<a href="/info/6640#top">' +
    '<img style="margin: 10px;" class="tip" title="51# Log Horizon" width="150" height="190" src="//cdn.proxer.me/cover/6640.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/9060#top">' +
    '<img style="margin: 10px;" class="tip" title="52# Amagi Brilliant Park" width="150" height="190" src="//cdn.proxer.me/cover/9060.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/10242#top">' +
    '<img style="margin: 10px;" class="tip" title="53# Shokugeki no Souma" width="150" height="190" src="//cdn.proxer.me/cover/10242.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/6638#top">' +
    '<img style="margin: 10px;" class="tip" title="54# Diamond no Ace" width="150" height="190" src="//cdn.proxer.me/cover/6638.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/8678#top">' +
    '<img style="margin: 10px;" class="tip" title="55# Free! Eternal Summer" width="150" height="190" src="//cdn.proxer.me/cover/8678.jpg">' +
    '</a>' +
    '</td></tr><tr><td align="center">' +
    '<a href="/info/9328#top">' +
    '<img style="margin: 10px;" class="tip" title="56# Inou Battle wa Nichijou-kei no Naka de" width="150" height="190" src="//cdn.proxer.me/cover/9328.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/9198#top">' +
    '<img style="margin: 10px;" class="tip" title="57# World Trigger" width="150" height="190" src="//cdn.proxer.me/cover/9198.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/277#top">' +
    '<img style="margin: 10px;" class="tip" title="58# Gintama" width="150" height="190" src="//cdn.proxer.me/cover/277.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/325#top">' +
    '<img style="margin: 10px;" class="tip" title="59# Higurashi no Naku Koro ni" width="150" height="190" src="//cdn.proxer.me/cover/325.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/779#top">' +
    '<img style="margin: 10px;" class="tip" title="60# Katekyo Hitman Reborn!" width="150" height="190" src="//cdn.proxer.me/cover/779.jpg">' +
    '</a>' +
    '</td></tr><tr><td align="center">' +
    '<a href="/info/7745#top">' +
    '<img style="margin: 10px;" class="tip" title="61# Black Bullet" width="150" height="190" src="//cdn.proxer.me/cover/7745.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/2085#top">' +
    '<img style="margin: 10px;" class="tip" title="62# Guilty Crown" width="150" height="190" src="//cdn.proxer.me/cover/2085.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/8612#top">' +
    '<img style="margin: 10px;" class="tip" title="63# Rail Wars!" width="150" height="190" src="//cdn.proxer.me/cover/8612.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/7057#top">' +
    '<img style="margin: 10px;" class="tip" title="64# Nisekoi" width="150" height="190" src="//cdn.proxer.me/cover/7057.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/61#top">' +
    '<img style="margin: 10px;" class="tip" title="65# Toradora!" width="150" height="190" src="//cdn.proxer.me/cover/61.jpg">' +
    '</a>' +
    '</td></tr><tr><td align="center">' +
    '<a href="/info/6356#top">' +
    '<img style="margin: 10px;" class="tip" title="66# Noragami" width="150" height="190" src="//cdn.proxer.me/cover/6356.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/342#top">' +
    '<img style="margin: 10px;" class="tip" title="67# Meitantei Conan" width="150" height="190" src="//cdn.proxer.me/cover/342.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/10231#top">' +
    '<img style="margin: 10px;" class="tip" title="68# Kami-sama Hajimemashita 2" width="150" height="190" src="//cdn.proxer.me/cover/10231.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/4819#top">' +
    '<img style="margin: 10px;" class="tip" title="69# Zetsuen no Tempest" width="150" height="190" src="//cdn.proxer.me/cover/4819.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/8738#top">' +
    '<img style="margin: 10px;" class="tip" title="70# Glasslip" width="150" height="190" src="//cdn.proxer.me/cover/8738.jpg">' +
    '</a>' +
    '</td></tr><tr><td align="center">' +
    '<a href="/info/828#top">' +
    '<img style="margin: 10px;" class="tip" title="71# Angel Beats!" width="150" height="190" src="//cdn.proxer.me/cover/828.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/6513#top">' +
    '<img style="margin: 10px;" class="tip" title="72# Strike the Blood" width="150" height="190" src="//cdn.proxer.me/cover/6513.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/2185#top">' +
    '<img style="margin: 10px;" class="tip" title="73# KissXsis OVA" width="150" height="190" src="//cdn.proxer.me/cover/2185.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/7619#top">' +
    '<img style="margin: 10px;" class="tip" title="74# Gokukoku no Brynhildr" width="150" height="190" src="//cdn.proxer.me/cover/7619.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/4#top">' +
    '<img style="margin: 10px;" class="tip" title="75# Bakemonogatari" width="150" height="190" src="//cdn.proxer.me/cover/4.jpg">' +
    '</a>' +
    '</td></tr><tr><td align="center">' +
    '<a href="/info/8217#top">' +
    '<img style="margin: 10px;" class="tip" title="76# Rokujyōma no Shinryakusha!?" width="150" height="190" src="//cdn.proxer.me/cover/8217.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/2136#top">' +
    '<img style="margin: 10px;" class="tip" title="77# Another" width="150" height="190" src="//cdn.proxer.me/cover/2136.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/1884#top">' +
    '<img style="margin: 10px;" class="tip" title="78# Ao no Exorcist" width="150" height="190" src="//cdn.proxer.me/cover/1884.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/9853#top">' +
    '<img style="margin: 10px;" class="tip" title="79# Kekkai Sensen" width="150" height="190" src="//cdn.proxer.me/cover/9853.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/5825#top">' +
    '<img style="margin: 10px;" class="tip" title="80# Date a Live" width="150" height="190" src="//cdn.proxer.me/cover/5825.jpg">' +
    '</a>' +
    '</td></tr><tr><td align="center">' +
    '<a href="/info/8472#top">' +
    '<img style="margin: 10px;" class="tip" title="81# Psycho Pass Re:START" width="150" height="190" src="//cdn.proxer.me/cover/8472.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/7881#top">' +
    '<img style="margin: 10px;" class="tip" title="82# Barakamon" width="150" height="190" src="//cdn.proxer.me/cover/7881.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/9832#top">' +
    '<img style="margin: 10px;" class="tip" title="83# Magic Kaito 1412" width="150" height="190" src="//cdn.proxer.me/cover/9832.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/5506#top">' +
    '<img style="margin: 10px;" class="tip" title="84# Kuroko no Basket 2" width="150" height="190" src="//cdn.proxer.me/cover/5506.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/222#top">' +
    '<img style="margin: 10px;" class="tip" title="85# Code Geass: Hangyaku no Lelouch" width="150" height="190" src="//cdn.proxer.me/cover/222.jpg">' +
    '</a>' +
    '</td></tr><tr><td align="center">' +
    '<a href="/info/5207#top">' +
    '<img style="margin: 10px;" class="tip" title="86# Mondaiji-tachi ga Isekai kara Kuru Sou Desu yo?" width="150" height="190" src="//cdn.proxer.me/cover/5207.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/45#top">' +
    '<img style="margin: 10px;" class="tip" title="87# Naruto" width="150" height="190" src="//cdn.proxer.me/cover/45.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/2080#top">' +
    '<img style="margin: 10px;" class="tip" title="88# Boku wa Tomodachi ga Sukunai" width="150" height="190" src="//cdn.proxer.me/cover/2080.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/3242#top">' +
    '<img style="margin: 10px;" class="tip" title="89# Hyouka" width="150" height="190" src="//cdn.proxer.me/cover/3242.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/123#top">' +
    '<img style="margin: 10px;" class="tip" title="90# KissXsis" width="150" height="190" src="//cdn.proxer.me/cover/123.jpg">' +
    '</a>' +
    '</td></tr><tr><td align="center">' +
    '<a href="/info/10261#top">' +
    '<img style="margin: 10px;" class="tip" title="91# Yahari Ore no Seishun Love Comedy wa Machigatteiru. Zoku" width="150" height="190" src="//cdn.proxer.me/cover/10261.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/9053#top">' +
    '<img style="margin: 10px;" class="tip" title="92# Fate/stay night: Unlimited Blade Works" width="150" height="190" src="//cdn.proxer.me/cover/9053.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/8947#top">' +
    '<img style="margin: 10px;" class="tip" title="93# Kantai Collection: KanColle" width="150" height="190" src="//cdn.proxer.me/cover/8947.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/648#top">' +
    '<img style="margin: 10px;" class="tip" title="94# Soul Eater" width="150" height="190" src="//cdn.proxer.me/cover/648.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/6056#top">' +
    '<img style="margin: 10px;" class="tip" title="95# High School DxD New" width="150" height="190" src="//cdn.proxer.me/cover/6056.jpg">' +
    '</a>' +
    '</td></tr><tr><td align="center">' +
    '<a href="/info/159#top">' +
    '<img style="margin: 10px;" class="tip" title="96# Durarara!!" width="150" height="190" src="//cdn.proxer.me/cover/159.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/1578#top">' +
    '<img style="margin: 10px;" class="tip" title="97# Beelzebub" width="150" height="190" src="//cdn.proxer.me/cover/1578.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/8498#top">' +
    '<img style="margin: 10px;" class="tip" title="98# Kuroshitsuji Book of Circus" width="150" height="190" src="//cdn.proxer.me/cover/8498.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/8220#top">' +
    '<img style="margin: 10px;" class="tip" title="99# Mekaku City Actors" width="150" height="190" src="//cdn.proxer.me/cover/8220.jpg">' +
    '</a>' +
    '</td><td align="center">' +
    '<a href="/info/1600#top">' +
    '<img style="margin: 10px;" class="tip" title="100# Kore wa Zombie Desu ka?" width="150" height="190" src="//cdn.proxer.me/cover/1600.jpg">' +
    '</a>' +
    '</td></tr><tr><td colspan="5"></td></tr></tbody></table>';

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

$('nav').html('<div id="tabsbar">' +
                 '<ul id="tabbar">' +
                   '<li>' +
                     '<a href="#ui-tabs-1">Serien</a>' +
                   '</li>' +
                   '<li>' +
                     '<a href="#ui-tabs-2">Top 100</a>' +
                   '</li>' +
                   '<li>' +
                     '<a href="#ui-tabs-3">Links</a>' +
                   '</li>' +
                   '<li>' +
                       '<a class="btn" href="#andere-serien">Alle Serien</a>' +
                   '</li>' +
                 '</ul>' + '<div id="ui-tabs-1" style="display: block; padding: 0px;">' +
                 section +
                 '</div>' +
                 '<div id="ui-tabs-2" style="display: block; padding: 0px;">' +
                 proxerAnimes   +
                 '</div>' +
                 '<div id="ui-tabs-3" style="display: block; padding: 0px;">' +
                 other +
                 '</div>'+
               '</div>');

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
    $("a[href=#andere-serien]").click(function() {
        window.location = "http://bs.to/andere-serien/";
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