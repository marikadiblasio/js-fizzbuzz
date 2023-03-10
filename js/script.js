/* *Consegna:*
 Scrivi un programma che stampi in console i numeri da 1 a 100,
 ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*Consigli del giorno:*
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"*/

//console.log
for ( let i = 1; i <= 100; i++ ){
    let squareText = i;
    let bgSpecial = 'bg-warning';
    if ((i % 3 === 0) && (i % 5 === 0)) {
        squareText = 'FizzBuzz';
        bgSpecial = 'bg-green';
    } else if (i % 3 === 0){
        squareText = 'Fizz';
        bgSpecial = 'bg-blue';
    } else if (i % 5 === 0) {
        squareText = 'Buzz';
        bgSpecial = 'bg-yellow';
    }
    document.getElementById('container').innerHTML += `
    <div class="square bg-danger  p-1">
        <div class="int-square rounded d-flex align-items-center justify-content-center ${bgSpecial}">${squareText}
        </div>
    </div>`
}