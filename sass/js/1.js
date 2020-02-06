$(function(){
    var pageWidth = $( window ).width();
   
        $('.cacngonngu').slideUp();
        $('.top-ngonngu b').click(function(event){
          
            $(this).next().slideToggle();
    
        })
    $('.timkiem').slideUp();
    $('.iconSearch').click(function(event){
        $('.timkiem').slideToggle();
    })

})