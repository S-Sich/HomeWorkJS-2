const products = [
	{ id: 1, title: 'Notebook', price: 2000 },
	{ id: 2, title: 'Mouse', price: 20 },
	{ id: 3, title: 'Keyboard', price: 200 },
	{ id: 4, title: 'Gamepad', price: 50 },
];

//Функция для формирования верстки каждого товара
const renderProduct = (goods) => {
	return `<div class="product-item clear-fix">
					<img src="img/box-goods.png" class="igm-product">
               <h3>${goods.title}</h3>
					<p>${goods.price}</p>
					<button class="buy-btn">Купить</button>
					</div>`
};
const renderPage = list => {
	const productsList = list.map(item => renderProduct(item));
	console.log(productsList);
	document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);