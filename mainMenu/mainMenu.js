const PlayNowButton = document.getElementById("playnowbutton");
let sound = new Audio("../sounds/NarutoSound.mp3");
sound.volume = 0.2;

PlayNowButton.addEventListener("click", function() {
    sound.play();
    setTimeout(() => {sound.pause(); window.location.href = "../selectCharacter/selectCharacter.html";}, 8000);
})