/*
NOTES/STRATEGY

use .toUpperCase to correct user inputs


Add default to today's date feature:

use Date() methods


*/

$(document).ready(function() {

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

        console.log(data)

        var eventsList = data.parse.text["*"]

        $("#section3").append(eventsList)
      },
      error: function (errorMessage) {
        console.log('error')
      }

    });

  });

});