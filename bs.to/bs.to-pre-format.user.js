// ==UserScript==
// @name         bs.to-pre-format
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @description  Formatiert die bs.to Startseite für die späteren Designs.
// @include      https://bs.to/
// @icon         https://s.bs.to/favicon.ico
// @version      0.3
// @updateURL	 https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/bs.to/bs.to-pre-format.user.js
// @require		 https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @grant        unsafeWindow
// ==/UserScript==


(function() {
    'use strict';
	// Standard Data
	unsafeWindow.favorites = getFavorites();
	// Building the essentiell elements
	buildLogin();
	buildNav();
	clearRoot();
	appendEssentialsToRoot();
	// Start
	var favoritesLabel = $(document.createElement("label"));
	favoritesLabel.html("Favoriten ");
	unsafeWindow.favoritesCheckbox = $(document.createElement("input"));
	favoritesCheckbox.attr("type", "checkbox");
	favoritesCheckbox.attr("checked", "checked");
	favoritesCheckbox.on("change", function() {
		if (favoritesCheckbox.prop("checked"))
			showList("Favoriten");
		else
			hideList("Favoriten");
	});
	favoritesLabel.append(favoritesCheckbox);
	nav.append(favoritesLabel);
    // Building Lists
	buildListElement(root, favorites, "Favoriten");
	buildListElement(root, favorites, "Favoriten_neu");
})();