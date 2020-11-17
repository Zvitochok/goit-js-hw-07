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
	listIngredients.innerHTML = ingredients.map(value => `<li>${value}</li>`).join('');