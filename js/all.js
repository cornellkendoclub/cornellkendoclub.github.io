// Set title of page
var clubinfo = " | Cornell Kendo Club";
var path = window.location.pathname;
var pagename = path.substring(path.lastIndexOf("/") + 1)
if (pagename == "kendo") pagename = "home";
else if (pagename == "eBoard") pagename = "E-Board";
console.log(pagename);
pagename = pagename.toUpperCase().substr(0, 1) + pagename.substring(1, pagename.indexOf("."));
document.title = pagename + clubinfo;

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
