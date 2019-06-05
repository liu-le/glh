
class Search{
    constructor(){
        // 1.获取元素
        this.txt = document.getElementById("search")
        this.list = document.getElementById("list");
        // console.log(this.list)
        this.url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su"

        // 2.绑定事件
        this.init()
    }
    init(){
        var that = this;
        this.txt.oninput = function(){
            // console.log(this.value)
            that.value = this.value;
            // 3.请求数据
            that.load();
        }
    }
    load(){
        var that = this;
        ajax({
            url:this.url,
            data:{
                wd:this.value,
                cloumnName:"cb",
                cb:"asdasdsa"
            },
            type:"jsonp",
            success:function(res){
                // 保存数据
                that.res = res;
                // 4.根据数据渲染页面
                that.display()
            }
        })
    }
    display(){
        // 开始渲染页面
        // console.log(this.res)
        var str = "";
        for(var i=0;i<this.res.s.length;i++){
            str += `<li>${this.res.s[i]}</li>`
        }
        this.list.innerHTML = str;
    }
}

new Search();
