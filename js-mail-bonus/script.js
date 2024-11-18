const emailList = ['matteo@boolean.it', 'massimo@ermejo.it', 'simo@email.com']

let messageVerified;
let isEmailVerified = false;

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



while (!isEmailVerified) {
  const email = prompt('Inserisci la tua mail')

  if (!emailRegex.test(email)) {
    alert('Il testo inserito non è valido');
    continue;
  }  
  let emailConfirmed = false  

  for (let i = 0; i < emailList.length; i++) {
    if (emailList[i] === email) {
      emailConfirmed = true
    }
  } 

  if (emailConfirmed) {
    isEmailVerified = true
    messageVerified = alert('La mail è stata verificata con succeso')
  } else {
    messageVerified = alert('La mail non è valida')
  }
} 