/**
 * Created by wcs on 2016/3/17.
 */

$(function(){

    var w;
    function fn(){
        w=$(window).width();
        $('html').css('font-size',w/40);

    }
    fn();
    //alert($('html').css('font-size'));
    $(window).resize(fn);



    //------------------------------------线条控制-------------------------------------
    $('.lines div').each(function(index,el){
            $(el).css({'left':index%10*300+400
                ,'top':parseInt(Math.random()*-800)-400
                //,'height':parseInt(Math.random()*300)+300
                ,'opacity':Math.random()
            });

    });

//------------------------------------图标点击效果---------------------------

$('.box-content').click(function(){
    $('.box .box-c').toggleClass('zhuan');
});

    //-------------------------------------滚屏控制-----------------------------
    $('#dowebok').fullpage({
        sectionsColor: ['#18034f', '#058C5D', '#FF2E5A','#181818','#037CED','#4ABB22'],
        //设置每一屏幕的背景颜色
        scrollingSpeed:500,
        // 设置滚动的花费时间
        //easingcss3:'ease-in-out',
        //运动曲线
        continuousVertical: true,
        //到达最后一屏后，是否回到首屏
        'navigation': true,
        // 右侧显示小圆点
        /*顶部导航栏*/
        anchors:['page1','page2','page3','page4'],
        // 值为绑定菜单的类名或ID名，需先设置achors才能生效
        menu:'#menu',

        //控制首屏
        afterLoad: function(anchorLink, index){
            if(index==1){
                $('.section1').removeClass('comeout');
            }
        },
        //
        //来判断当前的屏幕
        onLeave: function(index, nextIndex, direction){
            if(index==1){
                $('.section1').addClass('comeout');
            }else if(index==2){
                $('.section2').addClass('comeout');
            }else if(index==3){
                $('.section3').addClass('comeout');
            }else if(index==4){
                $('.section4').addClass('comeout');
            }else if(index==5){
                $('.section5').addClass('comeout');
            }else if(index==6){
                $('.section6').addClass('comeout');
            }


            if(nextIndex==1){ //滚动到1屏幕
                $('.section1').removeClass('comeout');
            }else if(nextIndex==2){//滚动到2屏幕
                $('.section2').removeClass('comeout');
            }else if(nextIndex==3){//滚动到2屏幕
                $('.section3').removeClass('comeout');
            }else if(nextIndex==4){//滚动到2屏幕
                $('.section4').removeClass('comeout');
            }else if(nextIndex==5){//滚动到2屏幕
                $('.section5').removeClass('comeout');
            }else if(nextIndex==6){//滚动到2屏幕
                $('.section6').removeClass('comeout');
            }
        },

    });


})