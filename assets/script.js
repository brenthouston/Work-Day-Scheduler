$(function () {
  var saveBtn = $(".btn");

  for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", function () {
      var taskBox = JSON.parse(localStorage.getItem("taskBox")) || {};
        var id = $(this).parent().attr("id");
        var text = $(this).prev().val();
        taskBox["task"+id] = text;

  

      var taskBoxString = JSON.stringify(taskBox);
      localStorage.setItem("taskBox", taskBoxString);
    });
  }

  function renderTextContent() {
    var taskArray = $(".description");

    for (var i = 0; i < taskArray.length; i++) {
        // sets the text
      $(taskArray[i]).val(JSON.parse(localStorage.getItem("taskBox"))["task"+(i+9)]);

      // set the color
      var targetDiv = $(taskArray[i]).parent();
      var currentHour = parseInt(dayjs().format("H"));
    

    // var currentHour = 16;
      var currentId = parseInt(targetDiv.attr("id"))

      console.log(currentHour)
      console.log(targetDiv.attr("id"))

      if(currentHour == currentId) {
          targetDiv.addClass("present");
      } else if(currentHour > currentId) {
        targetDiv.addClass("past");
      } else {
        targetDiv.addClass("future");
      }
    }
  }

  renderTextContent();



  //current time
  setInterval(() => {
    var currentTime = dayjs();
    $("#currentDay").text(currentTime.format("MMM D, YYYY, hh:mm:ss a"));
  }, 1000);
});
