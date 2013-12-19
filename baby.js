var year = window.location.href.slice(78, 82);
var month = window.location.href.slice(82, 84) - 1;
var day = window.location.href.slice(84, 86);
var now = new Date();
var then = new Date(year, month, day);
var mil = now - then;
var w = Math.floor(mil / 1000 / 60 / 60 / 24 / 7);
var r = mil - (w * 1000 * 60 * 60 * 24 * 7) ;
var d = Math.floor(r / 1000 / 60 / 60 / 24);
var o = 40 * 7 * 24 * 60 * 60 * 1000 - mil;
var ow = Math.floor(o / 1000 / 60 / 60 / 24 / 7);
var or = o - (ow * 1000 * 60 * 60 * 24 * 7) ;
var od = Math.floor(or / 1000 / 60 / 60 / 24);

var inDiv = document.getElementById('in').children[0];
var outDiv = document.getElementById('out').children[0];

if (w === 1) {
    inDiv.innerHTML = "one week and ";
} else {
    inDiv.innerHTML = String(w) + " weeks and ";
}
if (d === 1) {
    inDiv.innerHTML += "one day.";
} else {
    inDiv.innerHTML += String(d) + " days.";
}

if (ow === 1) {
    outDiv.innerHTML = "one week and ";
} else {
    outDiv.innerHTML = String(ow) + " weeks and ";
}
if (od === 1) {
    outDiv.innerHTML += "one day.";
} else {
    outDiv.innerHTML += String(od) + " days.";
}

