/*
NOTES/STRATEGY

use .toUpperCase to correct user inputs


*/

$(document).ready(function() {

  $("#getDayButton").on("click", function () {

  var month = $('#monthInput').val()
  var day = $('#dayInput').val()

  var url = "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=1&page=" + month + "_" + day + "&callback=?"


  console.log('url', url)

    jQuery.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType: "json",
      success: function (data) {

        console.log(data)

        var eventsList = data.parse.text["*"]

        $("#section3").html(eventsList)
      },
      error: function (errorMessage) {
        console.log('error')
      }

    });

  });

});