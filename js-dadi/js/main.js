/*
TODO:
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//Generare un numero random da 1 a 6

var userNumber = Math.floor(Math.random() * 6 + 1);
var computerNumber = Math.floor(Math.random() * 6 + 1);

if (userNumber > computerNumber) {
	console.log('Utente Vince!');
	console.log('Utente: ', userNumber);
	console.log('Computer: ' + computerNumber);
} else if (userNumber < computerNumber) {
	console.log('Computer Vince!');
	console.log('Utente: ', userNumber);
	console.log('Computer: ' + computerNumber);
} else {
	console.log('Pareggio!');
	console.log('Utente: ', userNumber);
	console.log('Computer: ' + computerNumber);
}
