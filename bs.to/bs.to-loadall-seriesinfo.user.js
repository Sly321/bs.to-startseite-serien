// ==UserScript==
// @name		    bs.to-loadall-moviedb
// @namespace		https://github.com/Sly321/bs.to-startseite-serien
// @author			Sly321
// @version			1.4
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
var currentImageUrl   = "";
var infoLoaded        = false;

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
	seriesArray = [];
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
		case "Attack on Titan":
			result = data.results[1];
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
	currentImageUrl = "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + data.poster_path;
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
	var imageLink = currentImageUrl;
	seriesArray.push({name: allSeries[counter].name, episodes: episodesCount, seasons: seasonCount, image: imageLink});

	counter++;
	if(counter < allSeries.length) {
		setSpanText(counter, allSeries.length, "... Lade serie: " + allSeries[counter].name + "...");
		getSerieByName(allSeries[counter].name);
	} else if(counter >= allSeries.length) {
		setSpanText(counter, allSeries.length, "Alle Serieninfos erfolgreich geladen.");
		unsafeWindow.seriesArray = cloneInto(seriesArray, unsafeWindow);
		setInfoLocalStorage();
		buildToolTip();
	}
	$('#loadedContainer').animate({
        scrollTop: $("#loadedContainer").scrollTop() + $("#loadedContainer").height()
    }, 1);
}
unsafeWindow.loadSeasonById = exportFunction(loadSeasonById, unsafeWindow);

function buildToolTip() {
	var tooltip = $(document.createElement("div")).css("position", "absolute").css("top", "5px").css("left", "5px").css("z-index", "-1").css("font-family", "calibri, consolas, arial").css("transition","opacity 0.5s ease").css("opacity", "0").css("width", "402px").css("height", "130px").css("padding", "10px").css("background", "white").css("border", "1px solid black");
	var image = $(document.createElement("img")).attr("src", "https://image.tmdb.org/t/p/w300_and_h450_bestv2/ayebqASxTXVSo9Qoug6M5YowZS0.jpg").css("height", "100%").css("float", "left");
	var tooltipTitle = $(document.createElement("h5")).html("Test").css("float", "left").css("margin-left", "10px").css("width", "305px");
	var tooltipLine = $(document.createElement("hr")).css("float", "left").css("margin-left", "10px").css("margin-top", "10px").css("margin-bottom", "10px").css("width", "303px");
	var seasonsAmount = $(document.createElement("h5")).html("Test").css("float", "left").css("margin-left", "10px").css("width", "305px");
	var episodesAmount = $(document.createElement("h5")).html("Test").css("float", "left").css("margin-left", "10px").css("width", "305px");
	tooltip.append(image, tooltipTitle, tooltipLine, seasonsAmount, episodesAmount);
	var tooltiptimer = null;
	$("body").append(tooltip);
	$(".serienElement").mouseenter(function() {
		var self = this;
		var seriesName = self.children[0].innerHTML;
		var obj = getObjectWhereName(seriesArray, seriesName);
		seasonsAmount.html("Staffeln: " + obj.seasons);
		episodesAmount.html("Episoden: " + obj.episodes);
		image.attr("src", obj.image);
		tooltipTitle.html(obj.name);
		var tooltiptimer = setTimeout(function() {
			position = $(self).offset();
			tooltip.css("top", position.top - 155 + "px").css("left", position.left - 1 + "px").css("z-index", "10").css("opacity", "1");
		}, 800 );
		$('.serienElement').mouseleave( function() {
			clearTimeout( tooltiptimer );
			tooltip.css("opacity", "0").css("z-index", "-1");
		} );
	});
}

function setInfoLocalStorage() {
	localStorage.setItem("series_info", JSON.stringify(seriesArray));
	unsafeWindow.set_cookie("series_info_loaded", true);
}

function getInfoLocalStorage() {
	seriesArray = JSON.parse(localStorage.getItem("series_info"));
}

function getObjectWhereName(array, name) {
	for(var x = 0; x < array.length; x++) {
		if(array[x].name == name)
			return array[x];
	}
	return null;
}

