const choices = ["rock", "paper", "scissor"];
const resultText = document.getElementById("result");
const userImage = document.getElementById("user-choice");
const computerImage = document.getElementById("computer-choice");
const winrate = document.getElementById("win"); 
let win = 0;
let totalGames = 0;

choices.forEach(choice => {
    document.getElementById(choice).addEventListener("click", function() {
        playGame(choice);
    });
});

function playGame(userChoice) {
    totalGames++;  
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if (userChoice === computerChoice) {
        result = "<h1>Xyaaa barabar vayo nii</h1>";
    } else if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        result = "<h1>Balla jitis ta mula!</h1>";
        win = win + 1;  
    } else {
        result = "<h1>Xyaa haris mula taile!</h1>";
    }

    userImage.src = `${userChoice}.jpeg`;
    userImage.alt = userChoice;

    computerImage.src = `${computerChoice}.jpeg`;
    computerImage.alt = computerChoice;

    winrate.innerHTML = `Wins: ${win} | Total games: ${totalGames}`; 
}
