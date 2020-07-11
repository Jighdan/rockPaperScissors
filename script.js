const buttons = document.querySelectorAll(".pick")
buttons.forEach((button) => {
    button.addEventListener("click", function() {
        const playerScore = document.getElementById("player-score");
        const computerScore = document.getElementById("computer-score");

        // Interpret Click
        let playerHand = button.dataset.pick;
        // Changes the #player-score to player pick
        playerScore.textContent = playerHand;

        // Random Computer Pick
        const handPlay = ["ROCK", "PAPER", "SCISSORS"]
        let computerHand = handPlay[Math.floor(Math.random()*handPlay.length)];
        computerScore.textContent = computerHand;

        // Identify the Scoreboard
        const scoreboard = document.querySelector(".scoreboard");

        // Game Logic
        function runGameLogic(playerHand, computerHand) {
            // true == Player Wins & false == Computer Wins
            if (playerHand == "ROCK") {
                if (computerHand == "PAPER") {
                    return false;
                } else if (computerHand == "SCISSORS"){
                    return true;
                };
            } else if (playerHand == "PAPER") {
                if (computerHand == "ROCK") {
                    return true;
                } else if (computerHand == "SCISSORS") {
                    return false;
                }
            } else if (playerHand == "SCISSORS") {
                if (computerHand == "PAPER") {
                    return true;
                } else if (computerHand == "ROCK") {
                    return false;
                };
            };
        };

        // Running game logic and score display
        let game = runGameLogic(playerHand, computerHand);
        if (game == true) {
            scoreboard.textContent = "You Win!";
            scoreboard.setAttribute("id", "win");
        } else if (game == false) {
            scoreboard.textContent = "Computer Wins!";
            scoreboard.setAttribute("id", "lose");
        } else {
            scoreboard.textContent = "It's a Tie!";
            scoreboard.setAttribute("id", "tie");
        };
    });
});
