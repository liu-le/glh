

     
    $(".louti").children("li").click(function(){
        $("html").animate({
            scrollTop:$(".dio").eq($(this).index()).offset().top
        },500)
    })

