
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

let number = 0;

playButton.addEventListener('click', function(){
    if (selectItem() == 'facile'){
        for (let i = 1; i < 101; i++) {
            const addedBox = createNewSquare();
            gridWrapper.appendChild(addedBox);
            addedBox.innerHTML = +i;
            addedBox.addEventListener('click', function (){
                addedBox.classList.add('clicked', 'grid-easy-square');
                addedBox.classList.add('text-white');

            })
        }
    } else if (selectItem() == 'medio'){
        for (let i = 1; i < 81; i++) {
            const addedBox = createNewSquare();
            gridWrapper.appendChild(addedBox);
            addedBox.innerHTML = +i;
            addedBox.addEventListener('click', function (){
                addedBox.classList.add('clicked', 'grid-medium-square');
                addedBox.classList.add('text-white');

            })
        }
    } else {
        for (let i = 1; i < 51; i++) {
            const addedBox = createNewSquare();
            gridWrapper.appendChild(addedBox);
            addedBox.innerHTML = +i;
            addedBox.addEventListener('click', function (){
                addedBox.classList.add('clicked', 'grid-hard-square');
                addedBox.classList.add('text-white');
            })
        }
    }
})

