/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

console.log(names);

// Dichiara la funzione qui.
function letteraIniziale(names) {
    const iniziale = [];
    for (let i = 0; i < names.length; i++) {
        iniziale.push(names[i].charAt(0).toUpperCase());
    }
    return iniziale;
}

// Invoca la funzione qui e stampa il risultato in console

const name = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const iniziale = letteraIniziale(names);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

console.log(iniziale); 