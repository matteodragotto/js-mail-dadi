const email = prompt('Inserisci la tua mail')
const emailList = ['matteo@boolean.it', 'email2@boolean.it']
const isEmailVerified = emailList.includes(email)
console.log(emailList, isEmailVerified);


let messageVerified;

if (isEmailVerified === true) {
  messageVerified = 'La mail è stata verificata con successo'
} else {
  messageVerified = 'La mail non ha i permessi di accesso necessari'
}

console.log(messageVerified);

const randomNumber = Math.random() * 100
const playerNumber = prompt('Il tuo numero è ${randomNumber}')
const cpuNumber = prompt('Il numero della CPU è ${randomNumber}')


