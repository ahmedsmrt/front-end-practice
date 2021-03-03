// JS
// Testing 
let cardContTest = document.querySelector('#card-1');
let cardTitle1 = cardContTest.getElementsByTagName('span');
const button = document.getElementsByClassName('button-primary')[0];
const icon = document.getElementById('icon');
function cardTitleTest() {
    let input = prompt('What was your name before you realized you were a noob?');
    cardTitle1[0].innerHTML = `${input}anoob`;
    console.log(button);
};

button.addEventListener('click', cardTitleTest);

// Universal Functions
const randomColor = () => {
    const hexRef = ['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9];
    const randomArr = [];
        for(let i = 0; i < 6; i++) {
            randomArr.push((hexRef[Math.floor(Math.random()*hexRef.length)]))
     }
    let randomCol = `#${randomArr.join('').toUpperCase()}`;
    return randomCol;
}


// Logo Color
icon.addEventListener('mouseenter', () => {
    icon.style.color = randomColor();
});
icon.addEventListener('mouseleave', () => {
    icon.style.color = '#F37878'
});

