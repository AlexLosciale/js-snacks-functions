/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function vocali(word) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count++;
        }
    }
    return count;
}

// Invoca la funzione qui e stampa il risultato in console

const words = "javascript";
const vocaliContate = vocali(word);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)

console.log(word);
console.log(vocaliContate); 