'use strict';
let inputValue = document.querySelector("#font-size-control");
let inputText = document.querySelector("#text");
inputValue.oninput = function() {
    inputText.style.fontSize = inputValue.value + 'px';
};
