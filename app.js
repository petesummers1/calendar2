// Get the current date
var currentDate = new Date();

// Define an array of month names
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Create a function to generate the calendar
function generateCalendar(year, month) {
  // Create a new date object with the specified year and month
  var date = new Date(year, month, 1);

  // Get the number of days in the specified month
  var numDays = new Date(year, month + 1, 0).getDate();

  // Create an empty table to hold the calendar
  var calendar = '<table>';

  // Add the month and year to the calendar
  calendar += '<thead><tr><th class="activity"></th><th colspan="' + numDays + '">' + monthNames[month] + ' ' + year + '</th></tr>';

  // Add the activity rows to the calendar
  calendar += '<tr class="activity-row"><td class="activity">Activity 1</td>';
  for (var i = 1; i <= numDays; i++) {
    calendar += '<td></td>';
  }
  calendar += '</tr>';
  calendar += '<tr class="activity-row"><td class="activity">Activity 2</td>';
  for (var i = 1; i <= numDays; i++) {
    calendar += '<td></td>';
  }
  calendar += '</tr>';
  calendar += '<tr class="activity-row"><td class="activity">Activity 3</td>';
  for (var i = 1; i <= numDays; i++) {
    calendar += '<td></td>';
  }
  calendar += '</tr>';

  // Add the dates to the calendar
  calendar += '<tr>';
  for (var i = 1; i <= numDays; i++) {
    calendar += '<td>' + i + '</td>';
  }
  calendar += '</tr></table>';

  // Return the generated calendar
 
