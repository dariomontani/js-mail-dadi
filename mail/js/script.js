// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// inserisco la lista delle email valide
const lista = ["dario@gmail.com", "montani@hotmail.it", "pippo@boolean.it", "pluto35@boolean.com"];

// Chiedo all’utente la sua email
const email = prompt('inserisci qui la tua email');

// creo la variabile find false (non sei nella lista)
let find = false;

// gli dico dove andare a controllare se è presente l'email
for (let i = 0; i <= lista.length; i++) {

    if (email == lista[i]) {
        // se find = true l'email è presente nella lista
        find = true;
    } 
}

// ora posso mostrare all'utente se l'email è valida o no
console.log(find);
// se find = true allora l'email è valida
if (find == true) {
    console.log("l'email è valida");
    // altrimenti l'email NON è valida
} else {
    console.log("l'email NON è valida");
}



