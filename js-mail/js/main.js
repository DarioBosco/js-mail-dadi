/*
var emailsArray = ['info@example.com', 'admin@example.com', 'contact@example.com'];

var inputEmail = prompt('Inserisci la tua email');

if (emailsArray.indexOf(inputEmail) == '-1') {
	console.log('Email non trovata');
} else {
	console.log('Email trovata');
}

*/

var emailsArray = ['info@example.com', 'admin@example.com', 'contact@example.com'];
var inputEmail = prompt('Inserisci la tua email');
var foundEmail;

for (let i = 0; i < emailsArray.length; i++) {
	var element = emailsArray[i];

	if (inputEmail == element) {
		foundEmail = element;
		console.log('Email trovata');
	}
}
if (foundEmail == undefined) {
	console.log('Email non trovata');
}
