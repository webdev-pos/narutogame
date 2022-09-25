import { characters } from '../../data/characters.js';
//DOM//

const teamMembers = JSON.parse(window.localStorage.getItem('teamMembers'));
const timeClock = document.getElementById('timeClock');
const yourCurrentCharacterImg = document.getElementById('yourCurrentCharacterImg');
const yourCharacterName = document.getElementById('yourCharacterName');
const healthBar = document.getElementById('yourCharacterHealthBar');
const chakraBar = document.getElementById('yourCharacterChakraBar');
const bar = document.getElementById('bar');
//let activeTeamMember = teamMembers[0];

//Variables//
let yourCurrentTime = 31;
let opponentCurrentTime = 31;
let yourTurn = true;

//Music//

const battleMusic1 = new Audio("../../sounds/battlemusic1.mp3");
const battleMusic2 = new Audio("../../sounds/battlemusic2.mp3");
const battleMusic3 = new Audio("../../sounds/battlemusic3.mp3");
battleMusic1.volume = 0.15;
battleMusic2.volume = 0.15;
battleMusic3.volume = 0.15;

//Functions//
/*iffunction musicOverBattle() {
    battleMusic1.play();
    setTimeout(() => {battleMusic1.pause(); battleMusic1.currentTime = 0; battleMusic2.play();}, 88000)
    setTimeout(() => {battleMusic2.pause(); battleMusic2.currentTime = 0; battleMusic3.play();}, 29000)
    setTimeout(() => {battleMusic3.pause(); battleMusic3.currentTime = 0; musicOverBattle();}, 29000)
}
musicOverBattle()
*/

//Functions//
function opponentTurnOver() {
    opponentCurrentTime = 31;
    console.log("Opponent turn is over");
    yourTurn = true;
    showBar();
    yourReduceTime()
}
function yourTurnOver() {
    yourCurrentTime = 31;
    console.log("Your turn is over");
    yourTurn = false;
    hideBar()
    opponentReduceTime()
}

function opponentReduceTime() {
    if(opponentCurrentTime > 0) {
        opponentCurrentTime -= 1; 
        timeClock.textContent = opponentCurrentTime;
        setTimeout(() => {opponentReduceTime()}, 1000);
        } else {
            opponentTurnOver()
    }
}

function yourReduceTime() {
    if(yourCurrentTime > 0) {
    yourCurrentTime -= 1; 
    timeClock.textContent = yourCurrentTime;
    setTimeout(() => {yourReduceTime()}, 1000);
    } else {
        yourTurnOver()
    }
}
yourReduceTime()

function hideBar() {
    bar.style.display = "none"
}
function showBar() {
    bar.style.display = "flex"
}





//IF STATEMENTS//

if(teamMembers[0] === "Naruto") {
    yourCharacterName.textContent = characters.naruto.name;
    let currentCharacterHealth = characters.naruto.health;
    let currentCharacterChakra = characters.naruto.chakra;
    healthBar.textContent = currentCharacterHealth;
    chakraBar.textContent = currentCharacterChakra;
    yourCurrentCharacterImg.src = "../../images/narutocover.jpg";
} else if(teamMembers[0] === "Sasuke") {
    yourCharacterName.textContent = characters.sasuke.name;
    let currentCharacterHealth = characters.sasuke.health;
    let currentCharacterChakra = characters.sasuke.chakra;
    healthBar.textContent = currentCharacterHealth;
    chakraBar.textContent = currentCharacterChakra;
    yourCurrentCharacterImg.src = "../../images/sasukecover.jpg";
} else if(teamMembers[0] === "Sakura") {
    yourCharacterName.textContent = characters.sakura.name;
    let currentCharacterHealth = characters.sakura.health;
    let currentCharacterChakra = characters.sakura.chakra;
    healthBar.textContent = currentCharacterHealth;
    chakraBar.textContent = currentCharacterChakra;
    yourCurrentCharacterImg.src = "../../images/sakuracover.png";
}
    



console.log(teamMembers);