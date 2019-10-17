/*Базовые события*/

$('ul li').click(function(event) {
	console.log('Ты нажао на элемент');
	$('ul').append('<li>Дополнительный элемент</li>');
}); //click()

function addAndStop(e) {
	$('ul').append('<li>Дополнительный элемент</li>');
	$('ul').off('click');
}

$('ul').on('clicl', 'li', addAndStop);