// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less




randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var getPlayerName = function () {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is" + name);
    return name;
};
    

var playerInfo = {
    name: getPlayerName (),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.attack = 10;
        this.money = 10;

    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("Refilling player health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;

        }
        else {
            window.alert("You dont have enough money!");
        }
    },
    upgradeAttack: function () {
        if (this.money >= 7) {
            window.alert("Upgrading the player attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You dont have enough money!");
        }
    }
};

var enemyHealth = randomNumber(40, 60);

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)

    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];


var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerInfo.playerMoney = playerInfo.money - 10;
        shop();
        return true;
      }
    }
  };

var fight = function (enemy) {
    // repeat and execute as along as enemy robot is alive
    while (enemy.health > 0 && playerInfo.health > 0) {

        if (fightOrSkip()) {
            //leave the fight if true
            break;
        }

        //Subtract the value of `playerAttack` from the value of `enemy.health` and use that result to update the value in the `enemyHealth` variable
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health reamaining."
        );
        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

            //award player for winning
            playerInfo.money = playerInfo.money + 20;
            //leave loop since enemy is dead
            break;
        } else {
            window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        // Log a resulting message to the console so we know that it worked
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );
        //check players health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            // leave loop is player is dead
            break;
        }
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
};
//function to start again 
var startGame = function () {
    //reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            //lets player know what round they are in. arrays start at 0 so 1 needs to be added
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            //pick new enemy to fight based on index of the enemy name
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60)
            //use debugger to pause script to check whats going on at that moment in code
            //debugger;

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter.

            fight(pickedEnemyObj);

            // if were not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
        if (playerInfo.health > 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".")
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
            playerInfo.refillHealth();
            break;
        case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack();
            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");

            // does nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;

    };
};

startGame()







