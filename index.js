//Generate random number
let randomNumber = () => Math.floor(Math.random() * 6 + 1);

//Generate random dice png file for both players
let randomDice1 = "dice" + randomNumber() + ".png";
let randomDice2 = "dice" + randomNumber() + ".png";

//Changing source atributes
const imageSource1 = `images/${randomDice1}`;
const imageSource2 = `images/${randomDice2}`;

let firstDice = document.querySelectorAll("img")[0];
let secondDice = document.querySelectorAll("img")[1];

firstDice.setAttribute("src", imageSource1);
secondDice.setAttribute("src", imageSource2);

if(randomDice1 > randomDice2) {
    document.querySelector("h1").innerHTML = "Player 1 Win";
}else if(randomDice1 < randomDice2) {
    document.querySelector("h1").innerHTML = "Player 2 Win";
}else {
    document.querySelector("h1").innerHTML = "Draw";
}
