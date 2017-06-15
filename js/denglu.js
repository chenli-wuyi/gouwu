
$(function(){

	 //	取消a的默认行为
	 	// $(this).on('click', 'a', function() {
	 	// 	return false;
	 	// })

		console.log("bbb")
		console.log("ccc")
	 	$(".zhuanlogo").click(function(){
				
			//进入主页
			open("../index.html","_self");
		})
	//登陆方式的切换
	$(".loginNav li").on('click','a',function(){
		// $(this).removeClass('').addClass('.active');
		// console.log('aaa')
		
	})
	//验证登陆
	//先验证验证码是否正确
	var flag = false;//默认验证码不正确
	$('.code-div .yanzhengma').blur(function() {
		//console.log('aa')
		var value = $(".ran").html();//随机数
		console.log(value);
		var yzm = this.value;
		if(yzm == value) {
			flag = true;
			//console.log(flag)
			//lert('验证码正确');
			console.log('验证码正确');
			//$('.shuruyzm').css("display","none");
		} else {
			flag = false;
			//alert('请输入正确验证码');
			console.log("验证码错误");
			//$('.shuruyzm').css("display","block");
		}
	})
	$('.submit').click(function () {
		//console.log('aaa')
		var username = $('.shoujihao').val();//用户名
		//console.log(username)
		var pwd = $('.mima').val();//密码
		if (flag){
			var xhr = new XMLHttpRequest();
			xhr.open("post", "http://127.0.0.1/yangguanggouwu/php/denglu.php", true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send("username=" + username + "&pwd=" + pwd);
			xhr.onreadystatechange = function () {
				if (xhr.readyState==4 && xhr.status==200){
					console.log(xhr.responseText);
					var obj = JSON.parse(xhr.responseText);
					//console.log(arr);
					if(obj.status == 1){
						alert('恭喜你，登陆成功!!!');
					}else{
						alert('请检查用户名或者密码是否正确');
					}
				}
			}
		}

	})

})























