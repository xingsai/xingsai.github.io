/**
 * Created by wcs on 2016/3/28.
 */
$(function(){
   var H= $(window).height();
    $('.sec').css('height',H+'px')

    $(window).resize(function(){
        var H= $(window).height();
        $('.sec').css('height',H+'px')
    });

   var  secColor=['#18034f', '#058C5D', '#FF2E5A','#181818','#037CED','#4ABB22'];

    $('.sec').each(function(index,e){
        $(e).css('background-color',secColor[index]);
    });

})