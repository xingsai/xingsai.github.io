 $(function (){
	/* 轮播图的配置*/
	  var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'vertical',
		    loop: false, 
		    // 如果需要分页器
		  /* pagination: '.swiper-pagination',*/

   onSlideChangeStart: function(swiper){
      if(swiper.activeIndex==0){
         $("#u-arrow-top").hide()
      }else{
        $("#u-arrow-top").show()
      }
      if(swiper.activeIndex==$(".swiper-wrapper .swiper-slide").length-1){
         $("#u-arrow-bottom").hide()
      }else{
        $("#u-arrow-bottom").show()
      }
    }

		  })






         $("p").css({"font-size":$("p").height()+"px","line-height":1});
           $.ajax({       
            type:"POST",    
            url:"/Warrior/annalsController/getDetail.do",      
            data:{strAccount:strAccount},
            dataType:  "json",                   
            success:function(data){
               $("#one-year").text(new Date(data.dtFollowTime).Format("yyyy"))
               $("#one-month").text(new Date(data.dtFollowTime).Format("MM"))
               $("#one-day").text(new Date(data.dtFollowTime).Format("dd"))
               $("#one-friend").text(data.intFollowNum)

               $("#two-day").text(data.intFollowDayNum)
               $("#two-num").text(data.accessNum)
               
               $("#good-module").text(data.strMaxModule)
               $("#bad-module").text(data.strMinModule)

                $("#five-visit").text(data.intTotalNum)
               $("#five-news").text(data.intModuleNum)
               $("#five-derict").text(data.intDirectNum)
            },
                  
         });
    })      
  //时间格式化
Date.prototype.Format = function(format){ 
  var o = { 
    "M+" : this.getMonth()+1, //month 
    "d+" : this.getDate(), //day 
    "h+" : this.getHours(), //hour 
    "m+" : this.getMinutes(), //minute 
    "s+" : this.getSeconds(), //second 
    "q+" : Math.floor((this.getMonth()+3)/3), //quarter 
    "S" : this.getMilliseconds() //millisecond 
  }
  if(/(y+)/i.test(format)) { 
    format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  }
  for(var k in o) { 
    if(new RegExp("("+ k +")").test(format)) { 
      format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
    } 
  } 
  return format; 
}      