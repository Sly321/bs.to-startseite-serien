// ==UserScript==
// @name         bs.to-pre-format
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @description  Formatiert die bs.to Startseite für die späteren Designs.
// @include      https://bs.to/
// @include      https://bs.to/home
// @icon         https://s.bs.to/favicon.ico
// @version      1.2.4
// @updateURL	 https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/bs.to/bs.to-pre-format.user.js
// @require		 https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @grant        unsafeWindow
// ==/UserScript==


(function() {
    'use strict';

	// Standard Data
	var favorites = [];
	favorites.push({values: unsafeWindow.getFavorites(), title: "Favoriten", position: "left"});
	favorites.push.apply(favorites, unsafeWindow.serienContainer);
	unsafeWindow.serienContainer = favorites;
	// Building the essentiell elements
	unsafeWindow.buildLogin();
	unsafeWindow.buildNav();
	unsafeWindow.clearRoot();
	unsafeWindow.appendEssentialsToRoot();
	// Start
	var nav = $(".navigation-panel");
	var root = $("#root");
	var leftContainer = $(document.createElement("div")).css("float", "left").css("width", "443px").attr("id", "left-container");
	var rightContainer = $(document.createElement("div")).css("float", "left").css("width", "443px").attr("id", "right-container");
	root.append(leftContainer, rightContainer);

	$(favorites).each(function() {
		if(this.position == "left")
			unsafeWindow.buildListElement("left-container", this.values, this.title);
		else
			unsafeWindow.buildListElement("right-container", this.values, this.title);
		var checkbox = unsafeWindow.buildCheckBox(this.title);
		nav.append(checkbox);
	});
})();