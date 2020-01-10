;//导航栏
$(".daoh-ul>li").hover(function(){
    $(this).find("ul").stop().slideDown("fast");
},function(){
    $(this).find("ul").stop().slideUp("fast");
});
//微信显示
$(".xians").hover(function(){
    $(".weixin").show();
},function(){
    $(".weixin").hide();
});
//nr-box1中的图片显示效果

$(".nr-box1>div").hover(function(){
    $(this).css("border","solid 3px #b81b22").siblings().css("border","2px solid #767676");
   
   });
  //图片路径改变

   $(".vv").each(function(index,item){
  	$(item).hover(function(){
  		$(".nr-box2>img").attr("src",$(this).attr('src'));
  		$(".fdaj>img").attr("src",$(this).attr('src'));
  });
 });
//$(".cc").each(function(index1,ele){
//		$(ele).attr	("src",$(".vv").attr("src"));
// })
$(".cc").attr("src",$(".vv").attr("src"))

 











//放大镜
$(function(){
//"fdaj"大盒子  fdaj>img 图片
//"nr-box2" 小盒子  "nr-box2>img"图片 zzhao遮罩
var shadeWidth = $('.zzhao').width(),//阴影的宽度 
shadeHeight = $('.zzhao').height(),//阴影的高度 
middleWidth = $('.nr-box2').width(),//容器的宽度 
middleHeight = $('.nr-box2').height(),//容器的高度 
bigWidth = $('.fdaj').width(),//放大图片盒子的宽度 
bigHeight = $('.fdaj').height(),//放大图片盒子的高度 
rateX = bigWidth / shadeWidth,//放大区和遮罩层的宽度比例 
rateY = bigHeight / shadeHeight;//放大区和遮罩层的高度比例
 //当鼠标移入与移出时阴影与放大去显现/消失 
 $('.nr-box2').hover(function() { 
    $('.zzhao').show(); 
    $('.fdaj').show(); 
  }, function() { 
    $('.zzhao').hide(); 
    $('.fdaj').hide(); 
  }).mousemove(function(e) {//当鼠标移动时，阴影和放大区图片进行移动 

    //记录下光标距离页面的距离 
    var x = e.pageX, 
      y = e.pageY; 

    //设置遮罩层的位置 
    $('.zzhao').offset({ 
      top: y-shadeHeight/2, 
      left: x-shadeWidth/2 
    });    

    //获取遮罩层相对父元素的位置 
    var cur = $('.zzhao').position(), 
      _top = cur.top, 
      _left = cur.left, 
      hdiffer = middleHeight - shadeHeight, 
      wdiffer = middleWidth - shadeWidth; 

    if (_top < 0) _top = 0; 
    else if (_top > hdiffer) _top = hdiffer; 
    if (_left < 0) _left = 0; 
    else if (_left > wdiffer) _left =wdiffer; 

    //判断完成后设置遮罩层的范围 
    $('.zzhao').css({ 
      top: _top, 
      left: _left 
    }); 
  
    //设置放大区图片移动 
    $('.fdaj>img').css({ 
      top:rateY* -_top, 
      left: rateX*-_left
       
    }); 
  });
});
//轮播图
