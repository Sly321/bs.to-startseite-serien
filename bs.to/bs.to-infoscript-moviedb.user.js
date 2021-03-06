// ==UserScript==
// @name		    bs.to-infoscript-moviedb
// @namespace		https://github.com/Sly321/bs.to-startseite-serien
// @author			Sly321
// @version			1.0.2
// @description	Crossloads series informations.
// @icon		    https://s.bs.to/favicon.ico
// @include			https://bs.to/
// @include         https://bs.to/home
// @require			https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js
// @updateURL		https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/bs.to/bs.to-infoscript-moviedb.user.js
// ==/UserScript==
//
var curepisode = 0;
var curstaffel = 0;
var lEle;

var div = $(document.createElement("div"));
var wrapper = $(document.createElement("div"));
var closeA = $(document.createElement("div"));
var descriptionDiv = $(document.createElement("div"));
var descriptionHead = $(document.createElement("h5"));
var seasonTable = $(document.createElement("table"));
seasonTable.html('<thead><tr><td></td><td>Name</td><td style="float: right; ">Release Date</td></tr></thead><tbody></tbody>');
seasonTable.css('width', '100%');
seasonTable.css('margin-top', '15px');
descriptionDiv.attr('id', 'descriptionDiv');
descriptionDiv.css('height', '0');
descriptionDiv.css('transition', 'height 0.5s ease');
descriptionDiv.css('font-size', '14px');
descriptionDiv.css('font-family', 'calibri');
descriptionHead.css('margin-top', '5px');
descriptionHead.html('▼ Beschreibung');
descriptionDiv.css('overflow', 'hidden');
closeA.css("position", "absolute");
closeA.css("top", "2px");
closeA.css("right", "5px");
closeA.css("cursor", "pointer");
closeA.css("font-size", "25px");
closeA.on('click', function() {
		$("#infodiv").css("opacity", "0");
		setTimeout(function() {
			$("#infodiv").css("z-index", "-1");
		}, 500);
});
closeA.html("⊗");
wrapper.css("padding", "15px");
wrapper.css("position", "relative");
wrapper.css("height", "calc(100% - 30px)");
wrapper.css("overflow", "auto");
div.attr("id", "infodiv");
div.css("position", "fixed");
div.css("width", "600px");
div.css("height", "500px");
div.css("background", "#0D0F12");
div.css("color", "#9BA3A6;");
div.css("left", "calc(50% - 300px)");
div.css("top", "150px");
div.css("z-index", "-1");
div.css("border-radius", "5px");
div.css("border", "1px solid #181A20");
div.css("transition","opacity 0.5s ease");
div.css("opacity", "0");
div.append(wrapper);
wrapper.append(document.createElement("h2"));
wrapper.append(descriptionHead);
wrapper.append(descriptionDiv);
wrapper.append(document.createElement("h3"));
wrapper.append(seasonTable);
wrapper.append(closeA);
$("body").append(div);

var loadSeriesInfo = function(data, action, aLink) {
		switch(action) {
				case 'load-series':
						$("#infodiv").css("opacity", "1");
						$("#infodiv").css("z-index", "30");
                        var innerHtmlString = data.original_name;
						switch(data.status) {
								case 'Returning Series':
										innerHtmlString += '<span style="color: green; font-size: 16px;"> Running</span>';
										break;
								case 'Ended':
										innerHtmlString += '<span style="color: red; font-size: 16px;"> Ended</span>';
										break;
								case 'Canceled':
										innerHtmlString += '<span style="color: red; font-size: 16px;"> Abgebrochen</span>';
										break;
								default:
										console.log("not defined: " + data.status);
										break;
						}
                        innerHtmlString += '<span style="float: right;padding-top: 20px;font-size: 12px;padding-right: 5px;">' + data.vote_average + ' aus ' + data.vote_count + ' votes</span>';
                        $("#infodiv > div > h2").html(innerHtmlString);
                        $("#infodiv > div > #descriptionDiv").html(data.overview);
                        $("#infodiv > div > h5").on('click', function() {
                                if($("#infodiv > div > #descriptionDiv").css("height") == "85px") {
                                    $("#infodiv > div > #descriptionDiv").css("height", "0");
                                }
                                else {
                                    $("#infodiv > div > #descriptionDiv").css("height", "85px");
                                }
                        });
						break;
				case 'load-season':
						$("#infodiv > div > h3").html('Staffel ' + data.season_number + ' - ' + data.name);
						var episoden = data.episodes;
						var htmlString = '';
						for(var x = 0; x < episoden.length; x++) {

								var namestyle = "";
								if (data.season_number == $(aLink).attr("staffel") && episoden[x].episode_number == $(aLink).attr("episode")) {
										namestyle += "background: #3A3A3A;";
								}

								htmlString += '<tr style="background: rgb(13, 15, 18); border-bottom: 2px solid #2E2F31;">';
								htmlString += '<td style="border-bottom-left-radius: 5px;border-top-left-radius: 5px;' + namestyle + '">' + episoden[x].episode_number + '</td>';
								htmlString += '<td style="width: 400px;' + namestyle + '">' + (episoden[x].name === '' ? '- keiner angegeben -' : episoden[x].name) + '</td>';

								var dateStyle = "border-top-right-radius: 5px;border-bottom-left-radius: 5px;" + namestyle;
								var datestring = "";
								if (episoden[x].air_date === null) {
										datestring = "- unbekannt -";
										dateStyle += "text-align: right;";
								} else {
										var date = new Date(episoden[x].air_date);
										var today = new Date();
										var tag = date.getDate().toString().length == 1 ? "0" + date.getDate().toString() : date.getDate().toString();
										var mon = (date.getMonth()+1).toString().length == 1 ? "0" + (date.getMonth()+1) : (date.getMonth()+1);
										var year = date.getFullYear();
										datestring += tag + "." + mon + "." + date.getFullYear();
										if (year == today.getFullYear() ? (date.getMonth() == today.getMonth() ? (date.getDate() == today.getDate() ? true : false) : false) : false) {
												dateStyle += "text-align: right; color: #057729; font-weight: bolder;";
										} else if (date > today) {
												dateStyle += "text-align: right; color: #C2261A; font-weight: bolder;";
										} else {
												dateStyle += "text-align: right;";
										}
								}

								htmlString += '<td style="' + dateStyle + '">' + datestring	+ '</td>';
								htmlString += '</tr>';
						}
						$("#infodiv > div > table > tbody").html(htmlString);
						break;
				default:
						break;
		}
};

