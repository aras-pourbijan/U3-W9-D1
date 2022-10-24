"use strict";
let randomNumber;
randomNumber = Math.floor(Math.random() * 99 + 1);
let player1;
let player2;
let noWinner;
let vincerMassage;
let runMatch = function (a, b) {
    player1 = a;
    player2 = b;
    console.log(`numero casuale generato = ${randomNumber}`);
    console.log(`Giocatore 1 = ${player1}`);
    console.log(`Giocatore 2 = ${player2}`);
    if (player1 == randomNumber && player2 != randomNumber) {
        console.log("grande ! Ha vinto Player 1");
    }
    else if (player1 != randomNumber && player2 == randomNumber) {
        console.log("grande ! Ha vinto Player 2");
    }
    else if (player2 == randomNumber && player1 == randomNumber) {
        console.log("grandi ! tutti e due avete vinto!");
    }
    else {
        let noWinner = Math.abs(randomNumber - player1) > Math.abs(randomNumber - player2)
            ? "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si e' avvicinato di piu' !"
            : "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si e' avvicinato di piu' !";
        console.log(noWinner);
    }
};
runMatch(18, 84);
