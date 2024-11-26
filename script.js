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

//Pusho i numeri scelti dal giocatore nell'array vuoto
const numeriGiocatore = document.querySelector('.numero-scelto');
const gruppoInput = document.getElementById('inputs');