var url = 'https://api.themoviedb.org/3/';
var key = 'api_key=2e74839a423b1266f0ccf5043bade403';

var getSerieById = function(id, aLink) {
		var mode = 'tv/' + id;
		$.ajax({
				type: 'GET',
				url: url + mode + '?' + key,
				async: false,
				jsonpCallback: 'testing',
				contentType: 'application/json',
				dataType: 'jsonp',
				success: function(json) {
						//console.dir(json);
						loadSeriesInfo(json, 'load-series');
						getSeasonById(id, json.number_of_seasons, aLink);
				},
				error: function(e) {
						console.log(e.message);
				}
		});
};

var resultSet = function(data) {
		var status = data.status;
		var name	 = data.original_name;
};

var getSeasonById = function(id, season, aLink) {
		var mode = 'tv/' + id + '/season/' + season;
		$.ajax({
				type: 'GET',
				url: url + mode + '?' + key,
				async: false,
				jsonpCallback: 'testing',
				contentType: 'application/json',
				dataType: 'jsonp',
				success: function(json) {
						loadSeriesInfo(json, 'load-season', aLink);
				},
				error: function(e) {
						console.log(e.message);
				}
		});
};

var getSerieByName = function(name, aLink) {
		var mode = 'search/tv?query=';
		$.ajax({
				type: 'GET',
				url: url + mode + name + '&' + key,
				async: false,
				jsonpCallback: 'testing',
				contentType: 'application/json',
				dataType: 'jsonp',
				success: function(json) {
						getSerieById(json.results[0].id, aLink);
				},
				error: function(e) {
						console.log(e.message);
				}
		});
};

var setFunctionLinks = function() {
		var a;
		var serie_name = "";
		for(var x = 0; x < lEle.length; x++) {
			 serie_name = (lEle[x].children[0].innerHTML);

			 curepisode = 0;
			 curstaffel = 0;
			 if(lEle[x].children[1] !== undefined) {
						console.log("nicht undefined");
					var lastseriestring = lEle[x].children[1].innerHTML;
					var regexr = /[\w]*:\sS(\d)*\sE([\d]*)/;
					var match = lastseriestring.match(regexr);
					curstaffel = match[1];
					curepisode = match[2];
			 }

			 new_a = $(document.createElement("a"));
			 new_a.html("🕐");
			 new_a.attr("id", serie_name);
			 new_a.css("cursor", "help");
			 new_a.css("float", "right");
			 new_a.css("text-decoration", "none");
			 new_a.attr("staffel", curstaffel);
			 new_a.attr("episode", curepisode);
			 new_a.on('click', function() {
					 aString = $(this).attr("id");
					 getSerieByName(aString, this);
			 });
			 $(lEle[x]).append(new_a);
		}
};

 $(document).ready(function() {
	    lEle = $("#root > div > .seriesList > .serienElement");
		if(lEle.length === 0) {
				var eleInt = setInterval(function() {
					 lEle = $('#column1 > div > .ui-accordion-content > ul > li');

					 if(lEle.length !== 0) {
							 clearInterval(eleInt);
							 setFunctionLinks();
						}
				}, 200);
		} else {
			 setFunctionLinks();
	 }
});