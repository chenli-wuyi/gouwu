$(function(){
	$(this).on('click','a',function(){
		return false;
	})
	$(".zhuanlogo").click(function(){
				
		//进入主页
		open("../index.html","_self");
	})
	$(".list-pic").on("click", ".xiangqing", function(){
		console.log('aa')
		//进入主页
		open("xiangqingye.html","_self");
		location.href = "xiangqingye.html";
	})

	//保存从json中获取到的商品数据
	var myArr = [];
	var arr 
	//使用Ajax获取商品数据
	$.get("../json/goods.json", function(responseData){
		 arr = responseData.data;
//		console.log(arr)
		myArr = arr;
//		console.log(arr.length);//5
		//创建节点
		createELe()
		
	})
	//创建节点的函数
	function createELe(){
		//遍历arr
		for (var i=0; i<arr.length; i++){
			var obj = arr[i]; //每个商品的数据
//			console.log(obj.img)
			//创建li节点
			var li = $("<li class='item'></li>").appendTo(".list-pic");
			//创建div1节点
			var div1 = $("<div class='good-content'></div>").appendTo(li);
			//创建pic节点
			var pic = $("<div class='good-pic''></div>").appendTo(div1);
			$("<a href='JavaScript:;' class='xiangqing'><img src="+ obj.img +"></a>").appendTo(pic); //图片
			//创建mes节点
			var mes = $("<div class='good-mes''></div>").appendTo(div1);
			$("<p>"+ obj.unit + obj.price +"</p>").appendTo(mes); //价格
			$("<p>"+ obj.name +"</p>").appendTo(mes); //名称
			$("<p><a href='javascript:;'>加入购物车</a></p>").appendTo(mes); //加入购物车
			//创建clear节点
			$("<div class='clear'></div>").appendTo(div1);
		}	
	}
	
	//加入购物车
	$(".list-pic").on("click", "a", function(){
		console.log(11);
		var index = $(this).index(".list-pic .good-mes a");
		console.log(index);
		
		//当前要加入购物车的商品信息
		var obj = myArr[index];
//		console.log(obj)
		var arr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
		var isExist = false;
		for (var i=0; i<arr.length; i++){
			if (arr[i].id == obj.id) {
				arr[i].num++;
				isExist = true;
			}
		}
		if (!isExist) {
			obj.num = 1;
			obj.checked = true; //是否选中该商品
			arr.push(obj);
		}
		
		$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
		console.log( $.cookie("cart") )
	})
	
	
	$(".header-user-menu .gouwu").click(function(){
		location.href = "gouwuche.html";
	})
	
	
	
	//排序
	var k = 0;
	$(".jiage").click(function(){
		k++;
		//先清空旧节点
		$(".list-pic ").empty();
//		从JSON中获取数据按照价格排序
		//console.log(arr[0].price)
		var isExist = false;
		//遍历arr  冒泡排序  升序
		for(var i = 0;i<arr.length-1;i++){
			for(var j = 0;j<arr.length-1-i;j++){
				if(arr[j].price>arr[j+1].price){
					var temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
				}
			}
		}
		console.log(arr)
//			isExist为true升序
		if( k%2 == 0){
			createELe();
		}else{
			arr = arr.reverse();
			createELe();
		}
		
	})
})














