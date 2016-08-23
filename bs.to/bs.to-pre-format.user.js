// ==UserScript==
// @name         bs.to-pre-format
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @description  Formatiert die bs.to Startseite für die späteren Designs.
// @include      https://bs.to/
// @icon         https://s.bs.to/favicon.ico
<<<<<<< HEAD
// @version      0.3
// @updateURL	 https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/bs.to/bs.to-pre-format.user.js
=======
// @version      0.1
// @updateURL    https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/bs.to-pre-format.user.js
>>>>>>> origin/master
// @require		 https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @grant        unsafeWindow
// ==/UserScript==


(function() {
    'use strict';
<<<<<<< HEAD
	// Standard Data
	unsafeWindow.favorites = getFavorites();
	// Building the essentiell elements
	buildLogin();
	buildNav();
	clearRoot();
	appendEssentialsToRoot();
	// Start
=======
    unsafeWindow.getFavorites = function() {
		var favoriteElements = $("#other-series-nav > ul > li > a");
		var favorites = [];
		for(var x = 0; x < favoriteElements.length; x++) {
			var href = favoriteElements[x].href;
			var name = favoriteElements[x].innerHTML;
			favorites.push({ name: name, link: href});
		}
		favorites = favorites.slice(0, favorites.length - 2);
		return favorites.sort(function(a, b) {
			return a.name.localeCompare(b.name);
		});
	};
	unsafeWindow.getSearchLink = function() {
		return $("#other-series-nav > a")[0].href;
	};
	unsafeWindow.setStandardCSS = function(element) {
		element.css("float", "left");
		element.css("border-radius", "0");
		element.css("border", "1px solid #cccccc");
		element.css("margin", "5px 0 0 5px");
		element.css("padding", "7px");
		element.css("background", "white");
		element.css("box-shadow", "1px 5px 10px -1px darkgrey");
	};
	unsafeWindow.buildListElement = function(root, data, title) {
		var seriesList = $(document.createElement("div"));
		setStandardCSS(seriesList);
		seriesList.css("width", "422px");
		seriesList.addClass("seriesList " + title);
		var headline = $(document.createElement("h3"));
		headline.html(title);
		headline.css("margin", "0");
		var line = $(document.createElement("hr"));
		seriesList.append(headline);
		seriesList.append(line);
		for(var x = 0; x < data.length; x++) {
			var serienElement = $(document.createElement("div"));
			serienElement.css("float", "left");
			serienElement.css("width", "100%");
			serienElement.addClass("serienElement");
			if(x % 2 === 0) {
				serienElement.addClass("highlighted");
				serienElement.css("background", "#eaeaea");
			}
			var serie = $(document.createElement("a"));
			serie.html(data[x].name);
			serie.attr("href", data[x].link);
			serie.css("float", "left");
			serienElement.append(serie);
			seriesList.append(serienElement);
		}
		root.append(seriesList);
	};
	/**
	 * Hides the List with the given title
	 */
	unsafeWindow.hideList = function(title) {
		$("#root > ." + title).css("display", "none");
	};
	/**
	 * Shows the List with the given title
	 */
	unsafeWindow.showList = function(title) {
		$("#root > ." + title).css("display", "block");
	};
	// Standard Data
	unsafeWindow.favorites = unsafeWindow.getFavorites();
	var searchLink = unsafeWindow.getSearchLink();
	// Vars
	var rootPadding = 5;
	// Login Element
	var loginElement = $("#user");
	loginElement.css("width", "145px");
	loginElement.css("height", "105px");
	loginElement.css("font-size", "12px");
	setStandardCSS(loginElement);
	// Nav Element
	var nav = $(document.createElement("div"));
	setStandardCSS(nav);
	nav.css("position", "relative");
	nav.css("width", "699px");
	nav.css("height", "105px");
	nav.css("background", "-moz-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);");
	nav.css("background", "-webkit-gradient(left top, right bottom, color-stop(0%, rgba(255,255,255,1)), color-stop(47%, rgba(246,246,246,1)), color-stop(100%, rgba(237,237,237,1)));");
	nav.css("background", "-webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);");
	nav.css("background", "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);");
	var navigationContainerLeft = $(document.createElement("div"));
	navigationContainerLeft.css("width", "50%");
    navigationContainerLeft.css("height", "20px");
    navigationContainerLeft.css("float", "left");
	navigationContainerLeft.css("text-align", "center");
	var navigationContainerRight = $(document.createElement("div"));
	navigationContainerRight.css("width", "50%");
    navigationContainerRight.css("height", "20px");
    navigationContainerRight.css("float", "left");
	navigationContainerRight.css("text-align", "center");
	var homeNavigation = $(document.createElement("a"));
	homeNavigation.html("Home");
    homeNavigation.css("text-decoration", "none");
	homeNavigation.attr("href", "/");
	var searchNavigation = $(document.createElement("a"));
    searchNavigation.css("text-decoration", "none");
	searchNavigation.html("Alle Serien");
	searchNavigation.attr("href", searchLink);
	navigationContainerLeft.append(homeNavigation);
	navigationContainerRight.append(searchNavigation);
	nav.append(navigationContainerLeft);
	nav.append(navigationContainerRight);
>>>>>>> origin/master
	var favoritesLabel = $(document.createElement("label"));
	favoritesLabel.html("Favoriten ");
	unsafeWindow.favoritesCheckbox = $(document.createElement("input"));
	favoritesCheckbox.attr("type", "checkbox");
	favoritesCheckbox.attr("checked", "checked");
	favoritesCheckbox.on("change", function() {
<<<<<<< HEAD
=======
		console.log("test");
>>>>>>> origin/master
		if (favoritesCheckbox.prop("checked"))
			showList("Favoriten");
		else
			hideList("Favoriten");
	});
	favoritesLabel.append(favoritesCheckbox);
	nav.append(favoritesLabel);
<<<<<<< HEAD
    // Building Lists
=======
	// Root Element
	var root = $("body > #root");
	root.css("background", "white");
	root.css("border", "none");
	root.css("border-radius", "0");
	root.css("padding", rootPadding + "px");
	root.css("width", 900 - (rootPadding * 2) + "px");
	root.css("overflow", "auto");
	root.html("");
	root.append(loginElement);
	// CSS For User Login
	$($("#user > fieldset > label")[1]).css("margin-top", "12px");
	$($("#user > fieldset > label")[2]).css("font-size", "12px");
	$($("#user > fieldset > label > input")[2]).css("font-size", "12px");
	$($("#user > fieldset > label > input")[2]).css("float", "right");
	$($("#user > fieldset > label > input")[2]).css("margin-right", "3px");
	$($("#user > fieldset > label")[2]).css("margin-bottom", "5px");
	$("#user > fieldset > input").css("font-size", "12px");
	$("#user > fieldset > input").css("float", "left");
	$("#user > fieldset > input").css("margin", "0px");
	$("#user > fieldset > input").css("margin-left", "-2px");
	$("#user > fieldset > input").css("border", "none");
	$("#user > fieldset > input").css("background", "#e2e2e2");
	$("#user > fieldset > a").css("float", "right");
	$("#user > fieldset > label > input").css("font-size", "12px");
	// Appending Elements
	root.append(nav);
>>>>>>> origin/master
	buildListElement(root, favorites, "Favoriten");
	buildListElement(root, favorites, "Favoriten_neu");
})();