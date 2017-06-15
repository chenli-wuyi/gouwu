$(function(){
	

//	取消a的默认行为
 	 $(this).on('click', 'a', function() {
 	 	return false;
 	 })
 	})
function carouselOne() {

	$(function() {

		// 楼层中的轮播
		var wrap1 = $(".food .wrap-list1");
		var wrap2 = $(".food .wrap-list2");
		var wp1 = $(".food .wrap-list1 li");
		var wp2 = $(".food .wrap-list2 li");

		//复制第一张图到最后
		wp1.first().clone(true).appendTo(wrap1);

		//
		var size = $(".food .wrap-list1 li").size();
		console.log(size);
		wrap1.width(339 * size);

		//开启定时器
		var i = 0;
		var timer = setInterval(function() {
			i++;
			move();
		}, 2000);

		function move() {

			if(i < 0) {
				wrap1.css("left", -339 * (size - 1));
				i = size - 2;
			}

			if(i >= size) {
				wrap1.css("left", 0);
				i = 0;
			}

			wrap1.stop().animate({ left: -i * 339 }, 500);

			wp2.eq(i).addClass("active").siblings().removeClass("active");
			if(i == size - 1) {
				wp2.eq(0).addClass("active").siblings().removeClass("active");
			}
		}

		//上一页
		$(".prev").click(function() {
			i--;
			move();
		})

		//下一页
		$(".next").click(function() {
			i++;
			move();
		})

		wp2.mouseenter(function() {
			i = $(this).index();
			move();
		})

		$(".bx-wrapper").hover(function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(function() {
					i++;
					move();
				}, 2000);
			})

	})
}

carouselOne() 


function carouselTwo() {

	$(function() {

		// 楼层中的轮播
		var wrap1 = $(".jiaju .wrap-list1");
		var wrap2 = $(".jiaju .wrap-list2");
		var wp1 = $(".jiaju .wrap-list1 li");
		var wp2 = $(".jiaju .wrap-list2 li");

		//复制第一张图到最后
		wp1.first().clone(true).appendTo(wrap1);

		//
		var size = $(".jiaju .wrap-list1 li").size();
		console.log(size);
		wrap1.width(339 * size);

		//开启定时器
		var i = 0;
		var timer = setInterval(function() {
			i++;
			move();
		}, 2000);

		function move() {

			if(i < 0) {
				wrap1.css("left", -339 * (size - 1));
				i = size - 2;
			}

			if(i >= size) {
				wrap1.css("left", 0);
				i = 0;
			}

			wrap1.stop().animate({ left: -i * 339 }, 500);

			wp2.eq(i).addClass("active").siblings().removeClass("active");
			if(i == size - 1) {
				wp2.eq(0).addClass("active").siblings().removeClass("active");
			}
		}

		//上一页
		$(".prev").click(function() {
			i--;
			move();
		})

		//下一页
		$(".next").click(function() {
			i++;
			move();
		})

		wp2.mouseenter(function() {
			i = $(this).index();
			move();
		})

		$(".bx-wrapper").hover(function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(function() {
					i++;
					move();
				}, 2000);
			})

	})
}

carouselTwo() 

function carouselThree() {

	$(function() {

		// 楼层中的轮播
		var wrap1 = $(".zhubao .wrap-list1");
		var wrap2 = $(".zhubao .wrap-list2");
		var wp1 = $(".zhubao .wrap-list1 li");
		var wp2 = $(".zhubao .wrap-list2 li");

		//复制第一张图到最后
		wp1.first().clone(true).appendTo(wrap1);

		//
		var size = $(".zhubao .wrap-list1 li").size();
		console.log(size);
		wrap1.width(339 * size);

		//开启定时器
		var i = 0;
		var timer = setInterval(function() {
			i++;
			move();
		}, 2000);

		function move() {

			if(i < 0) {
				wrap1.css("left", -339 * (size - 1));
				i = size - 2;
			}

			if(i >= size) {
				wrap1.css("left", 0);
				i = 0;
			}

			wrap1.stop().animate({ left: -i * 339 }, 500);

			wp2.eq(i).addClass("active").siblings().removeClass("active");
			if(i == size - 1) {
				wp2.eq(0).addClass("active").siblings().removeClass("active");
			}
		}

		//上一页
		$(".prev").click(function() {
			i--;
			move();
		})

		//下一页
		$(".next").click(function() {
			i++;
			move();
		})

		wp2.mouseenter(function() {
			i = $(this).index();
			move();
		})

		$(".bx-wrapper").hover(function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(function() {
					i++;
					move();
				}, 2000);
			})

	})
}

carouselThree() 


function carouselFour() {

	$(function() {

		// 楼层中的轮播
		var wrap1 = $(".huazhuang .wrap-list1");
		var wrap2 = $(".huazhuang .wrap-list2");
		var wp1 = $(".huazhuang .wrap-list1 li");
		var wp2 = $(".huazhuang .wrap-list2 li");

		//复制第一张图到最后
		wp1.first().clone(true).appendTo(wrap1);

		//
		var size = $(".huazhuang .wrap-list1 li").size();
		console.log(size);
		wrap1.width(339 * size);

		//开启定时器
		var i = 0;
		var timer = setInterval(function() {
			i++;
			move();
		}, 2000);

		function move() {

			if(i < 0) {
				wrap1.css("left", -339 * (size - 1));
				i = size - 2;
			}

			if(i >= size) {
				wrap1.css("left", 0);
				i = 0;
			}

			wrap1.stop().animate({ left: -i * 339 }, 500);

			wp2.eq(i).addClass("active").siblings().removeClass("active");
			if(i == size - 1) {
				wp2.eq(0).addClass("active").siblings().removeClass("active");
			}
		}

		//上一页
		$(".prev").click(function() {
			i--;
			move();
		})

		//下一页
		$(".next").click(function() {
			i++;
			move();
		})

		wp2.mouseenter(function() {
			i = $(this).index();
			move();
		})

		$(".bx-wrapper").hover(function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(function() {
					i++;
					move();
				}, 2000);
			})

	})
}

carouselFour() 


function carouselFive() {

	$(function() {

		// 楼层中的轮播
		var wrap1 = $(".fuzhuang .wrap-list1");
		var wrap2 = $(".fuzhuang .wrap-list2");
		var wp1 = $(".fuzhuang .wrap-list1 li");
		var wp2 = $(".fuzhuang .wrap-list2 li");

		//复制第一张图到最后
		wp1.first().clone(true).appendTo(wrap1);

		//
		var size = $(".fuzhuang .wrap-list1 li").size();
		console.log(size);
		wrap1.width(339 * size);

		//开启定时器
		var i = 0;
		var timer = setInterval(function() {
			i++;
			move();
		}, 2000);

		function move() {

			if(i < 0) {
				wrap1.css("left", -339 * (size - 1));
				i = size - 2;
			}

			if(i >= size) {
				wrap1.css("left", 0);
				i = 0;
			}

			wrap1.stop().animate({ left: -i * 339 }, 500);

			wp2.eq(i).addClass("active").siblings().removeClass("active");
			if(i == size - 1) {
				wp2.eq(0).addClass("active").siblings().removeClass("active");
			}
		}

		//上一页
		$(".prev").click(function() {
			i--;
			move();
		})

		//下一页
		$(".next").click(function() {
			i++;
			move();
		})

		wp2.mouseenter(function() {
			i = $(this).index();
			move();
		})

		$(".bx-wrapper").hover(function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(function() {
					i++;
					move();
				}, 2000);
			})

	})
}

carouselFive() 