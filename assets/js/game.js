var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//log shorthand = console.log(playerName, playerAttack, playerHealth)
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function() {
    //Alerts players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health reamaining."
        );
    // check enemy's health
        if (enemyHealth <=0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    //check players health
            if (playerHealth <=0) {
                window.alert(playerName + " has died!");
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
    // if player choses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm that the player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    //if yes(true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //player money subtracted for skipping
                playerMoney = playerMoney -2;
            }
    // if no(false) stay and fight
            else {
                fight();
            }
        } else {
            window.alert("You need to choose a valid option. Try again!");
        }
};

fight();