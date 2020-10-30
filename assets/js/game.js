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
randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};
var enemyHealth = randomNumber(40, 60);
var enemyAttack = 20;


var fight = function (enemyName) {
    // repeat and execute as along as enemy robot is alive
    while (enemyHealth > 0 && playerHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm that the player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //if yes(true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //player money subtracted for skipping
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
            }
        };

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health reamaining."
        );
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award player for winning
            playerMoney = playerMoney + 20;
            //leave loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        playerHealth = Math.max(0, playerHealth - damage);
        // Log a resulting message to the console so we know that it worked
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        //check players health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave loop is player is dead
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};
//function to start again 
var startGame = function () {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
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

            // if were not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")
                //if yes then take them to the store function
                if (storeConfirm) {
                    shop();
                }
            }


        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    };

    //function to end game 
    var endGame = function () {
        // if player is still alive then the player wins.
        if (playerHealth > 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".")
        }
        else {
            window.alert("You've lost your robot in battle.");

        }

        //ask player if they want to play again
        var playAgainConfirm = window.confirm("Would you like to play again?");
        if (playAgainConfirm) {
            //restart again
            startGame();
        }
        else {
            window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
    };
    // PLAY AGAIN
    endGame();

};
// Player enters shop for buy options
var shop = function () {
    //ask player what they would like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 5;

            }
            else {
                window.alert("You dont have enought money!");
            }

            break;
        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 4;

            }
            else {
                window.alert("You dont have enought money!");
            }

            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");

            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;

    };
};

startGame()







