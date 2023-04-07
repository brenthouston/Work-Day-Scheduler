$(function () {
  var saveBtn = $(".btn");

  for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", function () {
      var taskBox = JSON.parse(localStorage.getItem("taskBox")) || {};
    //   taskBox["inputVal"] = $(this).prev().val();
    //   taskBox["sched-hour"] = $(this).parent().attr("id");

        // {
        //     inputVal: "text",
        //     sched-hour: 9
        // }

        var id = $(this).parent().attr("id");
        var text = $(this).prev().val();

        taskBox["task"+id] = text;

        // {
        //     task9: "text",
        //     task10: "hello"
        // }
    

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

//   function PPF() {
//     setInterval(() => {
//       var hrTime = dayjs();
//       hrTime.format("HH");
//       console.log(hrTime);
//     }, 1000);
//     if (taskBoxString < hrTime) {
//       set;
//     }
//   }

  //current time
  setInterval(() => {
    var currentTime = dayjs();
    $("#currentDay").text(currentTime.format("MMM D, YYYY, hh:mm:ss a"));
  }, 1000);
});
