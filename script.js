//fully loads dom before executing function
$(document).ready(function () {

  //add listener for click events to the save button
  //when save button is clicked
  var saveButton = $('.saveBtn')
  saveButton.on('click', function () {
    var timeBlockEl = $(this).parent().attr('id');
    var userInput = $(this).prev().val();
    
    //then the data is saved to local storage
    localStorage.setItem(timeBlockEl, userInput);
  });
});

//determines whether it is past, present, or future
var difTimes = $('.time-block');
var currentHour = dayjs().hour();

difTimes.each(function () {
  var timeBlockEl = $(this).attr('id');
  var hour = parseInt(timeBlockEl.split('-')[1]);

  if (hour < currentHour) {
    $(this).removeClass('past', 'present', 'future').addClass('past');
  } else if (hour === currentHour) {
    $(this).removeClass('past', 'present', 'future').addClass('present');
  } else {
    $(this).removeClass('past', 'present', 'future').addClass('future');
  }
});

//date and time function displayed in the header of the page
function dateAndTime() {
  var dateAndTime = $('#currentDay');
  var currentDate = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  dateAndTime.text(currentDate);
}
//calls function for date and time
dateAndTime();
setInterval(dateAndTime, 1000);

//retrieves data from local storage and saves it to the page 
difTimes.each(function () {
  var timeBlockEl = $(this).attr('id');
  var userInput = localStorage.getItem(timeBlockEl);
  $(this).find('textarea').val(userInput);
});

