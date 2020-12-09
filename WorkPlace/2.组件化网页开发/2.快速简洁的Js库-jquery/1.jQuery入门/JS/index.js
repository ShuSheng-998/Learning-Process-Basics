$(document).ready(function(){
    $('a').click(function(){
        $('img').eq($(this).index()).css({'opacity':'1'}).siblings().css({'opacity':'0'}); 
    })
    /* $(document).keydown(function(event){
        console.log(event.key);
    }) */
    $('input').keypress(function(event){
        console.log(event.key);
    })
})