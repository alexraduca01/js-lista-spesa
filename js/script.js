// MILESTONE 1 - CREAZIONE DI UNA LISTA DELLA SPESA
// - Chiediamo (prompt) all'utente i prodotti da acquistare e mettiamoli da qualche parte (dove?)
// - Continuiamo a chiedere prodotti fino a quando l'utente non inserisce "stop"
// MILESTONE 2 - STAMPA DELLA LISTA DELLA SPESA
// Data la lista della spesa creata in precedenza, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.

const spesa = [];
let ferma = false;

while(ferma === false){

    const richiesta = prompt("inserisci i prodotti da acquistare");
    
    if(richiesta === 'stop'){
        ferma = true;
    }else{
        spesa.push(richiesta);
    }

}

const resultContainer = document.getElementById('wrapper');

for(let a = 0; a < spesa.length; a++){
    const result = document.createElement('div');
    result.innerHTML = spesa[a];
    resultContainer.appendChild(result);
    console.log(spesa[a]);
}