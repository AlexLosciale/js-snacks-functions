/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
let orario = parseInt.prompt("inserisci l'orario")

// Dichiara la funzione qui.
if (orario < 13) {
    console.log(`buongiorno ${name}`);
}else if (orario > 13) {
    console.log(`Ciaobuon pomeriggio ${name}`);
}else (orario > 17) {
    console.log(`buonasera ${name}`);
}

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.