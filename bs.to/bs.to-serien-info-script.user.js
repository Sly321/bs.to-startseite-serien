// ==UserScript==
// @name         MovieDB Serien Info Script
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @version      1.0.3
// @description  Crossloads series informations.
// @icon         https://s.bs.to/favicon.ico
// @include      https://bs.to/
// @require      https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js
// @updateURL    https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/bs.to/bs-to-info-script.user.js
// ==/UserScript==

var div = $(document.createElement("div"));
var wrapper = $(document.createElement("div"));
var closeA = $(document.createElement("div"));
var seasonTable = $(document.createElement("table"));
seasonTable.html('<thead><tr><td></td><td>Name</td><td style="float: right; ">Release Date</td></tr></thead><tbody></tbody>');
seasonTable.css('width', '100%');
seasonTable.css('margin-top', '15px');
closeA.css("position", "absolute");
closeA.css("top", "2px");
closeA.css("right", "5px");
closeA.css("cursor", "pointer");
closeA.css("font-size", "25px");
closeA.on('click', function() {
    $("#infodiv").css("opacity", "0");
    $("#infodiv").css("z-index", "-1");
});
closeA.html("⊗");
wrapper.css("padding", "15px");
wrapper.css("position", "relative");
wrapper.css("height", "calc(100% - 30px)");
wrapper.css("overflow", "auto");
div.attr("id", "infodiv");
div.css("position", "absolute");
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
wrapper.append(document.createElement("h1"));
wrapper.append(document.createElement("h3"));
wrapper.append(seasonTable);
wrapper.append(closeA);
$("body").append(div);

