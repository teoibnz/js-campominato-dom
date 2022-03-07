
function selectItem (){
    let selectItem = document.getElementById('level-select');
    return (selectItem.value);
}

function createNewSquare (){
    let newBox = document.createElement('div');
    newBox.classList.add('grid-easy-square');
    return newBox;
}



const playButton = document.querySelector('#play-button');

let  gridWrapper = document.getElementById('grid-wrapper');

const bombs = [];
console.log(bombs)

for ( let i = 1; i <= 16; i++){
        bombs.push(generateUniqueRandomNumber( bombs, 1,101));
    } 

playButton.addEventListener('click', function(){
    if (selectItem() == 'facile'){
        for (let i = 1; i < 101; i++) {
            const addedBox = createNewSquare();
            gridWrapper.appendChild(addedBox);
            addedBox.innerHTML = +i;

            addedBox.addEventListener('click', function (){
                if (!bombs.includes(i)){
                    addedBox.classList.add('clicked');
                    addedBox.classList.add('text-white');
                } else {
                    addedBox.classList.add('bombs')
                    
                }
                

            })
        }
    } else if (selectItem() == 'medio'){
        for (let i = 1; i < 81; i++) {
            const addedBox = createNewSquare();
            gridWrapper.appendChild(addedBox);
            addedBox.innerHTML = +i;
            addedBox.addEventListener('click', function (){
                addedBox.classList.add('clicked');
                addedBox.classList.add('text-white');

            })
        }
    } else {
        for (let i = 1; i < 51; i++) {
            const addedBox = createNewSquare();
            gridWrapper.appendChild(addedBox);
            addedBox.innerHTML = +i;
            addedBox.addEventListener('click', function (){
                addedBox.classList.add('clicked');
                addedBox.classList.add('text-white');
            })
        }
    }
})

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. I numeri nella lista delle bombe non possono essere duplicati.



function generateUniqueRandomNumber( blackList, min, max){
    // mi creo una variabile inizializzata a false, che mi controlla se ho generato un numero
    // valido oppure no
    let check = false;
    let randomInt;

    // creo un ciclo che continua finché non ho trovato un numero valido (assente in blacklist)
    while ( !check ){
        //  genero randomicamente un numero intero tra il min e il max passati come argomenti
        randomInt  = randomInteger(min, max);
        // se il numero non è presente nella blacklist allora
        if ( !blackList.includes(randomInt)  ){
            // informo il resto della funzione che il numero è stato trovato ed è valido
            // ==> esco dal ciclo while
            check = true;
        }
    }

    // restituisco il numero valido che ho trovato
    return randomInt;
}



function randomInteger(minimumValue, maximumValue){
    if ( isNaN(parseInt(minimumValue)) || isNaN(parseInt(maximumValue)) ){
        console.error('randomInteger(min, max) needs two numbers as argument');
    }

    return ( Math.floor(Math.random() * ((maximumValue + 1) - minimumValue) + minimumValue));
}

// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
// - abbiamo calpestato una bomba
// - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.

