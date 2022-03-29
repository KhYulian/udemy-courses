'use strict';

const popup = document.querySelector('.popup');
const navList = document.querySelector('.navigation__list');

popup.addEventListener('click', e => {
	if (!e.target.classList.contains('popup')) return;
	location.hash = '#section-tours';
});

navList.addEventListener('click', e => {
	if (!e.target.classList.contains('navigation__link')) return;
	document.getElementById('navi-toggle').checked = false;
});
