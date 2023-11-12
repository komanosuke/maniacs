//バーガーボタンの開閉
const $jsButton = document.getElementById("js-btn");
$jsButton.addEventListener("click", () => { toggleBurger() });


function toggleBurger() { 
    $('.nav , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
}

let pageTop = document.getElementById('page_top');
pageTop.addEventListener('click', function() {
	$('html, body').animate({scrollTop:0},400);
});