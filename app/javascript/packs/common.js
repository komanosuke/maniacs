// ハンバーガーメニュー開閉
$(function() {
	$('.toggle-btn, #menu-close').click(function() {
	  $('.menu-line-top, .menu-line-middle, .menu-line-bottom, #sp-menu, #sp-bg').toggleClass('open');
	})
});

$(function(){
	$("a[href^='#']").click(function(){
	  let target = $(this.hash);
	  let position = $(target).offset().top - 90;
	  $('html,body').animate({scrollTop: position}, 400);
	  return false;
	});
});