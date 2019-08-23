// Set title of page
var clubinfo = " | Cornell Kendo Club";
var path = window.location.pathname;
var pagename = path.substring(path.lastIndexOf("/") + 1)
if (pagename == "index.html") pagename = "Home";
else if (pagename == "eboard.html") pagename = "E-Board";
pagename = pagename.toUpperCase().substr(0, 1) + pagename.substring(1);
document.title = pagename + clubinfo;

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