var loadSeriesInfo = function(data, action) {
    switch(action) {
        case 'load-series':
            $("#infodiv").css("opacity", "1");
            $("#infodiv").css("z-index", "30");
            switch(data.status) {
                case 'Returning Series':
                    $("#infodiv > div > h1").html(data.original_name + '<span style="color: green; font-size: 16px;"> Running</span>');
                    break;
                case 'Ended':
                    $("#infodiv > div > h1").html(data.original_name + '<span style="color: red; font-size: 16px;"> Ended</span>');
                    break;
                case 'Canceled':
                    $("#infodiv > div > h1").html(data.original_name + '<span style="color: red; font-size: 16px;"> Abgebrochen</span>');
                    break;
                default:
                    console.log("not defined: " + data.status);
                    break;
            }
            break;
        case 'load-season':
            $("#infodiv > div > h3").html('Staffel ' + data.season_number + ' - ' + data.name);
            var episoden = data.episodes;
            var htmlString = '';
            for(var x = 0; x < episoden.length; x++) {
                htmlString += '<tr style="background: rgb(13, 15, 18); border-bottom: 2px solid #2E2F31;">';
                htmlString += '<td>' + episoden[x].episode_number + '</td>';
                htmlString += '<td style="width: 400px">' + (episoden[x].name === '' ? '- keiner angegeben -' : episoden[x].name) + '</td>';

                var dateStyle = "";
                var datestring = "";
                if (episoden[x].air_date === null) {
                    datestring = "- unbekannt -";
                    dateStyle = "float: right;";
                } else {
                    var date = new Date(episoden[x].air_date);
                    var today = new Date();
                    var tag = date.getDate().toString().length == 1 ? "0" + date.getDate().toString() : date.getDate().toString();
                    var mon = date.getMonth().toString().length == 1 ? "0" + (date.getMonth()+1) : (date.getMonth()+1);
                    datestring += tag + "." + mon + "." + date.getFullYear();
                    if(date < today) {
                        dateStyle = "float: right;";
                    } else if (date > today) {
                        dateStyle = "float: right; color: #C2261A; font-weight: bolder;";
                    } else {
                        dateStyle = "float: right; color: #057729; font-weight: bolder;";
                    }
                }

                htmlString += '<td style="' + dateStyle + '">' + datestring  + '</td>';
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

var getSerieById = function(id) {
    var mode = 'tv/' + id;
    $.ajax({
        type: 'GET',
        url: url + mode + '?' + key,
        async: false,
        jsonpCallback: 'testing',
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(json) {
            console.dir(json);
            loadSeriesInfo(json, 'load-series');
            getSeasonById(id, json.number_of_seasons);
        },
        error: function(e) {
            console.log(e.message);
        }
    });
};

var resultSet = function(data) {
    var status = data.status;
    var name   = data.original_name;
};

var getSeasonById = function(id, season) {
    var mode = 'tv/' + id + '/season/' + season;
    $.ajax({
        type: 'GET',
        url: url + mode + '?' + key,
        async: false,
        jsonpCallback: 'testing',
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(json) {
            console.dir(json);
            loadSeriesInfo(json, 'load-season');
        },
        error: function(e) {
            console.log(e.message);
        }
    });
};

var getSerieByName = function(name) {
    var mode = 'search/tv?query=';
    $.ajax({
        type: 'GET',
        url: url + mode + name + '&' + key,
        async: false,
        jsonpCallback: 'testing',
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(json) {
            getSerieById(json.results[0].id);
        },
        error: function(e) {
            console.log(e.message);
        }
    });
};
 $(document).ready(function() {
    var lEle = $('#column1 > div > .ui-accordion-content > ul > li');
    var rEle = $('#column2 > div > .ui-accordion-content > ul > li');
    if(rEle.length === 0 || lEle.length === 0) {
        var eleInt = setInterval(function() {
           lEle = $('#column1 > div > .ui-accordion-content > ul > li');
           rEle = $('#column2 > div > .ui-accordion-content > ul > li');

           console.log("interval3");
           if(rEle.length !== 0 && lEle.length !== 0) {
               clearInterval(eleInt);

               console.log("lEle.length: " + lEle.length);
               var a;
               var serie_name = "";
               for(var x = 0; x < lEle.length; x++) {
                   console.log("test3");
                   serie_name = (lEle[x].children[0].innerHTML);
                   new_a = $(document.createElement("a"));
                   new_a.html("🕐");
                   new_a.attr("id", serie_name);
                   new_a.css("cursor", "help");
                   new_a.css("margin-left", "5px");
                   new_a.css("font-size","16px");
                   new_a.on('click', function() {
                       console.log($(this).attr("id"));
                       aString = $(this).attr("id");
                       getSerieByName(aString);
                   });
                   $(lEle[x]).append(new_a);
               }

               for(var x = 0; x < rEle.length; x++) {
                   serie_name = (rEle[x].children[0].innerHTML);
                   new_a = $(document.createElement("a"));
                   new_a.html("🕐");
                   new_a.attr("id", serie_name);
                   new_a.css("cursor", "help");
                   new_a.css("margin-left", "5px");
                   new_a.css("font-size","16px");
                   new_a.on('click', function() {
                       console.log($(this).attr("id"));
                       aString = $(this).attr("id");
                       getSerieByName(aString);
                   });
                   $(rEle[x]).append(new_a);
               }
           }
        }, 200);
    } else {
        var a;
        var serie_name = "";
        for(var x = 0; x < lEle.length; x++) {
            console.log("test3");
            serie_name = (lEle[x].children[0].innerHTML);
            new_a = $(document.createElement("a"));
            new_a.html("🕐");
            new_a.attr("id", serie_name);
            new_a.css("cursor", "help");
            new_a.css("margin-left", "5px");
            new_a.css("font-size","16px");
            new_a.on('click', function() {
                console.log($(this).attr("id"));
                aString = $(this).attr("id");
                getSerieByName(aString);
            });
            $(lEle[x]).append(new_a);
        }

        for(var x = 0; x < rEle.length; x++) {
            serie_name = (rEle[x].children[0].innerHTML);
            new_a = $(document.createElement("a"));
            new_a.html("🕐");
            new_a.attr("id", serie_name);
            new_a.css("cursor", "help");
            new_a.css("margin-left", "5px");
            new_a.css("font-size","16px");
            new_a.on('click', function() {
                console.log($(this).attr("id"));
                aString = $(this).attr("id");
                getSerieByName(aString);
            });
            $(rEle[x]).append(new_a);
        }
    }
});