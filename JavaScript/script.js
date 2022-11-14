let burgerMenu = document.getElementById('burger');
let navBg = document.querySelector('#nav-bg');
let nav = document.querySelector('#nav');

burgerMenu.addEventListener('click', function(){
	nav.classList.add('show');
	navBg.classList.add('display');
});
navBg.addEventListener('click', function(){
	nav.classList.remove('show');
	navBg.classList.remove('display');
});
window.onscroll = () => {
	nav.classList.remove('show');
	navBg.classList.remove('display');
	cart.classList.remove('showed');
}
/__________________________________________________________________________________________/
let cart = document.getElementById('cart-bx');
let shopIcon = document.getElementsByClassName('shoping-cart')[0];

shopIcon.addEventListener('click', function(){
	cart.classList.toggle('showed');
});
// __________________________________________________
function filterSelect(){
	let selectedFilter = document.querySelector("#filter").value;
	let menu = document.querySelector("#menu").children;
	for(let i = 0; i < menu.length; i++)
	{
		menu[i].classList.remove('hide-menu');
		menu[i].classList.remove('show-menu');
	}
	if(selectedFilter == "sushi"){
		for(let i = 0; i < menu.length; i++)
		{
			if(menu[i].className == "sushi")
			{
				menu[i].classList.add('show-menu');
			}
			else {
				menu[i].classList.add('hide-menu');
			}
		}
	}
	else if(selectedFilter == "ramen"){
		for(let i = 0; i < menu.length; i++)
		{
			if(menu[i].className == "ramen")
			{
				menu[i].classList.add('show-menu');
				
			}
			else {
				menu[i].classList.add('hide-menu');
			}
		}
	}
	else if(selectedFilter == "salade"){
		for(let i = 0; i < menu.length; i++)
		{
			if(menu[i].className == "salade")
			{
				menu[i].classList.add('show-menu');
			}
			else {
				menu[i].classList.add('hide-menu');
			}
		}
	}
	else {
		for(let i = 0; i < menu.length; i++)
		{
			menu[i].classList.add('show-menu');
		}
	}
}
// __________________________________________

let removeButtons = document.querySelectorAll(".remove-btn");
for(let i = 0; i < removeButtons.length; i++) {
	removeButtons[i].addEventListener('click', removeCartItem);
}
function removeCartItem(event) {
	let buttonClicked = event.target;
	let count = document.getElementById("count");
	buttonClicked.parentElement.parentElement.remove();
	updateCartTotal();
	count.innerText = +count.innerText - 1;
}
// ----------------------------------------
let addElement = document.getElementsByClassName("add");
for(let i = 0; i < addElement.length; i++) {
	addElement[i].addEventListener('click', addToCartClicked);
}
function addToCartClicked(event) {
	let button = event.target;
	let title = button.previousElementSibling.innerText;
	let price = button.children[0].innerText;
	let img = button.parentElement.style.backgroundImage;
	addToCart(title, price, img);
	
}
function addToCart(title, price, img) {
	let cartRow = document.createElement('div');
	let cartItems = document.getElementsByClassName("products")[0];
	let itemNames = cartItems.getElementsByClassName("p-name");
	let count = document.getElementById("count");
	for(let i = 0; i < itemNames.length; i++) {
		if(itemNames[i].innerText == title) {
			alert("this product is already added !");
			return 1;
		}
	}
	let cartRowContent = `
	<div class="product">
		<div class="img-name">
			<div class="small-img"></div>
				<p class="p-name">${title}</p>
			</div>
			<p><span class="element-price">${price}</span>DH</p>
			<div class="quantity">
				<input type="number" name="quantity" class="quantity-input" value="1">
				<button class="remove-btn">remove</button>
			</div>
    </div>
	`;
	cartRow.innerHTML = cartRowContent;
	cartItems.append(cartRow);
	count.innerText = +count.innerText + 1;
	cartRow.getElementsByClassName("remove-btn")[0].addEventListener('click', removeCartItem);
	cartRow.getElementsByClassName("quantity-input")[0].addEventListener('change', quantityChanged);
	updateCartTotal();
}
// ---------------------------------
let quantityInputs = document.getElementsByClassName("quantity-input");
for(let i = 0; i < quantityInputs.length; i++) {
	quantityInputs[i].addEventListener('change', quantityChanged);
}
function quantityChanged(event) {
	let quantity = event.target;
	if(isNaN(quantity.value) || quantity.value <= 0) {
		quantity.value = 1;
	}
	updateCartTotal();
}
function updateCartTotal() {
	let cartItemts = document.getElementsByClassName("products")[0];
	let cartRows = cartItemts.getElementsByClassName("product");
	let total = 0;
	for(let i = 0; i < cartRows.length; i++) {
		let elementPrice = cartRows[i].getElementsByClassName("element-price")[0].innerText;
		let elementQuantity = cartRows[i].getElementsByClassName("quantity-input")[0].value;
		total += +elementPrice * elementQuantity;
	}
	total = Math.round(total * 100) / 100;
	document.getElementsByClassName("total-price")[0].innerText = total;
}
// _______________________
document.getElementsByClassName("buy-now")[0].addEventListener('click', buyClicked);
function buyClicked() {
	 alert("thank you for your purchase.");
	 let cartItems = document.getElementsByClassName("products")[0];
	 while(cartItems.hasChildNodes()) {
		cartItems.removeChild(cartItems.firstChild);
	 }
	 updateCartTotal();
	 let count = document.getElementById("count");
	 count.innerText = 0;

}
