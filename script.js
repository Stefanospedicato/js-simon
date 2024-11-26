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
const risposte = document.getElementById('risposte')
const button = document.getElementById('bottone')
//Creo numero di partenza
let seconds = 3;
//Si decrementa fin da subito
countdown.innerHTML=seconds--
//Creo l'intervallo di tempo e blocco il ciclo al raggiungimento dello 0
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


//Do al bottone le proprietà quando viene cliccato
let message = document.getElementById('message')
button.addEventListener('click', ()=>{
  //Aggiungo tutti i numeri scelti dal giocatore nell'array vuoto
  arrayNumeriGiocatore.push(parseInt(numeroGiocatore1.value))
  arrayNumeriGiocatore.push(parseInt(numeroGiocatore2.value))
  arrayNumeriGiocatore.push(parseInt(numeroGiocatore3.value))
  arrayNumeriGiocatore.push(parseInt(numeroGiocatore4.value))
  arrayNumeriGiocatore.push(parseInt(numeroGiocatore5.value))

  //Alert per quando si supera il 50
  if(parseInt(numeroGiocatore1.value) || parseInt(numeroGiocatore2.value) || parseInt(numeroGiocatore3.value)|| parseInt(numeroGiocatore4.value) || parseInt(numeroGiocatore5.value)>50){
    alert('DEVI INSERIRE SOLO I NUMERI DA 1 A 50')
  } 

  //Creo contatore per confronto dei numeri negli array
  let counter=0;
  for(i = 0; i < arrayNumeriRandom.length; i++){
    if(arrayNumeriRandom[i] === arrayNumeriGiocatore[i]){
      counter++
    }
  }
  risposte.classList.add('d-none')
    if(counter===0){
      message.innerHTML = 'Non hai indovinato nessun numero!!!'
      message.classList.remove('text-success')
      message.classList.add('text-danger')
    } else{
       message.innerHTML =`Hai indovinato ${counter} numeri!`
    }
})
  
