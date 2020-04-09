for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

}

document.addEventListener("keydown", function(event) {
  playDrum(event.key);
  changeKeyColor(event.key);
});

function handleClick() {
  playDrum(this.innerHTML);
  changeKeyColor(this.innerHTML);
}

function playDrum(letter) {
  switch (letter) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3")
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:

  }
}

function changeKeyColor(key) {
  if (document.querySelector("." + key).classList.contains("pressed") === false) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function() {
      document.querySelector("." + key).classList.remove("pressed")
    }, 100);
  }
}
