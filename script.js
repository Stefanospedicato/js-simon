const arrayNumeriRandom = [];
const arrayNumeriGiocatore = [];

//Ciclo per creare i numeri casuali da inserire poi nell'array
function randomNumber(){
  for(let i = 0; i < 5; i++){
  let randomNumbers = Math.ceil(Math.random()*50)
  arrayNumeriRandom.push(randomNumbers)
  }
}

randomNumber();

//Devo inserire nella mia UL gli LI con all'interno i vari numeri casuali.
const lista = document.getElementById('numeri-generati');
let listItems = ''

for(let i= 0; i<arrayNumeriRandom.length; i++){
  listItems += `<li>${arrayNumeriRandom[i]}</li>`
}
lista.innerHTML = listItems


//Aziono conto alla rovescia
const countdown = document.getElementById('countdown');
let seconds = 3;
countdown.innerHTML=seconds--
const risposte = document.getElementById('risposte')
const button = document.getElementById('bottone')
const intervalId = setInterval(()=>{ countdown.innerHTML = seconds;
  if(seconds === 0){
    clearInterval(intervalId)
    lista.classList.add('d-none');
    risposte.classList.remove('d-none');
    button.disabled = false;
  }
seconds--
}, 1000)


//Pusho i numeri scelti dal giocatore nell'array vuoto
const numeroGiocatore1 = document.querySelector('.numero-scelto1');
const numeroGiocatore2 = document.querySelector('.numero-scelto2');
const numeroGiocatore3 = document.querySelector('.numero-scelto3');
const numeroGiocatore4 = document.querySelector('.numero-scelto4');
const numeroGiocatore5 = document.querySelector('.numero-scelto5');

button.addEventListener('click', ()=>{
  arrayNumeriGiocatore.push(numeroGiocatore1.value)
  arrayNumeriGiocatore.push(numeroGiocatore2.value)
  arrayNumeriGiocatore.push(numeroGiocatore3.value)
  arrayNumeriGiocatore.push(numeroGiocatore4.value)
  arrayNumeriGiocatore.push(numeroGiocatore5.value)
  console.log(arrayNumeriGiocatore)
})
