const myButton = document.querySelector('button');
const myBox = document.querySelector('.box')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'khaki']
console.log(myButton);
let randomValues=[];
myButton.addEventListener('click', changeColor);

let phrase = 'Shepi-Popi';

console.log(`Hello, ${phrase}`)

function changeColor(){
    if(randomValues.length === 0){
        for(let i=0; i< colors.length; i++){
            randomValues.push(i);
            console.log(`${i} add`);
        }
    }

    let randomIndex = Math.floor(Math.random() * randomValues.length);
    let indexFromMyarray = randomValues[randomIndex];
    randomValues.splice(randomIndex, 1);
    myBox.style.backgroundColor = colors[indexFromMyarray];

}