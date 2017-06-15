$(function() {
	//	//	取消a的默认行为
	//	$(this).on('click', 'a', function() {
	//		return false;
	//	})
	//	$(".denglu").click(function(){
	//			
	//		open("denglu.html";
	//	})
	$(".zhuanlogo").click(function(){
				
		//进入主页
		open("../index.html","_self");
	})
	// 验证注册1

	//验证手机 手机号码必须合法;
	//	失去焦点时候触发
	var flag1 = false; //手机号默认不合法
	var flag2 = false; //验证码默认不合法
	$('.mes-form .phone').blur(function() {
		//console.log('aaa')
		//获取submit里面的值
		var value = $(".submit").html();
		//		console.log(value);
		var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		var phone = this.value;
//		console.log(phone)
		if(reg.test(phone)) {
//			alert('手机号合法');
			flag1 = true;
			$('.shoujihao').css("display","none");
		} else {
			flag1 = false;
//			alert('手机号不合法');
			$('.shoujihao').css("display","block");
		}
	})

	//验证码失去焦点时候触发
	$('.mes-form .yanzhengma').blur(function() {
		var value = $(".rand").html();
		console.log(value)
		var yzm = this.value;
		if(yzm == value) {
			flag2 = true;
			console.log(flag2)
			//lert('验证码正确');
			console.log('验证码正确');
			$('.shuruyzm').css("display","none");
		} else {
			flag2 = false;
			//alert('请输入正确验证码');
			$('.shuruyzm').css("display","block");
		}
	})
	
	//点击下一步跳转
	$(".login").click(function() {
		if(flag1 && flag2) {
			
			//	跳转到注册2页面
			location.href = "zhuce2.html";

		} else {
			//不能跳转
			location.href = "###";
			alert("请输入正确的手机号或验证码")

		}
	})
	
	
		// 验证注册2页面
		var flag3 = false;//验证码不合法
		var flag4 = false;//用户名不合法
		var flag5 = false;//密码不合法
		var flag6 = false;//确认密码不正确
		//验证码失去焦点时候触发
		$('.code-div .yanzhengma2').blur(function() {
			var value = $(".rand2").html();
			console.log(value)
			var yzm2 = this.value;
			if(yzm2 == value) {
				flag3 = true;
				//console.log(flag2)
				//lert('验证码正确');
				console.log('验证码正确')
				$('.shuruyzm2').css("display","none");
			} else {
				flag3 = false;
				//alert('请输入正确验证码');
				$('.shuruyzm2').css("display","block");
			}
		})
		//用户名失去焦点触发
		$(".username").blur(function(){
			var username = this.value;
			var reg = /^\w{6,20}$/;
			if(reg.test(username)){
				flag4 = true;
				console.log("用户名输入合法")
				$('.mingzi').css("display","none");
			}else{
				console.log('用户名输入不合法');
				flag4 = false;
				$('.mingzi').css("display","block");
			}
		})
		//验证密码   密码长度为6~20位
		$(".pwd").blur(function(){
			var pwd = this.value;
			var reg = /^.{6,20}$/;
			if(reg.test(pwd)){
				console.log('密码合法');
				flag5 = true;	
				$('.mima').css("display","none");
			}else{
				console.log('请检测密码的长度是否合法');
				flag5 = false;
				$('.mima').css("display","block");
			}
		})
		
		//确认密码 
		$(".pwd1").blur(function(){
			var pwd1 = this.value;
			console.log(pwd1)
			var pwd = $(".pwd").val()
			console.log(pwd)
			if(pwd1 == pwd){
//				console.log('密码一样');
				flag6 = true;	
				$('.mima2').css("display","none");
			}else{
				console.log('密码不一样');
				flag6 = false;
				$('.mima2').css("display","block");
			}
		})
		//点击注册
		$(".register").click(function(){
			if(flag3 && flag4 & flag5 && flag6){
				//alert('可以注册');
				//保存用户名与密码到后台服务器上面去
				//用户名与密码
				var username = $(".username").val();//用户名
				var pwd = $(".pwd").val();//密码
				
				var xhr = new XMLHttpRequest();
				xhr.open("post", "http://127.0.0.1/yangguanggouwu/php/zhuce.php", true);
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xhr.send("username=" + username + "&pwd=" + pwd);
				xhr.onreadystatechange = function() {
					if(xhr.readyState == 4 && xhr.status == 200) {
						var arr = xhr.responseText;
						console.log(arr);
						var obj = JSON.parse(arr);
						////obj.status
						////console.log(obj.status);
						//
						if(obj.status == 1) {
							alert("注册成功");
						} else {
							alert("该用户已经被注册过了");
						}
					}
				}

			}else{
				alert("请检查所有的输入是否都正确")
			}
		})
})