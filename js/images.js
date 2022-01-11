const myButton = document.querySelector('button');
const myBox = document.querySelector('.box');
const images = ["images/img1.jpeg", "images/img2.jpeg", "images/img3.jpeg", "images/img4.jpeg", "images/img5.jpeg"];

let randomValues=[];

init();

function random_image(images) {
   var random = randomize(images);
   while (images[random] === document.getElementById("image").src) {
      random = randomize(images)
   }

   if(randomValues.length === 0){
    for(let i=0; i< images.length; i++){
        randomValues.push(i);
        console.log(`${i} add`);
    }
}

    let randomIndex = Math.floor(Math.random() * randomValues.length);
    let indexFromMyarray = randomValues[randomIndex];
    randomValues.splice(randomIndex, 1);
    document.getElementById("image").src = images[indexFromMyarray].toString();
}

function randomize(array) {
   return Math.floor((Math.random() * (array.length)));
}

function init() {
   document.getElementById("image").addEventListener("click", function() {
      random_image(images);
   });
   random_image(images);
}

