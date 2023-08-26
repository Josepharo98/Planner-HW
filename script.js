//This function shows how to apply the correct color accounting to the time of day
function updateHourBlock(hour, elementId) {
  var currentHour = new Date().getHours();
  

  if (currentHour > hour) {
    $("#" + elementId).attr("class", "row time-block past");
  } else if (currentHour < hour) {
    $("#" + elementId).attr("class", "row time-block future");
  } else {
    $("#" + elementId).attr("class", "row time-block present");
  }
}

// This is where I call the function for every hour available and apply the future past or present class
 
updateHourBlock(9, "hour9");
updateHourBlock(10, "hour10");
updateHourBlock(11, "hour11");
updateHourBlock(12, "hour12");
updateHourBlock(13, "hour1");
updateHourBlock(14, "hour2");
updateHourBlock(15, "hour3");
updateHourBlock(16, "hour4");
updateHourBlock(17, "hour5");

var today = dayjs();

$('#currentDay').text(today.format('dddd, MMM DD, YYYY'));
// This is where the current day, month calender, number and year is shown
    

// I ended up taking out the local storage and savebtn function because I couldnt figure it out
// Any feedback for that part would be greatly appriecated

