// Creates array that lists all the high Value Target.
// var targetList = [ "MASTER CHIEF", "ARBITOR", "SERGEANT JOHNSON", "ORACLE", "GRAVEMIND"];
var targetList = [ "A"];


var killText = document.getElementById("kill-count-text");
var deathText = document.getElementById("death-count-text");
var priorityTargetWordText = document.getElementById("priority-targetword-text");
var ammoText = document.getElementById("ammo-text");
var missedShotsText = document.getElementById("missed-shots-text");

// Variables that hold the value for kill/death/ammo/missedShots.
var kill = 0;
var death = 0;
var ammo = 12;
var missedShots = [];

function startMission() {

// Randomly chooses a target from the options array. 
var highValueTarget = targetList[Math.floor(Math.random() * targetList.length)];

// Shows the highValueTarget.
console.log("highValueTarget: " + highValueTarget);

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed is set to lower case.
    // var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    var shotsFired = event.key.toUpperCase();

    // http://keycodes.atjayjo.com/#charcode
    // This if statement should only allow the keycode 65 to 90 (A-Z)
    // It will alert otherwise.
    if (event.keyCode < 65 || event.keyCode > 90) {
    }

    // Prevents the user to pick the same letter again. 
    else if (missedShots.indexOf(shotsFired) >= 0) {
        }

         // This logic determines the outcome of the game (kill/death), and increments the appropriate number.
    else if (shotsFired === highValueTarget) {
        kill++;
        newMission();
    } 

    // This logic will decrease ammo if player shots misses. The .push will add the user input into missedShots.
    else {
        missedShots.push(shotsFired);
        ammo--;
    }

    if (ammo === 0) {
        death++;
        newMission();
    }

    // Display the player guesses/ammo count/kill/death.
    killText.textContent = "Kill: " + kill;
    deathText.textContent = "Death: " + death;
    ammoText.textContent = "Ammo: " + ammo;
    missedShotsText.textContent = "Missed shots: " + missedShots;

}

// Function that reset ammo and missedShots after a kill or death. It will also reset the highValueTarget.
var newMission = function() {
    ammo = 12;
    missedShots = [];
    startMission();
}


}

startMission();