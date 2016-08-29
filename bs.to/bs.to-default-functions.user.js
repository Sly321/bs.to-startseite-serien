// ==UserScript==
// @name         bs.to-default-functions
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @description  Default Funktionen welche später benötigt werden..
// @include      https://bs.to/*
// @icon         https://s.bs.to/favicon.ico
// @version      1.4
// @updateURL	 https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/bs.to/bs.to-default-functions.user.js
// @require		 https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @grant        unsafeWindow
// ==/UserScript==

	// Vars
	var rootPadding = 5;
	var addGlobalStyle = function(css) {
		var head, style;
		head = document.getElementsByTagName('head')[0];
		if (!head) { return; }
		style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = css;
		head.appendChild(style);
	};
    var getFavorites = function() {
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
	var getSearchLink = function() {
		return $("#other-series-nav > a")[0].href;
	};
	var setStandardCSS = function(element) {
		element.css("float", "left");
		element.css("border-radius", "0");
		element.css("border", "1px solid #cccccc");
		element.css("margin", "5px 0 0 5px");
		element.css("padding", "7px");
		element.css("background", "white");
		element.css("box-shadow", "1px 5px 10px -1px darkgrey");
	};
	var setNavCSS = function(element) {
		element.css("width", "33.33333333%");
		element.css("height", "20px");
		element.css("float", "left");
		element.css("text-align", "center");
	};
	var setListContainerCSS = function(element) {
		setStandardCSS(element);
		element.css("width", "422px");
		element.css("overflow-y", "auto");
		element.css("height", "700px");
	};
	var buildListElement = function(root, data, title) {
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
			}
			var serie = $(document.createElement("a"));
			serie.html(data[x].name);
			if(title != "Favoriten")
			   serie.attr("href", "serie/" + data[x].link);
			else
			   serie.attr("href", data[x].link);
			serie.css("float", "left");
			serienElement.append(serie);
			seriesList.append(serienElement);
		}
		var rootE = $("#" + root);
		rootE.append(seriesList);
	};
	/**
	 * Hides the List with the given title
	 */
	var hideList = function(title) {
		$("#root > div > ." + title).css("display", "none");
	};
	/**
	 * Shows the List with the given title
	 */
	var showList = function(title) {
		$("#root > div > ." + title).css("display", "block");
	};
	// Login
	var loginElement = $("#user");
	var buildLogin = function() {
		loginElement = $(loginElement);
		loginElement.css("width", "145px");
		loginElement.css("height", "105px");
		loginElement.css("font-size", "12px");
		setStandardCSS(loginElement);
	};
	// Nav Element
	var nav = document.createElement("div");
	var buildNav = function() {
		nav = $(nav);
		setStandardCSS(nav);
		nav.addClass("navigation-panel");
		nav.css("position", "relative");
		nav.css("width", "699px");
		nav.css("height", "105px");
		nav.css("background", "-moz-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);");
		nav.css("background", "-webkit-gradient(left top, right bottom, color-stop(0%, rgba(255,255,255,1)), color-stop(47%, rgba(246,246,246,1)), color-stop(100%, rgba(237,237,237,1)));");
		nav.css("background", "-webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);");
		nav.css("background", "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);");
		var navigationContainerLeft = $(document.createElement("div"));
		setNavCSS(navigationContainerLeft);
		var navigationContainerMid = $(document.createElement("div"));
		setNavCSS(navigationContainerMid);
		var navigationContainerRight = $(document.createElement("div"));
		setNavCSS(navigationContainerRight);
		var homeNavigation = $(document.createElement("a"));
		homeNavigation.html("Home");
		homeNavigation.addClass("nav-link");
		homeNavigation.attr("href", "/");
		var searchNavigation = $(document.createElement("a"));
		searchNavigation.addClass("nav-link");
		searchNavigation.html("Alle Serien");
		searchNavigation.attr("href", "andere-serien");
		var editFavNavigation = $(document.createElement("a"));
		editFavNavigation.addClass("nav-link");
		editFavNavigation.html("Favoriten Editieren");
		editFavNavigation.attr("href", "/settings/series");
		navigationContainerLeft.append(homeNavigation);
		navigationContainerMid.append(editFavNavigation);
		navigationContainerRight.append(searchNavigation);
		var line = $(document.createElement("hr"));
		nav.append(navigationContainerLeft);
		nav.append(navigationContainerMid);
		nav.append(navigationContainerRight);
		nav.append(line);
	};
    var buildCheckBox = function(title) {
		var checkboxLabel = $(document.createElement("label")).html(title + " ").addClass("label-" + title);
		var checkbox = $(document.createElement("input")).attr("type", "checkbox").on("change", function() {
			if ($(this).prop("checked")) {
				showList(title);
				set_cookie("is_checked_" + title, "checked");
			}
			else {
				hideList(title);
				set_cookie("is_checked_" + title, "unchecked");
			}
		});
		var cookieValue = get_cookie("is_checked_" + title);
		if(cookieValue === undefined) {
			set_cookie("is_checked_" + title, "checked");
			checkbox.attr("checked", "checked");
		} else if(cookieValue == "unchecked") {
			hideList(title);
		} else {
			checkbox.attr("checked", "checked");
		}
		checkboxLabel.append(checkbox);
		return checkboxLabel;
	};
	// Root
	var clearRoot = function() {
	    var root = $(document.getElementById("root"));
		root.css("background", "white");
		root.css("border", "none");
		root.css("border-radius", "0");
		root.css("padding", rootPadding + "px");
		root.css("width", 900 - (rootPadding * 2) + "px");
		root.css("overflow", "auto");
		root.html("");
	};
	var appendEssentialsToRoot = function() {
	  var root = $(document.getElementById("root"));
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
	};
	var createDelBtn = function() {
		var deleteBtn = $(document.createElement("div"));
		deleteBtn.css("cursor", "pointer");
		deleteBtn.css("float", "right");
		var crossSign = $(document.createElement("i"));
		crossSign.addClass("fa fa-times");
		crossSign.css("color", "red");
		deleteBtn.append(crossSign);
		return deleteBtn;
	};
	var createAddBtn = function() {
		var addBtn = $(document.createElement("div"));
		addBtn.css("cursor", "pointer");
		addBtn.css("float", "right");
		var favSign = $(document.createElement("i"));
		favSign.addClass("fa fa-star-o");
		favSign.css("color", "rgb(20, 20, 20)");
		favSign.hover(function(){
			$(this).removeClass("fa-star-o");
			$(this).addClass("fa-star");
			$(this).css("color", "#ccda13");
		}, function(){
			$(this).addClass("fa-star-o");
			$(this).removeClass("fa-star");
			$(this).css("color", "rgb(20, 20, 20)");
		});
		addBtn.append(favSign);
		return addBtn;
	};
	var createFontAwesome = function(classStr) {
		var ele = $(document.createElement("i"));
		ele.addClass("fa " + classStr);
		ele.css("float", "left");
		ele.css("line-height", "21px");
		ele.css("margin-right", "5px");
        return ele;
	};
	//delete cookie
	var del_cookie = function (cname) {
		if (get_cookie (cname))
			document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	};
	//get cookie
	var get_cookie = function (cname) {
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
    var set_cookie = function (cname, value) {
		var d = new Date();
		var exyears = 10;
		d.setTime (d.getTime () + (exyears*365*24*60*60*1000));
		var expires = "expires=" + d.toUTCString ();
		document.cookie = cname + "=" + JSON.stringify(value) + "; " + expires + "; path=/";
	};
	// Export the Functions
    unsafeWindow.buildCheckBox = exportFunction(buildCheckBox, unsafeWindow);
	unsafeWindow.addGlobalStyle = exportFunction(addGlobalStyle, unsafeWindow);
	unsafeWindow.getFavorites = exportFunction(getFavorites, unsafeWindow);
	unsafeWindow.getSearchLink = exportFunction(getSearchLink, unsafeWindow);
	unsafeWindow.setNavCSS = exportFunction(setNavCSS, unsafeWindow);
	unsafeWindow.setStandardCSS = exportFunction(setStandardCSS, unsafeWindow);
	unsafeWindow.setListContainerCSS = exportFunction(setListContainerCSS, unsafeWindow);
	unsafeWindow.buildListElement = exportFunction(buildListElement, unsafeWindow);
	unsafeWindow.showList = exportFunction(showList, unsafeWindow);
	unsafeWindow.hideList = exportFunction(hideList, unsafeWindow);
	unsafeWindow.buildLogin = exportFunction(buildLogin, unsafeWindow);
	unsafeWindow.buildNav = exportFunction(buildNav, unsafeWindow);
	unsafeWindow.clearRoot = exportFunction(clearRoot, unsafeWindow);
	unsafeWindow.appendEssentialsToRoot = exportFunction(appendEssentialsToRoot, unsafeWindow);
	unsafeWindow.createDelBtn = exportFunction(createDelBtn, unsafeWindow);
	unsafeWindow.createAddBtn = exportFunction(createAddBtn, unsafeWindow);
	unsafeWindow.createFontAwesome = exportFunction(createFontAwesome, unsafeWindow);
	unsafeWindow.del_cookie = exportFunction(del_cookie, unsafeWindow);
	unsafeWindow.get_cookie = exportFunction(get_cookie, unsafeWindow);
	unsafeWindow.set_cookie = exportFunction(set_cookie, unsafeWindow);