

$('.zc').click(function () {
    $('#_modal').slideToggle()
})
$('.close').click(function () {
    $('#_modal').hide()
})


class Register {
    constructor() {
        this.user = document.querySelector("#_modal #user");
        this.pass = document.querySelector("#_modal #pass");
        this.btn = document.querySelector("#_modal #btn");
        this.msg = document.querySelector("#_modal .tipmsg");
        this.button=document.querySelector(".right .hihi .button");
        this.init()
        // console.log(this.button)
    }
    init() {
        var that = this;
        this.btn.onclick = function () {
            // 先获取指定的localStorage，用来判断是否是第一次注册
            that.getUserMsg()
        }
    }
    getUserMsg() {
        this.usermsg = localStorage.getItem("usermsg");
        console.log(this.usermsg);
        this.setUserMsg()
    }
    setUserMsg() {
        if (this.usermsg == null) {
            // 第一次
            this.usermsg = [{
                user: this.user.value,
                pass: this.pass.value,
                onoff: 0
            }]
            this.msg.innerHTML = "";
        } else {
            // 不是第一次:获取的同时，转成数组，然后开始判断是否重名
            this.usermsg = JSON.parse(localStorage.getItem("usermsg"));
            for (var i = 0; i < this.usermsg.length; i++) {
                if (this.usermsg[i].user == this.user.value) {
                    this.msg.innerHTML = "重名";
                    return;
                }
            }
            this.msg.innerHTML = "";
            this.usermsg.push({
                user: this.user.value,
                pass: this.pass.value,
                onoff: 0
            })
        }
        localStorage.setItem("usermsg", JSON.stringify(this.usermsg));
        setInterval(()=>{
            $(".close").trigger("click")
        },500)
        // console.log( $(".right .hihi .button"))
    }
}
new Register;






