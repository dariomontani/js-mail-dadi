// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genero un numero random da 1 a 6, sia per il giocatore sia per il computer.
const numberRandomUser = Math.floor(Math.random() * 6) + 1;
const numberRandomComputer = Math.floor(Math.random() * 6) + 1;

console.log(numberRandomUser);
console.log(numberRandomComputer);