const email = prompt('Inserisci la tua mail')
const emailList = ['matteo@boolean.it', 'email2@boolean.it']
const isEmailVerified = emailList.includes(email)
const isEmailAnEmail = email.includes('@')
console.log(emailList, isEmailVerified);


let messageVerified;
if (isEmailVerified === true && isEmailAnEmail === true) {
  messageVerified = alert('La mail è stata verificata con successo')  
} else {
  messageVerified = alert('La mail inserita non è valida')
}

console.log(messageVerified);

const randomNumber1 = Math.ceil(Math.random() * 100)
const playerNumber = alert(`Il tuo numero è: ${randomNumber1}`)

const randomNumber2 = Math.ceil(Math.random() * 100)
const cpuNumber = alert(`Il numero della CPU è: ${randomNumber2}`)

console.log(randomNumber1, randomNumber2)


let winnerMessage;
if (randomNumber1 > randomNumber2) {
  winnerMessage = alert('Il giocatore ha vinto!')
} else if (randomNumber2 > randomNumber1) {
  winnerMessage = alert('La CPU ha vinto!')
} else {
  winnerMessage = alert('Pareggio')
}

