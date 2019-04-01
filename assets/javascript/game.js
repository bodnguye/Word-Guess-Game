// Creates array that lists all the high Value Target.
var targetListArray = [ "MASTER CHIEF", "ARBITOR", "SERGEANT JOHNSON", "ORACLE", "GRAVEMIND"];

var killText = document.getElementById("kill-count-text");
var deathText = document.getElementById("death-count-text");
var ammoText = document.getElementById("ammo-text");
var missedShotsText = document.getElementById("missed-shots-text");

// Variables that hold the value for kill/death/ammo/missedShots.
var kill = 0;           // The win count.
var death = 0;          // The loss count.
var ammo = 12;          // The remaining guesses left. 
var missedShots = [];   // The wrong letters guessed
var healthBar = [];     // The array for the length of the highValueTarget.

function startMission() {

// Randomly chooses a target from the options array. 
var highValueTarget = targetListArray[Math.floor(Math.random() * targetListArray.length)];

// Shows the highValueTarget and its length.
console.log("highValueTarget: " + highValueTarget);
console.log("highValueTarget:" + highValueTarget.length);

// Assigning the hidden word from the targetListArray.
var highValueTargetWordText = "";
for (var i = 0; i < highValueTarget.length; i++) {      // loop for the length of highValueTarger.
    healthBar.push("_");                                // healthBar.push will add "_" with commas (,).
    highValueTargetWordText += healthBar[i];            // += operator can also be used to concatenate (add) strings 
                                                        // without the unneccesary commas (.).

    console.log("HEALTHBAR: " + healthBar);
    // console.log("healtBar[i]: " + healthBar[i]);
}

document.getElementById("high-value-target-text").textContent = highValueTargetWordText;

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

             console.log(healthBar[position[i]] = shotsFired)
    }
}

    }
    //   else  {
    //       missedShots.push(shotsFired);
    //     ammo--;
    // }
    

    // This logic determines the outcome of the game (kill/death), and increments the appropriate number.
     if (healthBar.indexOf("_") === -1) {
        kill++;
        newMission();
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
};

// Function that reset ammo and missedShots after a kill or death. It will also reset the highValueTarget.
 newMission = function() {
    ammo = 12;
    missedShots = [];
    healthBar = [];
    startMission();
};

// var compareLetter = function(letter) {
//     var letter = [];
//     for (var i = 0; i < highValueTarget.length; i++) {

//     }





startMission();