// ==UserScript==
// @name         bs.to-favorite-fix
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @version      1.0.2
// @description  For fixing the bs.to favorite site
// @match        https://bs.to/settings/series
// @icon         https://s.bs.to/favicon.ico
// @grant        unsafeWindow
// @updateURL	 https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/bs.to/bs.to-favorite-fix.user.js
// @require		 https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
	$("head").append('<script src="https://use.fontawesome.com/15d925a7dd.js"></script>');
	var currentFavorites = $("#series-menu > li");
	currentFavorites.sort(function(a, b) {
		return a.innerHTML.slice(0, 4).localeCompare(b.innerHTML.slice(0, 4));
	});
	var notFavorites = $.merge($("#waste1 > li"), $("#waste2 > li"));
	notFavorites.sort(function(a, b) {
		return a.innerHTML.slice(0, 4).localeCompare(b.innerHTML.slice(0, 4));
	});
	// Start
	unsafeWindow.buildLogin();
	unsafeWindow.buildNav();
	unsafeWindow.clearRoot();
	unsafeWindow.appendEssentialsToRoot();
	
	var nav = $(".navigation-panel");
	nav.append($(document.createElement("div")).html("Ich weiß die Seite ist laggy, aber besser geht es grad nicht. Sorry!").css("margin-top", "10px").css("font-size", "12px"));
	nav.append($(document.createElement("div")).html("Wenn die Favoriten Leer sind dann kommt ein Kreuz ohne zusammenhang, dafür kann ich nichts liegt an der Struktur im Backend. Einfach das Kreuz wegklicken.").css("margin-top", "5px").css("font-size", "12px"));
	nav.append($(document.createElement("label")).html("Filter: ").append($(document.createElement("input")).attr("type", "text").attr("id", "filterInput").css("width", "385px").keyup(function() {
    var filterValue = $("#filterInput").val();
		unsafeWindow.filterAllList(filterValue);
	})).css("float", "right").css("margin-top", "10px").css("font-size", "15px"));
	nav = $(".navigation-panel");
	var root = $("#root");
	// Favorite List
	for(var x = 0; x < currentFavorites.length; x++) {
		var deleteBtn = unsafeWindow.createDelBtn();
		deleteBtn.on("click", function() {
			var dataId = this.parentElement.attributes[0].value;
			for(var z = 0; z < currentFavorites.length; z++) {
				if(currentFavorites[z].attributes[0].value == dataId) {
					var exFavo = $(currentFavorites[z]).detach();
					exFavo.children(0).remove();
					allList.append(exFavo);
				}
			}
			submitBtn.css("background", "#b1d6b1");
		});
		$(currentFavorites[x]).append(deleteBtn);
	}
	var favoritesFontAwesome = unsafeWindow.createFontAwesome("fa-star");
	var favoritesHeadline = $(document.createElement("h3")).html("Favoriten").css("margin", 0);
	var line_one = $(document.createElement("hr"));
	var favoritesList = $(document.createElement("ul")).append(currentFavorites);
	var favoritesContainer = $(document.createElement("div")).append(favoritesFontAwesome, favoritesHeadline, line_one, favoritesList).addClass("list-container standard-css");
	root.append(favoritesContainer);
	// Nicht Favoriten
	var allFontAwesome = unsafeWindow.createFontAwesome("fa-globe");
	var allHeadline = $(document.createElement("h3")).html("Alle Serien").css("margin", 0);
	var line_two = $(document.createElement("hr"));
	for(var y = 0; y < notFavorites.length; y++) {
		var addBtn = unsafeWindow.createAddBtn();
		addBtn.on("click", function() {
			var dataId = this.parentElement.attributes[0].value;
			for(var z = 0; z < notFavorites.length; z++) {
				if(notFavorites[z].attributes[0].value == dataId) {
					var exAll = $(notFavorites[z]).detach();
					exAll.children(0).remove();
					favoritesList.append(exAll);
				}
			}
			submitBtn.css("background", "#b1d6b1");
		});
		$(notFavorites[y]).append(addBtn);
	}
	unsafeWindow.allList = $(document.createElement("ul")).append(notFavorites);
	var allContainer = $(document.createElement("div")).append(allFontAwesome, allHeadline, line_two, unsafeWindow.allList).addClass("list-container standard-css");
	root.append(allContainer);
	unsafeWindow.saveFavorites = function() {
		var series = [];
		$(favoritesList[0].children).each(function() {
			series.push(this.dataset.id);
		});
		$.ajax({
			url: "ajax/edit-seriesnav.php",
			data: {series:series},
			dataType: "json",
			type: "POST",
			success: function(data) {
				if (data.success === true) {
					console.log("Succeed");
					window.location = "https://bs.to/";
				} else {
					console.log("Nope Nope Nope");
				}
			}
		});
	};
	unsafeWindow.filterAllList = function(str) {
		$(unsafeWindow.allList[0].children).removeClass("hidden");
		$(unsafeWindow.allList[0].children).not(":contains('" + str + "')").addClass("hidden");
	};
	var submitBtn = $(document.createElement("button")).addClass("standard-css");
	submitBtn.html("Speichern");
	submitBtn.css("width", "881px");
	submitBtn.css("font-size", "24px");
	submitBtn.css("transition", "background 0.5s ease");
	submitBtn.on("click", function() {
		unsafeWindow.saveFavorites();
	});
	root.append(submitBtn);
})();