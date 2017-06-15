


	//楼梯效果
$(function(){
	
	var isMoving = false; //是否点击了按钮页面正在动画移动
	// 点击li时候跳到对应的楼层
	$("#loutiNav li").click(function(){
			// console.log('aa')
		//改变按钮的选中状态
		$(this).find("span").addClass("active")
		.parent().siblings().find("span").removeClass("active");
		
		//移动页面到对应的楼层
		var index = $(this).index();
		// console.log(index)
		var _top = $(".louti").eq(index).offset().top;
		
		//$(window).scrollTop(_top);
		isMoving = true;
		$("html, body").stop().animate({scrollTop:_top}, 400, function(){
			isMoving = false;
		});
	})
	
	//滚动事件
	$(window).scroll(function(){
		
		if ( !isMoving ) {
			var scrollTop = $(window).scrollTop();
			//滚动到楼层时才显示左边的楼梯
			if(scrollTop >= $(".louti").eq(0).offset().top){
				$("#loutiNav").css("display","block");
				// console.log('显示');
			}else{
				$("#loutiNav").css("display","none");
			}
			// 点击fanhuiTop返回到顶部
			$('.fanhuiTop').click(function(){
				console.log('返回');
				$(window).scrollTop(0);
			})
			//遍历所有楼层
			var index = 0;
			$(".louti").each(function(){
				if ( scrollTop >= $(this).offset().top ){
					//console.log( $(this).index() );
					index = $(this).index();
					// console.log(index)
				}
			})
			console.log(index);
			
			$("#loutiNav li").eq(index-2).find("span").addClass("active")
			.parent().siblings().find("span").removeClass("active");
		}
	})
	
	
})
























































