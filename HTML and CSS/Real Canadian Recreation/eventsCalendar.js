var now = new Date();

$(function displayMonth2(x) {
    var firstDay, firstDayDayOfWeek, lastDay, lastDayDayOfWeek, i, monthLength, d, e;
//    firstDay = x.parse('1');
    firstDay = 1;
    firstDayDayOfWeek = firstDay.getDay()+1;
//    lastDay = firstDay.parse('firstDay + 1 month - 1d');
    lastDay = 31;
    lastDayDayOfWeek = lastDay.getDay()+1;
    $('.eventsCalendar').find('td').removeClass("notThisMonth");
    for (i = 1; i < firstDayDayOfWeek; i++) {
        $('.eventsCalendar').find('td:nth-of-type(i)').addClass("notThisMonth");
    }
    for (i = 7; i > lastDayDayOfWeek; i--) {
        $('.eventsCalendar').children('tr:last-of-type').find('td:nth-of-type(i)').addClass("notThisMonth");
    }
    if (firstDayDayOfWeek == 1 && lastDayDayOfWeek == 7) {
        $('.eventsCalendar').children('tr:last-of-type').addClass('hidden');
    } else {$('.eventsCalendar').children('tr:last-of-type').removeClass('hidden');}
    monthLength = lastDay.getDate();
    d = firstDayDayOfWeek-1;
    for (i = 1; i < monthLength; i++) {
        e = i+d;
        $('.eventsCalendar').find('td:nth-of-type(e)').html('i');
    }
});

function displayMonth(x) {
    var i, j;
    document.getElementById("eventsCalendar").children('*').children('td').innerHTML = "WTF";
//    for (i = 1; i < 31; i++) {    
//        j = i.toString();
////        $('.eventsCalendar').find('td:nth-of-type(i)').html(j);
//        document.getElementById("eventsCalendar").children("*").children("td").innerHTML = j;
//    } 
};

displayMonth(now);