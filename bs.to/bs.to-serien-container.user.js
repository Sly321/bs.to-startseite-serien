// ==UserScript==
// @name         bs.to-serien-container
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @description  Hier sind alle Serien drinnen enthalten.
// @include      https://bs.to/
// @include      https://bs.to/home
// @icon         https://s.bs.to/favicon.ico
// @version      1.2.1
// @updateURL	 https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/bs.to/bs.to-serien-container.user.js
// @grant        unsafeWindow
// ==/UserScript==

/* Normale Serien Start */
var serien = [];
serien.push({name: "Agents-of-S-H-I-E-L-D", link: "Marvel-s-Agents-of-S-H-I-E-L-D"});
serien.push({name: "Arrow", link: "Arrow"});
serien.push({name: "Better Call Saul", link: "Better-Call-Saul"});
serien.push({name: "Daredevil", link: "Marvel-s-Daredevil"});
serien.push({name: "Legends of Tomorrow", link: "DC-s-Legends-of-Tomorrow"});
serien.push({name: "Elementary", link: "Elementary"});
serien.push({name: "Fear the Walking Dead", link: "Fear-The-Walking-Dead"});
serien.push({name: "Game of Thrones", link: "Game-of-Thrones"});
serien.push({name: "Gotham", link: "Gotham"});
serien.push({name: "House of Cards", link: "House-of-Cards-US"});
serien.push({name: "iZombie", link: "iZombie"});
serien.push({name: "Lucifer", link: "Lucifer"});
serien.push({name: "Marvels Agent Carter", link: "Marvel-s-Agent-Carter"});
serien.push({name: "Mr. Robot", link: "Mr-Robot"});
serien.push({name: "Supernatural", link: "Supernatural"});
serien.push({name: "Suits", link: "Suits"});
serien.push({name: "The 100", link: "The-100"});
serien.push({name: "The Blacklist", link: "The-Blacklist"});
serien.push({name: "The Flash", link: "The-Flash"});
serien.push({name: "The Originals", link: "The-Originals"});
serien.push({name: "The Royals", link: "The-Royals"});
serien.push({name: "The Strain", link: "The-Strain"});
serien.push({name: "The Man in the High Castle", link: "The-Man-in-the-High-Castle"});
serien.push({name: "The Walking Dead", link: "The-Walking-Dead"});
serien.push({name: "Stranger Things", link: "Vampire-Diaries"});
serien.push({name: "Vampire Diaries", link: "Stranger-Things"});
serien.push({name: "True Detective", link: "True-Detective"});
// Template zum Hinzufügen:
// serien.push({name: "name", link: "link"});
serien.sort(function(a, b) {
  return a.name.localeCompare(b.name);
});

var sitcoms = [];
sitcoms.push({name: "The Big Bang Theory", link: "The-Big-Bang-Theory"});
sitcoms.push({name: "The IT Crowd", link: "The-IT-Crowd"});
sitcoms.push({name: "How I Met Your Mother", link: "How-I-Met-Your-Mother"});
sitcoms.push({name: "Sirens", link: "Sirens"});
sitcoms.push({name: "Anger Management", link: "Anger-Management"});
// Template zum Hinzufügen:
// sitcoms.push({name: "name", link: "link"});
sitcoms.sort(function(a, b) {
  return a.name.localeCompare(b.name);
});

var upcoming = [];
upcoming.push({name: "Helix", link: "Helix"});
upcoming.push({name: "Into the Badlands", link: "Into-the-Badlands"});
upcoming.push({name: "Limitless", link: "Limitless"});
upcoming.push({name: "Minority Report", link: "Minority-Report"});
upcoming.push({name: "Numb3rs", link: "Numb3rs"});
upcoming.push({name: "Scorpion", link: "Scorpion"});
upcoming.push({name: "Shadowhunters: The Mortal Instruments", link: "Shadowhunters-The-Mortal-Instruments"});
upcoming.push({name: "The Magicians", link: "The-Magicians"});
upcoming.push({name: "The Shannara Chronicles", link: "The-Shannara-Chronicles"});
// Template zum Hinzufügen:
// serien.push({name: "name", link: "link"});
upcoming.sort(function(a, b) {
  return a.name.localeCompare(b.name);
});

