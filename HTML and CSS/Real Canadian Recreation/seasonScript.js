var season, month, date;
season = '';
var d = new Date();
month = d.getMonth()+1;
date = d.getDate();

function getSeason() {                
    if (month == 1 || month == 2) season = "winter";
    if (month == 3 && date < 20) season = "winter";
    if (month == 3 && date >= 20) season = "spring";
    if (month == 4 || month == 5) season = "spring";
    if (month == 6 && date < 21) season = "spring";
    if (month == 6 && date >= 21) season = "summer";
    if (month == 7 || month == 8) season = "summer";
    if (month == 9 && date < 22) season = "summer";
    if (month == 9 && date >= 22) season = "autumn";
    if (month == 10 || month == 11) season = "autumn";
    if (month == 12 && date < 21) season = "autumn";
    if (month == 12 && date >= 21) season = "winter";
    document.getElementById('body').className = season;
}
function changeSeason() {
    if (document.getElementById('body').className == "winter") {season = "spring";}
    else if (document.getElementById('body').className == "spring") {season = "summer";}
    else if (document.getElementById('body').className == "summer") {season = "autumn";}
    else if (document.getElementById('body').className == "autumn") {season = "winter";}
    document.getElementById('body').className = season;
}
getSeason();