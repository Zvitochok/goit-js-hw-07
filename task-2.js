'use strict';
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
const listIngredients = document.querySelector('#ingredients');
	for (let item of ingredients) {
			const element = document.createElement('li');
			element.textContent = item;
			listIngredients.append(element);}