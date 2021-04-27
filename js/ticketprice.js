/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

//var + prompts
var euroKm = 0.21;
var km = prompt('A quanti chilometri ammonta la tratta?');
var age = prompt('Qual e\' la vostra eta\'? (in anni)');
var ticketPrice = (km * euroKm);

//age discount
if (age < 18) {
    ticketPrice = ticketPrice * 0.8;
} else if (age >= 65) {
    ticketPrice = ticketPrice * 0.6; 
}

//fixed decimals
ticketPrice = ticketPrice.toFixed(2); 

//onscreen results
alert("Il prezzo del vostro biglietto e\' di " + ticketPrice + " €");