; (function ($) {
    "use strict";
    // $.banner=function(){};
    // $.fn.banner=function(){};      合并的方法


    $.fn.banner = function (options) {
        var { items, left, right, list, autoplay, delayTime, moveTime, index } = options;

        if (left != undefined && left.length > 0 && right != undefined && right.length > 0) {
            // console.log("left right")
            let iPrev = items.length - 1;
            left.click(function () {
                if (index == 0) {
                    index = items.length - 1;
                    iPrev = 0;
                } else {
                    index--;
                    iPrev = index + 1
                }
                move(1)
            })
            right.click(function () {
                if (index == items.length - 1) {
                    index = 0;
                    iPrev = items.length - 1;
                } else {
                    index++;
                    iPrev = index - 1;
                }
                move(-1);
            })
            let move = function (direct) {
               
                    items.eq(iPrev).css({
                        left:0
                    }).stop().animate({
                        left:-items.eq(0).width()*direct
                    }).end().eq(index).css({
                        left:items.eq(0).width()*direct
                    }).stop().animate({
                        left:0
                    })
                $(".list").children().eq(iPrev).css({background:""}).end().eq(index).css({
                    background:"green"
                })
            }



        }
        list = list === false ? false : true;
        autoplay = autoplay === false ? false : true;
        delayTime = delayTime || 2000;
        moveTime = moveTime || 200;
        index = index || 0
        // console.log(items)
        if (list) {
            var str = ""
            for (var i = 0; i < items.length; i++) {
                str += `<li>${i + 1}</li>`
            }
            this.append($("<ul class='list'>").html(str));
            $(".list").css({
                width: "120px",
                height: 30,
                // background: "rgba(200,200,200,.6)",
                position: "absolute",
                left: 0, bottom:10,right:0,
                margin:" auto",
                listStyle: "none", padding: 0,
                display: "flex"
            }).children().css({
                flex: 1,
                // margin:"0 5",
                background: "rgba(200,200,200,.6)",
                borderLeft: "solid 1px black",
                borderRight: "solid 1px black",
                lineHeight: "30px",
                textAlign: 'center',
                borderRadius:"50%"
            }).eq(index).css({
                background: "green"
            })

              let move=function (direct, iPrev, iNow) {
              
                    items.eq(iPrev).css({
                        left: 0
                    }).stop().animate({
                        left: -items.eq(0).width()*direct
                    },moveTime).end().eq(iNow).css({
                        left: items.eq(0).width()*direct
                    }).stop().animate({
                        left: 0
                    },moveTime)
                }
              
            



            $(".list").children("li").click(function () {
                if ($(this).index() > index) {
                    move("1", index, $(this).index())
                }
                if ($(this).index() < index) {
                    move("-1", index, $(this).index())
                }
                
                $(".list").children("li").eq(index).css({
                    background:""
                }).end().eq($(this).index()).css({background:"green"})
            index = $(this).index();
            })
        }
        if(autoplay){
            let timer;
           timer= setInterval(() => {
                right.trigger("click")
            },delayTime);
            this.hover(function(){
                clearInterval(timer);
            },function(){
                timer=setInterval(()=>{
                    right.trigger("click")
                },delayTime)
               
            })
        }
        // 1.选元素
        // 3.绑定事件
        // 4.改变缩影
        // 5.根据所应显示图片
        // 实现轮播图
        // console.log(this)
        // console.log("插件启动")
    }
})(jQuery);