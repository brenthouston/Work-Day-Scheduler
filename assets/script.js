

$(function () {

    var saveBtn = $('.btn');
    var taskBox9 = $('#task9')
    var taskBox10 = $('#task10')
    var taskBox11 = $('#task11')
    var taskBox12 = $('#task12')
    var taskBox13 = $('#task13')
    var taskBox14 = $('#task14')
    var taskBox15 = $('#task15')
    var taskBox16 = $('#task16')
    var taskBox17 = $('#task17')
    
    for(var i = 0 ;i < saveBtn.length; i++){
        saveBtn[i].addEventListener("click",function(){
            var taskBox = {};
            taskBox["inputVal"] = $(this).prev().val();
            taskBox["sched-hour"] = $(this).parent().attr("id")
            var taskBoxString = JSON.stringify(taskBox);
            localStorage.setItem("taskBox",taskBoxString);
            ;})
            
        };
    
    function renderTextContent (){
        document.getElementById("task9").value = JSON.parse(localStorage.getItem("taskBox")).inputVal;
    }

    
    renderTextContent();
        
    function PPF(){
        setInterval(() => {
        var hrTime = dayjs()
        hrTime.format('HH');
        console.log(hrTime)
        },1000);    
        if (taskBoxString < hrTime){
            set
        }
   
    };

        
        
        
        
        
        
        
        
        
        
        //current time
        setInterval(() =>{
            var currentTime = dayjs();
            $('#currentDay').text(currentTime.format('MMM D, YYYY, hh:mm:ss a'));
            },1000);
    

    });