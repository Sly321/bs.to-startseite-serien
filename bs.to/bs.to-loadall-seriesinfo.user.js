// ==UserScript==
// @name		    bs.to-loadall-moviedb
// @namespace		https://github.com/Sly321/bs.to-startseite-serien
// @author			Sly321
// @version			1.0
// @description	    Crossloads series informations.
// @icon		    https://s.bs.to/favicon.ico
// @include			https://bs.to/
// @include         https://bs.to/home
// @require		    https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @require         https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js
// @updateURL		https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/bs.to/bs.to-loadall-seriesinfo.user.js
// @grant           unsafeWindow
// ==/UserScript==
//

let BACKGROUND = "#0D0F12";
let COLOR      = "#9BA3A6";
let url = 'https://api.themoviedb.org/3/';
let key = 'api_key=2e74839a423b1266f0ccf5043bade403';

var allSeries         = [];
var counter           = 0;
var seriesArray       = [];

var createModal = function(id) {
	var modal = {};
	var modalContainer = $(document.createElement("div")).attr("class", "modal-container").attr("id", id);
	var wrapper        = $(document.createElement("div")).attr("class", "modal-wrapper");
	var closeCross     = $(document.createElement("div")).attr("class", "modal-close");
	var title          = $(document.createElement("h2")).html("Titel");
	var titleinfo      = $(document.createElement("h6")).html("Titelinfo");
	var titleline      = $(document.createElement("hr")).css("margin-top", "10px").css("margin-bottom", "10px");

	modalContainer.css("color", COLOR).css("position", "fixed").css("width", "600px").css("height", "500px").css("background", BACKGROUND).css("left", "calc(50% - 300px)").css("top", "150px");
	modalContainer.css("z-index", "-1").css("transition","opacity 0.5s ease").css("opacity", "0").css("font-family", "consolas, arial, calibri");
	wrapper.css("padding", "15px").css("position", "relative").css("height", "calc(100% - 30px)").css("overflow", "auto");
	closeCross.css("position", "absolute").css("top", "6px").css("right", "10px").css("cursor", "pointer").css("font-size", "25px").on('click', function() {
		$("#" + id).css("opacity", "0");
		setTimeout(function() {
			$("#" + id).css("z-index", "-1");
		}, 500);
	}).html("⊗");

	modalContainer.append(wrapper.append(closeCross).append(title).append(titleinfo).append(titleline));
	$("body").append(modalContainer);
	modal.container = modalContainer;
	modal.wrapper   = wrapper;
	modal.close     = closeCross;
	modal.title     = title;
	modal.titleinfo = titleinfo;
	modal.titleline = titleline;
	return modal;
};

var Modal = createModal("load-series-modal");
Modal.title.html("Serieninfos Laden");
Modal.titleinfo.html("Dies kann einige Zeit in Anspruch nehmen.");
Modal.wrapper.append($(document.createElement("div")).attr("id", "msgspan").css("width", "100%"));
Modal.wrapper.append($(document.createElement("div")).attr("id", "loadedContainer").css("width", "calc(100% - 2px)").css("border", "1px solid white").css("overflow-y", "auto").css("height", "302px").css("margin-top", "10px"));
Modal.wrapper.append($(document.createElement("button")).css("width", "100%").css("background", "white").css("height", "45px").css("font-family", "consolas, arial, calibri").css("margin-top", "10px").css("font-size", "25px").css("color", "#4f4f4f").on("click", function() {
    $(this).html("Dialog schließen");
	$(this).off("click");
	$(this).on("click", function() {
		$("#load-series-modal").css("opacity", "0");
		setTimeout(function() {
			$("#load-series-modal").css("z-index", "-1");
		}, 500);
	});
	getSerieByName(allSeries[0].name);
}).html("Starte den Import"));

var setSpanText = function(cur, all, text) {
	$("#msgspan").html("Laden von Serieninfos " + cur + "/" + all + "<br>" + text);
};

var getSeasonById = function(id, season) {
		var mode = 'tv/' + id + '/season/' + season;
		$.ajax({
				type: 'GET',
				url: url + mode + '?' + key,
				async: false,
				jsonpCallback: 'loadSeasonById',
				contentType: 'application/json',
				dataType: 'jsonp',
				success: function(json) {
				},
				error: function(e) {
					if(e.status == 404)
					{
						setSpanText(counter, allSeries.length, "Datenbank timeout...");
						setTimeout(function() {
							getSeasonById(id, season);
						}, 3000);
					}
				}
		});
};

var getSerieById = function(id) {
		var mode = 'tv/' + id;
		$.ajax({
				type: 'GET',
				url: url + mode + '?' + key,
				async: false,
				jsonpCallback: 'loadSeriesById',
				contentType: 'application/json',
				dataType: 'jsonp',
				success: function(json) {
						console.dir(json);
						//loadSeriesInfo(json, 'load-series');
						//getSeasonById(id, json.number_of_seasons, aLink);
				},
				error: function(e) {
					if(e.status == 404)
					{
						setSpanText(counter, allSeries.length, "Datenbank timeout...");
						setTimeout(function() {
							getSerieById(id);
						}, 3000);
					}
				}
		});
};

var getSerieByName = function(name) {
		var mode = 'search/tv?query=';
	    try {
			$.ajax({
				type: 'GET',
				url: url + mode + name + '&' + key,
				async: false,
				jsonpCallback: 'loadSeriesByName',
				contentType: 'application/json',
				dataType: 'jsonp',
				success: function(json) {
				},
				error: function(e) {
					if(e.status == 404)
					{
						setSpanText(counter, allSeries.length, "Datenbank timeout...");
						setTimeout(function() {
							getSerieByName(allSeries[counter].name);
						}, 3000);
					}
				}
			});
		} catch(e) {
			console.log("catched");
		}
};

