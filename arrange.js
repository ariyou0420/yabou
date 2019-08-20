$(function(){

 $('.main-visual--ttl').fadeIn(2000);

 $('.intro-section__block:nth-child(1)').hover(function(){
 	$('#pro').text('三年以内に年収一千万にまで到達してやるッ！').animate({'font-size':'30px'},300);

	 }, function(){
	 	$('#pro').text('プログラミングで安定して40万を稼ぎ出す').animate({'font-size':'21px'},300);
	 }
    
 );

 $('.intro-section__block:nth-child(2)').hover(function(){
		$('#sex').text('セフレ、乱交……とにかく女と遊びまくるッ！').animate({'font-size':'30px'},300);
	},
		function(){
		$('#sex').text('彼女を作る').animate({'font-size':'21px'},300);
		
	});

	$('.intro-section__block:nth-child(3)').hover(function(){

        $('#write').text('一般小説家デビューからの、アニメ特撮の脚本家を手掛けるッ！').animate({'font-size':'30px'},300);

	 }, function(){
	 	$('#write').text('小説を書く').animate({'font-size':'21px'},300);
	 }
    );

    $('.intro-section__block:nth-child(4)').hover(function(){

        $('#travel').text('地球のすべてを渡り歩きたいッ！').animate({'font-size':'30px'},300);

	 }, function(){
	 	$('#travel').text('旅をする').animate({'font-size':'21px'},300);
	 }
    );

    $('#page-header--logo').click(function(){
    	$('html, body').animate({
      'scrollTop':0
      
    },500);
  });

     $(window).scroll(function (){
    $('.pict').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

   



 });
