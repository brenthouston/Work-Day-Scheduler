

$(function () {

    var saveBtn = $('.btn');
    var printTask = $('description')
    
    
    
    
    for(var i = 0 ;i < saveBtn.length; i++){
        saveBtn[i].addEventListener("click",function(e){
            e.preventDefault();
            var inputVal = $(this).prev().val(); 
            localStorage.setItem('input',inputVal);
            
            
            ;})
        };
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        //current time
        setInterval(() =>{
            var currentTime = dayjs();
            $('#currentDay').text(currentTime.format('MMM D, YYYY, hh:mm:ss a'));
            },1000);
    

    });