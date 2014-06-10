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
        $(".results").append("<li>" + movie["Title"] + " " + movie["Year"] + "</li>")
      })
    })
  });
});