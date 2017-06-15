$(function(){
	//获取验证码
	$(".code-div a").click(function(){
		// console.log('aaa')
		this.innerHTML = ''+parseInt(Math.random()*10)+''+parseInt(Math.random()*10)+''+parseInt(Math.random()*10)+''+parseInt(Math.random()*10);
		
	})

})
