// Doc Ready
$(document).ready(function() {
	$(".navigation-panel").append($(document.createElement("div")).html("Daten Aktualisieren").css("position", "absolute").css("background", "#cfddff").css("width", "160px").css("text-align", "center").css("top", "35px").css("left", "calc(50% - 81px)").css("padding", "2px").css("cursor", "pointer").on("click", function() {
		$("#load-series-modal").css("opacity", "1");
		$("#load-series-modal").css("z-index", "30");
	}));
	for(var x = 0; x < unsafeWindow.serienContainer.length; x++) {
		for(var y = 0; y < unsafeWindow.serienContainer[x].values.length; y++) {
			allSeries.push(unsafeWindow.serienContainer[x].values[y]);
		}
	}
	var seriesInfoLoaded = unsafeWindow.get_cookie("series_info_loaded");
	if (seriesInfoLoaded === undefined) {
		$("#load-series-modal").css("opacity", "1");
		$("#load-series-modal").css("z-index", "30");
		setSpanText(counter, allSeries.length, "Du hast noch keine Daten, importier mal du Spast!");
	} else {
		getInfoLocalStorage();
		infoLoaded = true;
		buildToolTip();
	}

	function getAllSeriesCookies() {
		var theCookies = document.cookie.split(';');
		var regexForSerie = /serien_stand_([\w-]*)=([.\[\]\{\}\"\w:,-]*)/;
		var cookieArray = [];
		for (var i = 1 ; i <= theCookies.length; i++) {
			var theSerieMatch = theCookies[i-1].match(regexForSerie);
			if(theSerieMatch !== null) {
				cookieArray.push(theSerieMatch[2]);
			}
		}
		return cookieArray;
	}

	function addSerieInfoToElements(cookieArray) {
		for (var x = 0; x < cookieArray.length; x++) {
			var parsedCookie = JSON.parse(cookieArray[x])[0][0];
			var element;
			if ($('a[href="serie/'+ parsedCookie.link + '"]')[0] === undefined && $('a[href="https://bs.to/serie/'+ parsedCookie.link + '"]')[0] === undefined) {
				console.log("Undefined: " + parsedCookie.link);
			} else {
				if($('a[href="serie/'+ parsedCookie.link + '"]')[0] === undefined) {
					element = $($('a[href="https://bs.to/serie/'+ parsedCookie.link + '"]')[0].parentElement);
				} else {
					element = $($('a[href="serie/'+ parsedCookie.link + '"]')[0].parentElement);
				}
				if(parsedCookie.Name !== undefined) {
					var thelink = "serie/" + parsedCookie.link + "/" + parsedCookie.season + "/" + parsedCookie.folge + "-" + parsedCookie.Name;
					var linkElement = $(document.createElement("a"));
					linkElement.attr("href", thelink);
					linkElement.css("float", "right").css("margin-right", "5px");
					linkElement.html("Last: S" + parsedCookie.season + " E" + parsedCookie.folge);
					element.append(linkElement);
					if(infoLoaded) {
						var seriesName = element.children()[0].innerHTML;
						var specialCase = false;
						switch(seriesName) {
							case "Death Note":
								if(parsedCookie.season == 2 && parsedCookie.folge == 18)
									specialCase = true;
								break;
							case "Steins;Gate":
								if(parsedCookie.season == 1 && parsedCookie.folge == 24)
									specialCase = true;
								break;
							case "Bleach":
								if(parsedCookie.season == 16 && parsedCookie.folge == 18)
									specialCase = true;
								break;
							case "Dragonball":
								if(parsedCookie.season == 3 && parsedCookie.folge == 54)
									specialCase = true;
								break;
							case "Dragonball-Z":
								if(parsedCookie.season == 10 && parsedCookie.folge == 84)
									specialCase = true;
								break;
							case "Naruto":
								if(parsedCookie.season == 9 && parsedCookie.folge == 12)
									specialCase = true;
								break;
							case "Hunter-x-Hunter":
								if(parsedCookie.season == 3 && parsedCookie.folge == 48)
									specialCase = true;
								break;
						}
						var obj = getObjectWhereName(seriesArray, seriesName);
						var lastSeason = obj.seasons;
						var lastEpisode =  obj.episodes;
						if((lastSeason == parsedCookie.season && lastEpisode == parsedCookie.folge) | specialCase) {
							var parent = element.parent();
							element.detach();
							parent.append(element);
							element.addClass("seen");
						}
					}
				} else {
					element.innerHTML += "<span class='serie-info'>Last: S" + parsedCookie.season + " E" + parsedCookie.folge + "</span>";
				}
			}
		}
	}

	addSerieInfoToElements(getAllSeriesCookies());
});