var serienFinished = [];
serienFinished.push({name: "Constantine", link: "Constantine"});
serienFinished.push({name: "Forever", link: "Forever"});
serienFinished.push({name: "Hannibal", link: "Hannibal"});
serienFinished.push({name: "Nip/Tuck", link: "Nip-Tuck-Schoenheit-hat-ihren-Preis"});
serienFinished.push({name: "Revolution", link: "Revolution"});
serienFinished.push({name: "The Tomorrow-People", link: "The-Tomorrow-People"});
serienFinished.push({name: "Extant", link: "Extant"});
// Template zum Hinzufügen:
// serienFinished.push({name: "name", link: "link"});
serienFinished.sort(function(a, b) {
  return a.name.localeCompare(b.name);
});
/* Normale Serien Ende */

/* Anime Start */
var animeRunning = [];
animeRunning.push({name: "Dragon Ball Super", link: "Dragonball-Super"});
animeRunning.push({name: "Gate: Jieitai Kanochi nite, Kaku Tatakaeri", link: "Gate-Jieitai-Kanochi-nite-Kaku-Tatakaeri"});
animeRunning.push({name: "God Eater", link: "God-Eater"});
animeRunning.push({name: "Attack on Titan", link: "Shingeki-no-Kyojin"});
animeRunning.push({name: "Sword Art Online", link: "Sword-Art-Online"});
animeRunning.push({name: "Koutetsujou no Kabaneri", link: "Koutetsujou-no-Kabaneri"});
animeRunning.push({name: "Nanatsu no Taizai", link: "The-Seven-Deadly-Sins"});
animeRunning.push({name: "Rokka no Yuusha", link: "Rokka-no-Yuusha"});
// Template zum Hinzufügen:
// serienFinished.push({name: "name", link: "link"});
animeRunning.sort(function(a, b) {
  return a.name.localeCompare(b.name);
});

var animeFinished = [];
animeFinished.push({name: "Btooom!", link: "Btooom"});
animeFinished.push({name: "Ansatsu Kyōshitsu", link: "Assassination-Classroom"});
animeFinished.push({name: "Elfen Lied", link: "Elfen-Lied"});
animeFinished.push({name: "Guilty Crown", link: "Guilty-Crown"});
animeFinished.push({name: "Devil is a Part Timer", link: "The-Devil-is-a-Part-Timer"});
animeFinished.push({name: "Gurren Lagann", link: "Gurren-Lagann"});
animeFinished.push({name: "High School DxD", link: "High-School-D-D"});
animeFinished.push({name: "Magi", link: "Magi-The-Labyrinth-of-Magic"});
animeFinished.push({name: "No Game No Life", link: "No-Game-No-Life"});
animeFinished.push({name: "Afro Samurai", link: "Afro-Samurai"});
animeFinished.push({name: "Akame ga Kill!", link: "Akame-ga-Kill"});
animeFinished.push({name: "Blue Exorcist", link: "Blue-Exorcist"});
animeFinished.push({name: "Code Geass", link: "Code-Geass"});
animeFinished.push({name: "Death Note", link: "Death-Note"});
animeFinished.push({name: "Fate/Zero", link: "Fate-Zero"});
animeFinished.push({name: "Fate/Stay Night: Unlimited Blade Works", link: "Fate-Stay-Night-Unlimited-Blade-Works"});
animeFinished.push({name: "Psycho Pass", link: "Psycho-Pass"});
animeFinished.push({name: "Soul Eater", link: "Soul-Eater"});
animeFinished.push({name: "Steins;Gate", link: "Steins-Gate"});
animeFinished.push({name: "Tokyo Ghoul", link: "Tokyo-Ghoul"});
animeFinished.push({name: "Neon Genesis Evangelion", link: "Neon-Genesis-Evangelion"});
animeFinished.push({name: "Samurai Champloo", link: "Samurai-Champloo"});
animeFinished.push({name: "Trinity-Seven", link: "Trinity-Seven-7-nin-no-Masho-Tsukai"});
animeFinished.push({name: "Mirai Nikki", link: "Mirai-Nikki"});
animeFinished.push({name: "Pandora Hearts", link: "Pandora-Hearts"});
animeFinished.push({name: "Log-Horizon", link: "Log-Horizon"});
animeFinished.push({name: "D.Gray-Man", link: "D-Gray-Man"});
animeFinished.push({name: "Magic Kaito", link: "Magic-Kaito"});
animeFinished.push({name: "Oda Nobuna no Yabou", link: "Oda-Nobuna-no-Yabou"});
animeFinished.push({name: "Noragami", link: "Noragami"});
animeFinished.push({name: "11eyes", link: "11eyes"});
animeFinished.push({name: "Black Lagoon", link: "Black-Lagoon"});
animeFinished.push({name: "Black Bullet", link: "Black-Bullet"});
animeFinished.push({name: "K-Project", link: "K-Project"});
animeFinished.push({name: "Hidan no Aria", link: "Hidan-no-Aria"});
animeFinished.push({name: "Jormungand", link: "Jormungand"});
animeFinished.push({name: "Overlord", link: "Overlord"});
animeFinished.push({name: "Spice and Wolf", link: "Spice-and-Wolf"});
animeFinished.push({name: "Owari no Seraph", link: "Owari-no-Seraph"});
animeFinished.push({name: "Sky Wizards Academy", link: "Kuusen-Madoushi-Kouhosei-no-Kyoukan"});
animeFinished.push({name: "One Punch Man", link: "One-Punch-Man"});
// Template zum Hinzufügen:
// serienFinished.push({name: "name", link: "link"});
animeFinished.sort(function(a, b) {
  return a.name.localeCompare(b.name);
});

