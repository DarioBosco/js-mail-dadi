var emailsArray = ['info@example.com', 'admin@example.com', 'contact@example.com'];

var inputEmail = prompt('Inserisci la tua email');

if (emailsArray.indexOf(inputEmail) == '-1') {
	console.log('Email non trovata');
} else {
	console.log('Email trovata');
}
