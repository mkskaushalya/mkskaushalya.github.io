$(document).ready(function(){
	$('.navbar').sticky();
});

const hamburger = document.querySelector('nav .nav-list .hamburger');
const mobile_menu = document.querySelector('nav .nav-list ul');
const menu_item = document.querySelectorAll('nav .nav-list ul li a');
const header = document.querySelector('nav');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		nav.style.backgroundColor = '#29323c';
	} else {
		nav.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});