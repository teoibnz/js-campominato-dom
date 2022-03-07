
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

let score = 0;

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
                    score++;
                    scoreUpdate('score', `Il tuo punteggio è: ${score}`)
                } else {
                    addedBox.classList.add('bombs')
                    scoreUpdate('score', `MI dispiace hai perso! Il tuo punteggio è: ${score}`)
                    
                }
                
            })
        }
    } else if (selectItem() == 'medio'){
        for (let i = 1; i < 81; i++) {
            const addedBox = createNewSquare();
            gridWrapper.appendChild(addedBox);
            addedBox.innerHTML = +i;
            addedBox.addEventListener('click', function (){
                if (!bombs.includes(i)){
                    addedBox.classList.add('clicked');
                    addedBox.classList.add('text-white');
                    score++;
                    scoreUpdate('score', `Il tuo punteggio è: ${score}`)
                } else {
                    addedBox.classList.add('bombs')
                    scoreUpdate('score', `MI dispiace hai perso! Il tuo punteggio è: ${score}`)

                    
                }

            })
        }
    } else {
        for (let i = 1; i < 51; i++) {
            const addedBox = createNewSquare();
            gridWrapper.appendChild(addedBox);
            addedBox.innerHTML = +i;
            addedBox.addEventListener('click', function (){
                if (!bombs.includes(i)){
                    addedBox.classList.add('clicked');
                    addedBox.classList.add('text-white');
                    score++;
                    scoreUpdate('score', `Il tuo punteggio è: ${score}`)
                } else {
                    addedBox.classList.add('bombs')
                    scoreUpdate('score', `MI dispiace hai perso! Il tuo punteggio è: ${score}`)
                    
                }
            })
        }
    }
})


function generateUniqueRandomNumber( blackList, min, max){
    
    let check = false;
    let randomInt;

    while ( !check ){

        randomInt  = randomInteger(min, max);

        if ( !blackList.includes(randomInt)  ){

            check = true;
        }
    }


    return randomInt;
}



function randomInteger(minimumValue, maximumValue){
    if ( isNaN(parseInt(minimumValue)) || isNaN(parseInt(maximumValue)) ){
        console.error('randomInteger(min, max) needs two numbers as argument');
    }

    return ( Math.floor(Math.random() * ((maximumValue + 1) - minimumValue) + minimumValue));
}


function scoreUpdate (elementId, addingScore){
    document.getElementById(elementId).innerHTML = addingScore; 
}
