let allButtons = document.querySelectorAll(".drum");
let allButtonsCount = allButtons.length;
for (let i = 0; i < allButtonsCount; i++) {
  allButtons[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var kickbass = new Audio("./sounds/kick-bass.mp3");
      kickbass.play();
      break;

    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      // console.log(this.innerHTML);
      break;
  }
}

function buttonAnimation(currenKey) {
  var activeButton = document.querySelector("." + currenKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
