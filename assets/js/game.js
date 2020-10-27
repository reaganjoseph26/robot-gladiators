// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//log shorthand = console.log(playerName, playerAttack, playerHealth)
var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"]; //this is an array
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
    // repeat and execute as along as enemy robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm that the player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    //if yes(true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
    //player money subtracted for skipping
            playerMoney = playerMoney -10;
            console.log("playerMoney", playerMoney);
            break;
        }
     }

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health reamaining."
        );
    // check enemy's health
        if (enemyHealth <=0) {
            window.alert(enemyName + " has died!");

            //award player for winning
            playerMoney = playerMoney + 20;
            //leave loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
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
                // leave loop is player is dead
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
    };

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            //lets player know what round they are in. arrays start at 0 so 1 needs to be added
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            //pick new enemy to fight based on index of the enemy name
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
        //use debugger to pause script to check whats going on at that moment in code
            //debugger;

        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter.
    
        fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
      } 
    
