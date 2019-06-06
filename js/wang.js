class Shoptabl{
    constructor(){
       this.table = null; 
       this.num = null;
       this.price = null; 
       this.cutPrice = null;
    }

    getData(){
       this.table = document.getElementsByTagName('table')[0];
        for(let i=1;i<1000;i++){
             if(this.getCookie(i)==""){
                break;
             }
       let str=this.getCookie(i)
       this.createEvents(str,i);
       this.shopGoodsNum()

        }

    }
    
    createEvents(str,num){
        let arr=str.split(" ");
        let table=document.getElementById("tt")
        let tr=document.createElement("tr");
        let td=document.createElement("td");
        td.innerHTML=num;
        tr.appendChild(td);
        for(let i=0;i<arr.length;i++){

            let td=document.createElement("td");
            if(i==0){
               let img=document.createElement("img");
               img.src=arr[i];
               td.appendChild(img);
            }else if(i==arr.length-1){
               let td=document.createElement("td");
               td.innerHTML = `<button>+</button><span class="active"></span><button>-</button>`;
               tr.appendChild(td);
            }else{
               td.innerHTML=arr[i];
            }
            
            tr.appendChild(td)
            tt.appendChild(tr);
        
        }
            
       this.ToUpdate();
       
   }
   ToUpdate(){
       let id=document.querySelectorAll("td .active");
       for(let i=1;i<=id.length;i++){
           if(this.getCookie(i)==""){
              break;
           }
           let str=this.getCookie(i)
           let arr=str.split(" ");
           id[i-1].innerHTML=arr[3];
           
       }	
   }
   shopGoodsNum() {
       let goods = this.table.children[1].children;
       for(let i=0;i<goods.length;i++){
           let num = goods[i].children[4].children[1];
           let add = goods[i].children[4].children[0];
           let subtract = goods[i].children[4].children[2];
           let that = this;
           add.onclick = function() {
               num.innerHTML = that.goods_add(num.innerHTML);
               let id= goods[i].children[0].innerHTML;
               let str=that.getCookie(id);
               let arr=str.split(" ")
               arr[3]=parseInt(arr[3])+1;
               let b=arr.join(" ");
               that.setCookie(id,b,10);
               that.ToUpdate();
               that.setGoodsCookie();
               that.cartBuy();
           };
           subtract.onclick = function() {
               num.innerHTML = that.goods_subtract(num.innerHTML);
               let id= goods[i].children[0].innerHTML;
               let str=that.getCookie(id);
               let arr=str.split(" ")
               arr[3]=parseInt(arr[3])-1;
               if(arr[3]<=1){
                   arr[3]=1;
               }
               let b=arr.join(" ");
               that.setCookie(id,b,10);
               that.ToUpdate();
               that.setGoodsCookie();
               that.cartBuy();
           };

       }

   }

   
   setGoodsCookie(){
       let goods = this.table.children[1].children;
       let id=document.querySelectorAll("td .active");
       let end_price = 0;
       for(let i=0;i<id.length;i++){
            this.price = (goods[i].children[2].innerHTML).split("￥")[1];
           this.num = Number(goods[i].children[4].children[1].innerHTML);
           if(this.num > 0){
               end_price += this.price * this.num;
               let info = this.getCookie('a_goods_num_price');
               if(info === ""){
                   this.setCookie("a_goods_num_price",this.price,10);
               }else {
                   this.cutPrice = this.getCookie('cutPrice');
                   if(this.cutPrice === ""){
                       this.setCookie("a_goods_num_price",end_price,10);
                   }else {
                       this.setCookie("a_goods_num_price",Number(this.cutPrice) + end_price,10);
                   }
               }


           }

       }
   }

   cartBuy(){
       let info = document.getElementById('info').children[0];
       let shop_price = this.getCookie('a_goods_num_price');
       if(shop_price===""){
           info.innerHTML = "结账";
       }else {
           let price = Number(this.getCookie('a_goods_num_price'));
           info.innerHTML = `结账(当前需要支付${price}元)`;
       }
   }

   goods_add(num){
       return Number(num) + 1;
   }

   goods_subtract(num){	
       if(Number(num) <=1){
           return num = 1;			
       }
       var a=Number(num)-1
       return a;
   }


    setCookie(cname,cvalue,exdays){
       var d = new Date();
       d.setTime(d.getTime()+(exdays*24*60*60*1000));
       var expires = "expires="+d.toGMTString();
       document.cookie = cname + "=" + cvalue + "; " + expires;
   }

   getCookie(cname){
       var name = cname + "=";
       var ca = document.cookie.split(';');
       for(var i=0; i<ca.length; i++) 
       {
           var c = ca[i].trim();
           if (c.indexOf(name)==0) return c.substring(name.length,c.length);
       }
       return "";
   }
}
