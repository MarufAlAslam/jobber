$('.fa-search').parent().click(function(){
    $('.topBar').toggle()
})
$('.fa-bars').parent().click(function(){
    $('.sidebar.h-100').css("transform","translateX(0)")
})
$('.closer').click(function(){
    $('.sidebar.h-100').css("transform","translateX(-100%)")
})