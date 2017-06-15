
$(function(){

	$(".gouwuche").click(function(){
				
		//进入主页
		open("html/gouwuche.html","_self");
	})
	$(".deng").click(function(){
				
		//进入登陆
		open("html/denglu.html","_self");
	})
	$(".zhuce").click(function(){
				
		//进入注册
		open("html/zhuce.html","_self");
	})
	$(".shiping").click(function(){
				
		//进入购物页面
		open("html/shopping.html","_blank");
	})
	$(".xiangqingye").click(function(){
				
		//进入详情页
		open("html/xiangqingye.html","_blank");
	})
	
	
	// 主页的轮播
	//jq轮播图
	var list1 = $(".mid-list1");
	var list2 = $(".mid-list2");
	var li1 = $(".mid-list1 li");
	var li2 = $(".mid-list2 li");
	
	//复制第一张图到最后
	li1.first().clone(true).appendTo(list1);
	
	//
	var size = $(".mid-list1 li").size();
	list1.width(790*size);
	
	//开启定时器
	var i = 0;
	var timer = setInterval(function(){
		i++;
		move();
	}, 2000);
	
	function move(){
		
		if (i < 0) {
			list1.css("left", -790*(size-1));
			i = size-2;
		}
		
		if (i >= size){
			list1.css("left", 0);
			i = 1;
		}
		
		list1.stop().animate({left:-i*790}, 500);
		
		li2.eq(i).addClass("active").siblings().removeClass("active");
		if (i == size-1) {
			li2.eq(0).addClass("active").siblings().removeClass("active");
		}
	}
	
	//上一页
	$("#prev").click(function(){
		i--;
		move();
	})
	
	//下一页
	$("#next").click(function(){
		i++;
		move();
	})
	
	li2.mouseenter(function(){
		i = $(this).index();
		move();
	})
	
	$(".lunbo").hover(function(){
		clearInterval(timer);
	}, 
	function(){
		timer = setInterval(function(){
			i++;
			move();
		}, 2000);
	})
	
	// 品牌切换
	$('.food-top ul li').hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	

})


































