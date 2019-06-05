class Two {
    constructor() {
        this.abox = document.querySelectorAll(".ibox");
        this.al = document.querySelectorAll(".al");
        // this.init();
        this.display();
    }
    init() {
        var that = this;
        for (var i = 0; i < this.abox.length; i++) {
            // console.log(this.abox[i].children[1])
            this.abox[i].addEventListener("mouseover", function () {
                for (var j = 0; j < that.abox.length; j++) {
                    that.abox[j].children[1].style.display = "none";
                }
                this.children[1].style.display = "block";
            })

            this.abox[i].addEventListener("mouseout", function () {
                for (var j = 0; j < that.abox.length; j++) {
                    // that.abox[j].className ="";
                }
                this.children[1].style.display = "none";
            })
        }

    }
    display() {
        var str = "";
        for (var i = 0; i < this.al.length; i++) {
            str = `<li><i>1非洲水果</i><i>非洲水果</i><i>非洲水果</i></li><li><i>usa水果</i><i>USA水果</i><i>USf水果</i></li><li><i>欧洲水果</i><i>欧洲水果</i><i>法国水果</i></li>`
            this.al[i].innerHTML = str;
        }
        
        // console.log(this.al[i])

        this.init()
    }

}

new Two();

// $(".clear .pp").children(".ibox").mouseover(function(){
//     $(this).children().show()
// })
// $(".clear .pp").children(".ibox").mouseout(function(){
//     $(this).children(".al").hide()
// })






