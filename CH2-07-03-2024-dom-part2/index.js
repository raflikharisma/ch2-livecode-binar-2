let drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let btnInnerHTML = button.innerHTML;
    makeSound(btnInnerHTML);
    buttonAnimation(btnInnerHTML);
  });
});

document.addEventListener("keypress", (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
});

const makeSound = (key) => {
  switch (key) {
    case "w":
      let audioW = new Audio(`sounds/tom-1.mp3`);
      audioW.play();
      break;
    case "a":
      let audioA = new Audio(`sounds/tom-2.mp3`);
      audioA.play();
      break;
    case "s":
      let audioS = new Audio(`sounds/tom-3.mp3`);
      audioS.play();
      break;
    case "d":
      let audioD = new Audio(`sounds/tom-4.mp3`);
      audioD.play();
      break;
    case "j":
      let audioJ = new Audio(`sounds/snare.mp3`);
      audioJ.play();
      break;
    case "k":
      let audioK = new Audio(`sounds/crash.mp3`);
      audioK.play();
      break;
    case "l":
      let audioL = new Audio(`sounds/kick-bass.mp3`);
      audioL.play();
      break;
  }
};

const buttonAnimation = (key) => {
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  activeButton.classList.add("text-animation");
  setTimeout(() => activeButton.classList.remove("pressed"), 200);
  setTimeout(() => activeButton.classList.remove("text-animation"), 100);
};
