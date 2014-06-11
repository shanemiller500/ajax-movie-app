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
       var info = $(".results").append("<li data-imdbid=\"" + movie["imbdID"] + "\">" + movie["Title"] + " " + movie["Year"] + "</li>" + "<br>")
       console.log(info)

      });
    });

    $(".results").delegate("li", "click", function(e) {
      var imdata = $(e.target).data("data-imdbid")
      console.log(imdata);
      var request = {
        url: "http://www.omdbapi.com/",
        type: "get",
        dataType:"json",
        data: {
          i: imdata
        }
      }

      var responce2 = $.ajax(request)
      responce2.done(function(data) {
        $.each(data["data-imdbid"])
        console.log(data)
      })
    });
  });
});