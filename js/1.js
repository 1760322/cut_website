$(function(){

    var pageWidth = $( window ).width();
   
        $('.cacngonngu').slideUp(400);
        $('.top-ngonngu b').click(function(event){
          
            $(this).next().slideToggle();
    
        })
    $('.timkiem').slideUp(5000);
    $('.iconSearch').click(function(event){
        $('.timkiem').slideToggle();
    })
    new WOW().init();
})
