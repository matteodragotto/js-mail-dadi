const randomNumber1 = Math.ceil(Math.random() * 6)
const playerNumber = alert(`Il tuo numero è: ${randomNumber1}`)

const randomNumber2 = Math.ceil(Math.random() * 6)
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