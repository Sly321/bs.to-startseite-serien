// ==UserScript==
// @name         bs.to-pre-format
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @description  Formatiert die bs.to Startseite für die späteren Designs.
// @include      https://bs.to/
// @icon         https://s.bs.to/favicon.ico
// @version      1.2.0
// @updateURL	 https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/bs.to/bs.to-pre-format.user.js
// @require		 https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @grant        unsafeWindow
// ==/UserScript==


(function() {
    'use strict';

	// Standard Data
	var favorites = unsafeWindow.getFavorites();
	console.log(favorites);
	// Building the essentiell elements
	unsafeWindow.buildLogin();
	unsafeWindow.buildNav();
	unsafeWindow.clearRoot();
	unsafeWindow.appendEssentialsToRoot();
	// Start
	var favoritesLabel = $(document.createElement("label"));
	favoritesLabel.html("Favoriten ");
	favoritesLabel.addClass("label-Favoriten");
	var favoritesCheckbox = $(document.createElement("input"));
	favoritesCheckbox.attr("type", "checkbox");
	favoritesCheckbox.attr("checked", "checked");
	favoritesCheckbox.on("change", function() {
		if (favoritesCheckbox.prop("checked"))
			showList("Favoriten");
		else
			hideList("Favoriten");
	});
	var nav = $(".navigation-panel");
	var root = $("#root");
	favoritesLabel.append(favoritesCheckbox);
	nav.append(favoritesLabel);
	// Building list elements
	var leftContainer = $(document.createElement("div"));
	leftContainer.css("float", "left");
	leftContainer.css("width", "443px");
	leftContainer.attr("id", "left-container");
	var rightContainer = $(document.createElement("div"));
	rightContainer.css("float", "left");
	rightContainer.css("width", "443px");
	rightContainer.attr("id", "right-container");
	root.append(leftContainer, rightContainer);
	unsafeWindow.buildListElement("left-container", favorites, "Favoriten");
	$(unsafeWindow.serienContainer).each(function() {
		if(this.position == "left")
			unsafeWindow.buildListElement("left-container", this.values, this.title);
		else
			unsafeWindow.buildListElement("right-container", this.values, this.title);
		var checkboxLabel = $(document.createElement("label"));
		checkboxLabel.html(this.title + " ");
		var checkbox = $(document.createElement("input"));
		checkbox.attr("type", "checkbox");
		var cookieValue = unsafeWindow.get_cookie("is_checked_" + this.title);
		if(cookieValue === undefined) {
			unsafeWindow.set_cookie("is_checked_" + this.title, "checked");
			checkbox.attr("checked", "checked");
		} else if(cookieValue == "unchecked") {
			hideList(this.title);
		} else {
			checkbox.attr("checked", "checked");
		}
		var self = this;
		checkboxLabel.addClass("label-" + this.title);
		checkbox.on("change", function() {
			if ($(this).prop("checked")) {
				unsafeWindow.showList(self.title);
				unsafeWindow.set_cookie("is_checked_" + self.title, "checked");
			}
			else {
				unsafeWindow.hideList(self.title);
				unsafeWindow.set_cookie("is_checked_" + self.title, "unchecked");
			}
		});
		checkboxLabel.append(checkbox);
		nav.append(checkboxLabel);
	});
})();