// Creates array that lists all the high Value Target.
var targetListArray = [ "MASTER CHIEF", "ARBITOR", "SERGEANT JOHNSON", "ORACLE", "GRAVEMIND", "CORTANA", "PROPHET OF TRUTH",
                        "GRUNTS", "ELITES","HUNTERS","JACKALS", "BRUTES", "MARINES", "CAPTAIN KEYES", "SHIPMASTER", "SPARTANS"];

var highValueTargetWordText = document.getElementById("high-value-target-text");
var killText = document.getElementById("kill-count-text");
var deathText = document.getElementById("death-count-text");
var ammoText = document.getElementById("ammo-text");
var missedShotsText = document.getElementById("missed-shots-text");

// Variables that hold the value for kill/death/ammo/missedShots.
var kill = 0;           // The win count.
var death = 0;          // The loss count.
var ammo = 8;          // The remaining guesses left. 
var missedShots = [];   // The wrong letters guessed
var healthBar = [];     // The array for the length of the highValueTarget.
var position = [];
var shotsFired = [];

// Sound effects
var gunFire = new Audio("./assets/sounds/assaultrifle.wav");
var themeSong = new Audio("./assets/sounds/halo2.mp3");
var roundOver = new Audio("./assets/sounds/round_over.wav");

var highValueTarget = targetListArray[Math.floor(Math.random() * targetListArray.length)];
// var highValueTargetIndex = highValueTarget[i];
// console.log = (highValueTarget);


function startMission() {

// Randomly chooses a target from the options array. 
// var highValueTarget = targetListArray[Math.floor(Math.random() * targetListArray.length)];

// Shows the highValueTarget and its length.
console.log("highValueTarget: " + highValueTarget);
console.log("highValueTarget:" + highValueTarget.length);

// Assigning the hidden word from the targetListArray.
var highValueTargetWord = "";
for (var i = 0; i < highValueTarget.length; i++) {      // loop for the length of highValueTarger.
    if(highValueTarget[i] === " ") {
        highValueTargetWord += highValueTarget[i];
    }
    else {    
    healthBar.push("_");                               // healthBar.push will add "_" with commas (,).
    highValueTargetWord += healthBar[i];               // += operator can also be used to concatenate (add) strings 
    }                                                  // without the unneccesary commas (.).

    console.log("HEALTHBAR: " + healthBar);
    // console.log("healtBar[i]: " + healthBar[i]);
}
highValueTargetWordText.textContent = highValueTargetWord;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed is set to lower case.
    // var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    var shotsFired = event.key.toUpperCase();
    gunFire.play();

    // http://keycodes.atjayjo.com/#charcode
    // This if statement should only allow the keycode 65 to 90 (A-Z)
    // It will alert otherwise.
    if (event.keyCode < 65 || event.keyCode > 90) {
    }

    // Prevents the user to pick the same letter again. 
    else if (missedShots.indexOf(shotsFired) >= 0) {
        }
    
        // This logic will decrease ammo if player shots misses. The .push will add the user input into missedShots.
    else {
        var position = [];
        for (var i = 0; i < highValueTarget.length; i++) { 
            if (highValueTarget[i] === shotsFired) {
                 position.push(i);
            }
            console.log("position: " + position);
        }

        if (position.length <= 0) {
            missedShots.push(shotsFired);
            ammo--;
        }

    else {
        for(var i = 0; i < position.length; i++) {
             healthBar[position[i]] = shotsFired;
             startMission();

             console.log("HOO: " + healthBar[position[i]])
            }
        }
    }
    

    // This logic determines the outcome of the game (kill/death), and increments the appropriate number.
     var correctWord = document.getElementById("high-value-target-text").innerHTML;
    if (correctWord.indexOf("_") === -1) {
        kill++;
        newMission();
    } 

    if (ammo === 0) {
        death++;
        roundOver.play();
        newMission();
    }

    // Display the player guesses/ammo count/kill/death.
    killText.textContent = "Kill: " + kill;
    deathText.textContent = "Death: " + death;
    ammoText.textContent = "Ammo: " + ammo;
    missedShotsText.textContent = "Missed shots: " + missedShots;
};
};

// Function that reset ammo and missedShots after a kill or death. It will also reset the highValueTarget.
    function newMission() {
    ammo = 8;
    missedShots = [];
    healthBar = [];
    highValueTarget = targetListArray[Math.floor(Math.random() * targetListArray.length)];
    startMission();
};

startMission();

document.getElementById("clickStart").addEventListener("click", clickStart);

function clickStart() {
    themeSong.play();
    themeSong.loop = true;
  document.getElementById("clickStart").innerHTML = "";
  document.getElementById("anykey").src = "https://fontmeme.com/permalink/190402/e03dc27e68f48354951677dbc59ef7fc.png";
  document.getElementById("finish").src = "https://fontmeme.com/permalink/190402/c0286d3ef271bcab8fa9c0b2ec1331a8.png";
}