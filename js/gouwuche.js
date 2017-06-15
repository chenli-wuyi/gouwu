$(function() {
//	取消A的默认行为
	$(this).on('click', 'a', function() {
		return false;
	})
	$(".zhuanlogo").click(function(){
				
		//进入主页
		open("../index.html","_self");
	})
//	点击结算
	$(".jiesuan").click(function(){
		alert("不能在剁手了....")
	});
	//刷新
	refresh();

	function refresh() {
		//从cookie中获取购物车的数据
		var arr = $.cookie("cart");
		if(arr) {
			arr = JSON.parse(arr);
			//console.log(arr)
			/*
			 * [
			 * 	{"id":102,"name":"天兴椴树蜜超值组（6瓶装） 货号118132","price":199,"unit":"￥","img":"../images/pic2.jpg@240w_240h","num":12,"checked":true},
			 * 	{"id":101,"name":"天依蜂洋槐蜜300g 货号118174","price":15,"unit":"￥","img":"../images/pic1.jpg@240w_240h","num":16,"checked":true},
			 * 	{"id":103,"name":"天依蜂荔枝蜜500g 货号118170","price":27,"unit":"￥","img":"../images/pic3.jpg@240w_240h","num":7,"checked":true},
			 * 	{"id":104,"name":"天依蜂百花蜜500g 货号118040","price":25,"unit":"￥","img":"../images/pic4.jpg@240w_240h","num":2,"checked":true},
			 * 	{"id":105,"name":"西班牙原装进口布罗家族柠檬蜜300G","price":85,"unit":"￥","img":"../images/pic5.jpg@240w_240h","num":1,"checked":true}
			 * ]
			 */

			//先清空旧节点
			$(".mod-body ").empty();
			//添加节点
			$("<div class='shore-bar'><span><input type='checkbox' checked='checked'></span><a href='#'>央广购物</a></div>").appendTo(".mod-body");

			var total = 0; //总价
			var xuan = 0; //选择的商品种类
			var liang = 0; //选择的总数
			//遍历arr
			for(var i = 0; i < arr.length; i++) {
				var obj = arr[i]; //每个商品信息

				//创建goods节点
				var goods = $("<div class='goods'></div>").appendTo(".mod-body");
				//创建click节点
				var click = $("<div class='goods-click'></div>").appendTo(".mod-body").appendTo(goods);
				if(obj.checked == true) {
					$("<span><input class='check' type='checkbox'' checked='checked'></span>").appendTo(click); //复选框选中
				} else {
					$("<input class='check' type='checkbox' />").appendTo(click); //复选框未选中
				}

				//创建img节点
				var img = $("<div class='goods-img'></div>").appendTo(".mod-body").appendTo(goods);
				$("<div><a href='#'><img src=" + obj.img + " ></a></div>").appendTo(img); //图片

				//创建main节点
				var main = $("<div class='goods-main'></div>").appendTo(".mod-body").appendTo(goods);
				$("<div class='spu-name'><a href='#' >" + obj.name + "</a></div>").appendTo(main); //商品名称
				$("<div class='parel-remove'><a href='#' class='shoucang'>收藏</a><a href='#' class='del'>删除</a></div>").appendTo(main); //收藏删除
				//创建table节点
				var table = $("<table class='spu-singles'></table>").appendTo(main);
				//创建tbody节点
				var tbody = $("<tbody></tbody>").appendTo(table);
				//创建tr节点
				var tr = $("<tr class='goods-sku'></tr>").appendTo(tbody);
				$("<td>&nbsp;</td>").appendTo(tr);
				$("<td></td>").appendTo(tr);
				$("<td></td>").appendTo(tr);
				$("<td class='sku-num'><a href='#' class='sub'>-</a><input class='num' type='text' value=" + obj.num + "><a href='#' class='add'>+</a></td>").appendTo(tr); // + - 数量
				$("<td></td>").appendTo(tr);
				$("<td>" + obj.price + "</td>").appendTo(tr); //价格
				$("<td></td>").appendTo(tr);
				$("<td class='sku-price'><em>" + obj.price + "</em></td>").appendTo(tr);

				//如果当前商品选中了
				if(obj.checked == true) {
					total += obj.price * obj.num;
					xuan++;
					liang += obj.num;
					//					console.log(liang)
				}
			}
			//			console.log(total);
			$(".amout-total strong").html(total);
			$(".kinds-total span").html(xuan);
			$(".quantity-total span").html(liang);

		} else {
			console.log("购物车中没有数据");
		}
	}

	//删除
	$(".mod-body").on("click", ".del", function() {
		//console.log("删除");
		var index = $(this).index(".del");
		console.log(index);

		//1,修改cookie
		var arr = JSON.parse($.cookie("cart"));
		arr.splice(index, 1); //删除arr的第index个元素
		$.cookie("cart", JSON.stringify(arr), { expires: 30, path: "/" });

		//2,调用refresh()
		isCheckAll();
		refresh();
	})

	//+
	$(".mod-body").on("click", ".add", function() {
		var index = $(this).index(".add");
		console.log(index)
		var arr = JSON.parse($.cookie("cart"));
		arr[index].num++;
		$.cookie("cart", JSON.stringify(arr), { expires: 30, path: "/" });

		refresh();
	})

	//-
	$(".mod-body").on("click", ".sub", function() {
		var index = $(this).index(".sub");

		var arr = JSON.parse($.cookie("cart"));
		arr[index].num--;
		if(arr[index].num <= 0) {
			arr[index].num = 1;
		}
		$.cookie("cart", JSON.stringify(arr), { expires: 30, path: "/" });

		refresh();
	})

	//勾选/取消勾选
	$(".mod-body").on("click", ".check", function() {
		var index = $(this).index(".check");

		var arr = JSON.parse($.cookie("cart"));
		arr[index].checked = !arr[index].checked;
		$.cookie("cart", JSON.stringify(arr), { expires: 30, path: "/" });

		isCheckAll();
		refresh();
	})

	//点击全选
	$(".checkAll").click(function() {
		//console.log($(this).prop("checked"));

		var arr = JSON.parse($.cookie("cart"));
		$.each(arr, function(i) {
			if($(".checkAll,checkAl").prop("checked")) { //全选
				arr[i].checked = true;
			} else { //取消全选
				arr[i].checked = false;
			}
		});
		$.cookie("cart", JSON.stringify(arr), { expires: 30, path: "/" });

		refresh();
	})

	//判断是否全选
	isCheckAll();

	function isCheckAll() {
		var arr = JSON.parse($.cookie("cart"));

		var sum = 0;
		for(var i = 0; i < arr.length; i++) {
			sum += arr[i].checked;
		}

		if(arr.length == 0) {
			$(".checkAll").prop("checked", false);
		} else if(sum == arr.length) { //全选
			$(".checkAll").prop("checked", true);
		} else { //未全选
			$(".checkAll").prop("checked", false);
		}
	}

	//删除选中
	$(".delSelect").click(function() {
		/*
		var arr = JSON.parse($.cookie("cart"));
		for (var i=arr.length-1; i>=0; i--){
			if (arr[i].checked == true){
				arr.splice(i, 1);
			}
		}
		$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
		*/
		var arr = JSON.parse($.cookie("cart"));
		var newArr = [];
		for(var i = 0; i < arr.length; i++) {
			if(arr[i].checked == false) {
				newArr.push(arr[i]);
			}
		}
		$.cookie("cart", JSON.stringify(newArr), { expires: 30, path: "/" });

		isCheckAll();
		refresh();
	})

})