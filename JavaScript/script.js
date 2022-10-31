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
})

let test = document.querySelector('.plat-1');
console.log(test);
test.classList.remove('all');

