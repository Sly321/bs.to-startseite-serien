// ==UserScript==
// @name         bs.to-favorite-fix
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @version      0.1
// @description  For fixing the bs.to favorite site
// @match        https://bs.to/settings/series
// @icon         https://s.bs.to/favicon.ico
// @grant        none
// @updateURL    https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/bs.to-favorite-fix-script.user.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery.sticky/1.0.3/jquery.sticky.js
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict'; /*
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
            $.ajax({
                url: "ajax/edit-seriesnav.php",
                data: {series:series},
                dataType: "json",
                type: "POST",
                success: function(data) {
                    if (data.success === true) {
                        $("#msg").text("Gespeichert.");
                    } else {
                        $("#msg").text(data.error);
                    }
                }
            });
        }
    }).disableSelection();
    $("#msg").text("Du kannst nun deine Lieblingsserien in das 'Andere Serien'-Menü ziehen.");*/
})();