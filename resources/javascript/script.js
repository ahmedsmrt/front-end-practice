// JS
// Testing 
let cardContTest = document.querySelector('#card-1');
let cardTitle1 = cardContTest.getElementsByTagName('span');
const button = document.getElementsByClassName('button-primary')[0];

function cardTitleTest() {
    let input = prompt('What would you like to study today?');
    cardTitle1[0].innerHTML = input;
    console.log(button);
};

button.addEventListener('click', cardTitleTest);