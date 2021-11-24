// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// gli dico all'utente di inserire il suo nome
const nameUser = prompt('Inserisci qui il tuo nome per giocare');

// Genero un numero random da 1 a 6, sia per il giocatore sia per il computer.
const numberRandomUser = Math.floor(Math.random() * 6) + 1;
const numberRandomComputer = Math.floor(Math.random() * 6) + 1;

// verifico chi tra l'utente e il computer ha il numero più alto
if (numberRandomUser > numberRandomComputer) {
    console.log(nameUser, 'Hai vinto con il numero', numberRandomUser);
} else if (numberRandomUser < numberRandomComputer) {
    console.log(nameUser, 'Hai perso il numero del computer', numberRandomUser, 'è più alto del tuo');
} else {
    console.log(nameUser, 'La partita si è conclusa in parità');
}
// mostro all'utente i numeri estratti
console.log('Il Tuo Numero', numberRandomUser);
console.log('Il numero del computer', numberRandomComputer);