$(function(){
	$(this).on('click','a',function(){
		return false;
	})
	$(".zhuanlogo").click(function(){
				
		//进入主页
		open("../index.html","_self");
	})
	
	// 放大镜
	//等比公式
	//小图width/大图width == 小区域width/大区域width
	$(".smallArea").width( $(".smallImg").width() * $(".bigArea").width() / $(".bigImg").width() );
	$(".smallArea").height( $(".smallImg").height() * $(".bigArea").height() / $(".bigImg").height() );
	
	//放大系数
	// var scale = $(".bigImg").width() / $(".smallImg").width();
	var scale = 2;
	 console.log(scale)
	//在小图中移动
	$(".smallImg").mousemove(function(e){
		$(".smallArea").show(); //显示小区域
		$(".bigArea").show(); //显示大区域
		
		
		var x = e.pageX - $(".smallImg").offset().left - $(".smallArea").width()/2;
		var y = e.pageY - $(".smallImg").offset().top - $(".smallArea").height()/2;
		
		//控制不超出左右边界
		if (x < 0){
			x = 0;
		}
		else if (x > $(".smallImg").width()-$(".smallArea").width()){
			x = $(".smallImg").width()-$(".smallArea").width();
		}
		//控制不超出上下边界
		if (y < 0){
			y = 0
		}
		else if (y > $(".smallImg").height()-$(".smallArea").height()) {
			y = $(".smallImg").height()-$(".smallArea").height();
		}
		
		//小区域移动
		$(".smallArea").css({left:x, top:y});
		
		//大图移动
		$(".bigImg").css({left: -scale*x,top: -scale*y});
	})
	
	//移除小图
	$(".smallImg").mouseleave(function(){
		$(".smallArea").hide(); //隐藏小区域
		$(".bigArea").hide(); //隐藏大区域
	})

	//移入图片显示大图
	$(".box li").mouseenter(function(){
		// console.log('aa')
		// 对应的li出现边框
		$(this).addClass('.active').siblings().removeClass();
		// console.log($(this).index());
		var index = $(this).index();
		//改变图片
	 	// $('.gaibian').attr('src',$(this).children('img').attr('src'))
	 	$('.gaibian').attr('src',"../images/fangdajing"+ index +".jpg@360w_360h")
	 	$('.bigImg').attr('src',"../images/fangdajing"+ index +".jpg@360w_360h")
	})


})