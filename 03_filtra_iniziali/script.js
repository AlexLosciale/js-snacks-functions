/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
console.log(names);


// Dichiara la funzione qui.

function Iniziali(names, letter) {
    const result = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i].charAt(0).toUpperCase() === letter.toUpperCase()) {
            result.push(names[i]);
        }
    }
    return result;
}

// Invoca la funzione qui e stampa il risultato in console

const name = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const filteredNames = Iniziali(names, "A");


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

console.log(filteredNames); 