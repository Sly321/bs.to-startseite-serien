// ==UserScript==
// @name         bs.to-favorite-fix
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @description  For fixing the bs.to favorite site
// @match        https://bs.to/settings/series
// @icon         https://s.bs.to/favicon.ico
// @grant        unsafeWindow
// @resource     fontAwesome https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

(function() {
    'use strict';
	// Styles
	var fontAwesomeCSS = GM_getResourceText ("fontAwesome");
	GM_addStyle (fontAwesomeCSS);
	// Vars
	unsafeWindow.currentFavorites = $("#series-menu > li");
	currentFavorites.sort(function(a, b) {
		return a.innerHTML.slice(0, 4).localeCompare(b.innerHTML.slice(0, 4));
	});
	unsafeWindow.notFavorites = $.merge($("#waste1 > li"), $("#waste2 > li"));
	notFavorites.sort(function(a, b) {
		return a.innerHTML.slice(0, 4).localeCompare(b.innerHTML.slice(0, 4));
	});
	// Start
	buildLogin();
	buildNav();
	nav.append($(document.createElement("div")).html("Ich weiß die Seite ist laggy, aber besser geht es grad nicht. Sorry!").css("margin-top", "10px").css("font-size", "14px"));
	nav.append($(document.createElement("label")).html("Filter: ").append($(document.createElement("input")).attr("type", "text").attr("id", "filterInput").css("width", "385px").keyup(function() {
        var filterValue = $("#filterInput").val();
		filterAllList(filterValue);
	})).css("float", "right").css("margin-top", "38px").css("font-size", "15px"));
	clearRoot();
	appendEssentialsToRoot();
	// Favorite List
	for(var x = 0; x < currentFavorites.length; x++) {
		var deleteBtn = createDelBtn();
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
	var favoritesFontAwesome = createFontAwesome("fa-star");
	var favoritesHeadline = $(document.createElement("h3")).html("Favoriten").css("margin", 0);
	var line_one = $(document.createElement("hr"));
	unsafeWindow.favoritesList = $(document.createElement("ul")).append(currentFavorites);
	var favoritesContainer = $(document.createElement("div")).append(favoritesFontAwesome, favoritesHeadline, line_one, favoritesList);
	setListContainerCSS(favoritesContainer);
	root.append(favoritesContainer);
	// Nicht Favoriten
	var allFontAwesome = createFontAwesome("fa-globe");
	var allHeadline = $(document.createElement("h3")).html("Alle Serien").css("margin", 0);
	var line_two = $(document.createElement("hr"));
	for(var y = 0; y < notFavorites.length; y++) {
		var addBtn = createAddBtn();
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
	var allContainer = $(document.createElement("div")).append(allFontAwesome, allHeadline, line_two, allList);
	setListContainerCSS(allContainer);
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
		console.time("filter");
		$(allList[0].children).removeClass("hidden");
		$(allList[0].children).not(":contains('" + str + "')").addClass("hidden");
		/*
		var len = allList[0].children.length;
		var x = 0;
		var childs = allList[0].children;
		while(x < len) {
			var name = childs[x].innerText;
			if(name.indexOf(str) == -1) {
				$(childs[x]).detach();
			}
			x++;
		}
		/*
		$(allList[0].children).each(function() {
			var name = this.innerText;
			if(name.indexOf(str) > -1) {
				$(this).addClass("hidden");
			}
		});*/
		console.timeEnd("filter");
	};
	unsafeWindow.submitBtn = $(document.createElement("button"));
	submitBtn.html("Speichern");
	setStandardCSS(submitBtn);
	submitBtn.css("width", "881px");
	submitBtn.css("font-size", "24px");
	submitBtn.css("transition", "background 0.5s ease");
	submitBtn.on("click", function() {
		saveFavorites();
	});
	root.append(submitBtn);
	/*
	$(document).ready(function(){
		$("#series-menu").sticky({topSpacing: 5,wrapperClassName: "colSticky"});
	});

    $("ul.col, #series-menu").sortable({
        connectWith:"ul.col",
        stop: function(event, ui) {
            $("#msg").text("Speichern...");
            series = [];
            $("#series-menu li").each(function() {
                series[series.length] = this.dataset.id;
            });
        }
    }).disableSelection();
    $("#msg").text("Du kannst nun deine Lieblingsserien in das 'Andere Serien'-Menü ziehen.");*/
})();
