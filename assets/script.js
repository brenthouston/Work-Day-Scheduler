

$(function () {
    
    var saveBtn = $('.btn');
    
    for(var i = 0 ;i < saveBtn.length; i++){
      saveBtn[i].addEventListener("click",function(){
        var inputVal = $(this).prev().val(); 
        localStorage.setItem('input',inputVal);
        
      ;})
    };
    });