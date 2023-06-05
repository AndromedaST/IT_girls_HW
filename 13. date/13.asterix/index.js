

function formatDate(date) {
if (date <= new Date - 1) {console.log("right now")}
    else if (date <= new Date - 60*1000) {console.log((Date.parce(new Date) - Date.parce(date)) + "secs ago")}
else if (date <= new Date - 60*60*1000) {console.log((Date.parce(new Date) - Date.parce(date)) + "mins ago")}
else {console.log("yesterday date")}
}

date = '2023-05-05T23:30:25';
console.log(1,formatDate(date))