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



    //------------------------------------��������-------------------------------------
    $('.lines div').each(function(index,el){
            $(el).css({'left':index%10*300+400
                ,'top':parseInt(Math.random()*-800)-400
                //,'height':parseInt(Math.random()*300)+300
                ,'opacity':Math.random()
            });

    });

//------------------------------------ͼ����Ч��---------------------------

$('.box-content').click(function(){
    $('.box .box-c').toggleClass('zhuan');
});

    //-------------------------------------��������-----------------------------
    $('#dowebok').fullpage({
        sectionsColor: ['#18034f', '#058C5D', '#FF2E5A','#181818','#037CED','#4ABB22'],
        //����ÿһ��Ļ�ı�����ɫ
        scrollingSpeed:500,
        // ���ù����Ļ���ʱ��
        //easingcss3:'ease-in-out',
        //�˶�����
        continuousVertical: true,
        //�������һ�����Ƿ�ص�����
        'navigation': true,
        // �Ҳ���ʾСԲ��
        /*����������*/
        anchors:['page1','page2','page3','page4'],
        // ֵΪ�󶨲˵���������ID������������achors������Ч
        menu:'#menu',

        //��������
        afterLoad: function(anchorLink, index){
            if(index==1){
                $('.section1').removeClass('comeout');
            }
        },
        //
        //���жϵ�ǰ����Ļ
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


            if(nextIndex==1){ //������1��Ļ
                $('.section1').removeClass('comeout');
            }else if(nextIndex==2){//������2��Ļ
                $('.section2').removeClass('comeout');
            }else if(nextIndex==3){//������2��Ļ
                $('.section3').removeClass('comeout');
            }else if(nextIndex==4){//������2��Ļ
                $('.section4').removeClass('comeout');
            }else if(nextIndex==5){//������2��Ļ
                $('.section5').removeClass('comeout');
            }else if(nextIndex==6){//������2��Ļ
                $('.section6').removeClass('comeout');
            }
        },

    });


})