/**
 *
 */
function loadSeriesByName(data) {
	var result = null;
	switch(allSeries[counter].name) {
		case "Dragonball":
			result = data.results[2];
			break;
		default:
			result = data.results[0];
			break;
	}
	$($("#loadedContainer")).append($(document.createElement("h5")).html((counter + 1) + ": " + result.name));
	setSpanText(counter + 1, allSeries.length, "... Lade serie: " + result.name + "...");
	getSerieById(result.id);
	$('#loadedContainer').animate({
        scrollTop: $("#loadedContainer").scrollTop() + $("#loadedContainer").height()
    }, 1);
}
unsafeWindow.loadSeriesByName = exportFunction(loadSeriesByName, unsafeWindow);

/**
 *
 */
function loadSeriesById(data) {
	$($("#loadedContainer")).append($(document.createElement("h5")).html((counter+1) + ": " + data.name + " Series Info"));
	getSeasonById(data.id, data.number_of_seasons);
	$('#loadedContainer').animate({
        scrollTop: $("#loadedContainer").scrollTop() + $("#loadedContainer").height()
    }, 1);
}
unsafeWindow.loadSeriesById = exportFunction(loadSeriesById, unsafeWindow);

/**
 *
 */
function loadSeasonById(data) {
	$($("#loadedContainer")).append($(document.createElement("h5")).html((counter+1) + ": " + data.name + " Season Info"));
	var episodesCount = data.episodes.length;
	var seasonCount = data.season_number;
	var imageLink = "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + data.poster_path;
	seriesArray.push({name: allSeries[counter].name, episodes: episodesCount, seasons: seasonCount, image: imageLink});

	counter++;
	if(counter < allSeries.length) {
		setSpanText(counter, allSeries.length, "... Lade serie: " + allSeries[counter].name + "...");
		getSerieByName(allSeries[counter].name);
	} else if(counter >= allSeries.length) {
		setSpanText(counter, allSeries.length, "Alle Serieninfos erfolgreich geladen.");
		unsafeWindow.seriesArray = cloneInto(seriesArray, unsafeWindow);
		setInfoCookies();
		buildToolTip();
	}
	$('#loadedContainer').animate({
        scrollTop: $("#loadedContainer").scrollTop() + $("#loadedContainer").height()
    }, 1);
}
unsafeWindow.loadSeasonById = exportFunction(loadSeasonById, unsafeWindow);

function buildToolTip() {
	var tooltip = $(document.createElement("div")).css("position", "absolute").css("z-index", "-1").css("transition","opacity 0.5s ease").css("opacity", "0").css("width", "402px").css("height", "130px").css("padding", "10px").css("background", "white").css("border", "1px solid black");
	var image = $(document.createElement("img")).attr("src", "https://image.tmdb.org/t/p/w300_and_h450_bestv2/ayebqASxTXVSo9Qoug6M5YowZS0.jpg").css("height", "100%");
	var tooltipTitle = $(document.createElement("h2")).html("Test");
	tooltip.append(image, tooltipTitle);
	var tooltiptimer = null;
	$("body").append(tooltip);
	$(".serienElement").mouseenter(function() {
		var self = this;
		var tooltiptimer = setTimeout(function() {
			console.log("timer done");
			console.log(self);
			position = $(self).offset();
			console.log(position); // position = { left: 42, top: 567 }
			tooltip.css("top", position.top - 155 + "px").css("left", position.left - 1 + "px").css("z-index", "10").css("opacity", "1");
		}, 800 );
		$('.serienElement').mouseleave( function() {
			clearTimeout( tooltiptimer );
			tooltip.css("opacity", "0").css("z-index", "-1");
		} );
	});
}

function setInfoCookies() {
	for(var x = 0; x < seriesArray.length; x++) {
		var seriesObject = {};
		seriesObject.n = seriesArray[x].name;
		seriesObject.s = seriesArray[x].seasons;
		seriesObject.e = seriesArray[x].episodes;
		seriesObject.i = seriesArray[x].image;
		localStorage.setItem("series_info_" + seriesArray[x].name, JSON.stringify(seriesObject));
	}
	unsafeWindow.set_cookie("series_info_loaded", true);
}

function getInfoCookies() {
	for(var x = 0; x < allSeries.length; x++) {
		var cookie_vals = unsafeWindow.get_cookie("series_info_" + allSeries[x].name);
		console.log(cookie_vals);
		//var name = unsafeWindow.get_cookie("");
		//var episodesCount = unsafeWindow.get_cookie("");
		//var seasonCount = unsafeWindow.get_cookie("");
		//var imageLink = unsafeWindow.get_cookie("");
		//seriesArray.push({name: allSeries[counter].name, episodes: episodesCount, seasons: seasonCount, image: imageLink});
	}
}

// Doc Ready
$(document).ready(function() {
	for(var x = 0; x < unsafeWindow.serienContainer.length; x++) {
		for(var y = 0; y < unsafeWindow.serienContainer[x].values.length; y++) {
			allSeries.push(unsafeWindow.serienContainer[x].values[y]);
		}
	}
	var seriesInfoLoaded = get_cookie("series_info_loaded");
	if (seriesInfoLoaded === undefined) {
		$("#load-series-modal").css("opacity", "1");
		$("#load-series-modal").css("z-index", "30");
		setSpanText(counter, allSeries.length, "Du hast noch keine Daten, importier mal du Spast!");
	} else {
		getInfoCookies();
		buildToolTip();
	}
});