$(function() {
	$('p').text('DOM элементы загруены')
}); //Готовность DOM элементов

$(window).load(function() {
}); // Полная загрузка страницы

$(window).unload(function() {
	alert('Пользователь, пока!');
});

$(window).resize(function(event) {
	console.log('размеры окна изменены')
}); //Изменение размера (например, окна)

$(window).scroll(function(event) {
	console.log('Страница прокручена')
}); //Прокрутка элемента