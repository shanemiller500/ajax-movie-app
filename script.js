// alert("Hello! I am an alert box!!");

"use strict"

$(function() {

  $("#searchButton").on("click", function(e) {
    e.preventDefault();
    var userInput = $("#searchTerm").val()

    var request = {
      url: "http://www.omdbapi.com/",
      type: "get",
      dataType: "json",
      data: {
        s: userInput
      }
    }
    var responce = $.ajax(request)
    responce.done(function(data) {
      $.each(data["Search"], function(index, movie) {
        var info = $(".results").append("<li data-imdbid=\"" + movie["imdbID"] + "\">" + movie["Title"] + " " + movie["Year"] + "</li>" + "<br>")
        // console.log(info)

      });


      $(".results").delegate("li", "click", function(e) {
        var imdata = $(e.target).data("imdbid")
        var request = {
          url: "http://www.omdbapi.com",
          type: "get",
          dataType: "json",
          data: {
            i: imdata
          }

        }
       

        var responce = $.ajax(request)
        responce.done(function(data) {
          $.each(data, function(img) {
            var info = $(".image").append("<img src = data['Poster']" + "</img>" + "<li>" + data["Plot"] )
             // $("<img>").attr("src", data["Poster"]).append(img)
          })
          console.log(data)
        })
      });
    });
  });
});