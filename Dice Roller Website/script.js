function rollDice() {
    var dice = document.getElementById("dice");
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.innerHTML = randomNumber;
}
