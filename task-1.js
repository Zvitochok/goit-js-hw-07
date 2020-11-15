'use strict';
const CategoryChild = Array.from(document.querySelector('#categories').children);
let elementChild = CategoryChild.map(element => element).length;
console.log(`В списке ${elementChild} категории.`);
	for(let child of CategoryChild){
		let CategoryName = child.firstElementChild.textContent;
		let ChildQuantity = child.lastElementChild.children.length;
		console.log(`Категория: ${CategoryName}\nКоличество элементов: ${ChildQuantity}`);
	}