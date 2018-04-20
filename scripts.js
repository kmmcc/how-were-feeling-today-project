/*
NOTES/STRATEGY

use .toUpperCase to correct user inputs


Add default to today's date feature:

use Date() methods


*/

$(document).ready(function() {
  //default day

  var todaysDate = new Date()
  var todaysMonth = todaysDate.getMonth()
  var todaysDayOfWeek = todaysDate.getDay()
  var todaysDay = todaysDate.getDate()
  var todaysYear = todaysDate.getYear() + 1900

  if (todaysMonth === 0) {
    todaysMonth = 'January'
  }
  if (todaysMonth === 1) {
    todaysMonth = 'February'
  }
  if (todaysMonth === 2) {
    todaysMonth = 'March'
  }
  if (todaysMonth === 3) {
    todaysMonth = 'April'
  }
  if (todaysMonth === 4) {
    todaysMonth = 'May'
  }
  if (todaysMonth === 5) {
    todaysMonth = 'June'
  }
  if (todaysMonth === 6) {
    todaysMonth = 'July'
  }
  if (todaysMonth === 7) {
    todaysMonth = 'August'
  }
  if (todaysMonth === 8) {
    todaysMonth = 'September'
  }
  if (todaysMonth === 9) {
    todaysMonth = 'October'
  }
  if (todaysMonth === 10) {
    todaysMonth = 'November'
  }
  if (todaysMonth === 11) {
    todaysMonth = 'December'
  }


  if (todaysDayOfWeek === 0) {
    todaysDayOfWeek = 'Sunday'
  }
  if (todaysDayOfWeek === 1) {
    todaysDayOfWeek = 'Monday'
  }
  if (todaysDayOfWeek === 2) {
    todaysDayOfWeek = 'Tuesday'
  }
  if (todaysDayOfWeek === 3) {
    todaysDayOfWeek = 'Wednesday'
  }
  if (todaysDayOfWeek === 4) {
    todaysDayOfWeek = 'Thursday'
  }
  if (todaysDayOfWeek === 5) {
    todaysDayOfWeek = 'Friday'
  }
  if (todaysDayOfWeek === 6) {
    todaysDayOfWeek = 'Saturday'
  }

  var url = "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=1&page=" + todaysMonth + "_" + todaysDay + "&callback=?"

  var textMessage = todaysMonth + " " + todaysDay + ", " + todaysYear + " is a " + todaysDayOfWeek + "."

  $("#section2").text(textMessage)

    jQuery.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType: "json",
      success: function (data) {

        var eventsList = data.parse.text["*"]

        $("#section3").html(eventsList)
      },
      error: function (errorMessage) {
        console.log('error')
      }

    });




  //user input of the day
  $("#getDayButton").on("click", function () {

  var month = $('#monthInput').val()
  var day = $('#dayInput').val()
  var year = $('#yearInput').val()

  var fullDate = new Date(month + ' ' + day + ', ' + year)
  var dayOfWeek = fullDate.getDay()

  if (dayOfWeek === 0) {
    dayOfWeek = 'Sunday'
  }
  if (dayOfWeek === 1) {
    dayOfWeek = 'Monday'
  }
  if (dayOfWeek === 2) {
    dayOfWeek = 'Tuesday'
  }
  if (dayOfWeek === 3) {
    dayOfWeek = 'Wednesday'
  }
  if (dayOfWeek === 4) {
    dayOfWeek = 'Thursday'
  }
  if (dayOfWeek === 5) {
    dayOfWeek = 'Friday'
  }
  if (dayOfWeek === 6) {
    dayOfWeek = 'Saturday'
  }

  var url = "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=1&page=" + month + "_" + day + "&callback=?"

  var textMessage = month + " " + day + ", " + year + " is a " + dayOfWeek + "."

  $("#section2").text(textMessage)

    jQuery.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType: "json",
      success: function (data) {

        var eventsList = data.parse.text["*"]

        $("#section3").html(eventsList)
      },
      error: function (errorMessage) {
        console.log('error')
      }

    });

  });

});