//создаем массив "моя корзина"
var cart = {};

$('document').ready(function(){
	loadGoods();
});

function loadGoods() {
	//загружаю товары на страницу
	$.getJSON( "goods.json", function( data ) {
		//console.log(data);
		var out = '';
		for (var key in data){
			out+='<div class="single-goods">';
			out+='<h3>'+data[key] ['name']+ '</h3>';
			out+='<p>Цена: '+data[key] ['cost']+ '</p>';
			// out+='<img src="'+data[key].image+'">';
			out += '<img src="img/'+data[key].img+'" alt="">';
			out+='<button class="add-to-cart" data-art="'+key+'">Купить</button>';
			out+='</div>';
		}
		$('.goods').html(out);
		// вешаем событие на кнопку
		$('button.add-to-cart').on('click', addToCart);
	});
}
function addToCart() {
	//добавляем товар в корзину
	var articul = $(this).attr('data-art');
	if (cart[articul]!=undefined) {
		cart[articul]++;
	}
	else {
		cart[articul] = 1;
	}
	
	console.log(cart);
}