var animeClassics = [];
animeClassics.push({name: "Bleach", link: "Bleach"});
animeClassics.push({name: "Dragonball", link: "Dragonball"});
animeClassics.push({name: "Dragonball-Z", link: "Dragonball-Z"});
animeClassics.push({name: "Fairy Tail", link: "Fairy-Tail"});
animeClassics.push({name: "Fullmetal Alchemist: Brotherhood", link: "Fullmetal-Alchemist-Brotherhood"});
animeClassics.push({name: "Hunter-x-Hunter", link: "Hunter-x-Hunter-2011"});
animeClassics.push({name: "InuYasha", link: "InuYasha"});
animeClassics.push({name: "Naruto", link: "Naruto"});
animeClassics.push({name: "Naruto Shippuden", link: "Naruto-Shippuuden"});
animeClassics.push({name: "One Piece", link: "One-Piece"});
// Template zum Hinzufügen:
// serienFinished.push({name: "name", link: "link"});
animeClassics.sort(function(a, b) {
  return a.name.localeCompare(b.name);
});

var animeSeason16 = [];
animeSeason16.push({name: "Re: Zero Kara Hajimeru Isekai Seikatsu", link: "Re-Zero-Kara-Hajimeru-Isekai-Seikatsu"});
animeSeason16.push({name: "Boku dake ga Inai Machi", link: "Boku-dake-ga-Inai-Machi"});
animeSeason16.push({name: "Berserk (2016)", link: "Berserk-2016"});
animeSeason16.push({name: "Joker Game", link: "Joker-Game"});
animeSeason16.push({name: "Ajin", link: "Ajin"});
// Template zum Hinzufügen:
// serienFinished.push({name: "name", link: "link"});
animeSeason16.sort(function(a, b) {
  return a.name.localeCompare(b.name);
});

// Füge Serien hier ihren Containern Hinzu:
unsafeWindow.serienContainer = [];
serienContainer.push({ values: serien, title: "Serien", position: "left" });
serienContainer.push({ values: sitcoms, title: "Sitcoms", position: "left" });
serienContainer.push({ values: upcoming, title: "Upcoming", position: "left" });
serienContainer.push({ values: serienFinished, title: "Finished", position: "left" });
serienContainer.push({ values: animeRunning, title: "Anime", position: "right" });
serienContainer.push({ values: animeSeason16, title: "Season-2016", position: "right" });
serienContainer.push({ values: animeClassics, title: "Classics", position: "right" });
serienContainer.push({ values: animeFinished, title: "Anime-Finished", position: "right" });
