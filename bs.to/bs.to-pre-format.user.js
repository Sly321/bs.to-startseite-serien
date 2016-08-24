// ==UserScript==
// @name         bs.to-pre-format
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @description  Formatiert die bs.to Startseite für die späteren Designs.
// @include      https://bs.to/
// @icon         https://s.bs.to/favicon.ico
// @version      1.1.0
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
	favoritesLabel.addClass("label-Favoriten");
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
	// Building list elements
	var leftContainer = $(document.createElement("div"));
	leftContainer.css("float", "left");
	leftContainer.css("width", "443px");
	var rightContainer = $(document.createElement("div"));
	rightContainer.css("float", "left");
	rightContainer.css("width", "443px");
	root.append(leftContainer, rightContainer);
	buildListElement(leftContainer, favorites, "Favoriten");
	$(serienContainer).each(function() {
		if(this.position == "left")
			buildListElement(leftContainer, this.values, this.title);
		else
			buildListElement(rightContainer, this.values, this.title);
		var checkboxLabel = $(document.createElement("label"));
		checkboxLabel.html(this.title + " ");
		var checkbox = $(document.createElement("input"));
		checkbox.attr("type", "checkbox");
		checkbox.attr("checked", "checked");
		var self = this;
		checkboxLabel.addClass("label-" + this.title);
		checkbox.on("change", function() {
			if ($(this).prop("checked"))
				showList(self.title);
			else
				hideList(self.title);
		});
		checkboxLabel.append(checkbox);
		nav.append(checkboxLabel);
	});
})();